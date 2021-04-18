import db from "../../utils/db.js";

export default async function handleRegisterRequests({ email, active }, res) {
  try {
    active
      ? await db("users").where({ email }).update({ active })
      : await db("users").where({ email }).delete();
    res.send("rejected");
  } catch (error) {
    console.log(error);
    res.status(400).send("error");
  }
}
