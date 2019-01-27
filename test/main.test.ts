import fancify, { IFancifyOptions } from '../lib/main';

import test, { ExecutionContext, Macro } from 'ava';

/*
   ██████╗ ██╗   ██╗████████╗██████╗ ██╗   ██╗████████╗
  ██╔═══██╗██║   ██║╚══██╔══╝██╔══██╗██║   ██║╚══██╔══╝
  ██║   ██║██║   ██║   ██║   ██████╔╝██║   ██║   ██║
  ██║   ██║██║   ██║   ██║   ██╔═══╝ ██║   ██║   ██║
  ╚██████╔╝╚██████╔╝   ██║   ██║     ╚██████╔╝   ██║
   ╚═════╝  ╚═════╝    ╚═╝   ╚═╝      ╚═════╝    ╚═╝
*/ // Tests all possible sets with a number, lower and upper value
const outputMacro: Macro<[IFancifyOptions, string]> = (t: ExecutionContext, input: IFancifyOptions, expected: string) => {
  const actual: string = fancify(input);
  t.is(actual, expected);
};

outputMacro.title = (providedTitle, input, expected) => `output -> ${JSON.stringify(input)} = ${expected}`.trim();

test(outputMacro, { input: '0aA', set: 'circled' }, '⓪ⓐⒶ');
test(outputMacro, { input: '1bB', set: 'negative circled' }, '❶b🅑');
test(outputMacro, { input: '2cC', set: 'fullwidth' }, '２ｃＣ');
test(outputMacro, { input: '3dD', set: 'math bold' }, '𝟑𝐝𝐃');
test(outputMacro, { input: '4eE', set: 'math bold fraktur' }, '4𝖊𝕰');

/*
  ███████╗██████╗ ██████╗  ██████╗ ██████╗ ███████╗
  ██╔════╝██╔══██╗██╔══██╗██╔═══██╗██╔══██╗██╔════╝
  █████╗  ██████╔╝██████╔╝██║   ██║██████╔╝███████╗
  ██╔══╝  ██╔══██╗██╔══██╗██║   ██║██╔══██╗╚════██║
  ███████╗██║  ██║██║  ██║╚██████╔╝██║  ██║███████║
  ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝
*/ // Tests for all possible errors and `if` branches
test('errors -> null input throws error', (t: ExecutionContext) => {
  const options: IFancifyOptions = { input: null, set: 'circled' };
  const actual: Error = t.throws(() => fancify(options), Error);
  const expected: Error = new Error('"input" cannot be empty');
  t.deepEqual(actual, expected);
});

test('errors -> empty input throws error', (t: ExecutionContext) => {
  const options: IFancifyOptions = { input: '', set: 'circled' };
  const actual: Error = t.throws(() => fancify(options), Error);
  const expected: Error = new Error('"input" cannot be empty');
  t.deepEqual(actual, expected);
});

test('errors -> null set throws error', (t: ExecutionContext) => {
  const options: IFancifyOptions = { input: 'a', set: null };
  const actual: Error = t.throws(() => fancify(options), Error);
  const expected: Error = new Error('"set" cannot be empty');
  t.deepEqual(actual, expected);
});

test('errors -> empty set throws error', (t: ExecutionContext) => {
  // Ignore a TypeScript error stating "set" has to be a specific string
  // @ts-ignore
  const options: IFancifyOptions = { input: 'a', set: '' };
  const actual: Error = t.throws(() => fancify(options), Error);
  const expected: Error = new Error('"set" cannot be empty');
  t.deepEqual(actual, expected);
});
