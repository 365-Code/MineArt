import connectDB from "@/lib/db";
import userModel from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest){
    try {
            await connectDB()
            const body = await request.json()
            const exUser = await userModel.findOne({email: body.email.toLowerCase()})
            if(!exUser){
                return NextResponse.json({success: true, msg: "Not Registered"}, {status: 400})
            }
            const eUser = JSON.parse(JSON.stringify(exUser))
            const isMe = (eUser.mId == process.env.ADMIN_KEY || false)
            return NextResponse.json({isMe, user: exUser._id, success: true, msg: "Logged In"}, {status: 200})
        } catch (error: any) {
        return NextResponse.json({success: false, msg: error?.message}, {status: 500})
    }
}