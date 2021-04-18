import db from "../../utils/db.js";
import arabicSearchFilter from "../../utils/arabic-search-filter.js";

export default async function createContributor({ Name, ...data }, res) {
  try {
    const Search = arabicSearchFilter(Name);
    const DateofJoining = new Date();
    const [{ max }] = await db("contributors").max("id");
    const userData = {
      ...data,
      Name,
      Search,
      "Date of Joining": DateofJoining,
      "Date of Birth": new Date(data["Date of Birth"]),
      id: max + 1,
    };
    await db("contributors").insert(userData);
    res.send("added");
  } catch (error) {
    res.status(400).send("error");
  }
}

// "Box":
// "Name":
// "Family":
// "Civil Number":
// "Date of Birth":
// "Type":
// "Region":
// "Parcel":
// "House":
// "Street":
// "Automated Number":
// "Search":
