import express, { json } from "express";
import cors from "cors";
import dbConnect from "./utils/dbConnect";
import verifyJWT from "./utils/verifyJWT";
require("dotenv").config();

import jwtRoutes from "./routes/jwt.route";
import userRoutes from "./routes/users.route";
import packageRoutes from "./routes/packages.route";
import priviledgeRoutes from "./routes/priviledges.route";
import aboutRoutes from "./routes/about.route";
import categorieRoutes from "./routes/categories.route";
import productRoutes from "./routes/product.route";
import profileRoutes from "./routes/profile.route";
import bookingRoutes from "./routes/bookings.route";
import wishlistRoutes from "./routes/wishlist.route";
import paymentRoutes from "./routes/payment.route";

const app = express();
const port = process.env.PORT || 5000;

// middle wares
app.use(cors());
app.use(json());

// DB
dbConnect();

// JWT Token
// verifyJWT();

// Routes
app.use("/api/jwt", jwtRoutes);
app.use("/api/", userRoutes);
app.use("/api/", packageRoutes);
app.use("/api/", priviledgeRoutes);
app.use("/api/", aboutRoutes);
app.use("/api/categories", categorieRoutes);
app.use("/api/", productRoutes);
app.use("/api/", profileRoutes);
app.use("/api/", bookingRoutes);
app.use("/api/", wishlistRoutes);
app.use("/api/", paymentRoutes);

// async function run() {
//     try {
//         const usersCollection = client.db("marriage-media").collection("users");
//         const packagesCollection = client.db("marriage-media").collection("package");
//         const priviledgesCollection = client.db("marriage-media").collection("priviledges");

//         const aboutUsCollection = client.db("marriage-media").collection("about");
//         const categoriesCollection = client.db("used-products-resale-portal").collection("categories");
//         const productsCollection = client.db("used-products-resale-portal").collection("products");
//         const bookingsCollection = client.db("used-products-resale-portal").collection("bookings");
//         const wishlistsCollection = client.db("used-products-resale-portal").collection("wishlists");
//         const paymentsCollection = client.db("used-products-resale-portal").collection("payments");

//     } finally {
//         //   await client.close();
//     }
// }
// run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Marriage Media is Running");
});

app.all("*", (req, res) => {
  res.send("No Route Found");
});

app.listen(port, () => {
  console.log(`Marriage Media website running on Server successfully ${port}`);
});
