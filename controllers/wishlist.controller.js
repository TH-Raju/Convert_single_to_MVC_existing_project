import dbConnect from "../utils/dbConnect";
const wishlistsCollection = dbConnect()
  .db("used-products-resale-portal")
  .collection("wishlists");

export async function postWishList(req, res) {
  const wishlist = req.body;
  console.log(wishlist);
  const result = await wishlistsCollection.insertOne(wishlist);
  res.send(result);
}

export async function getWishList(req, res) {
  const email = req.query.email;

  const decodedEmail = req.decoded.email;

  if (email !== decodedEmail) {
    return res.status(403).send({ message: "forbidden access" });
  }
  // console.log('token', req.headers.authorization)

  const query = { email: email };
  const wishlists = await wishlistsCollection.find(query).toArray();
  res.send(wishlists);
}
