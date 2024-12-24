import conf from "../conf/conf.js";
import Stripe from "stripe";

const stripe = Stripe(conf.STRIPE_SECRET_KEY);

// console.log("payment controller");

const YOUR_DOMAIN = conf.CORS_ORIGIN; 

const userPayment = async (req, res) => {
  const { amount } = req.body;
  //   console.log("amount", amount);
  try {
    // Create a new Checkout session with the amount
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Platform Fee", //  payment descriptor
            },
            unit_amount: Math.round(amount * 100), // Stripe accepts amounts in cents
          },
          quantity: 1,
        },
      ],
      mode: "payment", // One-time payment mode
      success_url: `${YOUR_DOMAIN}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${YOUR_DOMAIN}/payment-cancel`,
    });

    // Respond with the checkout session URL
    res.json({ url: session.url });
  } catch (error) {
    console.error("Error creating payment session:", error);
    res.status(500).json({ error: error.message });
  }
};

export { userPayment };
