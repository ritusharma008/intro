let arr: number[] = [1,2,3,4,5];
arr.push(11);
console.log(arr);

let str: string[] = [];
str[0] = 'ritu';
str[1] = 'sharma';
str[2] = 'abc';
console.log(str);

str.forEach((i) => console.log(i));

//mixed array
let arr3:(number|string)[] = [1,2,3,"ritu","sharma"];
arr3.push("abc");
arr3.push(123);
console.log(arr3);

let arr4: readonly number[] = [1,2,3,4,5];
// arr.push(6);  // not allowed dur to readonly array.


