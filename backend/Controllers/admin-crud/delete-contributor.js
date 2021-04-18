import db from "../../utils/db.js";

export default async function deleteContributor(id, res) {
  try {
    await db("contributors").where({ id }).del();
    res.send("deleted");
  } catch (error) {
    res.status(400).send("error");
  }
}
