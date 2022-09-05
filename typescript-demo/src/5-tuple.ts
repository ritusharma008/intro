let tuple : [number,string,number] = [123, "abc",123] //immutable
tuple.push(3627);  //if we use readonly then push function is not allowed .
console.log(tuple);
