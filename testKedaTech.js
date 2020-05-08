function cek(n) {
    var hasil = [];

    for (let i = 0; i <= n * 1; i++) {

        if (i % 2 != 0) {
            hasil.push(true);
        } else if (i % 2 === 0) {
            hasil.push('false');
        } else {
            hasil.push(i);
        }
    }
    return hasil;

}
console.log(cek(10));