/*
Copyright 2011 Lex.V.Talionis at gmail
This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
*/
#include <PinChangeInt.h>
#include <PinChangeIntConfig.h>
 
#define PIN 15  // the pin we are interested in
volatile byte burp=0;    // a counter to see how many times the pin has changed
byte cmd=0;     // a place to put our serial data
 
void setup() {
  Serial.begin(9600);
  Serial.print("PinChangeInt test on pin ");
  Serial.print(PIN);
  Serial.println();
  pinMode(PIN, INPUT);     //set the pin to input
  digitalWrite(PIN, HIGH); //use the internal pullup resistor
  PCintPort::attachInterrupt(PIN, burpcount,CHANGE); // attach a PinChange Interrupt to our pin on the rising edge
// (RISING, FALLING and CHANGE all work with this library)
// and execute the function burpcount when that pin changes
  }
 
void loop() {
  cmd=Serial.read();  
  if (cmd=='p')
  {
    Serial.print("burpcount:\t");
    Serial.println(burp, DEC);
  }
  cmd=0;
}
 
void burpcount()
{
  burp++;
}

/*void setup()
{
  Serial.begin(9600);
  InitialiseIO();
  InitialiseInterrupt();
}

void loop() {
  // put your main code here, to run repeatedly:
  //Interrupts should trigger if hardware happens
  //Serial.print("score 300 \n");
  //Serial.print("level \n");
  //Serial.print("balls 1 \n");
  //Serial.print("timer 300000 \n");
  //Serial.print("timed true \n");
  //Serial.print("timed false \n");
  //Serial.print("objec Kill the Basilisk! \n");
}

void InitialiseIO(){
  pinMode(A0, INPUT);	   // Pin A0 is input to which a switch is connected
  digitalWrite(A0, HIGH);   // Configure internal pull-up resistor
  pinMode(A1, INPUT);	   // Pin A1 is input to which a switch is connected
  digitalWrite(A1, HIGH);   // Configure internal pull-up resistor
  pinMode(A2, INPUT);	   // Pin A2 is input to which a switch is connected
  digitalWrite(A2, HIGH);   // Configure internal pull-up resistor
}

void InitialiseInterrupt(){
  cli();		// switch interrupts off while messing with their settings  
  PCICR =0x02;          // Enable PCINT1 interrupt
  PCMSK1 = 0b00000111;
  sei();		// turn interrupts back on
}

ISR(PCINT1_vect) {    
  // Interrupt service routine. Every single PCINT8..14 (=ADC0..5) change
  // will generate an interrupt: but this will always be the same interrupt routine
  //Pin A0 is the one that triggered (it was high)
  if (digitalRead(A0)==0)  Serial.println("A0");
  //Pin A1 is the one that triggered
  if (digitalRead(A1)==0)  Serial.println("A1");
  //Pin A2 is the one that triggered
  if (digitalRead(A2)==0)  Serial.println("A2");
}*/
