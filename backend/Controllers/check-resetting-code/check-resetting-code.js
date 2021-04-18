import db from "../../utils/db.js";

export default async function checkResettingCode({ code, email }, res) {
  try {
    const isRight = await db("restoring requests")
      .where({ code, email })
      .delete()
      .returning("*");
    res.send(isRight.length.toString());
  } catch (error) {
    console.log(error);
    res.status(400).send("error");
  }
}
