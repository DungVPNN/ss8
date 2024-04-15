type Guards1= number|[]|{};
function checkType(n:Guards1){
    if(typeof n==='number'){
        return"number";
    }else if (Array.isArray(n)){
        return"array";
    }else if (typeof n === 'object' && !Array.isArray(n)){
        return"object";
    }
}
