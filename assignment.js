//Question 1: Create a function with a function name
// printsum() and print the sum of an array.
function printsum (array) {
    let totalSum=0;
    for(let i = 0; i< array.length; i++){
        totalSum +=array[i];
    }
    return totalSum
}
// checking if my function works rightly
console.log(printsum(10,20,30))

//Question 2: Alice and Bob each created one problem for hackerrank, a viewer rates the challenges, awarding points from a scale of 1-100 for three categories: problem clarity, originality and difficulty.the rating for alice’s challenge is the triplet a=(a[0], a[1], a[2]) and the rating for Bob's challenge is the triplet b=(b[0], b[1], b[2]). The task is to find their different comparison points by comparing a[0] to b[0], a[1] to b[1], a[2] to b[
    function compareTriplets(a, b) {
        let fval = 0;
        let sval = 0;
        a.filter((_value, index)=>{
            if (a[index] > b[index]) {
                fval++;
            } else if (a[index] < b[index]) {
                sval++;
            }
        });
        return [fval, sval];
    }
    //Question 3: Given an array of integers, calculate the ratio of its elements that are positive, negative and zero. Print the decimal value of each fraction on a new line with places after the decimalThere are positive numbers, negative numbers, and zero in the array.
<script>
 
 // Javascript program to find the
 // ratio of positive, negative, and
 // zero elements in the array.
  
 // Function to find the ratio of
 // positive, negative, and zero elements
 function positiveNegativeZero(arr)
 {
      
     // Store the array length into
     // the variable len.
     let length arr.length;
  
     // Initialize the postiveCount,
     // negativeCount, and zeroCountby
     // 0 which will count the total number
     // of positive, negative and zero elements
     let positiveCount = 0;
     let negativeCount = 0;
     let zeroCount = 0;
  
     // Traverse the array and count the
     // total number of positive, negative,
     // and zero elements.
     for(let i = 0; i < length; i++)
     {
         if (arr[i] > 0)
         {
             positiveCount++;
         }
         else if(arr[i] < 0)
         {
             negativeCount++;
         }
         else if (arr[i] == 0)
         {
             zeroCount++;
         }
     }
 // Print the ratio of positive,
    // negative, and zero elements
    // in the array up to four decimal places.
    document.write((positiveCount / len).toFixed(4) + " ");
    document.write((negativeCount / len).toFixed(4) + " ");
    document.write((zeroCount / len).toFixed(4));
    document.write("<br>");
}
 
// Driver Code.
 
// Test Case 1:
let a1 = [ 2, -1, 5, 6, 0, -3 ];
positiveNegativeZero(a1);
 
// Test Case 2:
let a2 = [ 4, 0, -2, -9, -7, 1 ];
positiveNegativeZero(a2);
 
// This code is contributed Babarimisa Ifeoluwa
 
</script>
//Creating a function with a function name firstFunction() and return the sum of two integers.
function sumTriple (x, y) {
    if (x == y) {
      return 3 * (x + y);
      } 
     else
     {
      return (x + y);
     }
   }
  console.log(sumTriple(10, 20));
  console.log(sumTriple(10, 10));