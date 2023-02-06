const arrWords = ['fabulous','happy','content','miraculous','wild','mouse'];
    console.log(arrEndsWith(arrWords,'ous'));

    function arrEndsWith(arrWords,ending)
    {
        const result = [];
        for(const word of arrWords)
        {
            if(word.endsWith(ending))
            {
                result.push(word);
            }
        }
        return(result)
    }
