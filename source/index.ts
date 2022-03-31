export type FancifySet =
  | 'circled'
  | 'negative circled'
  | 'fullwidth'
  | 'math bold'
  | 'math bold fraktur'
  | 'math bold italic'
  | 'math bold script'
  | 'math double struck'
  | 'math mono'
  | 'math sans'
  | 'math sans bold'
  | 'math sans italic'
  | 'math sans bold italic'
  | 'parenthesized'
  | 'regional indicator'
  | 'squared'
  | 'negative squared';

export const sets: FancifySet[] = [
  'circled',
  'negative circled',
  'fullwidth',
  'math bold',
  'math bold fraktur',
  'math bold italic',
  'math bold script',
  'math double struck',
  'math mono',
  'math sans',
  'math sans bold',
  'math sans italic',
  'math sans bold italic',
  'parenthesized',
  'regional indicator',
  'squared',
  'negative squared',
];

export const characters: Array<{
  char: string;
  circled?: string;
  'negative circled'?: string;
  fullwidth?: string;
  'math bold'?: string;
  'math bold fraktur'?: string;
  'math bold italic'?: string;
  'math bold script'?: string;
  'math double struck'?: string;
  'math mono'?: string;
  'math sans'?: string;
  'math sans bold'?: string;
  'math sans italic'?: string;
  'math sans bold italic'?: string;
  parenthesized?: string;
  'regional indicator'?: string;
  squared?: string;
  'negative squared'?: string;
}> = [
  {
    char: '0',
    circled: '24EA',
    'negative circled': '24FF',
    fullwidth: 'FF10',
    'math bold': '1D7CE',
    'math double struck': '1D7D8',
    'math mono': '1D7F6',
    'math sans': '1D7E2',
    'math sans bold': '1D7EC',
  },
  {
    char: '1',
    circled: '2460',
    'negative circled': '2776',
    fullwidth: 'FF11',
    'math bold': '1D7CF',
    'math double struck': '1D7D9',
    'math mono': '1D7F7',
    'math sans': '1D7E3',
    'math sans bold': '1D7ED',
  },
  {
    char: '2',
    circled: '2461',
    'negative circled': '2777',
    fullwidth: 'FF12',
    'math bold': '1D7D0',
    'math double struck': '1D7DA',
    'math mono': '1D7F8',
    'math sans': '1D7E4',
    'math sans bold': '1D7EE',
  },
  {
    char: '3',
    circled: '2462',
    'negative circled': '2778',
    fullwidth: 'FF13',
    'math bold': '1D7D1',
    'math double struck': '1D7DB',
    'math mono': '1D7F9',
    'math sans': '1D7E5',
    'math sans bold': '1D7EF',
  },
  {
    char: '4',
    circled: '2463',
    'negative circled': '2779',
    fullwidth: 'FF14',
    'math bold': '1D7D2',
    'math double struck': '1D7DC',
    'math mono': '1D7FA',
    'math sans': '1D7E6',
    'math sans bold': '1D7F0',
  },
  {
    char: '5',
    circled: '2464',
    'negative circled': '277A',
    fullwidth: 'FF15',
    'math bold': '1D7D3',
    'math double struck': '1D7DD',
    'math mono': '1D7FB',
    'math sans': '1D7E7',
    'math sans bold': '1D7F1',
  },
  {
    char: '6',
    circled: '2465',
    'negative circled': '277B',
    fullwidth: 'FF16',
    'math bold': '1D7D4',
    'math double struck': '1D7DE',
    'math mono': '1D7FC',
    'math sans': '1D7E8',
    'math sans bold': '1D7F2',
  },
  {
    char: '7',
    circled: '2466',
    'negative circled': '277C',
    fullwidth: 'FF17',
    'math bold': '1D7D5',
    'math double struck': '1D7DF',
    'math mono': '1D7FD',
    'math sans': '1D7E9',
    'math sans bold': '1D7F3',
  },
  {
    char: '8',
    circled: '2467',
    'negative circled': '277D',
    fullwidth: 'FF18',
    'math bold': '1D7D6',
    'math double struck': '1D7E0',
    'math mono': '1D7FE',
    'math sans': '1D7EA',
    'math sans bold': '1D7F4',
  },
  {
    char: '9',
    circled: '2468',
    'negative circled': '277E',
    fullwidth: 'FF19',
    'math bold': '1D7D7',
    'math double struck': '1D7E1',
    'math mono': '1D7FF',
    'math sans': '1D7EB',
    'math sans bold': '1D7F5',
  },
  {
    char: 'A',
    circled: '24B6',
    'negative circled': '1F150',
    fullwidth: 'FF21',
    'math bold': '1D400',
    'math bold fraktur': '1D56C',
    'math bold italic': '1D468',
    'math bold script': '1D4D0',
    'math mono': '1D670',
    'math sans': '1D5A0',
    'math sans bold': '1D5D4',
    'math sans italic': '1D608',
    'math sans bold italic': '1D63C',
    parenthesized: '1F110',
    'regional indicator': '1F1E6',
    squared: '1F130',
    'negative squared': '1F170',
  },
  {
    char: 'B',
    circled: '24B7',
    'negative circled': '1F151',
    fullwidth: 'FF22',
    'math bold': '1D401',
    'math bold fraktur': '1D56D',
    'math bold italic': '1D469',
    'math bold script': '1D4D1',
    'math mono': '1D671',
    'math sans': '1D5A1',
    'math sans bold': '1D5D5',
    'math sans italic': '1D609',
    'math sans bold italic': '1D63D',
    parenthesized: '1F111',
    'regional indicator': '1F1E7',
    squared: '1F131',
    'negative squared': '1F171',
  },
  {
    char: 'C',
    circled: '24B8',
    'negative circled': '1F152',
    fullwidth: 'FF23',
    'math bold': '1D402',
    'math bold fraktur': '1D56E',
    'math bold italic': '1D46A',
    'math bold script': '1D4D2',
    'math mono': '1D672',
    'math sans': '1D5A2',
    'math sans bold': '1D5D6',
    'math sans italic': '1D60A',
    'math sans bold italic': '1D63E',
    parenthesized: '1F112',
    'regional indicator': '1F1E8',
    squared: '1F132',
    'negative squared': '1F172',
  },
  {
    char: 'D',
    circled: '24B9',
    'negative circled': '1F153',
    fullwidth: 'FF24',
    'math bold': '1D403',
    'math bold fraktur': '1D56F',
    'math bold italic': '1D46B',
    'math bold script': '1D4D3',
    'math mono': '1D673',
    'math sans': '1D5A3',
    'math sans bold': '1D5D7',
    'math sans italic': '1D60B',
    'math sans bold italic': '1D63F',
    parenthesized: '1F113',
    'regional indicator': '1F1E9',
    squared: '1F133',
    'negative squared': '1F173',
  },
  {
    char: 'E',
    circled: '24BA',
    'negative circled': '1F154',
    fullwidth: 'FF25',
    'math bold': '1D404',
    'math bold fraktur': '1D570',
    'math bold italic': '1D46C',
    'math bold script': '1D4D4',
    'math mono': '1D674',
    'math sans': '1D5A4',
    'math sans bold': '1D5D8',
    'math sans italic': '1D60C',
    'math sans bold italic': '1D640',
    parenthesized: '1F114',
    'regional indicator': '1F1EA',
    squared: '1F134',
    'negative squared': '1F174',
  },
  {
    char: 'F',
    circled: '24BB',
    'negative circled': '1F155',
    fullwidth: 'FF26',
    'math bold': '1D405',
    'math bold fraktur': '1D571',
    'math bold italic': '1D46D',
    'math bold script': '1D4D5',
    'math mono': '1D675',
    'math sans': '1D5A5',
    'math sans bold': '1D5D9',
    'math sans italic': '1D60D',
    'math sans bold italic': '1D641',
    parenthesized: '1F115',
    'regional indicator': '1F1EB',
    squared: '1F135',
    'negative squared': '1F175',
  },
  {
    char: 'G',
    circled: '24BC',
    'negative circled': '1F156',
    fullwidth: 'FF27',
    'math bold': '1D406',
    'math bold fraktur': '1D572',
    'math bold italic': '1D46E',
    'math bold script': '1D4D6',
    'math mono': '1D676',
    'math sans': '1D5A6',
    'math sans bold': '1D5DA',
    'math sans italic': '1D60E',
    'math sans bold italic': '1D642',
    parenthesized: '1F116',
    'regional indicator': '1F1EC',
    squared: '1F136',
    'negative squared': '1F176',
  },
  {
    char: 'H',
    circled: '24BD',
    'negative circled': '1F157',
    fullwidth: 'FF28',
    'math bold': '1D407',
    'math bold fraktur': '1D573',
    'math bold italic': '1D46F',
    'math bold script': '1D4D7',
    'math mono': '1D677',
    'math sans': '1D5A7',
    'math sans bold': '1D5DB',
    'math sans italic': '1D60F',
    'math sans bold italic': '1D643',
    parenthesized: '1F117',
    'regional indicator': '1F1ED',
    squared: '1F137',
    'negative squared': '1F177',
  },
  {
    char: 'I',
    circled: '24BE',
    'negative circled': '1F158',
    fullwidth: 'FF29',
    'math bold': '1D408',
    'math bold fraktur': '1D574',
    'math bold italic': '1D470',
    'math bold script': '1D4D8',
    'math mono': '1D678',
    'math sans': '1D5A8',
    'math sans bold': '1D5DC',
    'math sans italic': '1D610',
    'math sans bold italic': '1D644',
    parenthesized: '1F118',
    'regional indicator': '1F1EE',
    squared: '1F138',
    'negative squared': '1F178',
  },
  {
    char: 'J',
    circled: '24BF',
    'negative circled': '1F159',
    fullwidth: 'FF2A',
    'math bold': '1D409',
    'math bold fraktur': '1D575',
    'math bold italic': '1D471',
    'math bold script': '1D4D9',
    'math mono': '1D679',
    'math sans': '1D5A9',
    'math sans bold': '1D5DD',
    'math sans italic': '1D611',
    'math sans bold italic': '1D645',
    parenthesized: '1F119',
    'regional indicator': '1F1EF',
    squared: '1F139',
    'negative squared': '1F179',
  },
  {
    char: 'K',
    circled: '24C0',
    'negative circled': '1F15A',
    fullwidth: 'FF2B',
    'math bold': '1D40A',
    'math bold fraktur': '1D576',
    'math bold italic': '1D472',
    'math bold script': '1D4DA',
    'math mono': '1D67A',
    'math sans': '1D5AA',
    'math sans bold': '1D5DE',
    'math sans italic': '1D612',
    'math sans bold italic': '1D646',
    parenthesized: '1F11A',
    'regional indicator': '1F1F0',
    squared: '1F13A',
    'negative squared': '1F17A',
  },
  {
    char: 'L',
    circled: '24C1',
    'negative circled': '1F15B',
    fullwidth: 'FF2C',
    'math bold': '1D40B',
    'math bold fraktur': '1D577',
    'math bold italic': '1D473',
    'math bold script': '1D4DB',
    'math mono': '1D67B',
    'math sans': '1D5AB',
    'math sans bold': '1D5DF',
    'math sans italic': '1D613',
    'math sans bold italic': '1D647',
    parenthesized: '1F11B',
    'regional indicator': '1F1F1',
    squared: '1F13B',
    'negative squared': '1F17B',
  },
  {
    char: 'M',
    circled: '24C2',
    'negative circled': '1F15C',
    fullwidth: 'FF2D',
    'math bold': '1D40C',
    'math bold fraktur': '1D578',
    'math bold italic': '1D474',
    'math bold script': '1D4DC',
    'math mono': '1D67C',
    'math sans': '1D5AC',
    'math sans bold': '1D5E0',
    'math sans italic': '1D614',
    'math sans bold italic': '1D648',
    parenthesized: '1F11C',
    'regional indicator': '1F1F2',
    squared: '1F13C',
    'negative squared': '1F17C',
  },
  {
    char: 'N',
    circled: '24C3',
    'negative circled': '1F15D',
    fullwidth: 'FF2E',
    'math bold': '1D40D',
    'math bold fraktur': '1D579',
    'math bold italic': '1D475',
    'math bold script': '1D4DD',
    'math mono': '1D67D',
    'math sans': '1D5AD',
    'math sans bold': '1D5E1',
    'math sans italic': '1D615',
    'math sans bold italic': '1D649',
    parenthesized: '1F11D',
    'regional indicator': '1F1F3',
    squared: '1F13D',
    'negative squared': '1F17D',
  },
  {
    char: 'O',
    circled: '24C4',
    'negative circled': '1F15E',
    fullwidth: 'FF2F',
    'math bold': '1D40E',
    'math bold fraktur': '1D57A',
    'math bold italic': '1D476',
    'math bold script': '1D4DE',
    'math mono': '1D67E',
    'math sans': '1D5AE',
    'math sans bold': '1D5E2',
    'math sans italic': '1D616',
    'math sans bold italic': '1D64A',
    parenthesized: '1F11E',
    'regional indicator': '1F1F4',
    squared: '1F13E',
    'negative squared': '1F17E',
  },
  {
    char: 'P',
    circled: '24C5',
    'negative circled': '1F15F',
    fullwidth: 'FF30',
    'math bold': '1D40F',
    'math bold fraktur': '1D57B',
    'math bold italic': '1D477',
    'math bold script': '1D4DF',
    'math mono': '1D67F',
    'math sans': '1D5AF',
    'math sans bold': '1D5E3',
    'math sans italic': '1D617',
    'math sans bold italic': '1D64B',
    parenthesized: '1F11F',
    'regional indicator': '1F1F5',
    squared: '1F13F',
    'negative squared': '1F17F',
  },
  {
    char: 'Q',
    circled: '24C6',
    'negative circled': '1F160',
    fullwidth: 'FF31',
    'math bold': '1D410',
    'math bold fraktur': '1D57C',
    'math bold italic': '1D478',
    'math bold script': '1D4E0',
    'math mono': '1D680',
    'math sans': '1D5B0',
    'math sans bold': '1D5E4',
    'math sans italic': '1D618',
    'math sans bold italic': '1D64C',
    parenthesized: '1F120',
    'regional indicator': '1F1F6',
    squared: '1F140',
    'negative squared': '1F180',
  },
  {
    char: 'R',
    circled: '24C7',
    'negative circled': '1F161',
    fullwidth: 'FF32',
    'math bold': '1D411',
    'math bold fraktur': '1D57D',
    'math bold italic': '1D479',
    'math bold script': '1D4E1',
    'math mono': '1D681',
    'math sans': '1D5B1',
    'math sans bold': '1D5E5',
    'math sans italic': '1D619',
    'math sans bold italic': '1D64D',
    parenthesized: '1F121',
    'regional indicator': '1F1F7',
    squared: '1F141',
    'negative squared': '1F181',
  },
  {
    char: 'S',
    circled: '24C8',
    'negative circled': '1F162',
    fullwidth: 'FF33',
    'math bold': '1D412',
    'math bold fraktur': '1D57E',
    'math bold italic': '1D47A',
    'math bold script': '1D4E2',
    'math mono': '1D682',
    'math sans': '1D5B2',
    'math sans bold': '1D5E6',
    'math sans italic': '1D61A',
    'math sans bold italic': '1D64E',
    parenthesized: '1F122',
    'regional indicator': '1F1F8',
    squared: '1F142',
    'negative squared': '1F182',
  },
  {
    char: 'T',
    circled: '24C9',
    'negative circled': '1F163',
    fullwidth: 'FF34',
    'math bold': '1D413',
    'math bold fraktur': '1D57F',
    'math bold italic': '1D47B',
    'math bold script': '1D4E3',
    'math mono': '1D683',
    'math sans': '1D5B3',
    'math sans bold': '1D5E7',
    'math sans italic': '1D61B',
    'math sans bold italic': '1D64F',
    parenthesized: '1F123',
    'regional indicator': '1F1F9',
    squared: '1F143',
    'negative squared': '1F183',
  },
  {
    char: 'U',
    circled: '24CA',
    'negative circled': '1F164',
    fullwidth: 'FF35',
    'math bold': '1D414',
    'math bold fraktur': '1D580',
    'math bold italic': '1D47C',
    'math bold script': '1D4E4',
    'math mono': '1D684',
    'math sans': '1D5B4',
    'math sans bold': '1D5E8',
    'math sans italic': '1D61C',
    'math sans bold italic': '1D650',
    parenthesized: '1F124',
    'regional indicator': '1F1FA',
    squared: '1F144',
    'negative squared': '1F184',
  },
  {
    char: 'V',
    circled: '24CB',
    'negative circled': '1F165',
    fullwidth: 'FF36',
    'math bold': '1D415',
    'math bold fraktur': '1D581',
    'math bold italic': '1D47D',
    'math bold script': '1D4E5',
    'math mono': '1D685',
    'math sans': '1D5B5',
    'math sans bold': '1D5E9',
    'math sans italic': '1D61D',
    'math sans bold italic': '1D651',
    parenthesized: '1F125',
    'regional indicator': '1F1FB',
    squared: '1F145',
    'negative squared': '1F185',
  },
  {
    char: 'W',
    circled: '24CC',
    'negative circled': '1F166',
    fullwidth: 'FF37',
    'math bold': '1D416',
    'math bold fraktur': '1D582',
    'math bold italic': '1D47E',
    'math bold script': '1D4E6',
    'math mono': '1D686',
    'math sans': '1D5B6',
    'math sans bold': '1D5EA',
    'math sans italic': '1D61E',
    'math sans bold italic': '1D652',
    parenthesized: '1F126',
    'regional indicator': '1F1FC',
    squared: '1F146',
    'negative squared': '1F186',
  },
  {
    char: 'X',
    circled: '24CD',
    'negative circled': '1F167',
    fullwidth: 'FF38',
    'math bold': '1D417',
    'math bold fraktur': '1D583',
    'math bold italic': '1D47F',
    'math bold script': '1D4E7',
    'math mono': '1D687',
    'math sans': '1D5B7',
    'math sans bold': '1D5EB',
    'math sans italic': '1D61F',
    'math sans bold italic': '1D653',
    parenthesized: '1F127',
    'regional indicator': '1F1FD',
    squared: '1F147',
    'negative squared': '1F187',
  },
  {
    char: 'Y',
    circled: '24CE',
    'negative circled': '1F168',
    fullwidth: 'FF39',
    'math bold': '1D418',
    'math bold fraktur': '1D584',
    'math bold italic': '1D480',
    'math bold script': '1D4E8',
    'math mono': '1D688',
    'math sans': '1D5B8',
    'math sans bold': '1D5EC',
    'math sans italic': '1D620',
    'math sans bold italic': '1D654',
    parenthesized: '1F128',
    'regional indicator': '1F1FE',
    squared: '1F148',
    'negative squared': '1F188',
  },
  {
    char: 'Z',
    circled: '24CF',
    'negative circled': '1F169',
    fullwidth: 'FF3A',
    'math bold': '1D419',
    'math bold fraktur': '1D585',
    'math bold italic': '1D481',
    'math bold script': '1D4E9',
    'math mono': '1D689',
    'math sans': '1D5B9',
    'math sans bold': '1D5ED',
    'math sans italic': '1D621',
    'math sans bold italic': '1D655',
    parenthesized: '1F129',
    'regional indicator': '1F1FF',
    squared: '1F149',
    'negative squared': '1F189',
  },
  {
    char: 'a',
    circled: '24D0',
    fullwidth: 'FF41',
    'math bold': '1D41A',
    'math bold fraktur': '1D586',
    'math bold italic': '1D482',
    'math bold script': '1D4EA',
    'math double struck': '1D552',
    'math mono': '1D68A',
    'math sans': '1D5BA',
    'math sans bold': '1D5EE',
    'math sans italic': '1D622',
    'math sans bold italic': '1D656',
    parenthesized: '249C',
  },
  {
    char: 'b',
    circled: '24D1',
    fullwidth: 'FF42',
    'math bold': '1D41B',
    'math bold fraktur': '1D587',
    'math bold italic': '1D483',
    'math bold script': '1D4EB',
    'math double struck': '1D553',
    'math mono': '1D68B',
    'math sans': '1D5BB',
    'math sans bold': '1D5EF',
    'math sans italic': '1D623',
    'math sans bold italic': '1D657',
    parenthesized: '249D',
  },
  {
    char: 'c',
    circled: '24D2',
    fullwidth: 'FF43',
    'math bold': '1D41C',
    'math bold fraktur': '1D588',
    'math bold italic': '1D484',
    'math bold script': '1D4EC',
    'math double struck': '1D554',
    'math mono': '1D68C',
    'math sans': '1D5BC',
    'math sans bold': '1D5F0',
    'math sans italic': '1D624',
    'math sans bold italic': '1D658',
    parenthesized: '249E',
  },
  {
    char: 'd',
    circled: '24D3',
    fullwidth: 'FF44',
    'math bold': '1D41D',
    'math bold fraktur': '1D589',
    'math bold italic': '1D485',
    'math bold script': '1D4ED',
    'math double struck': '1D555',
    'math mono': '1D68D',
    'math sans': '1D5BD',
    'math sans bold': '1D5F1',
    'math sans italic': '1D625',
    'math sans bold italic': '1D659',
    parenthesized: '249F',
  },
  {
    char: 'e',
    circled: '24D4',
    fullwidth: 'FF45',
    'math bold': '1D41E',
    'math bold fraktur': '1D58A',
    'math bold italic': '1D486',
    'math bold script': '1D4EE',
    'math double struck': '1D556',
    'math mono': '1D68E',
    'math sans': '1D5BE',
    'math sans bold': '1D5F2',
    'math sans italic': '1D626',
    'math sans bold italic': '1D65A',
    parenthesized: '24A0',
  },
  {
    char: 'f',
    circled: '24D5',
    fullwidth: 'FF46',
    'math bold': '1D41F',
    'math bold fraktur': '1D58B',
    'math bold italic': '1D487',
    'math bold script': '1D4EF',
    'math double struck': '1D557',
    'math mono': '1D68F',
    'math sans': '1D5BF',
    'math sans bold': '1D5F3',
    'math sans italic': '1D627',
    'math sans bold italic': '1D65B',
    parenthesized: '24A1',
  },
  {
    char: 'g',
    circled: '24D6',
    fullwidth: 'FF47',
    'math bold': '1D420',
    'math bold fraktur': '1D58C',
    'math bold italic': '1D488',
    'math bold script': '1D4F0',
    'math double struck': '1D558',
    'math mono': '1D690',
    'math sans': '1D5C0',
    'math sans bold': '1D5F4',
    'math sans italic': '1D628',
    'math sans bold italic': '1D65C',
    parenthesized: '24A2',
  },
  {
    char: 'h',
    circled: '24D7',
    fullwidth: 'FF48',
    'math bold': '1D421',
    'math bold fraktur': '1D58D',
    'math bold italic': '1D489',
    'math bold script': '1D4F1',
    'math double struck': '1D559',
    'math mono': '1D691',
    'math sans': '1D5C1',
    'math sans bold': '1D5F5',
    'math sans italic': '1D629',
    'math sans bold italic': '1D65D',
    parenthesized: '24A3',
  },
  {
    char: 'i',
    circled: '24D8',
    fullwidth: 'FF49',
    'math bold': '1D422',
    'math bold fraktur': '1D58E',
    'math bold italic': '1D48A',
    'math bold script': '1D4F2',
    'math double struck': '1D55A',
    'math mono': '1D692',
    'math sans': '1D5C2',
    'math sans bold': '1D5F6',
    'math sans italic': '1D62A',
    'math sans bold italic': '1D65E',
    parenthesized: '24A4',
  },
  {
    char: 'j',
    circled: '24D9',
    fullwidth: 'FF4A',
    'math bold': '1D423',
    'math bold fraktur': '1D58F',
    'math bold italic': '1D48B',
    'math bold script': '1D4F3',
    'math double struck': '1D55B',
    'math mono': '1D693',
    'math sans': '1D5C3',
    'math sans bold': '1D5F7',
    'math sans italic': '1D62B',
    'math sans bold italic': '1D65F',
    parenthesized: '24A5',
  },
  {
    char: 'k',
    circled: '24DA',
    fullwidth: 'FF4B',
    'math bold': '1D424',
    'math bold fraktur': '1D590',
    'math bold italic': '1D48C',
    'math bold script': '1D4F4',
    'math double struck': '1D55C',
    'math mono': '1D694',
    'math sans': '1D5C4',
    'math sans bold': '1D5F8',
    'math sans italic': '1D62C',
    'math sans bold italic': '1D660',
    parenthesized: '24A6',
  },
  {
    char: 'l',
    circled: '24DB',
    fullwidth: 'FF4C',
    'math bold': '1D425',
    'math bold fraktur': '1D591',
    'math bold italic': '1D48D',
    'math bold script': '1D4F5',
    'math double struck': '1D55D',
    'math mono': '1D695',
    'math sans': '1D5C5',
    'math sans bold': '1D5F9',
    'math sans italic': '1D62D',
    'math sans bold italic': '1D661',
    parenthesized: '24A7',
  },
  {
    char: 'm',
    circled: '24DC',
    fullwidth: 'FF4D',
    'math bold': '1D426',
    'math bold fraktur': '1D592',
    'math bold italic': '1D48E',
    'math bold script': '1D4F6',
    'math double struck': '1D55E',
    'math mono': '1D696',
    'math sans': '1D5C6',
    'math sans bold': '1D5FA',
    'math sans italic': '1D62E',
    'math sans bold italic': '1D662',
    parenthesized: '24A8',
  },
  {
    char: 'n',
    circled: '24DD',
    fullwidth: 'FF4E',
    'math bold': '1D427',
    'math bold fraktur': '1D593',
    'math bold italic': '1D48F',
    'math bold script': '1D4F7',
    'math double struck': '1D55F',
    'math mono': '1D697',
    'math sans': '1D5C7',
    'math sans bold': '1D5FB',
    'math sans italic': '1D62F',
    'math sans bold italic': '1D663',
    parenthesized: '24A9',
  },
  {
    char: 'o',
    circled: '24DE',
    fullwidth: 'FF4F',
    'math bold': '1D428',
    'math bold fraktur': '1D594',
    'math bold italic': '1D490',
    'math bold script': '1D4F8',
    'math double struck': '1D560',
    'math mono': '1D698',
    'math sans': '1D5C8',
    'math sans bold': '1D5FC',
    'math sans italic': '1D630',
    'math sans bold italic': '1D664',
    parenthesized: '24AA',
  },
  {
    char: 'p',
    circled: '24DF',
    fullwidth: 'FF50',
    'math bold': '1D429',
    'math bold fraktur': '1D595',
    'math bold italic': '1D491',
    'math bold script': '1D4F9',
    'math double struck': '1D561',
    'math mono': '1D699',
    'math sans': '1D5C9',
    'math sans bold': '1D5FD',
    'math sans italic': '1D631',
    'math sans bold italic': '1D665',
    parenthesized: '24AB',
  },
  {
    char: 'q',
    circled: '24E0',
    fullwidth: 'FF51',
    'math bold': '1D42A',
    'math bold fraktur': '1D596',
    'math bold italic': '1D492',
    'math bold script': '1D4FA',
    'math double struck': '1D562',
    'math mono': '1D69A',
    'math sans': '1D5CA',
    'math sans bold': '1D5FE',
    'math sans italic': '1D632',
    'math sans bold italic': '1D666',
    parenthesized: '24AC',
  },
  {
    char: 'r',
    circled: '24E1',
    fullwidth: 'FF52',
    'math bold': '1D42B',
    'math bold fraktur': '1D597',
    'math bold italic': '1D493',
    'math bold script': '1D4FB',
    'math double struck': '1D563',
    'math mono': '1D69B',
    'math sans': '1D5CB',
    'math sans bold': '1D5FF',
    'math sans italic': '1D633',
    'math sans bold italic': '1D667',
    parenthesized: '24AD',
  },
  {
    char: 's',
    circled: '24E2',
    fullwidth: 'FF53',
    'math bold': '1D42C',
    'math bold fraktur': '1D598',
    'math bold italic': '1D494',
    'math bold script': '1D4FC',
    'math double struck': '1D564',
    'math mono': '1D69C',
    'math sans': '1D5CC',
    'math sans bold': '1D600',
    'math sans italic': '1D634',
    'math sans bold italic': '1D668',
    parenthesized: '24AE',
  },
  {
    char: 't',
    circled: '24E3',
    fullwidth: 'FF54',
    'math bold': '1D42D',
    'math bold fraktur': '1D599',
    'math bold italic': '1D495',
    'math bold script': '1D4FD',
    'math double struck': '1D565',
    'math mono': '1D69D',
    'math sans': '1D5CD',
    'math sans bold': '1D601',
    'math sans italic': '1D635',
    'math sans bold italic': '1D669',
    parenthesized: '24AF',
  },
  {
    char: 'u',
    circled: '24E4',
    fullwidth: 'FF55',
    'math bold': '1D42E',
    'math bold fraktur': '1D59A',
    'math bold italic': '1D496',
    'math bold script': '1D4FE',
    'math double struck': '1D566',
    'math mono': '1D69E',
    'math sans': '1D5CE',
    'math sans bold': '1D602',
    'math sans italic': '1D636',
    'math sans bold italic': '1D66A',
    parenthesized: '24B0',
  },
  {
    char: 'v',
    circled: '24E5',
    fullwidth: 'FF56',
    'math bold': '1D42F',
    'math bold fraktur': '1D59B',
    'math bold italic': '1D497',
    'math bold script': '1D4FF',
    'math double struck': '1D567',
    'math mono': '1D69F',
    'math sans': '1D5CF',
    'math sans bold': '1D603',
    'math sans italic': '1D637',
    'math sans bold italic': '1D66B',
    parenthesized: '24B1',
  },
  {
    char: 'w',
    circled: '24E6',
    fullwidth: 'FF57',
    'math bold': '1D430',
    'math bold fraktur': '1D59C',
    'math bold italic': '1D498',
    'math bold script': '1D500',
    'math double struck': '1D568',
    'math mono': '1D6A0',
    'math sans': '1D5D0',
    'math sans bold': '1D604',
    'math sans italic': '1D638',
    'math sans bold italic': '1D66C',
    parenthesized: '24B2',
  },
  {
    char: 'x',
    circled: '24E7',
    fullwidth: 'FF58',
    'math bold': '1D431',
    'math bold fraktur': '1D59D',
    'math bold italic': '1D499',
    'math bold script': '1D501',
    'math double struck': '1D569',
    'math mono': '1D6A1',
    'math sans': '1D5D1',
    'math sans bold': '1D605',
    'math sans italic': '1D639',
    'math sans bold italic': '1D66D',
    parenthesized: '24B3',
  },
  {
    char: 'y',
    circled: '24E8',
    fullwidth: 'FF59',
    'math bold': '1D432',
    'math bold fraktur': '1D59E',
    'math bold italic': '1D49A',
    'math bold script': '1D502',
    'math double struck': '1D56A',
    'math mono': '1D6A2',
    'math sans': '1D5D2',
    'math sans bold': '1D606',
    'math sans italic': '1D63A',
    'math sans bold italic': '1D66E',
    parenthesized: '24B4',
  },
  {
    char: 'z',
    circled: '24E9',
    fullwidth: 'FF5A',
    'math bold': '1D433',
    'math bold fraktur': '1D59F',
    'math bold italic': '1D49B',
    'math bold script': '1D503',
    'math double struck': '1D56B',
    'math mono': '1D6A3',
    'math sans': '1D5D3',
    'math sans bold': '1D607',
    'math sans italic': '1D63B',
    'math sans bold italic': '1D66F',
    parenthesized: '24B5',
  },
];

export default function fancify(input: string, set: FancifySet): string {
  if (typeof input !== 'string') {
    throw new TypeError('Typeof input must be "string"');
  }

  if (typeof set !== 'string') {
    throw new TypeError('Typeof set must be "string"');
  }

  if (!sets.includes(set)) {
    throw new Error(`"${set}" is not a known set`);
  }

  let output = input;

  for (const char of characters) {
    if (!output.includes(char.char)) {
      continue;
    }

    const replacement = char[set];

    if (typeof replacement !== 'undefined') {
      const regex = new RegExp(char.char, 'g');
      output = output.replace(
        regex,
        String.fromCodePoint(Number.parseInt(replacement, 16)),
      );
    }
  }

  return output;
}
