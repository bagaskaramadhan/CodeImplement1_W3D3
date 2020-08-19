divideAndSort = (masukanAngka) => {
    const a = masukanAngka.toFixed().split('0')
    // console.log(a)
    const b = a.map(e => e.split('').sort().join(''))
    console.log(b)
    const c = parseInt(b.join(''))
    console.log(c)
}
divideAndSort(132303210154)