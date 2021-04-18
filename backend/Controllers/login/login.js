import db from "../../utils/db.js";
import bcrypt from "bcrypt";

export default async function login({ email, password }, res) {
  const [dbRes] = await db("users").where("email", "=", email);
  if (!dbRes) return res.status(400).send("wrong email");
  else if (!dbRes.active) return res.status(400).send("not actived");
  else if (!dbRes.status) return res.status(400).send("disabled");
  else if (dbRes.confirmed) return res.status(400).send("not confirmed");
  const valid = await bcrypt.compare(password, dbRes.password);

  if (valid) {
    delete dbRes.password;
    delete dbRes.id;
    const response = { ...dbRes, ...{ dateOfBirth: dbRes["date of birth"] } };
    delete response["date of birth"];
    res.json(response);
  } else {
    res.status(400).json("wrong password");
  }
}
