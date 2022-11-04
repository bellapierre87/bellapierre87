/***********************************************************************
Write a function `arrayConverter(array)` that will intake an
array as an argument and returns an object representing the count of each
value in the array. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

console.log(arrayConverter(["apple", "apple"])); // => {apple: 2}
console.log(arrayConverter(["mango", "pineapple"])); // => {mango: 1, pineapple: 1}
console.log(arrayConverter(["apple", "banana", "potato", "banana"])); // => {apple: 1, banana: 2, potato: 1}
***********************************************************************/

function arrayConverter(array) {
  // Your code
  let obj = {};
  let count = 0;

  //See if each element is a key in the object
  //if not, then add it and set the value to 1
  //if it is, then increment the value by 1 as it's already a key there
  array.forEach(function(el){
    if (obj[el]===undefined){
      count = 1;
      obj[el]= count;

    }
    else{
      count++;
      obj[el] = count;
    }

    });
    return obj;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = arrayConverter;
