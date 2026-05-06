import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { events, products, zehnerkarte, siteConfig } from "@/lib/config";

export async function GET(request: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

  const { searchParams } = new URL(request.url);
  const eventId = searchParams.get("eventId");
  const productId = searchParams.get("productId");
  const productType = searchParams.get("product");

  try {
    let lineItems: Stripe.Checkout.SessionCreateParams["line_items"] = [];

    if (productType === "zehnerkarte") {
      lineItems = [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: "Zehnerkarte — Ecstatic Dance Leipzig",
              description: zehnerkarte.description,
            },
            unit_amount: zehnerkarte.price * 100,
          },
          quantity: 1,
        },
      ];
    } else if (eventId) {
      const event = events.find((e) => e.id === eventId);
      if (!event) {
        return NextResponse.json({ error: "Event not found" }, { status: 404 });
      }
      const price = event.price.earlyBird ?? event.price.presale;
      lineItems = [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: event.title,
              description: `${event.subtitle ?? ""} — ${event.venue}`,
            },
            unit_amount: price * 100,
          },
          quantity: 1,
        },
      ];
    } else if (productId) {
      const product = products.find((p) => p.id === productId);
      if (!product) {
        return NextResponse.json({ error: "Product not found" }, { status: 404 });
      }
      if (product.stripePriceId) {
        lineItems = [{ price: product.stripePriceId, quantity: 1 }];
      } else {
        lineItems = [
          {
            price_data: {
              currency: "eur",
              product_data: {
                name: product.name,
                description: product.description,
              },
              unit_amount: product.price,
            },
            quantity: 1,
          },
        ];
      }
    } else {
      return NextResponse.json(
        { error: "Missing eventId, productId or product parameter" },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: lineItems,
      success_url: `${siteConfig.url}/veranstaltungen?payment=success`,
      cancel_url: `${siteConfig.url}/veranstaltungen?payment=cancelled`,
      payment_method_types: ["card"],
      locale: "de",
    });

    return NextResponse.redirect(session.url!, { status: 303 });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
