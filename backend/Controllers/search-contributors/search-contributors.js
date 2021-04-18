import db from "../../utils/db.js";
import arabicSearchFilter from "../../utils/arabic-search-filter.js";

const PAGE_SIZE = 50;

async function searchByDate(query, res) {
  const result = await db("contributors")
    .column([
      "Box",
      "Name",
      "Family",
      "Civil Number",
      "Date of Birth",
      "Type",
      "Region",
      "Parcel",
      "House",
      "Street",
      "Date of Joining",
      "Automated Number",
    ])
    .where("Date of Joining", "=", query)
    .orderBy("n");
  res.send(result);
}

async function searchByName(query, pageNum, key, gender) {
  console.log(gender);
  const mainBuild = db("contributors");
  if (typeof gender === "boolean") mainBuild.where({ Type: gender });
  if (query !== "") {
    mainBuild.where(
      "Search",
      "like",
      `${arabicSearchFilter(query).replace(/$|^|\s+/g, "%")}`
    );
  }

  let count;
  if (pageNum === 0) {
    [{ count }] = await mainBuild.clone().count("*");
  }

  const offset = PAGE_SIZE * pageNum;

  const list = await mainBuild.offset(offset).limit(PAGE_SIZE).orderBy("id");

  return { list, count: parseInt(count), key };
}

export default async function search(query, pageNum, key, gender) {
  return await searchByName(query, pageNum, key, gender);
}
