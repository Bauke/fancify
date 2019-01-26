"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
function fancify(options) {
    // Make sure the input is something we can change
    if (options.input === null || !options.input.length) {
        throw new Error('"input" cannot be empty');
    }
    // Make sure the specified set is something
    if (options.set === null || !options.set.length) {
        throw new Error('"set" cannot be empty');
    }
    // Read the characters from the JSON file
    const characters = JSON.parse(fs_1.readFileSync(path_1.join(__dirname, '../characters.json'), { encoding: 'UTF-8' }));
    // Set the output to the specified input
    let output = options.input;
    // Iterate through the characters
    for (const char of characters) {
        // When the character is in the output at least once and the set has a replacement for it...
        if (output.indexOf(char.char) > -1 && char[options.set]) {
            // ... Replace it (and any others) with the replacement character
            const regex = new RegExp(char.char, 'g');
            output = output.replace(regex, String.fromCodePoint(parseInt(char[options.set], 16)));
        }
    }
    // Return the output after iterating
    return output;
}
exports.default = fancify;
//# sourceMappingURL=main.js.map