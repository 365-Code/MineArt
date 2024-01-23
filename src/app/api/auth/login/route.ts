import connectDB from "@/lib/db";
import userModel from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){
    try {
            await connectDB()
            const body = await req.json()
            const exUser = await userModel.findOne({email: body.email}).select('_id')
            if(!exUser){
                return NextResponse.json({success: true, msg: "Not Registered"}, {status: 400})
            }

            return NextResponse.json({user: exUser, success: true, msg: "Logged In"}, {status: 200})
        } catch (error: any) {
        return NextResponse.json({success: false, msg: error?.message}, {status: 500})
    }
}