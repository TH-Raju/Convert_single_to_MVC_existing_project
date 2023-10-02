import dbConnect from "../utils/dbConnect";
const usersCollection = dbConnect().db("marriage-media").collection("users");
import { sign } from "jsonwebtoken";

export async function getJWT(req, res) {
  const email = req.query.email;
  const query = { email: email };
  const user = await usersCollection.findOne(query);
  if (user) {
    const token = sign({ email }, process.env.ACCESS_TOKEN, {
      expiresIn: "24h",
    });
    return res.send({ accessToken: token });
  }
  res.status(403).send({ accessToken: "" });
}
