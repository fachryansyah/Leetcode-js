# Coding Exercise (Easy): Sorted Squared Array
## Question
You are given an array of Integers in which each subsequent value is not less than the previous value. Write a function that takes this array as an input and returns a new array with the squares of each number sorted in ascending order.

## Remember
You can solve this question in multiple ways.

## Think about the following -
- What would be the brute force way of solving this question ? What would be the Time and Space complexity of this approach?
- Is there a better way to solve this with a more optimum Time complexity than the Brute force way ?

## Test Case
```
Input: 1,2,3,4,5
Expected Output: 1,4,9,16,25
Actual Output: 1,4,9,16,25

Input: -5,-3,-1,0,2,4
Expected Output: 0,1,4,9,16,25
Actual Output: 0,1,4,9,16,25

Input: 0,0,0,0,0
Expected Output: 0,0,0,0,0
Actual Output: 0,0,0,0,0

Input: 10
Expected Output: 100
Actual Output: 100

Input: 
Expected Output: 
Actual Output: 

Input: -2,0,3,5
Expected Output: 0,4,9,25
Actual Output: 0,4,9,25
```