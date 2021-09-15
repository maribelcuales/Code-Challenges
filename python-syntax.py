# This is how to write a comment 

# The print() function === console.log in JS
# print a string 
print("Hello World!")


# We've defined the variable "meal" here to the name of the food we ate for breakfast!
meal = "An english muffin"
# Printing out breakfast
print("Breakfast:")
print(meal)

# Now update meal to be lunch!
meal = "Chicken Cordon Blue"
# Printing out lunch
print("Lunch:")
print(meal)

# Now update "meal" to be dinner
meal = "Rib Eye Steak"
# Printing out dinner
print("Dinner:")
print(meal)


# Errors: SyntaxError and NameError 
# SyntaxError
# print('This message has mismatched quote marks!")
# NameError 
# print(Abracadabra)

# int (var whole number) | float (var decimal) | literal (actual number) 
# Define the release and runtime integer variables below:
release_year = 2021
runtime = 180 

# Define the rating_out_of_10 float variable below: 
rating_out_of_10 = 9.5


# Calculations
# ZeroDivisionError => dividing a number by zero has no defined value, so Python treats this as an error condition
# prints our 1700.4642857142858
print(25 * 68 + 13 / 28)


# Changing Numbers
quilt_width = 8 
quilt_length = 12
# Prints "96"
print(quilt_width * quilt_length )

quilt_length = 8
# Prints "64"
print(quilt_width * quilt_length )


# Exponents => use **
# Calculation of squares for:
# 6x6 quilt => prints "36"
print(6 ** 2)
# 7x7 quilt => prints "49"
print(7 ** 2)
# 8x8 quilt => prints "64"
print(8 ** 2)

# How many squares for 6 people to have 6 quilts each that are 6x6? => prints "1296"
print(6 ** 2 * 6 * 6)


# Modulo Operator % 
# Gives the remainder of a  division. If the number is divisible, the result will be 0 
my_team = 27 % 4
# Prints "3"
print(my_team)

my_team = 28 % 4
# Prints "0"
print(my_team)


# String Concatenation
# str() => converts variables to strings
string1 = "The wind, "
string2 = "which had hitherto carried us along with amazing rapidity, "
string3 = "sank at sunset to a light breeze; "
string4 = "the soft air just ruffled the water and "
string5 = "caused a pleasant motion among the trees as we approached the shore, "
string6 = "from which it wafted the most delightful scent of flowers and hay."

# Define message below:
message = string1 + string2 + string3 + string4 + string5 + string6 
print(message)


# Plus Equals +=
total_price = 0

new_sneakers = 50.00
total_price += new_sneakers
# Additional items to buy
nice_sweater = 39.00
fun_books = 20.00
# Update total_price here: 
total_price += nice_sweater + fun_books
# Prints "The total price is 109.0"
print("The total price is", total_price)


# Multi-line Strings """ or '''
to_you = """
Stranger, if you passing meet me and desire to speak to me, why
  should you not speak to me?
And why should I not speak to you?
"""
print(to_you)


# Review Python - Hello World
my_age = 40
half_my_age = 40 / 2
greeting = "Hello there! I'm "
name = "Belle"
greeting_with_name = greeting + name + "."

print(my_age)  # Prints "40" 
print(half_my_age)  # Prints "20.0"
# Prints "Hello there! I'm Belle."
print(greeting_with_name) 


# ASCII Art initials  
print('M   M   CCC ')
print('MM MM  C   C')
print('MM MM  C')
print('M M M  C')
print('M   M  C')
print('M   M  C')
print('M   M   CCC ')


# CONTROL FLOW 
# Boolean Expressions



