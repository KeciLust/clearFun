export default function gameHealth(item) {
  let result = '';
  if (item.health > 50) {
    result = 'healthy';
  } else if (item.health < 15) {
    result = 'critical';
  } else {
    result = 'wounded';
  }
  return result;
}
