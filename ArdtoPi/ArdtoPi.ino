/*void setup() {
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

const byte ledPin = 13;
const byte interruptPin = 2;
volatile byte state = LOW;

void setup() {
  // put your setup code here, to run once:
  //Setup interrupts
  pinMode(ledPin, OUTPUT);
  pinMode(interruptPin, INPUT_PULLUP);
  attachInterrupt(digitalPinToInterrupt(interruptPin), blink, CHANGE);
  
  //Setup the baud rate to be 9600 to match the Raspberry Pi
  Serial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:
  delay(5000);
  Serial.print("score 100\n");
  delay(5000);
  Serial.print("score 1000\n");
  delay(5000);
  Serial.print("score -900\n");
  delay(5000);
  Serial.print("level 1\n");
  digitalWrite(ledPin, state);
}

void blink() {
  state = !state;
}
