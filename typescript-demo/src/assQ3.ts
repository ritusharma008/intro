function add1(...digits:number[]) {
    var sum =0;
    for(let i of digits) {
        sum += i;
    }
    return sum;
}
var result = add1(1,2,3,4,5,6,7,8);
console.log(result);