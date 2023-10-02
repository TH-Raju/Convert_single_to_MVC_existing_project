import dbConnect from "../utils/dbConnect";
const priviledgesCollection = dbConnect()
  .db("marriage-media")
  .collection("priviledges");
import { ObjectId } from "mongodb";

export async function patchPriviledge(req, res) {
  // console.log(req.body.package);
  const query = {
    package: req.body.package,
  };
  const abc = await priviledgesCollection.findOne(query);
  const title = abc ? abc.title : "";
  const def = [...title, ...req.body.title];
  console.log(def);

  const filter = query;
  const options = { upsert: true };
  const updateDoc = {
    $set: {
      title: def,
      email: req.body.email,
      author: req.body.author,
    },
  };
  const result = await priviledgesCollection.updateOne(
    filter,
    updateDoc,
    options
  );
  console.log(result);
  // // const result = await priviledgesCollection.insertOne(priviledges);
  res.send(result);
}

export async function getPriviledge(req, res) {
  const query = {};
  const cursors = priviledgesCollection.find(query);
  const priviledge = await cursors.toArray();
  res.send(priviledge);
}

export async function getSinglePriviledge(req, res) {
  const id = req.params.id;
  const query = { _id: ObjectId(id) };
  const result = await priviledgesCollection.findOne(query);
  console.log(result);
  res.send(result);
}
