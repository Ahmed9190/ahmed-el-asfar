import search from "../search-contributors/search-contributors.js";

export default async function listUsers(req, res) {
  const { pageNum, query, key, gender } = req.body;
  let list = await search(query, pageNum, key, gender);
  res.send(list);
}
