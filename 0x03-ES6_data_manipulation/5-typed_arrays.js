export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const dataView = new DataView(buffer);
  if (position < 0 || position >= dataView.length) {
    throw new Error('Position outside range');
  } else {
    dataView.setInt8(position, value);
  }
  return dataView;
}