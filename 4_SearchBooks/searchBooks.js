/*Write a function 'searchBooks' which returns ALL the books written by a specific author 
  and return the list of the book titles as a string, separated with comma
  if there are more than one title.
  
  If there is no author in the library then return 'NOT FOUND'. 
  
  Example dataset: library = [{author: 'Bill Gates', title:'The Road Ahead', libraryID:1254}];
  
  Use the following provided code to begin:
    function searchBooks(library, authorName){

    }
  */


function searchBooks(library, authorName){
    //output array
    const bookTitles=[""]
    //iterate through library
    for (var i = 0; i < library.length; i++){
        //if author name could be found
        if (library[i].author == authorName){
            //if there is no entry in bookTitles yet, add just the title
            if (bookTitles[0] == ""){
                bookTitles[0] = library[i].title;
            } else{ //if there is an existing entry in bookTitles, add ',' and new book title
                bookTitles[0] += `,${library[i].title}`
            }   
        }
    }

    //after iteration and there is still no book titles to be found
    if (bookTitles[0] == ""){
        //return "Not found"
        return "NOT FOUND";
    }
    else{ //else output the book titles
        return bookTitles[0];
    }
}

library = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Carolann Camilo', title: 'Eyewitness', libraryID: 32456},
    { author: 'Carolann Camilo', title: 'Cocky Marine', libraryID: 32457}  
   ];

console.log(searchBooks(library, 'Carolann Camilo'));