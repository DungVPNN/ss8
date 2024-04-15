let a:number|string|undefined=5;
a="hong"
let numbers1: (number|string)[] = ["vip",1,2,3,4,5]


let obj1: {name:string,address:string,phone:string}={
    name:"hoa",
    address:"HN",
    phone:"1241231"
}

type students={
    name:string,
    address:string,
    phone:string,
}
type email={
    email:string
}
type C = students&email;
let obj:students={
    name:"hoa",
    address:"HN",
    phone:"124124"
}
let obj2:C={
    name:"hoa",
    address:"HN",
    phone:"124124",
    email:"dungbgbg12tt@gmail.com"
}