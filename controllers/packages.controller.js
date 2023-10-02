import dbConnect from "../utils/dbConnect";
const packagesCollection = dbConnect()
  .db("marriage-media")
  .collection("package");
import { ObjectId } from "mongodb";

export async function postPackage(req, res) {
  const packages = req.body;
  const result = await packagesCollection.insertOne(packages);
  res.send(result);
}

export async function getPackage(req, res) {
  const query = {};
  const cursors = packagesCollection.find(query);
  const packages = await cursors.toArray();
  res.send(packages);
}

export async function getSinglePackage(req, res) {
  const pkg = req.params.pkg;
  // console.log(pkg);
  const query = { title: pkg };
  const result = await packagesCollection.findOne(query);
  res.send(result);
}

export async function getPackageByEmail(req, res) {
  const email = req.params.email;
  const query = { email: email };
  const result = await packagesCollection.find(query).toArray();
  res.send(result);
}

export async function deletePackage(req, res) {
  const id = req.params.id;
  const query = { _id: ObjectId(id) };
  const result = await packagesCollection.deleteOne(query);
  res.send(result);
}

export async function getPackageById(req, res) {
  const id = req.params.id;
  const query = { _id: ObjectId(id) };
  const resultt = await packagesCollection.findOne(query);
  res.send(resultt);
}

export async function updatePackage(req, res) {
  const id = req.params.id;
  const query = { _id: ObjectId(id) };
  const details = req.body;
  const option = { upsert: true };
  const updateDoc = {
    $set: {
      description: details.description,
    },
  };
  const result = await packagesCollection.updateOne(query, updateDoc, option);
  res.send(result);
}
