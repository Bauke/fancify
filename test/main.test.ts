import test, {ExecutionContext, Macro} from 'ava';
import fancify, {FancifyOptions} from '../source/main';

// Tests all possible sets
const outputMacro: Macro<[FancifyOptions, string]> = (
  t: ExecutionContext,
  input: FancifyOptions,
  expected: string
) => {
  const actual: string = fancify(input);
  t.is(actual, expected);
};

outputMacro.title = (providedTitle, input, expected) =>
  `output -> ${JSON.stringify(input)} = ${expected}`.trim();

const alphabet =
  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const outputTests: Array<{expected: string; opts: FancifyOptions}> = [
  {
    expected: 'ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ⓪①②③④⑤⑥⑦⑧⑨',
    opts: {input: alphabet, set: 'circled'}
  },
  {
    expected: 'abcdefghijklmnopqrstuvwxyz🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩⓿❶❷❸❹❺❻❼❽❾',
    opts: {input: alphabet, set: 'negative circled'}
  },
  {
    expected:
      'ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ０１２３４５６７８９',
    opts: {input: alphabet, set: 'fullwidth'}
  },
  {
    expected: '𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗',
    opts: {input: alphabet, set: 'math bold'}
  },
  {
    expected: '𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖞𝖟𝕬𝕭𝕮𝕯𝕰𝕱𝕲𝕳𝕴𝕵𝕶𝕷𝕸𝕹𝕺𝕻𝕼𝕽𝕾𝕿𝖀𝖁𝖂𝖃𝖄𝖅0123456789',
    opts: {input: alphabet, set: 'math bold fraktur'}
  },
  {
    expected: '𝒂𝒃𝒄𝒅𝒆𝒇𝒈𝒉𝒊𝒋𝒌𝒍𝒎𝒏𝒐𝒑𝒒𝒓𝒔𝒕𝒖𝒗𝒘𝒙𝒚𝒛𝑨𝑩𝑪𝑫𝑬𝑭𝑮𝑯𝑰𝑱𝑲𝑳𝑴𝑵𝑶𝑷𝑸𝑹𝑺𝑻𝑼𝑽𝑾𝑿𝒀𝒁0123456789',
    opts: {input: alphabet, set: 'math bold italic'}
  },
  {
    expected: '𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩0123456789',
    opts: {input: alphabet, set: 'math bold script'}
  },
  {
    expected: '𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫ABCDEFGHIJKLMNOPQRSTUVWXYZ𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡',
    opts: {input: alphabet, set: 'math double struck'}
  },
  {
    expected: '𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿',
    opts: {input: alphabet, set: 'math mono'}
  },
  {
    expected: '𝖺𝖻𝖼𝖽𝖾𝖿𝗀𝗁𝗂𝗃𝗄𝗅𝗆𝗇𝗈𝗉𝗊𝗋𝗌𝗍𝗎𝗏𝗐𝗑𝗒𝗓𝖠𝖡𝖢𝖣𝖤𝖥𝖦𝖧𝖨𝖩𝖪𝖫𝖬𝖭𝖮𝖯𝖰𝖱𝖲𝖳𝖴𝖵𝖶𝖷𝖸𝖹𝟢𝟣𝟤𝟥𝟦𝟧𝟨𝟩𝟪𝟫',
    opts: {input: alphabet, set: 'math sans'}
  },
  {
    expected: '𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵',
    opts: {input: alphabet, set: 'math sans bold'}
  },
  {
    expected: '𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡0123456789',
    opts: {input: alphabet, set: 'math sans italic'}
  },
  {
    expected: '𝙖𝙗𝙘𝙙𝙚𝙛𝙜𝙝𝙞𝙟𝙠𝙡𝙢𝙣𝙤𝙥𝙦𝙧𝙨𝙩𝙪𝙫𝙬𝙭𝙮𝙯𝘼𝘽𝘾𝘿𝙀𝙁𝙂𝙃𝙄𝙅𝙆𝙇𝙈𝙉𝙊𝙋𝙌𝙍𝙎𝙏𝙐𝙑𝙒𝙓𝙔𝙕0123456789',
    opts: {input: alphabet, set: 'math sans bold italic'}
  },
  {
    expected: '⒜⒝⒞⒟⒠⒡⒢⒣⒤⒥⒦⒧⒨⒩⒪⒫⒬⒭⒮⒯⒰⒱⒲⒳⒴⒵🄐🄑🄒🄓🄔🄕🄖🄗🄘🄙🄚🄛🄜🄝🄞🄟🄠🄡🄢🄣🄤🄥🄦🄧🄨🄩0123456789',
    opts: {input: alphabet, set: 'parenthesized'}
  },
  {
    expected:
      'abcdefghijklmnopqrstuvwxyz🇦🇧🇨🇩🇪🇫🇬🇭🇮🇯🇰🇱🇲🇳🇴🇵🇶🇷🇸🇹🇺🇻🇼🇽🇾🇿0123456789',
    opts: {input: alphabet, set: 'regional indicator'}
  },
  {
    expected: 'abcdefghijklmnopqrstuvwxyz🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉0123456789',
    opts: {input: alphabet, set: 'squared'}
  },
  {
    expected: 'abcdefghijklmnopqrstuvwxyz🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉0123456789',
    opts: {input: alphabet, set: 'negative squared'}
  }
];

for (const outputTest of outputTests) {
  test(outputMacro, outputTest.opts, outputTest.expected);
}

// Tests for all possible errors and `if` branches
test('errors -> null input throws error', (t: ExecutionContext) => {
  const options: FancifyOptions = {input: null!, set: 'circled'};
  const actual: Error = t.throws(() => fancify(options));
  const expected: Error = new Error('"input" cannot be empty');
  t.deepEqual(actual, expected);
});

test('errors -> empty input throws error', (t: ExecutionContext) => {
  const options: FancifyOptions = {input: '', set: 'circled'};
  const actual: Error = t.throws(() => fancify(options));
  const expected: Error = new Error('"input" cannot be empty');
  t.deepEqual(actual, expected);
});

test('errors -> null set throws error', (t: ExecutionContext) => {
  const options: FancifyOptions = {input: 'a', set: null!};
  const actual: Error = t.throws(() => fancify(options));
  const expected: Error = new Error('"set" cannot be empty');
  t.deepEqual(actual, expected);
});

test('errors -> empty set throws error', (t: ExecutionContext) => {
  // Ignore a TypeScript error stating "set" has to be a specific string
  // @ts-ignore
  const options: FancifyOptions = {input: 'a', set: ''};
  const actual: Error = t.throws(() => fancify(options));
  const expected: Error = new Error('"set" cannot be empty');
  t.deepEqual(actual, expected);
});
