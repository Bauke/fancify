export interface IFancifyOptions {
    input: string;
    set: 'circled' | 'negative circled' | 'fullwidth' | 'math bold';
}
export default function fancify(options: IFancifyOptions): string;
