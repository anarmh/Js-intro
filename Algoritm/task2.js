
let n = 0;
let m = -8;
let sum = 0;
if (n < 0 || m < 0) {
    console.log("Duzgun reqem daxil edin!")
}
if (n <= m) {

    for (let i = n; i <= m; i++) {
        if (i % 2 == 0)
            sum += i;
    }
    console.log(sum)
}
else {

    for (let i = m; i <= n; i++) {
        if (i % 2 == 0)
            sum += i;
    }
    console.log(sum)
}


