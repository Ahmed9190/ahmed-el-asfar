import db from "../../utils/db.js";

export default async function fetchRegisterRequests(res) {
  try {
    res.send(await db("users").where({ active: false }));
  } catch (error) {
    console.log(error);
    res.status(400).send("error");
  }
}
