import connectDB from "@/lib/db";
import productModel from "@/models/productModel";
import { NextRequest, NextResponse } from "next/server";
import slugify from "slugify";

export async function PUT(request: NextRequest) {
    try{
        await connectDB()
        const body = await request.json()
        const {searchParams} = new URL(request.url)
        
        const pId = searchParams.get('pId')
        const thumbnail = body.images[0]
        const category = slugify(body.category.toLowerCase(), '-')
        const material = slugify(body.material.toLowerCase(), '-')
        const item = {...body, thumbnail, material, category}
        const product = await productModel.findByIdAndUpdate(pId, item)

        return NextResponse.json({product, success: true, msg: "Product Deleted Successfully"}, {status: 200})
    } catch (err: any){
        console.log(err)
        return NextResponse.json({success: false, msg: err.message}, {status: 500})
    }
}