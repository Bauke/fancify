import fancify, { IFancifyOptions } from '../lib/main';

import test, { ExecutionContext, Macro } from 'ava';

/*
   ██████╗ ██╗   ██╗████████╗██████╗ ██╗   ██╗████████╗
  ██╔═══██╗██║   ██║╚══██╔══╝██╔══██╗██║   ██║╚══██╔══╝
  ██║   ██║██║   ██║   ██║   ██████╔╝██║   ██║   ██║
  ██║   ██║██║   ██║   ██║   ██╔═══╝ ██║   ██║   ██║
  ╚██████╔╝╚██████╔╝   ██║   ██║     ╚██████╔╝   ██║
   ╚═════╝  ╚═════╝    ╚═╝   ╚═╝      ╚═════╝    ╚═╝
*/ // Tests all possible sets with the previews from the README
const outputMacro: Macro<[IFancifyOptions, string]> = (t: ExecutionContext, input: IFancifyOptions, expected: string) => {
  const actual: string = fancify(input);
  t.is(actual, expected);
};

outputMacro.title = (providedTitle, input, expected) => `output -> ${JSON.stringify(input)} = ${expected}`.trim();

test(outputMacro, { input: 'Circled 123', set: 'circled' }, 'Ⓒⓘⓡⓒⓛⓔⓓ ①②③');
test(outputMacro, { input: 'Negative Circled 123', set: 'negative circled' }, '🅝egative 🅒ircled ❶❷❸');
test(outputMacro, { input: 'Full Width 123', set: 'fullwidth' }, 'Ｆｕｌｌ Ｗｉｄｔｈ １２３');
test(outputMacro, { input: 'Math Bold 123', set: 'math bold' }, '𝐌𝐚𝐭𝐡 𝐁𝐨𝐥𝐝 𝟏𝟐𝟑');
test(outputMacro, { input: 'Math Bold Fraktur 123', set: 'math bold fraktur' }, '𝕸𝖆𝖙𝖍 𝕭𝖔𝖑𝖉 𝕱𝖗𝖆𝖐𝖙𝖚𝖗 123');
test(outputMacro, { input: 'Math Bold Italic 123', set: 'math bold italic' }, '𝑴𝒂𝒕𝒉 𝑩𝒐𝒍𝒅 𝑰𝒕𝒂𝒍𝒊𝒄 123');
test(outputMacro, { input: 'Math Bold Script 123', set: 'math bold script' }, '𝓜𝓪𝓽𝓱 𝓑𝓸𝓵𝓭 𝓢𝓬𝓻𝓲𝓹𝓽 123');
test(outputMacro, { input: 'Math Double Struck 123', set: 'math double struck' }, 'M𝕒𝕥𝕙 D𝕠𝕦𝕓𝕝𝕖 S𝕥𝕣𝕦𝕔𝕜 𝟙𝟚𝟛');
test(outputMacro, { input: 'Math Mono 123', set: 'math mono' }, '𝙼𝚊𝚝𝚑 𝙼𝚘𝚗𝚘 𝟷𝟸𝟹');
test(outputMacro, { input: 'Math Sans 123', set: 'math sans' }, '𝖬𝖺𝗍𝗁 𝖲𝖺𝗇𝗌 𝟣𝟤𝟥');
test(outputMacro, { input: 'Math Sans Bold 123', set: 'math sans bold' }, '𝗠𝗮𝘁𝗵 𝗦𝗮𝗻𝘀 𝗕𝗼𝗹𝗱 𝟭𝟮𝟯');
test(outputMacro, { input: 'Math Sans Italic 123', set: 'math sans italic' }, '𝘔𝘢𝘵𝘩 𝘚𝘢𝘯𝘴 𝘐𝘵𝘢𝘭𝘪𝘤 123');
test(outputMacro, { input: 'Math Sans Bold Italic 123', set: 'math sans bold italic' }, '𝙈𝙖𝙩𝙝 𝙎𝙖𝙣𝙨 𝘽𝙤𝙡𝙙 𝙄𝙩𝙖𝙡𝙞𝙘 123');

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
