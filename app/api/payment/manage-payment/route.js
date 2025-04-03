import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req) {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRETE_KEY); // Fix typo here
    const returnUrl = "https://github.com"; // Temporary URL for testing

    // Debugging: Log incoming request body
    const body = await req.json();
    console.log("Received request body:", body);

    if (!body.customerId) {
      console.error("Error: Missing customerId");
      return NextResponse.json({ error: "Missing customerId" }, { status: 400 });
    }

    // Create Stripe Billing Portal session
    const portalSession = await stripe.billingPortal.sessions.create({
      customer: body.customerId,
      return_url: returnUrl,
    });

    return NextResponse.json(portalSession);
  } catch (error) {
    console.error("Stripe error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
