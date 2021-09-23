#!/bin/python3

# given an integer 
# print its first 10 multiples, each multiple n x i (where 1 < i < 10) 
# each multiple be printed on a new line: n x i = result 

import math
import os
import random
import re
import sys

n = int(input())
i = 1 

while i < 11:
  result = n * i
  multipleResult = '{} x {} = {}'
  print(multipleResult.format(n, i, result))
  i += 1 
  


#if __name__ == '__main__':
#    n = int(input().strip())
