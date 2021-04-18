import db from "../../utils/db.js";

export default async function listPendingRequests(res) {
  const pendingRequests = await db("users")
    .select(["id", "name", "email", "gender", "mobnum", "date of birth"])
    .where("active", false)
    .orderBy("id");

  res.send(pendingRequests);
}
