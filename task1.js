palindrome = (string) => {
    const kata = string;
    // console.log(kata)
    const splString = kata.toLowerCase().split(''); //split memisah var kata dengan '' / perhuruf
    // console.log(splString)
    const revString = splString.reverse() //reverse membalikan kata yang sudah di split
    // console.log(revString)
    const joiString = revString.join('') //join menggabungkan var revString dengan '' / perhuruf
    // console.log(joiString)
    if (joiString == kata.toLowerCase()) {
        console.log(`${kata} is Palindrome`)
    } else {
        console.log(`${kata} is not Palindrome`)
    }
}
palindrome('uWU')