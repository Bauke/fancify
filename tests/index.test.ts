import test from 'ava';
import fancify, {FancifySet, sets} from '../source/index.js';

const alphabet =
  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

test('All sets', (t) => {
  for (const set of sets) {
    t.snapshot(fancify(alphabet, set), `Set: ${set}`);
  }
});

const unusableArguments = [
  undefined,
  null,
  100,
  {
    test: 1,
  },
  ['abc', '123'],
] as unknown;

test('Unusable input throws', (t) => {
  const expected = new TypeError('Typeof input must be "string"');

  for (const input of unusableArguments as string[]) {
    const error = t.throws(() => fancify(input, 'circled'));
    t.deepEqual(error, expected);
  }
});

test('Unusable set throws', (t) => {
  const expected = new TypeError('Typeof set must be "string"');

  for (const set of unusableArguments as FancifySet[]) {
    const error = t.throws(() => fancify(alphabet, set));
    t.deepEqual(error, expected);
  }
});

test('Unknown set throws', (t) => {
  const set = 'unknown' as FancifySet;
  const expected = new Error(`"${set}" is not a known set`);
  const error = t.throws(() => fancify(alphabet, set));
  t.deepEqual(error, expected);
});

test('Continue on characters not in the input', (t) => {
  const expected = 'this is a test!';
  const fancified = fancify(expected, 'circled');
  t.is(fancified.length, expected.length);
});
