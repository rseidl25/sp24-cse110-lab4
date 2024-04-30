Part 2:

1.  Line 12 prints '3' to the console. This is because line 12 prints the value of i to the console, and after the for loop is executed, the iterator variable i has a value of 3. 
2.  Line 13 prints '150' to the console. This is because line 13 prints the value of discountedPrice to the console. In this program, discountedPrice is the value of the price at the ith index of the discounted array multiplied by (1-discount), where discount, in this case is (0.5). So, line 13 prints the product of the ith value of the discounted array where i = 2, 300, and the difference between 1 and discount, 0.5, which equals 150.
3.  Line 14 prints '150' to the console. This is because line 13 prints the value of finalPrice to the console. The value of finalPrice is determined by rounding the product of the discountedPrice of the ith price in the discounted array and 100, and then dividing this rounded product by 100. So, line 14 prints '150' because it rounds (150 * 100) to 15000 and then divides this price by 100 to get 150.
4.  This function returns '[50, 100, 150]'. The for loop pushes each of the final prices determined from the initial values in the prices array to the discounted array. After pushing all values from the prices array, the code returns the discounted array (which is half of all initial values since the discount is 0.5).
5. The code at Line 12 returns an ERROR! We used the let keyword to declare the i variable in the for loop, so it can only be accessed within this for loop. Thus, we get an error on Line 12 outside the for loop because the i variable cannot be accessed in this scope.
6. The code at Line 13 returns an ERROR! (similar reason to question 5) --> We used the let keyword to declare the discountedPrice variable in the for loop, so it can only be accessed within this for loop. Thus, we get an error on Line 13 outside the for loop because the discountedPrice variable cannot be accessed in this scope.
7. The code at Line 14 prints '150' to the console. This is because line 13 prints the value of finalPrice to the console. The value of finalPrice is determined by rounding the product of the discountedPrice of the ith price in the discounted array and 100, and then dividing this rounded product by 100. So, line 14 prints '150' because it rounds (150 * 100) to 15000 and then divides this price by 100 to get 150. Line 14 doesn't cause an error like Lines 12 and 13 because the finalPrice variable is declared using the let keyword in the same scope.
8. This function returns '[50, 100, 150]'. The for loop pushes each of the final prices determined from the initial values in the prices array to the discounted array. After pushing all values from the prices array, the code returns the discounted array (which is half of all initial values since the discount is 0.5). Again, since the discounted array is declared using the let keyword in the same scope as the return statement, the function does not throw an error.
9. The code at Line 11 returns an ERROR! We used the let keyword to declare the i variable in the for loop, so it can only be accessed within this for loop. Thus, we get an error on Line 12 outside the for loop because the i variable cannot be accessed in this scope.
10. The code at Line 12 prints '3' to the console. This is because Line 12 prints the value of the length variable to the console, and length is declared using the const keyword in the same scope and initialized to the value of the initial prices array: 3.
11. This function returns '[50, 100, 150]'. The for loop pushes each of the final prices determined from the initial values in the prices array to the discounted array. After pushing all values from the prices array, the code returns the discounted array (which is half of all initial values since the discount is 0.5). Like the let keyword, since the discounted array is declared using the const keyword in the same scope as the return statement, the function does not throw an error.
12. A) student.name    
    B) student['Grad Year']   
    C) student.greeting()   
    D) student['Favorite Teacher'].name   
    E) student.courseLoad[0]
13. A) '3' + 2: '32' --> integers map to their exact string representation   
    B) '3' - 2: '1' --> 3 is interpreted as an int value   
    C) 3 + null: '3' --> null is interpreted as a 0   
    D) '3' + null: '3null' --> the + concatenates the string 'null' to the end of '3'   
    E) true + 3: '4' --> true is mapped to int value 1   
    F) false + null: 0 --> false and null both mapped to 0   
    G) '3' + undefined: '3undefined' --> the + concatenates the string 'undefined' to the end of '3'   
    H) '3' - undefined: 'NaN' --> cannot subtract 'NaN' value of undefined from 3
14. A) '2' > 1: 'true' --> '2' maps to int value 2  
    B) '2' < '12': 'false' --> strings are compared lexicographically ('2' > '1')   
    C) 2 == '2': 'true' --> '2' maps to int value 2   
    D) 2 === '2': 'false' --> the === operator compares value and type, number != string   
    E) true == 2: 'false' --> true is mapped to int value 1   
    F) true === Boolean(2): 'true' --> true has the same type and value as Boolean(2) (both booleans, both 'true' value)
15. The '==' operator only compares value (and performs type conversions if operands are different types), while the '===' operator compares value and type (without performing type conversions).
16. (see 'part2-question16.js')
17. The function is called on Line 13 with the parameters '[1,2,3]' for array and 'doSomething' for callback. We start moving through the modifyArray function on Line 2, as the newArr array variable is declared using the const keyword and initialized as empty. Next, we move into the for loop which iterates 3 times since the length of array ('[1,2,3]') is 3. For each iteration of the loop, the ith value of array is passed into the callback ('doSomething') function, multiplied by 2 before being returned by Line 10, and pushed to 'newArr' on Line 4. Once the for loop is executed, 'modifyArray' returns 'newArr' with the newly pushed values, which are the starting 3 array values '[1,2,3]' multiplied by 2: '[2,4,6]'.
18. (see 'part2-question18.js')
19. 1
    4
    3
    2
