let array = [4, 5, 6, 7, 9];
let arrayAverage = (array) =>{
    let sqrNumb = [];
    
    for(let i=0; i<array.length; i++){
        let value = array[i];
        // console.log(value);
        let sqr = Math.pow(value ,  2);
        sqrNumb.push(sqr);
    }
   console.log(sqrNumb); 
    let sum =0;
   for(let number of sqrNumb){
            sum  += number;     
   } 
   let average = sum / sqrNumb.length;
   
   return average;
   
}

console.log(arrayAverage(array));