"use client"
import { stringify } from "querystring";
import React, { useState } from "react";

const EditProduct = ({ item, type }: { item?: any, type: string}) => {
  const [keywords, setKeywords] = useState( (item ? item.keywords : [] as Array<string>));
  const [imgPreview, setImgPreview] = useState( {
    id: 0,
    img: item?.thumbnail || "" as string
  })

  const initialValidate = {
    material: "",
    title: "",
    description: "",
    price: "",
    thumbnail: ""

  }
  const [validateMsg, setValidateMsg] = useState(initialValidate)

  const [images, setImages] = useState( item?.images || [] as Array<string> )
  const [productData, setProductData] = useState(
    item || {
      material: "",
      title: "",
      thumbnail: "",
      images: [],
      price: Number,
      description: "",
      category: "",
      minQty: 1,
      width: Number,
      height: Number,
      length: Number,
      keyword: "",
    },
  );

  const handleChange = (e: any) => {
    e.preventDefault();
    setValidateMsg(initialValidate)
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleKeywords = (keyword: string, mode: string) => {
    const ind = (keywords.findIndex((k: string) => k == keyword) == -1)
    if (keyword != "" && mode == "add" && ind){
      setKeywords((preVal: Array<string>) => [...preVal, keyword]);
      setProductData({...productData, keyword: ""})
    } else if(keyword != "" && !ind ){
      setKeywords((preVal: Array<string>) =>
        preVal.filter((p: string) => p != keyword),
      );
    }
  };

  const handleValidate = ()=>{
    if(!productData.material){setValidateMsg({...initialValidate, material: "Material is required"})}
    else if(!productData.title){setValidateMsg({...initialValidate, title: "Title is required"})}
    else if(!productData.description){setValidateMsg({...initialValidate, description: "Description is required"})}
    else if(!productData.thumbnail){setValidateMsg({...initialValidate, thumbnail: "Thumbnail is required"})}
    else if(!productData.price){setValidateMsg({...initialValidate, price: "Price is required"})}
    else return true
    return false
  }

  const handleSubmit = async ()=>{
    const product = {...productData, keywords}
    const valid = handleValidate()
    if(valid && type == "add"){
      const result = await fetch('/api/product/addProduct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
      })

      const res = await result.json();
      console.log(res)
    } else if(valid && type == "edit"){
      console.log("edit", product);
    }
  }

  return (
    <div className="flex flex-col sm:flex-row overflow-hidden w-[800px] max-w-full gap-4">
      <div className="basis-1/2 space-y-2">
        <div className="flex h-[300px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-gray-400 hover:bg-gray-500">
          {
            productData.thumbnail 
            ? <img src={imgPreview.img || productData.thumbnail} className="h-full w-full object-cover object-center"/>
            :
            <svg
              width="115px"
              height="115px"
              viewBox="0 0 24.00 24.00"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#f5f5f5"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke="#CCCCCC"
                stroke-width="0.096"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M14.2647 15.9377L12.5473 14.2346C11.758 13.4519 11.3633 13.0605 10.9089 12.9137C10.5092 12.7845 10.079 12.7845 9.67922 12.9137C9.22485 13.0605 8.83017 13.4519 8.04082 14.2346L4.04193 18.2622M14.2647 15.9377L14.606 15.5991C15.412 14.7999 15.8149 14.4003 16.2773 14.2545C16.6839 14.1262 17.1208 14.1312 17.5244 14.2688C17.9832 14.4253 18.3769 14.834 19.1642 15.6515L20 16.5001M14.2647 15.9377L18.22 19.9628M18.22 19.9628C17.8703 20 17.4213 20 16.8 20H7.2C6.07989 20 5.51984 20 5.09202 19.782C4.7157 19.5903 4.40973 19.2843 4.21799 18.908C4.12583 18.7271 4.07264 18.5226 4.04193 18.2622M18.22 19.9628C18.5007 19.9329 18.7175 19.8791 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V13M11 4H7.2C6.07989 4 5.51984 4 5.09202 4.21799C4.7157 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.0799 4 7.2V16.8C4 17.4466 4 17.9066 4.04193 18.2622M18 9V6M18 6V3M18 6H21M18 6H15"
                  stroke=""
                  stroke-width="0.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
          }
        </div>
        <div className="flex min-w-full gap-2 no-scrollbar w-[200px] overflow-x-scroll">
          <div className="min-h-[102px] h-[102px] min-w-[102px] w-[102px] cursor-pointer flex justify-center items-center rounded-lg bg-gray-400 hover:bg-gray-500 ">
          <svg height={80} width={80} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.5 7.5H20.5V19.5H6.5V17.5M4.5 14.5L7.79289 11.2071C8.18342 10.8166 8.81658 10.8166 9.20711 11.2071L11.8867 13.8867C12.2386 14.2386 12.7957 14.2782 13.1938 13.9796L14.1192 13.2856C14.3601 13.1049 14.6696 13.0424 14.9618 13.1154L18.5 14M4.5 5.5H18.5V17.5H4.5V5.5ZM14.5 9.5C14.5 10.0523 14.0523 10.5 13.5 10.5C12.9477 10.5 12.5 10.0523 12.5 9.5C12.5 8.94772 12.9477 8.5 13.5 8.5C14.0523 8.5 14.5 8.94772 14.5 9.5Z" stroke="#ffffff" stroke-width="0.375"></path> </g></svg>
          </div>
            {
              productData.images && images.map((image: string, i: number) => 
              <div key={i} className={`min-h-[102px] h-[102px] min-w-[102px] w-[102px] cursor-pointer flex justify-center items-center rounded-lg bg-gray-400 hover:bg-gray-500 overflow-y-hidden ${imgPreview.id == i && "border-2 border-pink-500"}`}>
                <img src={image} onClick={()=> setImgPreview({id: i, img: image})} className="w-full h-full object-cover object-center"/>
              </div>
              )
            }
          </div>
      </div>
      <div className="basis-1/2 space-y-2">
        <div>
          <p>Material:{" "}<span className="text-xs text-red-500">{validateMsg.material}</span></p>
          <input
            type="text"
            name="material"
            placeholder="Enter Material"
            value={productData.material}
            onChange={handleChange}
            className="w-full rounded-lg p-2 shadow-sm shadow-black/30"
          />
        </div>
        <div>
          <p>Title:{" "}<span className="text-xs text-red-500">{validateMsg.title}</span></p>
          <input
            type="text"
            name="title"
            placeholder="Enter Title"
            value={productData.title}
            onChange={handleChange}
            className="w-full rounded-lg p-2 shadow-sm shadow-black/30"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
          <p>Price:{" "}<span className="text-xs text-red-500">{validateMsg.price}</span></p>
            <input
              type="number"
              name="price"
              placeholder="Enter Price"
              value={productData.price}
              onChange={handleChange}
              className="w-full rounded-lg p-2 shadow-sm shadow-black/30"
            />
          </div>
          <div>
            Minimum Quantity:{" "}
            <input
              type="number"
              name="minQty"
              value={productData.minQty}
              onChange={handleChange}
              className="w-full rounded-lg p-2 shadow-sm shadow-black/30"
            />
          </div>
        </div>
        <div>
        <p>Description:{" "}<span className="text-xs text-red-500">{validateMsg.description}</span></p>
          <textarea
            name="description"
            value={productData.description}
            onChange={handleChange}
            placeholder="Enter Description"
            className="custom-scrollbar w-full resize-none rounded-lg p-2 shadow-sm shadow-black/30"
          />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div>
            Width:{" "}
            <input
              type="number"
              name="width"
              value={productData.width}
              onChange={handleChange}
              placeholder="Enter Width"
              className="w-full rounded-lg p-2 shadow-sm shadow-black/30"
            />
          </div>
          <div>
            Height:{" "}
            <input
              type="number"
              name="height"
              value={productData.height}
              onChange={handleChange}
              placeholder="Enter Height"
              className="w-full rounded-lg p-2 shadow-sm shadow-black/30"
            />
          </div>
          <div>
            Length:{" "}
            <input
              type="number"
              name="length"
              value={productData.length}
              onChange={handleChange}
              placeholder="Enter Length"
              className="w-full rounded-lg p-2 shadow-sm shadow-black/30"
            />
          </div>
        </div>
        <div>
          Category:{" "}
          <input
            type="text"
            name="category"
            value={productData.category}
            onChange={handleChange}
            placeholder="Enter Category"
            className="w-full rounded-lg p-2 shadow-sm shadow-black/30"
          />
        </div>
        <form onSubmit={(e: any) => {e.preventDefault(); handleKeywords(productData.keyword, "add")} } className="flex items-center justify-between gap-4">
          Keywords:{" "}
          <input
            type="text"
            name="keyword"
            onSubmit={() => handleKeywords(productData.keyword, "add")}
            value={productData.keyword}
            autoComplete="false"
            onChange={handleChange}
            placeholder="Enter Keywords"
            className="w-full rounded-lg p-2 shadow-sm shadow-black/30"
          />
          <button type="submit"></button>
        </form>
        <div className="custom-scrollbar flex h-[60px] p-2 flex-wrap gap-2 overflow-y-scroll">
          {keywords.map((k: string, i: number) => (
            <p
              key={i}
              className="flex h-fit items-center gap-1 rounded-full bg-slate-400 px-2 py-1 text-sm text-white"
            >
              <i
                onClick={() => handleKeywords(k, "delete")}
                className="fi fi-sr-cross-small cursor-pointer text-white hover:text-black"
              />{" "}
              {k}
            </p>
          ))}
          <p></p>
        </div>
        <div className="text-right">
          <button onClick={handleSubmit} className="py-2 px-4 rounded-lg text-right bg-blue-400 hover:bg-blue-500">Apply</button>
        </div>
      </div>
    </div>
  );
};

export default EditProduct