import dbConnect from "../utils/dbConnect";
const productsCollection = dbConnect()
  .db("used-products-resale-portal")
  .collection("products");
import { ObjectId } from "mongodb";

export async function getAllProduct(req, res) {
  const query = {};
  const result = await productsCollection.find(query).toArray();
  res.send(result);
}

export async function getProductByEmail(req, res) {
  const email = req.params.email;
  const query = { email: email };
  const result = await productsCollection.find(query).toArray();
  res.send(result);
}

export async function postProduct(req, res) {
  const product = req.body;
  const result = await productsCollection.insertOne(product);
  const id = res.send(result);
}

export async function putProduct(req, res) {
  const id = req.params.id;
  const ProductQuery = {
    _id: ObjectId(id),
  };
  const updatedDoc = {
    $set: {
      advertise: true,
    },
  };
  const result = await productsCollection.updateOne(ProductQuery, updatedDoc);
  res.send(result);
}

export async function putProductById(req, res) {
  const id = req.params.id;
  const ProductQuery = {
    _id: ObjectId(id),
  };
  const updatedDoc = {
    $set: {
      advertise: false,
    },
  };
  const result = await productsCollection.updateOne(ProductQuery, updatedDoc);
  res.send(result);
}

export async function deleteProduct(req, res) {
  const id = req.params.id;
  const query = { _id: ObjectId(id) };
  const result = await productsCollection.deleteOne(query);
  res.send(result);
}
