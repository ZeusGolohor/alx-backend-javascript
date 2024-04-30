function getStudentIdsSum(arr) {
  if (Array.isArray(arr)) {
    return arr.reduce((sum, student) => sum + student.id, 0);
  }
  return 0;
}
export default getStudentIdsSum;
