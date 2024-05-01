function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  const buf = new ArrayBuffer(length);
  const int8Arr = new Int8Array(buf, 0, length);
  int8Arr.set([value], position);

  return new DataView(buf);
}
export default createInt8TypedArray;
