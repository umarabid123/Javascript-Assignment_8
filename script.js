//Q.1 Write a JS code to print numbers from 1 to 10

// for (let i=1; i<=10; i++){
//     console.log(i);
// }

//Q.2 Write a JS code to print Even numbers in given array

// let num = [11, 2, 14, 15, 17, 19, 20, 34];
// for(let i=0; i<num.length; i++){
//     if(num[i]%2==0) {
//         console.log(num[i]);
//     }
// }

// Q.3 Write a JS code to delete all occurrence of element in given array

// let num = [2, 4, 5 ,3 ,6 ,3, 4, 3];

// let deletionValue = 3;

// for(let i =0; i<num.length; i++){
//     if(num[i]==deletionValue){
//         num.splice(i,1);
//     }
// }
// console.log(num);

// Q.6 Write a JS code to find the no of digits in a number

// let number = 5680

// let numCount = 0

// while (number >= 1) {
//     number = number / 10
//     numCount++;
// }

// console.log("count -> ", numCount);

// Q.7 Write a JS code to calculate the sum of digits in a number

// let num = 6890

// let sum = 0
// let remainder=0;
// while(num>=1){
//     remainder=Math.floor(num%10)
//     sum=Math.floor(sum + remainder)
//     num=Math.floor(num/10)
// }
// console.log(sum);

// 8. Write a JS code to find the largest number in an array
// let num =[200, 400, 500, 789, 892, 926]
// let max = -Infinity

// for (let i = 0;  i< num.length; i++) {
//     if (max < num[i]) {
//         max = num[i]
//     }
// }

// console.log(max);

// Q.9  Write a JS code to print the Fibonacci series for a given value of N

// let firstValue = 0
// let secondValue = 1
// let n = parseInt(prompt("Enter the required value for series"))

// for (let index = 2; index < n; index++) {
//     let temp = firstValue
//      firstValue = secondValue
//     secondValue = secondValue + temp

//     console.log(secondValue);
// }


























// Q.12 Write a JS code for Binary search algorithm
// let nums = [1, 5, 8, 16, 32, 64, 128, 256, 512, 1024, 2048];
// let num = 64;

// let start = 0;
// let end = nums.length - 1;

// let ansLocation = -1;

// while (start <= end) {
//   let mid = Math.floor((start + end) / 2);

//   if (nums[mid] == num) {
//     ansLocation = mid;
//     break;
//   }

//   if (nums[mid] < num) {
//     start = mid + 1;
//   } else {
//     end = mid - 1;
//   }
// }

// console.log("At Index", ansLocation);
