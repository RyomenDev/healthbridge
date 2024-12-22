const stripeConf = {
  STRIPE_SECRET: String(import.meta.env.VITE_STRIPE_SECRET),
  EMAILJS_SERVICE_ID: String(import.meta.env.VITE_EMAILJS_SERVICE_ID),
  EMAILJS_PUBLIC_KEY: String(import.meta.env.VITE_EMAILJS_PUBLIC_KEY),
  EMAILJS_TEMPLATE_ID: String(import.meta.env.VITE_EMAILJS_TEMPLATE_ID),
};

// console.log("stripeConf", stripeConf);

export default stripeConf;
