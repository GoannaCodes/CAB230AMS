/* Write a function that returns the number of unique items (countUniqueItems) in the array.
Use the following provided code:
    function countUniqueItems(arr){
    }
    */

function countUniqueItems(arr){
    let unique = 1;

    for (let i = 1; i < arr.length; i++){
        let j = 0;
        for (j = 0; j < i; j++){
            if (arr[i] === arr[j]){
                break;
            } 
        }

        if (i === j){
            unique++;
        }
    }
    return unique;
}

myArray= ["hi", "hello", "welcome", "hello"];

console.log(countUniqueItems(myArray));