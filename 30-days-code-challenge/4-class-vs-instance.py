# ///////  Day 4: Class vs Instance  ///////

# write a Person with an instance variable age, and a constructor that takes an integer, initialAge, as a parameter 
# constructor must assign initialAge to age if argument passed is not negative
# if initialAge parameter is negative, set age = 0 and print 'Age is not valid' 

# yearPasses() should increase the  instance variable by .
# amIOld() should perform the following conditional actions:
## If age < 13, print 'You are young.'
## If age > 13 and < 18, print 'You are a teenager.'
## Otherwise, print You are old..

class Person:
    def __init__(self,initialAge):
        # Add some more code to run some checks on initialAge
        if initialAge > 0: 
          self.initialAge = initialAge
        else:
          self.initialAge = 0
          print('Age is not valid, setting age to 0.')

    def amIOld(self):
        # Do some computations in here and print out the correct statement to the console
        if self.initialAge < 13:
          print('You are young.')
        elif self.initialAge < 18:
          print('You are a teenager.')
        else:
          print('You are old.') 

    def yearPasses(self):
        # Increment the age of the person in here
        self.initialAge += 1


t = int(input())
for i in range(0, t):
    age = int(input())         
    p = Person(age)  
    p.amIOld()
    for j in range(0, 3):
        p.yearPasses()       
    p.amIOld()
    print("")