import db from "../../utils/db.js";

export default async function deleteUser({ id }, res) {
  await db("users").where("id", id).del();
  res.send("done");
}
