# The documentation states that the maximum limit is 72 characters --> X

# Import the needed libraries
import serial
import time
import sys

# Constants:
# MAX_LEVEL -> The total number of levels that will be used in the game

MAX_LEVEL = 7

# Global variables:
# score -> Player score
# lives -> Remaining Player lives
# currentLevel -> The level that is currently being played
# isTimed -> Whether a time limit is in play or not
# timeLimit -> The amount of time that is left in the level
# lowestScore -> The threshold score to beat to enter a high score
# gameOver -> Whether the game is over or not

score = 0
lives = 5
currentLevel = 1
isTimed = False
timeLimit = 300000 # 300000 milliseconds = 5 minutes
lowestScore = sys.maxint
gameOver = False

#Functions that are used:
# Flash "Game Over" on the screen for a few seconds before continuing
def flash_game_over():
    for x in xrange(0,5):
        # Print "Game Over" to the screen (through glade)
        print "The Game is over!!!"
        time.sleep(1)
        # Remove it from the screen

        time.sleep(1)

def addToScore(value):
    global score
    score = score + int(value)

def incrementLevel():
    global currentLevel
    if currentLevel == MAX_LEVEL:
        global gameOver
        gameOver = True
    currentLevel = currentLevel + 1

# Read the high scores from the file and store them in an array
file = open("highScores.txt","rw")
highScoreArray = []

# Read in each line of the file
for line in file:
    highScoreArray.append(line[:-1])
    if lowestScore > int(line[6:]):
        lowestScore = int(line[6:])

ser = serial.Serial("/dev/ttyACM0",9600)

while gameOver == False:
    # Receive input from an Arduino
    rcv = ser.readline()
    if rcv != '':
        # Perform functions based on what the input is
        if rcv[:5] == "level":
            incrementLevel()
            print "Level is now", currentLevel
        elif rcv[:5] == "score":
            print rcv[6:-1]
            addToScore(rcv[6:-1])
            print "Score is now", score
            
    # If the game is over
    if gameOver == True:
        flash_game_over()
        # Check if they are on the high score board
        print "Your score was: ", score
        time.sleep(5)
        if score > lowestScore:
            print "You achieved a high score!"
            time.sleep(5)
            # Have them enter their name (5 characters)
            name = input("Enter your name (5 characters max): ")
            # Put the scores back in the file
            hasEntered = false
            for element in highScoreArray:
                if score > element and hasEntered == false:
                    hasEntered = true
                    file.write(name[:5] + " " + score + "\n")
                    file.write(element)
        exit
    #else:
        # Continue with the game

