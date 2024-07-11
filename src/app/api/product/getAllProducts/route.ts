import connectDB from "@/lib/db";
import productModel from "@/models/productModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const limit = searchParams.get("limit");
    let products;
    if (limit) {
      products = await productModel
        .find({})
        .sort({ updatedAt: -1 })
        .limit(Number(limit));
    } else {
      products = await productModel.find({}).sort({ updatedAt: -1 });
    }
    return NextResponse.json({ products, success: true, msg: "All Fetced" });
  } catch (err: any) {
    return NextResponse.json({ success: false, msg: err.message });
  }
}
