function activationKeys(inputArr) {
    //variables:
    let rawKey = inputArr.shift();

    //functions:
    function containsFunc(key, substring) {
        if (key.includes(substring)) {
            console.log(`${key} contains ${substring}`);
        } else {
            console.log('Substring not found!');
        }
    }

    function flipFunc(key, upperLower, startIndex, endIndex) {
        let stringToReplace = key.substring(startIndex, endIndex);
        let replacement = ''
        if (upperLower === 'Upper') {
            replacement = stringToReplace.toUpperCase();
        } else {
            replacement = stringToReplace.toLowerCase();
        }
        const result = key.replace(stringToReplace, replacement);
        console.log(result);
        return result;
    }

    function sliceFunc(key, startIndex, endIndex) {
        const keyArr = key.split('');
        keyArr.splice(startIndex, endIndex - startIndex)
        const result = keyArr.join('');
        console.log(result);
        return result;
    }


    //controlflow:
    let commandLine = inputArr.shift();
    while (commandLine !== 'Generate') {
        if (commandLine.includes('Contains')) {
            const substring = commandLine.split('>>>')[1];
            containsFunc(rawKey, substring);
        } else if (commandLine.includes('Flip')) {
            const commandArr = commandLine.split('>>>')
            const upperLower = commandArr[1];
            const startIndex = commandArr[2];
            const endIndex = commandArr[3];
            rawKey = flipFunc(rawKey, upperLower, startIndex, endIndex);
        } else if (commandLine.includes('Slice')) {
            const commandArr = commandLine.split('>>>');
            const startIndex = commandArr[1];
            const endIndex = commandArr[2];
            rawKey = sliceFunc(rawKey, startIndex, endIndex);
        }
        commandLine = inputArr.shift();
    }
    console.log(`Your activation key is: ${rawKey}`);
}
activationKeys(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"]);
console.log('-----------------------');
activationKeys(["134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"]);
console.log('-----------------------');
