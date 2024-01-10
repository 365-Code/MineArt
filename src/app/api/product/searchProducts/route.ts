import connectDB from "@/lib/db";
import productModel from "@/models/productModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest){
    try {
        await connectDB()
        const {searchParams} = new URL(req.url)
        const pId = searchParams.get('pId') || ""
        const material = searchParams.get('material') || ""
        const filter = searchParams.get('filter') || ""
        
        let product;
        if(pId){
            product = await productModel.findById(pId).select("category")
        }
        const category = searchParams.get('category') || product.category || ""
        const search = searchParams.get('search') || ""

        const products = await productModel.find({
            $and:[
                {
                    category: {$regex: category, $options: "i"}
                },
                {
                    slug: {$regex: search, $options: "i"}
                },
                {
                    material: {$regex: material, $options: "i"}
                },
                {
                    keywords: {$regex: filter, $options: "i"}
                },
            ]
        })

        return NextResponse.json({total: products.length, success: true, products}, {status: 200})
        
    } catch (err: any) {
        return NextResponse.json({success: false, msg: err.message}, {status: 500})
    }
}