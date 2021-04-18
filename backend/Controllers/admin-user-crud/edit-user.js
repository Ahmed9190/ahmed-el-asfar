import arabicSearchFilter from "../../utils/arabic-search-filter.js";
import db from "../../utils/db.js";

export default async function editUser(data, res) {
  try {
    await db("users")
      .where("id", data.id)
      .update({
        ...data,
        search: arabicSearchFilter(data.name),
      });
    res.send("done");
  } catch (error) {
    res.status(400).send(error.detail);
  }
}
