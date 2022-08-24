let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];

let spreedOparator = (arr1 , arr2) =>{
    let arraconcate = [...arr1, ...arr2];
    return arraconcate;
}

console.log(spreedOparator(arr1, arr2));