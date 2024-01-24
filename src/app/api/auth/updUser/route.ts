import connectDB from "@/lib/db";
import userModel from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest){
    try {
            await connectDB()
            const {searchParams} = new URL(req.url)
            const uId = searchParams.get('uId');
            const exUser = await userModel.findById(uId)
            if(!exUser){
                return NextResponse.json({success: false, msg: "User Not found"}, {status: 400})
            }
            const body = await req.json()
            const user = await userModel.findByIdAndUpdate(uId, body)
            return NextResponse.json({user, success: true, msg: "Registered Successfully"}, {status: 200})
        } catch (error: any) {
        return NextResponse.json({success: false, msg: error?.message}, {status: 500})
    }
}