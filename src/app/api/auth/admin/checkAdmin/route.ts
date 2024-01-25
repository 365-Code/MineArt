import userModel from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest){
    try {
        
        const {searchParams} = new URL(req.url)
        const uId = searchParams.get('uId')
        const user = await userModel.findById(uId)
        const eUser = JSON.parse(JSON.stringify(user))
        const isMe = (eUser.mId == process.env.ADMIN_KEY || false)
        return NextResponse.json({isMe, success: true}, {status:200})
    } catch (error) {
        return NextResponse.json({success: false}, {status: 500})
    }
}