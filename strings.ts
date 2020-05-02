

const niqqud: { [word: string]: string } = {
    'שלום': 'שָׁלוֹם'
    , 'לכולם': 'לְכֻלָּם'
    , '': 'הַגְּבָעוֹת'
    , 'הבצות': 'הַבִּצּוֹת'
    , 'היערות': 'הַיְּעָרוֹת'
    , 'הממתקים': 'הַמַּמְתַּקִּים'
    , 'החשך': 'הַחֹשֶׁךְ'
    , 'האור': 'הָאוֹר'
    , 'החלומות': 'הַחֲלוֹמוֹת'
    , 'השוקולד': 'הַשּׁוֹקוֹלָד'
}

function addNiqqud(word: string): string {
    if (word.endsWith('.')) {
        return addNiqqud(word.slice(0, -1)) + '.'
    } else {
        return niqqud[word] || word
    }
}

function addNiqqudToSentence(sentence: string): string {
    return sentence
        .split(' ')
        .map(addNiqqud)
        .join(' ')
}


console.log(addNiqqudToSentence('שלום לכולם'))