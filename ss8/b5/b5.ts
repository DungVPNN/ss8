let abc:number|string|undefined=5;
abc="hong"
let numbers12: (number|string)[] = ["vip",1,2,3,4,5]
console.log(numbers12);
let obj12: {name:string,address:string,phone:string}={
    name:"hoa",
    address:"HN",
    phone:"1241231"
}
type students1={
    name:string,
    address:string,
    phone:string,
}
type email1={
    email:string
}
type C1 = students1&email1;
let obj123:students={
    name:"hoa",
    address:"HN",
    phone:"124124"
}
let obj21:C1={
    name:"hoa",
    address:"HN",
    phone:"124124",
    email:"dungbgbg12tt@gmail.com"
}
console.log(obj21);
