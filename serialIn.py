import serial
import time
import string

ser = serial.Serial('/dev/ttyACM0',9600)
var = raw_input("Enter the number of times the LED should flash ");

ser.write(var)

while 1:
    rcv = ser.readline()
    if rcv != '':
        print(rcv)
        var = raw_input("Enter the number of times the LED should flash ");
        ser.write(var)
