export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const dv = new DataView(buffer, 0, length);

  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }
  dv.setInt8(position, value);
  return dv;
}
