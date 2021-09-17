# ///////  Day 3: Intro to Conditional Statements  ///////
#!/bin/python3

import math
import os
import random
import re
import sys

# if n = odd, print 'Weird'
# if n = even & >=2 & <= 5, print 'Not Weird'
# if n = even & >= 6 & <= 20, print 'Weird'   
# if n = even & > 20, print 'Not Weird' 
# n > 1 and < 100 
# Print Weird if the number is weird; otherwise, print Not Weird.

n = int(input())

if (n % 2) == 0 and n >= 2 and n <= 5:
  print('Not Weird')
elif (n % 2) == 0 and n >= 6 and n <= 20:
  print('Weird')
elif (n % 2) == 1:
  print ('Weird')
elif (n % 2) == 2 and n > 20 and n < 100:
  print ('Not Weird') 
else:
  print('Not Weird')   


# if __name__ == '__main__':
#    N = int(input().strip())
