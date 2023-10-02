import dbConnect from "../utils/dbConnect";
const usersCollection = dbConnect().db("marriage-media").collection("users");
import { ObjectId } from "mongodb";

export async function getProfile(req, res) {
  const search = req.query.search;
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
