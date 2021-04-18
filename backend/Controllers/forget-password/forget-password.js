import db from "../../utils/db.js";
import sendMail from "../../utils/send-mail.js";

export default async function forgetPassword(email, res) {
  try {
    const [userData] = await db("users")
      .select(["email", "id"])
      .where({ email });
    if (!userData) return res.status(404).send("Wrong email");

    const code = Math.floor(100000 + Math.random() * 900000).toString(); //random

    const [alreadySent] = await db("restoring requests")
      .select("email")
      .where({ email });
    if (alreadySent)
      await db("restoring requests")
        .update({ email, code })
        .where("email", "=", userData.email);
    else
      await db("restoring requests")
        .insert({ email, code })
        .where("email", "=", userData.email);
    const text = `رقم استعادة الحساب هو ${code}`;
    const subject = "استعادة الحساب";
    sendMail(userData.email, null, null, text, subject);
    res.send({ id: userData.id });
  } catch (error) {
    console.log(error);
    res.status(400).send("error");
  }
}
