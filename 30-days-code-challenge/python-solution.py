# ///////  Day 0: Hello, World  ///////
# Read a full line of input from stdin and save it to our dynamically typed variable, input_string.
input_string = input()

# Print a string literal saying "Hello, World." to stdout.
print('Hello, World.')

# TODO: Write a line of code here that prints the contents of input_string to stdout.
print(input_string)


# ///////  Day 1: Data Types  ///////
i = 4
d = 4.0
s = 'HackerRank '
# Declare second integer, double, and String variables.
a = None
b = None
c = None
# Read and save an integer, double, and String to your variables.
a = int(input())
b = float(input())
c = str(input())

# a = 12
# b = 4.0
# c = 'is the best place to learn and practice coding!'

# Print the sum of both integer variables on a new line.
print(i + a)

# Print the sum of the double variables on a new line.
print(d + b)

# Concatenate and print the String variables on a new line
# The 's' variable above should be printed first.
print(s + c)


# ///////  Day 2: Operators  ///////

#!/bin/python3
import math
import os
import random
import re
import sys

#
# Complete the 'solve' function below.
#
# The function accepts following parameters:
#  1. DOUBLE meal_cost
#  2. INTEGER tip_percent
#  3. INTEGER tax_percent
#

def solve(meal_cost, tip_percent, tax_percent):
    # Write your code here
    meal_cost = float(input())
    tip_percent = int(input())
    tax_percent = int(input())
     
    calcualted_tip = meal_cost * tip_percent / 100
    calculated_tax = meal_cost * tax_percent / 100
    total_cost = int(round(meal_cost + calcualted_tip + calculated_tax))
    
    return total_cost

print(solve(12.00, 20, 8))

    
#if __name__ == '__main__':
#    meal_cost = float(input().strip())

#    tip_percent = int(input().strip())

#    tax_percent = int(input().strip())

#    solve(meal_cost, tip_percent, tax_percent)
