"use client";
import { useAppSelector } from "@/redux/store";
import { fireStorage } from "@/utils/firebase";
import { FirestoreError } from "firebase/firestore";
import { StorageError, getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import React, { ChangeEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";

const Page = () => {
  type userType = {
    avatar: string;
    username: string;
    email: string;
    phone: number;
    pincode: number;
    address: string;
  };

  type avatarType = {
    file: any,
    image: any
  }

  
  const nav = useRouter();
  const authUser = useAppSelector((state) => state.authReducer.value);
  const params = useParams();
  const [user, setUser] = useState({} as userType);
  const [edit, setEdit] = useState(false);
  const [avatarFile, setAvatarFile] = useState<avatarType>({
    file: null,
    image: null
  })
  const [userError, setUserError] = useState({
    username: false,
    phone: false,
    pincode: false,
  });

  const { uId } = params;

  const handleAvatar = (e: ChangeEvent<HTMLInputElement>) => {
    if(e.target.files?.length && e.target.files[0].type.includes('image') ) {
      setAvatarFile( {file: e.target.files[0], image: URL.createObjectURL(e.target.files[0])} ) 
    }
  }

  const uploadAvatar = async ()=>{
    if(!avatarFile.file || !avatarFile.image){
      return
    }

    

    const storageRef = ref(fireStorage, `avatars/${uId}.jpg`);
    const uploadTask = uploadBytesResumable(storageRef, avatarFile.file);
    uploadTask.on('state_changed', 
      (snapshot) => {},
      (error: StorageError) => {
        console.log(error);
      }, 
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setUser({...user, avatar: downloadURL})
          return downloadURL
        });
      }
    );

  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserError({ ...userError, [name]: false });
    setUser((preVal: userType) => ({ ...preVal, [name]: value }));
  };

  const getUser = async () => {
    try {
      const { uId } = params;
      const result = await fetch(`/api/auth/fetchUser?uId=${uId}`);
      const res = await result.json();
      if (res.success) {
        setUser(res.user);
        setAvatarFile({file: null, image: res.user.avatar})
      }
    } catch (error) {
      return error;
    }
  };

  const handleValidate = () => {
    if (user.username.length < 3) {
      setUserError({ ...userError, username: true });
    } else if (user.phone && String(user.phone).length != 10) {
      setUserError({ ...userError, phone: true });
    } else if (user.pincode && String(user.pincode).length != 6) {
      setUserError({ ...userError, pincode: true });
    } else {
      setUserError({ username: false, phone: false, pincode: false });
      return true;
    }
    return false;
  };

  const editUser = async () => {
    if (!handleValidate()) {
      return null;
    }
    setEdit(false)
    try {
      await uploadAvatar()
      const result = await fetch(`/api/auth/updUser?uId=${uId}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const res = await result.json();
      if (res.success) {
        toast.success("Profile Updated");
      }
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    !authUser.isLogged ? nav.push("/auth/login") : getUser();
  }, [authUser.isLogged]);

  return (
    <main className="container1 items-center justify-center">
      <div className="relative mx-auto flex w-[620px] max-w-full flex-col-reverse items-center gap-4 bg-white p-4 sm:my-4 sm:flex-row sm:items-start md:p-8 dark:bg-slate-700 dark:text-white">
        <h1 className="absolute -top-4 left-4 text-4xl font-semibold dark:text-slate-400">
          Profile
        </h1>
        <div className="w-full flex-1 space-y-2 py-4">
          <div>
            <p className="text-sm font-semibold text-slate-400">USER NAME</p>
            <input
              name="username"
              disabled={!edit}
              value={user.username}
              type="text"
              className="w-full border-b-2 bg-transparent py-1"
              placeholder="MineArt"
              onChange={handleChange}
            />
            {userError.username && (
              <p className="text-xs text-red-500">
                Enter a valid user name min length: 3
              </p>
            )}
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-400">EMAIL</p>
            <input
              disabled
              value={user.email}
              type="email"
              className="w-full border-b-2 bg-transparent py-1"
              placeholder="mineart@example.com"
              onChange={handleChange}
            />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-400">Phone</p>
            <div className="flex items-center">
              <button className="rounded-sm py-1 font-semibold text-slate-400 ">
                +91
              </button>
              <input
                type="tel"
                disabled={!edit}
                minLength={10}
                value={user.phone}
                name="phone"
                onChange={handleChange}
                className="w-full border-b-2 bg-transparent p-1"
                placeholder="xxxxx xxxxx"
              />
            </div>

            {userError.phone && (
              <p className="text-xs text-red-500">Enter a valid phone number</p>
            )}
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-400">Postal Code</p>
            <input
              type="number"
              disabled={!edit}
              maxLength={6}
              minLength={6}
              value={user.pincode}
              name="pincode"
              onChange={handleChange}
              className="w-full border-b-2 bg-transparent py-1"
              placeholder="pincode"
            />
          </div>
          {userError.pincode && (
            <p className="text-xs text-red-500">Enter Valid Pin Code</p>
          )}
          <div>
            <p className="text-sm font-semibold text-slate-400">
              SHIPPING ADDRESS
            </p>
            <input
              type="text"
              value={user.address}
              disabled={!edit}
              name="address"
              onChange={handleChange}
              className="w-full border-b-2 bg-transparent py-1"
              placeholder="local area, street, building no"
            />
          </div>
        </div>
        <div className="relative w-fit space-y-2">
          <div className="rounded-full overflow-hidden sm:h-[200px] sm:w-[200px] w-[150px] h-[150px] shadow-sm shadow-black/20">
          <label htmlFor={edit ? 'userAvatar' : ''} className="cursor-pointer">
            <img
              src={
                avatarFile?.image ||
                `https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg&ga=GA1.1.751509348.1705399346&semt=sph`
              }
              className="rounded-full h-full w-full object-cover object-center"
              alt=""
            />
          </label>
          {
            edit && avatarFile &&
            <i onClick={()=> setAvatarFile({file: null, image: null}) } className="hover:text-slate-300 fi fi-sr-cross-circle cursor-pointer absolute top-0 right-0" />
          }
          </div>
          <input accept="image/*" onChange={handleAvatar} multiple={false} id="userAvatar" type="file" className="hidden"/>
          <div>
            {edit ? (
              <div className="flex gap-2">
                <button
                  onClick={editUser}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-400 p-2 font-semibold text-black hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500"
                >
                  Save <i className="fi fi-sr-check" />
                </button>
                <button
                  onClick={() => {setAvatarFile({file: null, image: null}); setEdit(false)}}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-slate-100 p-2 font-semibold text-black hover:bg-slate-500 hover:text-white"
                >
                  Cancel <i className="fi fi-sr-cross-small" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setEdit(true)}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-slate-100 p-2 font-semibold text-black hover:bg-slate-900 hover:text-white"
              >
                Edit <i className="fi fi-sr-pencil" />
              </button>
            )}
          </div>

        </div>
      </div>
    </main>
  );
};

export default Page;
