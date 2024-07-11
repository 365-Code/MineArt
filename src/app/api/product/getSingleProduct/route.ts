import connectDB from "@/lib/db";
import productModel from "@/models/productModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const pId = searchParams.get("pId");
    const product = await productModel.findById(pId);
    return NextResponse.json({ success: true, product }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json(
      { msg: err.message, success: false },
      { status: 500 },
    );
  }
}
