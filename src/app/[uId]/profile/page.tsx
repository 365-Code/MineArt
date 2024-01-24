"use client"
import { useAppSelector } from "@/redux/store";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import React, { ChangeEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";

const Page = () => {

    type userType = {
      avatar: string,
      username: string,
      email: string,
      phone: number,
      pincode: number,
      address: string
    }

    const nav = useRouter()
    const authUser = useAppSelector((state) => state.authReducer.value)
    const params = useParams()
    const [user, setUser] = useState({} as userType)
    const [edit, setEdit] = useState(false)
    const [userError, setUserError] = useState({
      user: false,
      phone: false,
      pincode: false
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>)=>{
      const {name, value} = e.target
      handleValidate()
      setUser((preVal: userType) => ( {...preVal, [name]: value}) )
    }

    const getUser = async () => {
        try {
            const {uId} = params
            const result = await fetch(`/api/auth/fetchUser?uId=${uId}`)
            const res = await result.json()
            if(res.success){
              setUser(res.user)
            }
        } catch (error) {
            return error
        }
    }

    const handleValidate = () => {
      if(user.username.length < 3){
        setUserError({...userError, user: true})
      } else if (user.phone && user.phone){
        setUserError({...userError, phone: true})
      }else if (user.pincode && user.pincode != 59999){
        setUserError({...userError, pincode: true})
      } else {
        setUserError({user: false, phone: false, pincode: false})
        return true
      }
      return false
    }
    
    const editUser = async () => {
      if(!handleValidate()){
        return null
      }
      try {
          const {uId} = params
          const result = await fetch(`/api/auth/updUser?uId=${uId}`, {
            method: 'PUT',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify(user)
          })
          const res = await result.json()
          if(res.success){
            toast.success('Profile Updated')
          }
      } catch (error) {
          return error
      }
  }
    
    useEffect(() => {
      !authUser.isLogged ? nav.push('/auth/login') : getUser()
  }, [])

  return (
    <main className="container1 items-center justify-center">
      <div className="relative mx-auto flex flex-col-reverse items-center sm:items-start sm:flex-row max-w-full sm:my-4 w-[600px] bg-white p-4 gap-4">
        <h1 className="absolute -top-4 left-4 text-4xl font-semibold">
          Profile
        </h1>
        <div className="flex-1 space-y-2 py-4 w-full">
            <div>
            <p className="font-semibold text-sm text-slate-400">USER NAME</p>
            <input
                name="username"
                value={user.username}
                type="text"
                className="w-full border-b-2 py-1"
                placeholder="MineArt"
                onChange={handleChange}
            />
            {
              userError.user && <p className="text-red-500 text-xs">Enter a valid user name min length: 3</p>
            }
            </div>
            <div>
            <p className="font-semibold text-sm text-slate-400">EMAIL</p>
            <input
                disabled
                value={user.email}
                type="email"
                className="w-full border-b-2 py-1"
                placeholder="mineart@example.com"
                onChange={handleChange}
            />
            </div>
            <div>
            <p className="font-semibold text-sm text-slate-400">Phone</p>
            <div className="flex items-center">
            <button className="text-slate-400 py-1 px-2 rounded-sm font-semibold">+91</button>
            <input
                type="tel"
                minLength={10}
                value={user.phone}
                name="phone"
                onChange={handleChange}
                className="w-full border-b-2 p-1"
                placeholder="xxxxx xxxxx"
                />
              </div>
              
            {
              userError.phone && <p className="text-red-500 text-xs">Enter a valid phone number</p>
            }
            </div>
            <div>
            <p className="font-semibold text-sm text-slate-400">Postal Code</p>
            <input
                type="number"
                maxLength={6}
                minLength={6}
                value={user.pincode}
                name="pincode"
                onChange={handleChange}
                className="w-full border-b-2 py-1"
                placeholder="pincode"
                />
            </div>
            {
              userError.pincode &&
              <p className="text-xs text-red-500">Enter Valid Pin Code</p>
            }
            <div>
            <p className="font-semibold text-sm text-slate-400">SHIPPING ADDRESS</p>
            <input
                type="text"
                value={user.address}
                name="address"
                onChange={handleChange}
                className="w-full border-b-2 py-1"
                placeholder="local area, street, building no"
            />
            </div>
        </div>
        <div className="w-fit space-y-2">
          <div className="h-[200px] w-[200px] overflow-hidden rounded-full shadow-sm shadow-black/20">
            <img
              src={user.avatar || `https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg&ga=GA1.1.751509348.1705399346&semt=sph`}
              className="h-full w-full object-cover object-center"
              alt=""
            />
          </div>
          <div>
            {
              edit
              ?
              <div className="flex gap-2">
                <button onClick={editUser} className="w-full justify-center rounded-lg items-center bg-slate-100 font-semibold text-black flex p-2 hover:text-white gap-2 hover:bg-blue-500">Save <i className="fi fi-sr-check" /></button>
                <button onClick={() => setEdit(false)} className="w-full justify-center rounded-lg items-center bg-slate-100 font-semibold text-black flex p-2 gap-2 hover:bg-slate-300">Cancel <i className="fi fi-sr-cross-small" /></button>
              </div>
              :
              <button onClick={() => setEdit(true)} className="w-full justify-center rounded-lg items-center bg-slate-100 font-semibold text-black flex p-2 hover:text-white gap-2 hover:bg-slate-900">Edit <i className="fi fi-sr-pencil" /></button>
            }
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
