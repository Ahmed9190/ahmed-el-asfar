import db from "../../utils/db.js";
import bcrypt from "bcrypt";
import arabicSearchFilter from "../../utils/arabic-search-filter.js";
import sendMail from "../../utils/send-mail.js";

const saltRounds = 10;

export default async function register(
  { name, email, password, date, gender, mobnum },
  res
) {
  const hash = await bcrypt.hash(password, saltRounds);
  const code = Math.floor(100000 + Math.random() * 900000).toString(); //random
  try {
    const [id] = await db("users")
      .insert({
        name,
        email,
        password: hash,
        "date of birth": date,
        gender,
        mobnum,
        search: arabicSearchFilter(name),
        confirmed: code,
      })
      .returning("id");
    await sendMail(email, code, id);

    res.send("success");
  } catch (err) {
    res.status(400).json(err.detail);
  }
}
