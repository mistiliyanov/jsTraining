function revealWords(wordsToCheck, text) {
    let wordsToReplace = wordsToCheck.split(', ');
    console.log(wordsToReplace);
    wordsToReplace.forEach(word => {
        while (text.includes(' ' + '*'.repeat(word.length) + ' ')){
            let newText = text.replace(' ' + '*'.repeat(word.length) + ' ', ' ' + word + ' ');
            text = newText;
        }
    });
    console.log(text);
}
revealWords('great',
    'softuni is ***** place for learning new programming languages'
);
console.log('----------------------');
revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages'
);
