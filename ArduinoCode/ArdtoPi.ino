/*
//Original Code
void setup() {
  // put your setup code here, to run once:  
  //Setup the baud rate to be 9600 to match the Raspberry Pi
  Serial.begin(9600);
  
  //Setup interrupts for the Arduino
  pinMode(13, OUTPUT);     // Pin 13 is output to which an LED is connected
  digitalWrite(13, LOW);   // Make pin 13 low, switch LED off
  pinMode(2, INPUT);	   // Pin 2 is input to which a switch is connected = INT0
  pinMode(3, INPUT);	   // Pin 3 is input to which a switch is connected = INT1
  attachInterrupt(0, func1, RISING);
  attachInterrupt(1, func2, RISING);
}
*/

//First example
const byte ledPin = 13;
const byte interruptPin = 2;
volatile byte state = LOW;

void setup() {
  pinMode(ledPin, OUTPUT);
  pinMode(interruptPin, INPUT_PULLUP);
  attachInterrupt(digitalPinToInterrupt(interruptPin), blink, CHANGE);
}

void loop() {
  digitalWrite(ledPin, state);
}

void blink() {
  state = !state;
}

/*
//Second example
const int buttonPin = 2; // the number of the pushbutton pin 
const int ledPin = 13; // the number of the LED pin

// variables will change: 
volatile int buttonState = 0; // variable for reading the pushbutton status 

void setup() { 
// initialize the LED pin as an output: 
pinMode(ledPin, OUTPUT); 
// initialize the pushbutton pin as an input: 
pinMode(buttonPin, INPUT); 
// Attach an interrupt to the ISR vector 
attachInterrupt(0, pin_ISR, CHANGE); 
} 

void loop() { 
// Nothing here! 
}
 
void pin_ISR() { 
buttonState = digitalRead(buttonPin); 
digitalWrite(ledPin, buttonState); 
}
*/
