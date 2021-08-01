export const lengthText = (text, maxLetters) => {

    //Added conditional to avoid error with missing descriptions
    if(text?.length > maxLetters) {

        const slicedText = text.slice(0, maxLetters);
        const finalText = slicedText.concat('...');
        return finalText

    } else {

        return text;

    }
}