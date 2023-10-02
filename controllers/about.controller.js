import dbConnect from "../utils/dbConnect";
const aboutUsCollection = dbConnect().db("marriage-media").collection("about");

export async function postAbout(req, res) {
  const about = req.body;
  const result = await aboutUsCollection.insertOne(about);
  res.send(result);
}

export async function getAbouts(req, res) {
  const query = {};
  const cursors = aboutUsCollection.find(query);
  const aboutus = await cursors.toArray();
  res.send(aboutus);
}
