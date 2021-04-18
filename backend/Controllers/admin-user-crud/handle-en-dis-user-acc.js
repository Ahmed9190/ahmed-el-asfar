import db from "../../utils/db.js";
import sendMail from "../../utils/send-mail.js";

export default async function handleEnDisUserAcc({ id, status }, res) {
  const queryBuilder = db("users").where("id", id);
  await queryBuilder.update(status ? { status, active: true } : { status });
  const [{ email }] = await db("users").where({ id }).select("email");
  const text = "تم قبول حسابك من قبل المسؤول";
  sendMail(email, null, null, text);
  res.send("done");
}
