import db from "../../utils/db.js";
import arabicSearchFilter from "../../utils/arabic-search-filter.js";

const PAGE_SIZE = 50;

async function searchByName(query, pageNum, key, gender) {
  const mainBuild = db("users");

  if (typeof gender === "boolean") mainBuild.where({ gender });

  if (query !== "") {
    mainBuild.where("search", "like", `%${arabicSearchFilter(query)}%`);
  }

  let count;
  if (pageNum === 0) {
    [{ count }] = await mainBuild.clone().count("*");
  }

  mainBuild.select([
    "id",
    "name",
    "email",
    "gender",
    "mobnum",
    "date of birth",
    "active",
    "status",
  ]);

  const offset = PAGE_SIZE * pageNum;

  const list = await mainBuild.offset(offset).limit(PAGE_SIZE).orderBy("id");
  return { list, count: parseInt(count), key };
}

export default async function search(query, pageNum, key, gender) {
  return await searchByName(query, pageNum, key, gender);
}
