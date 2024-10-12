export default function updateUniqItems(map) {
  for (let [k, v] of map) {
    if (v === 1) {
      map.set(k, 100);
    }
  }
}
