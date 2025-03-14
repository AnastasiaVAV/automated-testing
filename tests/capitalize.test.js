import { strict as assert } from 'node:assert';
import capitalize from '../src/capitalize.js';

// первый вариант
// if (capitalize('hello') !== 'Hello') {
//   throw new Error('Функция работает неверно!');
// }
// if (capitalize('') !== '') {
//   throw new Error('Функция работает неверно!');
// }

// use assert
assert.equal(capitalize('hello'), 'Hello');
assert.equal(capitalize(''), '');

console.log('Все тесты пройдены!');