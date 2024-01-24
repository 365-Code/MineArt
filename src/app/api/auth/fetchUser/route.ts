import connectDB from "@/lib/db";
import userModel from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest){
    try {
            await connectDB()
            const {searchParams} = new URL(req.url);
            const uId = searchParams.get('uId');
            const exUser = await userModel.findById(uId)
            if(!exUser){
                return NextResponse.json({success: true, msg: "Not Registered"}, {status: 400})
            }

            return NextResponse.json({user: exUser, success: true, msg: "Logged In"}, {status: 200})
        } catch (error: any) {
        return NextResponse.json({success: false, msg: error?.message}, {status: 500})
    }
}