const dbConnect = require("../utils/dbConnect").default;
const usersCollection = dbConnect().db("marriage-media").collection("users");

const verifySeller = async (req, res, next) => {
  const decodedEmail = req.decoded.email;
  const query = { email: decodedEmail };
  const user = await usersCollection.findOne(query);

  if (user?.role !== "Seller") {
    return res.status(403).send({ message: "forbidden access" });
  }
  next();
};

module.exports = verifySeller;
