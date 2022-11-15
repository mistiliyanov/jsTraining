function emojiDetector(inputStr) {
    //variables:
    let coolTreshold = 1;
    let text = inputStr.shift();
    const pattern = /([:]{2}|[*]{2})([A-Z][a-z]{2,})\1/g
    let emojiArr = [...text.matchAll(pattern)];
    let numArr = [...text.matchAll(/\d/g)];
    
    //control flow:
    numArr.forEach(element => {
        coolTreshold *= Number(element[0]);
    });
    console.log(`Cool threshold: ${coolTreshold}\n${emojiArr.length} emojis found in the text.`
    + ' The cool ones are:');
    emojiArr.forEach(emoji => {
        let emojStr = emoji[2];
        let coolIndex = 0;
        for (const char of emojStr) {
            coolIndex += char.charCodeAt();
        }
        if (coolIndex > coolTreshold){
            console.log(emoji[0]);
        }
    });
}
emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);
console.log('--------------------------------------------------');
emojiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]);
console.log('--------------------------------------------------');
emojiDetector(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."]);
console.log('--------------------------------------------------');
