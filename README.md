# Fancify

> Convert letters and numbers to fancy Unicode ones.

## Usage

```typescript
import fancify from 'fancify';

// 'ⓕⓐⓝⓒⓘⓕⓨ ⓉⒽⒾⓈ ①'
fancify('fancify THIS 1', 'circled');
```

For a full list of sets, expand the Sets section below.

<details>
<summary>Sets</summary>

Only alphanumerical characters will be converted (`[a-zA-Z0-9]`).

Note: some sets don't have particular variants because they're not in Unicode. The variants that are available for each set are noted in the table below.

| Name | Variants | Input | Output |
|------|----------|-------|--------|
| `circled` | `[a-zA-Z0-9]` | Circled 123 | Ⓒⓘⓡⓒⓛⓔⓓ ①②③ |
| `negative circled` | `[A-Z0-9]` | Negative Circled 123 | 🅝egative 🅒ircled ❶❷❸ |
| `fullwidth` | `[a-zA-Z0-9]` | Full Width 123 | Ｆｕｌｌ Ｗｉｄｔｈ １２３ |
| `math bold` | `[a-zA-Z0-9]` | Math Bold 123 | 𝐌𝐚𝐭𝐡 𝐁𝐨𝐥𝐝 𝟏𝟐𝟑 |
| `math bold fraktur` | `[a-zA-Z]` | Math Bold Fraktur 123 | 𝕸𝖆𝖙𝖍 𝕭𝖔𝖑𝖉 𝕱𝖗𝖆𝖐𝖙𝖚𝖗 123 |
| `math bold italic` | `[a-zA-Z]` | Math Bold Italic 123 | 𝑴𝒂𝒕𝒉 𝑩𝒐𝒍𝒅 𝑰𝒕𝒂𝒍𝒊𝒄 123 |
| `math bold script` | `[a-zA-Z]` | Math Bold Script 123 | 𝓜𝓪𝓽𝓱 𝓑𝓸𝓵𝓭 𝓢𝓬𝓻𝓲𝓹𝓽 123 |
| `math double struck` | `[a-z0-9]` | Math Double Struck 123 | M𝕒𝕥𝕙 D𝕠𝕦𝕓𝕝𝕖 S𝕥𝕣𝕦𝕔𝕜 𝟙𝟚𝟛 |
| `math mono` | `[a-zA-Z0-9]` | Math Mono 123 | 𝙼𝚊𝚝𝚑 𝙼𝚘𝚗𝚘 𝟷𝟸𝟹 |
| `math sans` | `[a-zA-Z0-9]` | Math Sans 123 | 𝖬𝖺𝗍𝗁 𝖲𝖺𝗇𝗌 𝟣𝟤𝟥 |
| `math sans bold` | `[a-zA-Z0-9]` | Math Sans Bold 123 | 𝗠𝗮𝘁𝗵 𝗦𝗮𝗻𝘀 𝗕𝗼𝗹𝗱 𝟭𝟮𝟯 |
| `math sans italic` | `[a-zA-Z]` | Math Sans Italic 123 | 𝘔𝘢𝘵𝘩 𝘚𝘢𝘯𝘴 𝘐𝘵𝘢𝘭𝘪𝘤 123 |
| `math sans bold italic` | `[a-zA-Z]` | Math Sans Bold Italic 123 | 𝙈𝙖𝙩𝙝 𝙎𝙖𝙣𝙨 𝘽𝙤𝙡𝙙 𝙄𝙩𝙖𝙡𝙞𝙘 123 |
| `parenthesized` | `[a-zA-Z]` | Parenthesized 123 | 🄟⒜⒭⒠⒩⒯⒣⒠⒮⒤⒵⒠⒟ 123 |
| `regional indicator` | `[A-Z]` | Regional Indicator 123 | 🇷egional 🇮ndicator 123 |
| `squared` | `[A-Z]` | Squared 123 | 🅂quared 123 |
| `negative squared` | `[A-Z]` | Negative Squared 123 | 🅽egative 🆂quared 123 |
</details>

## License

Open-sourced with the [MIT License](https://git.holllo.cc/Bauke/fancify/src/branch/main/LICENSE).
