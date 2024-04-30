1. The bug is that the calculateSum() function concatenates 'num1' and 'num2' into a string ('num1num2') instead of adding up their number values ('(num1 + num2)').
2. I would fix this by calling parseInt() on 'num1' and 'num2' in calculateSum() so that Line 11 adds their number values instead of their string values. 
   The new line would be: 
   let result = parseInt(num1) + parseInt(num2)
