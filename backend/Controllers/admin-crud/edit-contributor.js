import db from "../../utils/db.js";
import arabicSearchFilter from "../../utils/arabic-search-filter.js";

export default async function editContributor({ Name, id, ...data }, res) {
  try {
    const Search = arabicSearchFilter(Name);
    const userData = {
      ...data,
      Name,
      Search,
      "Date of Birth": new Date(data["Date of Birth"]),
    };
    await db("contributors").where({ id }).update(userData);
    res.send("updated");
  } catch (error) {
    console.log(error);
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
