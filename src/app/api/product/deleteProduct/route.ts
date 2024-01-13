import connectDB from "@/lib/db";
import productModel from "@/models/productModel";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest) {
    try{
        await connectDB()
        const {searchParams} = new URL(request.url)
        const pId = searchParams.get('pId')
        const product = await productModel.findByIdAndDelete(pId)
        if(!product){
            return NextResponse.json({success: false, msg: "Product Not Found"}, {status: 401})
        }
        return NextResponse.json({success: true, msg: "Product Deleted Successfully"}, {status: 200})
    } catch (err: any){
        return NextResponse.json({success: false, msg: err.message})
    }
}