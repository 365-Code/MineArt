import connectDB from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

const pincodes = [
    '341505',
    '110023',
    '110024',
    '110025',
    '282004'
]

export async function GET(req: NextRequest) {
    try{
        await connectDB()
        const {searchParams} = new URL(req.url);
        const pin = searchParams.get('pin');
        let msg = "none"
        if(pin){
            pincodes.findIndex((p)=> (p == pin)) != -1 ? (msg = "valid") : (msg = "invalid")
        }

        return NextResponse.json({success: true, msg}, {status: 200})
    }catch(err: any){
        return NextResponse.json({msg: err.msg, success: false},{status: 500})
    }
}