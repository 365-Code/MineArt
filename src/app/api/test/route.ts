import connectDB from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";



export async function GET(req: NextRequest){
    try{

        await connectDB()


        return NextResponse.json({success: true, msg: "Nothing Found"}, {status: 400})

    }catch (err: any){
        return NextResponse.json({msg: err.message, success: false}, {status: 500})
    }
}