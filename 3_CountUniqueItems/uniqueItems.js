/* Write a function that returns the number of unique items (countUniqueItems) in the array.
Use the following provided code:
    function countUniqueItems(arr){
    }
    */

function countUniqueItems(arr){
    let unique = 0;

    //check if array is not empty
    if (arr.length != 0){
        //set unique to 1, since there should be at least one unique item that exists
        unique = 1;

        //start traversing array, excluding the first element
        for (let i = 1; i < arr.length; i++){
            //reset second traversal of array
            let j = 0;
            //traverse from (i - 1)th element
            for (j = 0; j < i; j++){
                //if matching element values exist, break from current iteration
                if (arr[i] === arr[j]){
                    break;
                } 
            }

            //if no matching elements were found and at the end of array
            if (i === j){
                //increment unique count
                unique++;
            }
        }
    }

    //return total unique elements in array
    return unique;
}

// myArray= ["hi", "hello", "welcome", "hello"];

// console.log(countUniqueItems(myArray));