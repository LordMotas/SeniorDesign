#!/usr/bin/env python
# The documentation states that the maximum limit is 72 characters --> X

# Import the needed libraries
import serial
import time
import sys

# Necessary for web browser interaction
import webbrowser
import os

import pygame
pygame.mixer.init()
pygame.mixer.music.load("menu.mp3")
pygame.mixer.music.play()
pygame.mixer.music.set_volume(1.0)

#Open the local file to display on the monitor
webbrowser.open("http://localhost/SeniorDesign/index.html", new=0)

# Constants:
# MAX_LEVEL -> The total number of levels that will be used in the game

MAX_LEVEL = 7

# Global variables:
# score -> Player score
# lives -> Remaining Player lives
# currentLevel -> The level that is currently being played
# isTimed -> Whether a time limit is in play or not
# timeLimit -> The amount of time that is left in the level

score = 0
balls = 3
currentLevel = 1
isTimed = False
timeLimit = 300000 # 300000 milliseconds = 5 minutes
objective = "Find the Sorceror's Stone!"
movie = False
additionalObjec = ""

#Dictionary holding level data
def levelDictionary(value):
    return {
        2:setLevelTwo(),
        3:setLevelThree(),
        4:setLevelFour(),
        5:setLevelFive(),
        6:setLevelSix(),
        7:setLevelSeven()
    }[value]

#Functions used by the Dictionary
def setLevelTwo():
    isTimed = False
    objective = "Kill the Basilisk with the Sword and destroy the Diary!"

def setLevelThree():
    isTimed = True
    objective = "Defend yourself against the Dementors!"

def setLevelFour():
    isTimed = False
    objective = "Win the Triwizard Tournament!"
    additionalObject = "(Dragon)"

def setLevelFive():
    isTimed = False
    objective = "Defeat the Death Eaters and preserve the Prophecy!"

def setLevelSix():
    isTimed = False
    objective = "Capture the Golden Snitch!"

def setLevelSeven():
    isTimed = False
    objective = "Assemble the Deathly Hallows!"
    additionalObjec = "(Invisibility Cloak)"

#Functions that are used:
def addToScore(value):
    global score
    score = score + int(value)

def incrementLevel():
    global currentLevel
    currentLevel = currentLevel + 1
    movie = True
    #If statements here to determine music to be played
    levelDictionary(currentLevel)

def addToBalls(value):
	global balls
	balls = balls + int(value)

def updateTime(value):
	global timeLimit
	timeLimit = int(value)

def changeTimerState(value):
	global isTimed
	isTimed = value

def changeObjective(value):
	global objective
	objective = value

# Read the high scores from the file and store them in an array
#file = open("highScores.txt","rw")
#highScoreArray = []

# Read in each line of the file
#for line in file:
    #highScoreArray.append(line[:-1])
    #if lowestScore > int(line[6:]):
        #lowestScore = int(line[6:])
#file.close()

ser = serial.Serial("/dev/ttyACM0",9600)

while True:
    # Receive input from an Arduino
    rcv = ser.readline()
    if rcv != '':
        # Perform functions based on what the input is
        if rcv[:5] == "level":
            incrementLevel()
            #print "Level is now", currentLevel
        elif rcv[:5] == "score":
            addToScore(rcv[6:-1])
            #print "Score is now", score
	elif rcv[:5] == "balls":
	    addToBalls(rcv[6:-1])
	    #print "You now have ", balls, " balls left"
	elif rcv[:5] == "timed":
	    changeTimerState(rcv[6:-1])
	    #print "The timer status is now ", isTimed
	elif rcv[:5] == "timer":
	    updateTime(rcv[6:-1])
	    #print "The timer value is now ", timeLimit
	#elif rcv[:5] == "objec":
	    #changeObjective(rcv[6:-1])
	    #print "The objective has been changed to ", objective
	else:
	    print "Unrecognized change"

	#Gather data based on every kind of interrupt the Arduino can do
	#Print out the data to the data.txt file
	file = open("data.txt", "w")
	file.write("Score " + str(score) + " Level " + str(currentLevel) + " Balls " + str(balls) + " hasTime " + str(isTimed) + " Time " + str(timeLimit) + " " + str(movie) + " Obj " + objective + additionalObjec)
    if movie == True:
        movie = False
	file.close()
