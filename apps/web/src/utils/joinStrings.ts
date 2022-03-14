export const joinStrings = (args: string[]) => {
    let word = '';
    args.forEach((arg) => (word += arg));
    return word;
};
