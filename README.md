# Fancify

[![version](https://img.shields.io/npm/v/fancify.svg?style=flat-square)](https://npmjs.com/package/fancify)
[![downloads](https://img.shields.io/npm/dm/fancify.svg?style=flat-square)](https://npmjs.com/package/fancify)
[![coverage](https://img.shields.io/codecov/c/gitlab/bauke/fancify.svg?style=flat-square)](https://codecov.io/gl/Bauke/fancify)

> Convert letters and numbers to fancy Unicode ones.

## Importing

### JavaScript

`fancify` is exported as default.

```javascript
// ES6 Imports:
import fancify from 'fancify';

// or using require:
const fancify = require('fancify').default;
```

### TypeScript

```typescript
// ES6 imports:
import fancify from 'fancify';

// and if you also want the IFancifyOptions interface:
import fancify, { IFancifyOptions } from 'fancify';
```

## Usage

For a full list of sets, [see sets](#sets).

```typescript
fancify({ input: 'fancify THIS 1', set: 'circled' });
// 'ⓕⓐⓝⓒⓘⓕⓨ ⓉⒽⒾⓈ ①'
```

## Sets

### Implemented

Only alphanumerical characters will be converted (`/[a-zA-Z0-9]/`).

These sets are implemented and can be used. Note that some sets don't have particular variants because they're not in Unicode and are noted below.

| Name | Variants | Input | Output |
|------|----------|-------|--------|
| `circled` | All | Circled 123 | Ⓒⓘⓡⓒⓛⓔⓓ ①②③ |
| `negative circled` | Upper & Numbers | Negative Circled 123 | 🅝egative 🅒ircled ❶❷❸ |
| `fullwidth` | All | Full Width 123 | Ｆｕｌｌ Ｗｉｄｔｈ １２３ |
| `math bold` | All | Math Bold 123 | 𝐌𝐚𝐭𝐡 𝐁𝐨𝐥𝐝 𝟏𝟐𝟑 |
| `math bold fraktur` | Upper & Lower | Math Bold Fraktur 123 | 𝕸𝖆𝖙𝖍 𝕭𝖔𝖑𝖉 𝕱𝖗𝖆𝖐𝖙𝖚𝖗 123 |
| `math bold italic` | Upper & Lower | Math Bold Italic 123 | 𝑴𝒂𝒕𝒉 𝑩𝒐𝒍𝒅 𝑰𝒕𝒂𝒍𝒊𝒄 123 |
| `math bold script` | Upper & Lower | Math Bold Script 123 | 𝓜𝓪𝓽𝓱 𝓑𝓸𝓵𝓭 𝓢𝓬𝓻𝓲𝓹𝓽 123 |
| `math double struck` | Lower & Numbers | Math Double Struck 123 | M𝕒𝕥𝕙 D𝕠𝕦𝕓𝕝𝕖 S𝕥𝕣𝕦𝕔𝕜 𝟙𝟚𝟛 |
| `math mono` | All | Math Mono 123 | 𝙼𝚊𝚝𝚑 𝙼𝚘𝚗𝚘 𝟷𝟸𝟹 |
| `math sans` | All | Math Sans 123 | 𝖬𝖺𝗍𝗁 𝖲𝖺𝗇𝗌 𝟣𝟤𝟥 |
| `math sans bold` | All | Math Sans Bold 123 | 𝗠𝗮𝘁𝗵 𝗦𝗮𝗻𝘀 𝗕𝗼𝗹𝗱 𝟭𝟮𝟯 |
| `math sans italic` | Upper & Lower | Math Sans Italic 123 | 𝘔𝘢𝘵𝘩 𝘚𝘢𝘯𝘴 𝘐𝘵𝘢𝘭𝘪𝘤 123 |
| `math sans bold italic` | Upper & Lower | Math Sans Bold Italic 123 | 𝙈𝙖𝙩𝙝 𝙎𝙖𝙣𝙨 𝘽𝙤𝙡𝙙 𝙄𝙩𝙖𝙡𝙞𝙘 123 |

### Left To Do

This list of sets are the ones left to be done, if you'd like any added that aren't listed here please [make an issue for it](https://gitlab.com/Bauke/fancify/issues) and/or submit a merge request if possible.

```typescript
  // |'parenthesized'|'regional indicator'|'squared'|'negative squared'|'small caps'|
  // 'stroked'|'inverted';
```

## License

Licensed under [MIT](https://gitlab.com/Bauke/fancify/blob/master/LICENSE).
