import { connectDB } from "@/lib/db";
import productModel from "@/models/productModel";
import { NextRequest, NextResponse } from "next/server";
import slugify from "slugify";

export async function POST(request: NextRequest) {
    try{
        await connectDB()
        const body = await request.json();
        const images = [body.thumbnail, ...body.images]
        const product = {...body, images, slug: slugify(body.title.toLowerCase(), "-")}
        const pro = await productModel.create(product)
        return NextResponse.json({pro, success: true, msg: "Product Added Successfully"}, {status: 200})
    } catch (err: any){
        return NextResponse.json({success: false, msg: err.msg})
    }
}