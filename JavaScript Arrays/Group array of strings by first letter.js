// Write a function that takes an array of strings as argument
// Group those strings by their first letter
// Return an object that contains properties with keys representing first letters
// The values should be arrays of strings containing only the corresponding strings
// For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
// { a: ['Alf', 'Alice'], b: ['Ben']}

// my solution

function myFunction(arr) {
    let x = arr[0][0]
       let y=[],z=[];
       for(const item of arr){
           if(item[0] == x){
               y.push(item)
           }else{
               z.push(item)
           }
       }
       const m ={
           [y[0][0].toLowerCase()]:y,
           [z[0][0].toLowerCase()]:z
       }
   return m
}


// autor's

function myFunction(arr) {
 return arr.reduce((acc, cur) => {
   const firstLetter = cur.toLowerCase().charAt(0);
   return { ...acc, [firstLetter]: [...(acc[firstLetter] || []), cur] };
 }, {});
}
