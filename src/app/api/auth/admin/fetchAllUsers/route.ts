import userModel from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET(){
    try {
        const users = await userModel.find({})

        return NextResponse.json({total: users.length, users, success: true, msg: 'Fetched users'}, {status: 200})


    } catch (error: any) {
        return NextResponse.json({success: false, msg: error.message}, {status: 500})
    }
}