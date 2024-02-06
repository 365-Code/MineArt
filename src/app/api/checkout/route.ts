import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");
console.log(process.env.STRIPE_SECRET_KEY);

export async function POST(req: NextRequest) {
    try {
        const body = await req.json()

        const shippingInfo = body.shipping

        const line_items = body.items.map((item: any) => {
            return {
                price_data: {
                    currency: "inr",
                    product_data: {
                        name: item.title,
                        images: item.images,
                        metadata: { productId: item._id }
                    },
                    unit_amount : item.price * 100
                },
                // tax_rates: [],
                quantity: item.qty
            }
        })

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            success_url: `${process.env.BASE_URL}/product`,
            cancel_url: `${process.env.BASE_URL}/error/unauth`,
            customer_email: body.user.email,
            client_reference_id: body.user._id,
            mode: 'payment',
            metadata: {shippingInfo},
            shipping_options: [
                {
                    shipping_rate: "shr_1OgpdESJtMJHYJ6A5jeEhqaT"
                }
            ],
            line_items: line_items
        })
        
        
        return NextResponse.json({success: true, url: session.url});
    } catch (error: any) {
        return NextResponse.json({success: false, error}, {status: 500, statusText: "Error in server"})
    }
}