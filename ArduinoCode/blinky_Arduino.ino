//#define LEDPIN 13
//  // Pin 13: Arduino has an LED connected on pin 13
//
//#define SENSORPIN 10
//
//// variables will change:
//int sensorState = 0, lastState=0;         // variable for reading the pushbutton status

int led01 = 3;
int led02 = 4;
int led03 = 5;
int led04 = 6;
int led05 = 7;
int led06 = 23;
int led07 = 24;
int led08 = 25;
int led09 = 26;
int led10 = 27;
int led11 = 28;
int led12 = 29;
int led13 = 30;
int led14 = 31;
int led15 = 32;
int led16 = 33;
int led17 = 34;
int led18 = 35;
int led19 = 36;
int led20 = 37;
int led21 = 38;

void setup(){

//  // initialize the LED pin as an output:
//  pinMode(LEDPIN, OUTPUT);
//  // initialize the sensor pin as an input:
//  pinMode(SENSORPIN, INPUT);
//  digitalWrite(SENSORPIN, HIGH); // turn on the pullup
//
//  Serial.begin(9600);

  pinMode(led01, OUTPUT);
  pinMode(led02, OUTPUT);
  pinMode(led03, OUTPUT);
  pinMode(led04, OUTPUT);
  pinMode(led05, OUTPUT);
  pinMode(led06, OUTPUT);
  pinMode(led07, OUTPUT);
  pinMode(led08, OUTPUT);
  pinMode(led09, OUTPUT);
  pinMode(led10, OUTPUT);
  pinMode(led11, OUTPUT);
  pinMode(led12, OUTPUT);
  pinMode(led13, OUTPUT);
  pinMode(led14, OUTPUT);
  pinMode(led15, OUTPUT);
  pinMode(led16, OUTPUT);
  pinMode(led17, OUTPUT);
  pinMode(led18, OUTPUT);
  pinMode(led19, OUTPUT);
  pinMode(led20, OUTPUT);
  pinMode(led21, OUTPUT);
}

void loop(){
//    // read the state of the pushbutton value:
//  sensorState = digitalRead(SENSORPIN);
//
//  // check if the sensor beam is broken
//  // if it is, the sensorState is LOW:
//  if (sensorState == LOW) {
//    // turn LED on:
//    digitalWrite(LEDPIN, HIGH);
//  }
//  else {
//    // turn LED off:
//    digitalWrite(LEDPIN, LOW);
//  }
//
//  if (sensorState && !lastState) {
//    Serial.println("Unbroken");
//  }
//  if (!sensorState && lastState) {
//    Serial.println("Broken");
//  }
//  lastState = sensorState;

  digitalWrite(led01, HIGH);
  delay(800);
  digitalWrite(led01, LOW);
  digitalWrite(led02, HIGH);
  delay(800);
  digitalWrite(led02, LOW);
  digitalWrite(led03, HIGH);
  delay(800);
  digitalWrite(led03, LOW);
  digitalWrite(led04, HIGH);
  delay(800);
  digitalWrite(led04, LOW);
  digitalWrite(led05, HIGH);
  delay(800);
  digitalWrite(led05, LOW);
  digitalWrite(led06, HIGH);
  delay(800);
  digitalWrite(led06, LOW);
  digitalWrite(led07, HIGH);
  delay(800);
  digitalWrite(led07, LOW);
  digitalWrite(led08, HIGH);
  delay(800);
  digitalWrite(led08, LOW);
  digitalWrite(led09, HIGH);
  delay(800);
  digitalWrite(led09, LOW);
  digitalWrite(led10, HIGH);
  delay(800);
  digitalWrite(led10, LOW);
  digitalWrite(led11, HIGH);
  delay(800);
  digitalWrite(led11, LOW);
  digitalWrite(led12, HIGH);
  delay(800);
  digitalWrite(led12, LOW);
  digitalWrite(led13, HIGH);
  delay(800);
  digitalWrite(led13, LOW);
  digitalWrite(led14, HIGH);
  delay(800);
  digitalWrite(led14, LOW);
  digitalWrite(led15, HIGH);
  delay(800);
  digitalWrite(led15, LOW);
  digitalWrite(led16, HIGH);
  delay(800);
  digitalWrite(led16, LOW);
  digitalWrite(led17, HIGH);
  delay(800);
  digitalWrite(led17, LOW);
  digitalWrite(led18, HIGH);
  delay(800);
  digitalWrite(led18, LOW);
  digitalWrite(led19, HIGH);
  delay(800);
  digitalWrite(led19, LOW);
  digitalWrite(led20, HIGH);
  delay(800);
  digitalWrite(led20, LOW);
  digitalWrite(led21, HIGH);
  delay(800);
  digitalWrite(led21, LOW);
  delay(1600);
}
