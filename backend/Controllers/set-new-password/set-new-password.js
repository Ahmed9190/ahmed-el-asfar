import bcrypt from "bcrypt";
import db from "../../utils/db.js";

const saltRounds = 10;

export default async function setNewPassword({ id, password }, res) {
  try {
    const [{ email }] = await db("users").select("email").where({ id });
    const wasntSubmittedCode = (await db("restoring requests").where({ email }))
      .length;
    if (wasntSubmittedCode)
      return res
        .status(400)
        .send("something wrong please try ressetting again");
    const hash = await bcrypt.hash(password, saltRounds);
    await db("users").update({ password: hash }).where("id", "=", id);
    res.send("updated");
  } catch (error) {
    console.log(error);
    res.status(400).send("error");
  }
}
