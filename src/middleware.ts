import { NextRequest, NextResponse } from "next/server"
import { auth } from "./utils/firebase";
    
export async function middleware(request: NextRequest) {
    try {
        console.log(auth.currentUser?.email);
        
        return NextResponse.next()
    } catch (error) {
        // return NextResponse.redirect(new URL('/', request.url))
        return error
    }
}

export const config = {
    matcher: [
        '/api/checkout'
    ]
}