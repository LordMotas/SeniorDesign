# The documentation states that the maximum limit is 72 characters --> X

# Import the needed libraries
import serial
import time

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
isTimed = false
timeLimit = 300000 # 300000 milliseconds = 5 minutes
lowestScore = 0
gameOver = false

# Read the high scores from the file and store them in an array
file = open("highScores.txt","w")
highScoreArray = []

i = 0
# Read in each line of the file
for line in file:
    highScoreArray.append(line[6:])
    highScoreArray[i].append(line[:6])
    lowestScore = line[6:]
    i = i + 1
    
ser = serial.Serial("/dev/ttyACM0",9600)

while 1:
    # Receive input from an Arduino
    rcv = ser.readline()
    if rcv != '':
        # Perform functions based on what the input is
        print(rcv)

    # If the game is over
    if gameOver == true:
        flash_game_over()
        # Check if they are on the high score board
        if score > lowestScore:
            name = ""
            # Have them enter their name (5 characters)


            # Put the scores back in the file
            i = 0
            hasEntered = false
            for element in highScoreArray:
                if score > element and hasEntered == false:
                    hasEntered = true
                    file.write(name + " " + score + "\n")
                    file.write(highScoreArray[i])
        exit
    else:
        # Continue with the game



# Flash "Game Over" on the screen for a few seconds before continuing
def flash_game_over():
    for x in xrange(0,5):
        # Print "Game Over" to the screen (through glade)

        time.sleep(1)
        # Remove it from the screen

        time.sleep(1)
