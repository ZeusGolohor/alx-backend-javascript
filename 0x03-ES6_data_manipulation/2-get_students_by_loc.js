function getStudentsByLocation(arr, city = null) {
  if (Array.isArray(arr)) {
    return arr.filter((data) => data.location === city);
  }
  return [];
}
export default getStudentsByLocation;
