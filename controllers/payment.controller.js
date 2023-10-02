export async function postPayment(req, res) {
  const booking = req.body;
  // console.log(booking)
  const resalePrice = booking.resalePrice;
  const amount = resalePrice * 100;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    currency: "usd",
    amount: amount,
    payment_method_types: ["card"],
  });
  res.send({
    clientSecret: paymentIntent.client_secret,
  });
}
