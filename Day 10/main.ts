

// Q 91:

// Create an array of your three favorite fruits and add a new fruit to the end of the array.

// Explain & TIP: Adding elements to an array can be easily done using the .push() method. It allows
// you to add new items to the end of an array.

let favoriteFruits: string[] = ["Apple" , "Banana" , "Cherry" ] ;
favoriteFruits.push("Mango") ; 
console.log(favoriteFruits) ;

//............................................................................................................

// Q 92:

// Write a function to remove the last element from an array and return the removed element.

//Explain & TIP: The .pop() method removes the last element from an array and returns that element. This 
//can be useful when you need to work with the removed item.

function removeLastElement<T> (arr: T[]) : T | undefined {
    return arr.pop() ; 
}
const fruits : String[] = ["Apple" , "Banana" , "Cherry"] ;
console.log(removeLastElement(fruits)) ; 
console.log(fruits) ; 

//.................................................................................................................

// Q 93:

//Find the index of "Banana" in an array of fruits and replace it with "Mango".

//Explain & TIP: To replace an item in an array, find its index using .indexOf(), then use that index to set a new 
//value with array bracket notation.

function replaceBananaWithMango(fruits : string []) : void {
    let index = fruits.indexOf("Banana") ; 
    if (index !== -1) fruits[index] = "Mango" ; 
}
const fruitss : string[] = ["Apple" , "Banana" , "Cherry"] ; 
replaceBananaWithMango(fruitss) ; 
console.log(fruitss) ;

//............................................................................................................................

// Q 94:

// Use the .map() method to create a new array that contains the length of each word from an array of words.

// Explain & TIP: The .map() method transforms each item in an array according to a specific function and returns a new 
//array with the transformed items.

const words: string[] = ["Hello" , "World" , "TypeScript" , "JavaScript"] ; 
const lengths : number[] = words.map ( word => word.length) ; 
console.log(lengths) ; 

//...........................................................................................................................

// Q 95:

// Write a function that uses the .filter() method to return an array of numbers greater than 10.

// Explain & TIP: The .filter() method creates a new array with all elements that pass the test implemented by the provided function.


function filterGreaterThanTen (numbers: number[] ) : number[] {
    return numbers.filter(number => number > 10 ) ;
}
 const numbers : number[] = [5 , 10 , 15 , 20 , 25] ;
 console.log(filterGreaterThanTen(numbers)) ;