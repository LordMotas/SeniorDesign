// set pin numbers:
const int ledPin = 13;                // the number of the led
const int st01 =  39;      // the number of the switch target
const int st02 =  40;      // the number of the switch target
const int st03 =  41;      // the number of the switch target
const int st04 =  42;      // the number of the switch target
const int st05 =  43;      // the number of the switch target
const int st06 =  44;      // the number of the switch target
const int st07 =  45;      // the number of the switch target
const int st08 =  46;      // the number of the switch target
const int st09 =  47;      // the number of the switch target
const int st10 =  48;      // the number of the switch target
const int st11 =  49;      // the number of the switch target
const int st12 =  50;      // the number of the switch target
const int st13 =  51;      // the number of the switch target
const int st14 =  52;      // the number of the switch target
const int st15 =  53;      // the number of the switch target

void setup()
{
  // initialize the LED pin as an output:
  pinMode(ledPin, OUTPUT);
  // initialize the switch target pins as inputs:
  pinMode(st01, INPUT);
  pinMode(st02, INPUT);
  pinMode(st03, INPUT);
  pinMode(st04, INPUT);
  pinMode(st05, INPUT);
  pinMode(st06, INPUT);
  pinMode(st07, INPUT);
  pinMode(st08, INPUT);
  pinMode(st09, INPUT);
  pinMode(st10, INPUT);
  pinMode(st11, INPUT);
  pinMode(st12, INPUT);
  pinMode(st13, INPUT);
  pinMode(st14, INPUT);
  pinMode(st15, INPUT);

}

// if any of the switch targets are hit, turn on the led
void loop()
{
  if(digitalRead(st01)==1||digitalRead(st02)==1||digitalRead(st03)==1||digitalRead(st04)==1||digitalRead(st05)==1||digitalRead(st06)==1||digitalRead(st07)==1||digitalRead(st08)==1||digitalRead(st09)==1||digitalRead(st10)==1||digitalRead(st11)==1||digitalRead(st12)==1||digitalRead(st13)==1||digitalRead(st14)==1||digitalRead(st15)==1)
  {
    // turn LED on:
    digitalWrite(ledPin, HIGH); // use Tanner's serial function here in future to increment score
  } 
  
  else 
  {
    // turn LED off:
    digitalWrite(ledPin, LOW);
  }

}
