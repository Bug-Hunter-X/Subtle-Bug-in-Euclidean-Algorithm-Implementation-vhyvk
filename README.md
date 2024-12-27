# Subtle Bug in Euclidean Algorithm Implementation

This repository demonstrates a subtle bug in a JavaScript implementation of the Euclidean algorithm. The algorithm aims to determine if two numbers are multiples of each other.  The original code has a flaw where it does not handle zero as an input correctly. The solution provided addresses this by adding explicit checks for zero input.

## Bug Description
The bug lies in the recursive function `foo()`. It doesn't handle cases where either 'a' or 'b' is 0, leading to infinite recursion or incorrect results. 

## Solution
The solution introduces checks to handle the zero input cases correctly. It explicitly handles these cases by returning 'false' if either 'a' or 'b' is 0 and 'true' if one of them is 0 and the other is 0. 