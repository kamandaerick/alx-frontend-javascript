export default function updateUniqItems(map) {
  if (!map instanceof Map) {
    throw new Error('Cannot process');
  }
  for (let [k, v] of map) {
    if (v === 1) {
      map.set(k, 100);
    }
  }
}
