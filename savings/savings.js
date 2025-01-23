// //Input collection: user enter the monthly savings amount and the number of the years ->
// //1. Prompt the user with "Enter the monthly savings amount". 2.Store the entered value in a variable. 3. Prompt the user with: "Enter the number of years". 4. Store the entered value in variable.

// function calculateSavings() {
//   const monthlySavings = document.getElementById("monthly-savings").value;
//   const years = document.getElementById("years").value;

//   //Calculation: compute the total savings by multiplying the monthly savings by the total number of years ->
//   //1. Total number of month is calculated by multiplying the years by 12. 2. Total savings is calculated by multiplying the monthly savings by the total number of month.

//   const totalMonths = years * 12;
//   const totalSavings = totalMonths * monthlySavings;

//   //Output result: Display the total savings to the user ->
//   // 1. alert() is used to display a result to the user.

//   document.getElementById(
//     "result"
//   ).textContent = `Your total savings after ${years} years will be: ${totalSavings.toFixed(
//     2
//   )} CHF`;
// }
