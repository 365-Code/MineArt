import connectDB from "@/lib/db";
import productModel from "@/models/productModel";
import { NextResponse } from "next/server";

export async function GET(){
    try{
        await connectDB()
        const products = await productModel.find({})
        return NextResponse.json({products ,success: true, msg: "All Fetced"})
    }catch(err: any){
        return NextResponse.json({success: false, msg: err.message})
    }
}