import connectDB from "@/lib/db";
import userModel from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){
    try {
            await connectDB()
            const body = await req.json()
            const exUser = await userModel.findOne({email: body.email})
            if(exUser){
                return NextResponse.json({success: true, msg: "Already Registered"}, {status: 400})
            }
            const user = await userModel.create(body)
            return NextResponse.json({user, success: true, msg: "Registered Successfully"}, {status: 200})
        } catch (error: any) {
        return NextResponse.json({success: false, msg: error?.message}, {status: 500})
    }
}