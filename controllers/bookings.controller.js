import dbConnect from "../utils/dbConnect";
const bookingsCollection = dbConnect()
  .db("used-products-resale-portal")
  .collection("bookings");
const productsCollection = dbConnect()
  .db("used-products-resale-portal")
  .collection("products");
const paymentsCollection = dbConnect()
  .db("used-products-resale-portal")
  .collection("payments");
import { ObjectId } from "mongodb";

export async function getBookings(req, res) {
  const email = req.query.email;
  const decodedEmail = req.decoded.email;

  if (email !== decodedEmail) {
    return res.status(403).send({ message: "forbidden access" });
  }
  // console.log('token', req.headers.authorization)

  const query = { email: email };
  const bookings = await bookingsCollection.find(query).toArray();
  res.send(bookings);
}

export async function postBookings(req, res) {
  const booking = req.body;
  console.log(booking);

  // const query = {
  //     appointmentDate: booking.appointmentDate,
  //     email: booking.email,
  //     treatment: booking.treatment

  // }

  // const alreadyBooked = await bookingsCollection.find(query).toArray();

  // if (alreadyBooked.length) {
  //     const message = `You have already Booking on ${booking.appointmentDate}`
  //     return res.send({ acknowledged: false, message });
  // }

  const result = await bookingsCollection.insertOne(booking);
  res.send(result);
}

export async function getSingleBook(req, res) {
  const id = req.params.id;
  const query = { _id: ObjectId(id) };
  const booking = await bookingsCollection.findOne(query);
  res.send(booking);
}

export async function postPayment(req, res) {
  const payment = req.body;
  const result = await paymentsCollection.insertOne(payment);
  const id = payment.bookingId;
  const filter = { _id: ObjectId(id) };
  const updatedDoc = {
    $set: {
      paid: true,
      transactionId: payment.transactionId,
    },
  };
  const updatedResult = await bookingsCollection.updateOne(filter, updatedDoc);

  //------------Order update hole paid true --------
  const orderData = await bookingsCollection.findOne(filter);
  const productQuery = {
    _id: ObjectId(orderData.productId),
  };
  const productUpdateDoc = {
    $set: {
      paid: true,
    },
  };
  const productUpdateResult = await productsCollection.updateOne(
    productQuery,
    productUpdateDoc
  );
  const updatedProduct = await productsCollection.findOne(productQuery);
  //------------Order update hole paid true --------

  res.send(result);
}
