import { connectDB } from "@/lib/db";
import productModel from "@/models/productModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest){
    try{
        await connectDB()
        const {searchParams} = new URL(req.url)
        const pId = searchParams.get('pId') || ""
        const material = searchParams.get('material') || ""
        const filter = searchParams.get('filter') || ""
        
        let product;
        if(pId){
            product = await productModel.findById(pId).select('category')
        }
        
        const search = searchParams.get('search') || ""
        const category = searchParams.get('category') || product.category || ""

        const products = await productModel.find({
            $and:[
                {
                    slug: {$regex: search, $options: "i"}
                },
                {
                    category: {$regex: category, $options: "i"}
                },
                {
                    material: {$regex: material, $options: "i"}
                },
                {
                    keywords: {$regex: filter, $options: "i"}
                },
            ]
        })

        return NextResponse.json({total: products.length, products ,success: true, msg: "All Fetched"})
    }catch(error: any){
        return NextResponse.json({success: false, msg: error.message})
    }
}