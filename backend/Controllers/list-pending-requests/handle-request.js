import db from "../../utils/db.js";
import sendMail from "../../utils/send-mail.js";

export default async function handleRequest({ id, isAccepted }, res) {
  try {
    if (isAccepted) await db("users").update("active", true).where({ id });
    else await db("users").where({ id }).del();
    const [{ email }] = await db("users").where({ id }).select("email");
    const text = "تم قبول حسابك من قبل المسؤول";
    sendMail(email, null, null, text);
    res.send("done");
  } catch (error) {
    res.send("Something went wrong,please try again");
  }
}
