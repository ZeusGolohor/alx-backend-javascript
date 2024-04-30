function getListStudentIds(arr) {
  if (Array.isArray(arr)) {
    const ids = [];
    arr.map((data) => ids.push(data.id));
    return ids;
  }
  return [];
}
export default getListStudentIds;
