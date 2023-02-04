let n=5;
let m=20;
let count=0;
if(n<m){
    for (let i = n; i < m; i++) {
        if(i%2!=0)
        count++;
    }
}
console.log(count)