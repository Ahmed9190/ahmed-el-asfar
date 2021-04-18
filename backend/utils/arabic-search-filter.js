const arabicSearchFilter = (searchField) => {
  return searchField
    .replace(/أ/g, "ا")
    .replace(/إ/g, "ا")
    .replace(/آ/g, "ا")
    .replace(/ء/g, "ا")
    .replace(/ئ/g, "ا")
    .replace(/ؤ/g, "ا")
    .replace(/ة/g, "ه")
    .replace(/ى/g, "ي")
    .replace(/عبد /g, "عبد")
    .toLowerCase();
};

export default arabicSearchFilter;
