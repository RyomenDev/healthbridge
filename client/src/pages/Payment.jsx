import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "../components/Stripe/PaymentForm";
import stripeConf from "../stripe-conf";

const stripePromise = loadStripe(`${stripeConf.STRIPE_SECRET}`);

const Payment = () => {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <PaymentForm />
      </Elements>
    </div>
  );
};

export default Payment;
