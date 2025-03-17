import reverse from '../src/index.js';

test('reverse', () => {
  expect(reverse('hello')).toEqual('olleh');
  expect(reverse('')).toEqual('');
});

console.log('Все тесты пройдены!');