reverseWords = (words) => {
    const splWords = words.split(' ');
    const revWords = splWords.reverse()
    const joiWords = revWords.join(' ');
    console.log(joiWords)
}
reverseWords('Rido Suka Shofira')

//fetch = promise untuk mengambil data dari url
//express = menjalankan method http request