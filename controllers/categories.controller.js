import dbConnect from "../utils/dbConnect";
const categoriesCollection = dbConnect()
  .db("used-products-resale-portal")
  .collection("categories");
import { ObjectId } from "mongodb";

export async function getAllCategoriy(req, res) {
  const query = {};
  const cursors = categoriesCollection.find(query);
  const categorie = await cursors.toArray();
  res.send(categorie);
}

export async function getSingleCategoriy(req, res) {
  const id = req.params.id;
  const query = { _id: ObjectId(id) };
  const categorie = await categoriesCollection.findOne(query);
  res.send(categorie);
}

export async function getCategoriyByName(req, res) {
  const name = req.params.name;
  const query = {
    category: name,
  };

  const products = await productsCollection.find(query).toArray();

  // -----------booking paid == Category product dekhabe na---------------
  const remainingProduct = products.filter((product) => product.paid !== true);
  // -----------booking paid == Category product dekhabe na---------------

  res.send(remainingProduct);
}
