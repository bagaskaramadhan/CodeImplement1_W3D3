// variable berisi integer dengan kententuan:
// angka 0 dalam variable adalah pemisah antara bilangan lainnya

divideAndSort = (masukanAngka) => {
    const a = masukanAngka.toString().split('0')
    // console.log(a)
    const b = a.map(e => e.split('').sort().join(''))
    // console.log(b)
    const c = parseInt(b.join(''))
    console.log(c)
}
divideAndSort(132303210154)