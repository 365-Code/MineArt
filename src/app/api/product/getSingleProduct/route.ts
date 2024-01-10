import connectDB from "@/lib/db";
import productModel from "@/models/productModel";
import { NextResponse } from "next/server";

export async function GET(req: Request){
    try{
        connectDB()
        const {searchParams} = new URL(req.url)
        const pId = searchParams.get('pId')
        const product = await productModel.findById(pId)
        return NextResponse.json({product ,success: true, msg: "All Fetced"})
    }catch(error: any){
        return NextResponse.json({success: false, msg: error.message})
    }
}