export interface IFancifyOptions {
    input: string;
    set: 'circled' | 'negative circled' | 'fullwidth' | 'math bold' | 'math bold fraktur' | 'math bold italic' | 'math bold script' | 'math double struck' | 'math mono' | 'math sans' | 'math sans bold' | 'math sans italic' | 'math sans bold italic';
}
export default function fancify(options: IFancifyOptions): string;
