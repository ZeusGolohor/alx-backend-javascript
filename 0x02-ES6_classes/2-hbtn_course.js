export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this._validateName(name);
    this._length = this._validateLength(length);
    this._students = this._validateStudents(students);
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = this._validateName(newName);
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    this._length = this._validateLength(newLength);
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    this._students = this._validateStudents(newStudents);
  }

  _validateName(name) {
    if (typeof name !== "string") {
      throw new TypeError("Name must be a string");
    }
    return name;
  }

  _validateLength(length) {
    if (typeof length !== "number" || length <= 0) {
      throw new TypeError("Length must be a positive number");
    }
    return length;
  }

  _validateStudents(students) {
    if (!Array.isArray(students) || students.some(student => typeof student !== "string")) {
      throw new TypeError("Students must be an array of strings");
    }
    return students;
  }
}
