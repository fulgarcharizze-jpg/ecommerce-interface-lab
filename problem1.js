function checkVariable(input) {
    switch (typeof input) {
        case "string":
            return "string";
        case "number":
            return "number";
        case "boolean":
            return "boolean";
        case "bigint":
            return "bigint";
        case "undefined":
            return "undefined";
        case "object":
            return "object"; // includes null
        default:
            return "unknown";
    }
}

console.log(checkVariable("hello")); // Output: string
console.log(checkVariable(42)); // Output: number
console.log(checkVariable(true)); // Output: boolean
console.log(checkVariable(BigInt(42))); // Output: bigint
console.log(checkVariable(undefined)); // Output: undefined
console.log(checkVariable(null)); // Output: object
