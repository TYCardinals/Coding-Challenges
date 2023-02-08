function paraStats(paragraph)
{
    const result = {};

    const arrSentences = paragraph.split('. ');
    const num_sentences = arrSentences.length;    

    const arrWords = paragraph.split(' ');
    const num_words = arrWords.length;

    let max_sentence_length = 0
    for(const sentence of arrSentences)
    {
        if(sentence.length > max_sentence_length)
        {
            max_sentence_length = sentence.length
        }
    }

    let max_word_length = 0
    for(const word of arrWords)
    {
        if(word.length > max_word_length)
        {
            max_word_length = word.length
        }
    }

    result.num_sentences = num_sentences;
    result.num_words = num_words;
    result.max_sentence_length = max_sentence_length;
    result.max_word_length = max_word_length;
    return(result)
}


console.log(paraStats(`
A two-inch layer of freshly fallen snow covered the yard. 
Stacey peeked outside. 
To most, it would have been a beautiful sight worthy of taking a photo to put on Instagram. 
For Stacey, it meant something different. 
The first snow of the year brought back the witches as the fairies in the yard had to seek shelter to avoid the cold.
`))