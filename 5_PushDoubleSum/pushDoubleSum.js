/*Write a function (pushMultiplySum)that takes a numeric 
array and an extra number as input, 
extends the array with the extra element, 
doubles each element of the extended array, 
and then returns the sum of the elements 
of the updated array.

Use the following provided code to begin:
    function pushMultiplySum(vec, x) */

function pushMultiplySum(vec, x){
    //push new value 'x' to end of vec array
    vec.push(x);

    //doubles each value of the vec array
    let newVec = vec.map(x => x * 2);

    //calculate sum of elements in newVec
    let total = 0;
    for(var i = 0; i < newVec.length; i++){
        total += newVec[i];
    }
    return total;
}

let vec = [5, 0, -7, 4, -10];

console.log(pushMultiplySum(vec, -10));