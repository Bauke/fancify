export interface IFancifyOptions {
    input: string;
    set: 'circled' | 'negative circled' | 'fullwidth' | 'math bold' | 'math bold fraktur';
}
export default function fancify(options: IFancifyOptions): string;
