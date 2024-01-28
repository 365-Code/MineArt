import connectDB from "@/lib/db"
import productModel from "@/models/productModel"
import { NextResponse } from "next/server"


export const revalidate = 1

export async function GET (){
    try {

        await connectDB()

        const categories = await productModel.find({}).distinct('category')
        const materials = await productModel.find({}).distinct('material')

        return NextResponse.json({categories: ['All',...categories], materials: ['All', ...materials], success: true, msg: "Fetched Categories"}, {status: 200})

    } catch (error: any) {
        return NextResponse.json({success: false, msg: error.message}) 
    }
}