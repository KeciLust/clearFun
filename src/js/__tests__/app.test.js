import gameHealth from '../app';

test('health = 90', () => {
  const item = { name: 'Маг', health: 90 };
  const received = gameHealth(item);
  expect(received).toBe('healthy');
});
test('health = 50', () => {
  const item = { name: 'Маг', health: 50 };
  const received = gameHealth(item);
  expect(received).toBe('wounded');
});
test('health = 30', () => {
  const item = { name: 'Маг', health: 30 };
  const received = gameHealth(item);
  expect(received).toBe('wounded');
});
test('health = 15', () => {
  const item = { name: 'Маг', health: 15 };
  const received = gameHealth(item);
  expect(received).toBe('wounded');
}); test('health = 10', () => {
  const item = { name: 'Маг', health: 10 };
  const received = gameHealth(item);
  expect(received).toBe('critical');
});
