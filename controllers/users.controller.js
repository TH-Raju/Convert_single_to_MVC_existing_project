import dbConnect from "../utils/dbConnect";
const usersCollection = dbConnect().db("marriage-media").collection("users");
const packagesCollection = dbConnect()
  .db("marriage-media")
  .collection("package");
import { ObjectId } from "mongodb";

export async function postUser(req, res) {
  const user = req.body;
  const result = await usersCollection.insertOne(user);
  res.send(result);
}

export async function getAllUser(req, res) {
  const query = {};
  const users = await usersCollection.find(query).toArray();
  res.send(users);
}

export async function getUserByEmail(req, res) {
  const email = req.params.email;
  const query = { email };
  const users = await usersCollection.findOne(query);
  res.send(users);
}

export async function getAdminByEmail(req, res) {
  const email = req.params.email;
  const query = { email };
  const user = await usersCollection.findOne(query);
  res.send({ isAdmin: user?.role === "admin" });
}

export async function patchUserLimit(req, res) {
  const email = req.params.email;
  const query = { email: email };
  const details = req.body;
  // console.log(details);
  const option = { upsert: true };
  const updateDoc = {
    $set: {
      userLimit: details.userLimit,
    },
  };
  const result = await usersCollection.updateOne(query, updateDoc, option);
  res.send(result);
}

export async function patchUserByEmail(req, res) {
  const email = req.params.email;
  const query = { email: email };
  const user = await packagesCollection.findOne(query);
  const details = req.body;
  // console.log(details);
  const option = { upsert: true };
  const updateDoc = {
    $set: {
      userType: details.userType,
      userLimit: details.userLimit,
    },
  };
  const result = await usersCollection.updateOne(query, updateDoc, option);
  res.send(result);
}

export async function getUserByRole(req, res) {
  const role = req.params.role;
  const query = { role: role };
  const users = await usersCollection.find(query).toArray();
  res.send(users);
}

export async function getSellerByEmail(req, res) {
  const email = req.params.email;
  const query = { email };
  const user = await usersCollection.findOne(query);
  res.send({ isSeller: user?.role === "Seller" });
}

export async function putToAdmin(req, res) {
  const id = req.params.id;
  const filter = { _id: ObjectId(id) };
  const options = { upsert: true };
  const updatedDoc = {
    $set: {
      role: "admin",
    },
  };
  const result = await usersCollection.updateOne(filter, updatedDoc, options);
  res.send(result);
}

export async function putSeller(req, res) {
  const id = req.params.id;
  const filter = { _id: ObjectId(id) };
  const options = { upsert: true };
  const updatedDoc = {
    $set: {
      varify: "verified",
    },
  };
  const result = await usersCollection.updateOne(filter, updatedDoc, options);
  res.send(result);
}

export async function deleteBuyer(req, res) {
  const id = req.params.id;
  const query = { _id: ObjectId(id) };
  const result = await usersCollection.deleteOne(query);
  res.send(result);
}

export async function deleteSeller(req, res) {
  const id = req.params.id;
  const query = { _id: ObjectId(id) };
  const result = await usersCollection.deleteOne(query);
  res.send(result);
}

export async function getProfile(req, res) {
  const search = req.query.search || " ";
  // console.log(search)
  let query = {};
  if (search.length) {
    query = {
      $text: { $search: search },
    };
  }
  const cursor = usersCollection.find(query);
  const services = await cursor.toArray();
  res.send(services);
}

export async function getSingleProfile(req, res) {
  const id = req.params.id;
  const query = { _id: ObjectId(id) };
  const service = await usersCollection.findOne(query);
  res.send(service);
}

export async function getAllProfile(req, res) {
  const query = {};
  const cursors = usersCollection.find(query);
  const profile = await cursors.toArray();
  res.send(profile);
}
