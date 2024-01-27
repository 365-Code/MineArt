import connectDB from "@/lib/db";
import productModel from "@/models/productModel";
import { NextRequest, NextResponse } from "next/server";
import slugify from "slugify";

export async function POST(request: NextRequest) {
    try{
        await connectDB()
        const body = await request.json();
        const category = slugify(body.category.toLowerCase(), '-')
        const keywords = [...body.keywords, category]
        const material = slugify(body.material.toLowerCase(), '-')
        const thumbnail = body.images[0]
        const item = {...body,thumbnail,keywords, category, material, slug: slugify(body.title.toLowerCase(), "-")}
        const product = await productModel.create(item)
        return NextResponse.json({product, success: true, msg: "Product Added Successfully"}, {status: 200})

    } catch (err: any){
        return NextResponse.json({success: false, msg: err.message}, {status: 500})
    }
}