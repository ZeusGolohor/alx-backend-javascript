export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  get size() {
    return this._size;
  }

  set size(sze) {
    this._size = sze;
  }

  get location() {
    return this._location;
  }

  set location(data) {
    this._location = data;
  }

  [Symbol.toPrimitive](typ) {
    if (typ === 'number') {
      return this.size;
    }
    if (typ === 'string') {
      return this.location;
    }
    return this;
  }
}
