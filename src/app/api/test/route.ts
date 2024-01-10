import connectDB from "@/lib/db";
import productModel from "@/models/productModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest){
    try{
        await connectDB()
        const {searchParams} = new URL(req.nextUrl)
        const pId = searchParams.get('pId')
        const product = await productModel.findById(pId)
        return NextResponse.json({product ,success: true, msg: "All Fetced"})
    }catch(error: any){
        return NextResponse.json({success: false, msg: error.message})
    }
}