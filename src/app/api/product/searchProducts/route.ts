import connectDB from "@/lib/db";
import productModel from "@/models/productModel";
import { NextRequest, NextResponse } from "next/server";
import slugify from "slugify";

export async function GET(req: NextRequest){
    try {
        await connectDB()
        const {searchParams} = new URL(req.url)
        const pId = searchParams.get('pId') || ""
        const material = searchParams.get('material') == "All" ? "" : searchParams.get('material') || ""
        
        let product;
        
        if(pId){
            console.log(pId);
            product = await productModel.findById(pId).select("category")
        }
        const category = searchParams.get('category') == "All" ? "" : searchParams.get('category') || product?.category || ""
        const search = slugify(searchParams.get('search') == "All"? "" : searchParams.get('search') || "", '-')

        const products = await productModel.find({
            $and:[
                {
                    category: {$regex: category, $options: "i"}
                },
                {
                    $or:[
                        {
                            slug: {$regex: search, $options: "i"}
                        },
                        {
                            keywords: {$regex: search, $options: "i"}
                        }
                    ]
                    },
                {
                    material: {$regex: material, $options: "i"}
                }
            ]
        })

        return NextResponse.json({total: products.length, success: true, products}, {status: 200})
        
    } catch (err: any) {
        return NextResponse.json({success: false, msg: err.message}, {status: 500})
    }
}