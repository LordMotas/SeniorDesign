// set pin numbers:
#define LED01 = 3;
#define LED02 = 4;
#define LED03 = 5;
#define LED04 = 6;
#define LED05 = 7;
#define LED06 = 23;
#define LED07 = 24;
#define LED08 = 25;
#define LED09 = 26;
#define LED10 = 27;
#define LED11 = 28;
#define LED12 = 29;
#define LED13 = 30;
#define LED14 = 31;
#define LED15 = 32;
#define LED16 = 33;
#define LED17 = 34;
#define LED18 = 35;
#define LED19 = 36;
#define LED20 = 37;
#define LED21 = 38;

#define FLIPPERPIN 12;
#define LEDPIN 13 // Pin 13: Arduino has an LED connected on pin 13
#define ST01 39
#define ST02 40
#define ST03 41
#define ST04 42
#define ST05 43
#define ST06 44
#define ST07 45
#define ST08 46
#define ST09 47
#define ST10 48
#define ST11 49
#define ST12 50
#define ST13 51
#define ST14 52
#define ST15 53

#define SENSORPIN 8 // this value will need to change for each sensor
//Tanner: I think there are two more right?

int sensorState = 0, lastState=0;

void setup()
{
  //Initialize the flipper pin
  pinMode(FLIPPERPIN, OUTPUT);

  // initialize the LED pin as an output:
  pinMode(LEDPIN, OUTPUT);
  // initialize the switch target pins as inputs:
  pinMode(ST01, INPUT);
  pinMode(ST02, INPUT);
  pinMode(ST03, INPUT);
  pinMode(ST04, INPUT);
  pinMode(ST05, INPUT);
  pinMode(ST06, INPUT);
  pinMode(ST07, INPUT);
  pinMode(ST08, INPUT);
  pinMode(ST09, INPUT);
  pinMode(ST10, INPUT);
  pinMode(ST11, INPUT);
  pinMode(ST12, INPUT);
  pinMode(ST13, INPUT);
  pinMode(ST14, INPUT);
  pinMode(ST15, INPUT);
  pinMode(LED01, OUTPUT);
  pinMode(LED02, OUTPUT);
  pinMode(LED03, OUTPUT);
  pinMode(LED04, OUTPUT);
  pinMode(LED05, OUTPUT);
  pinMode(LED06, OUTPUT);
  pinMode(LED07, OUTPUT);
  pinMode(LED08, OUTPUT);
  pinMode(LED09, OUTPUT);
  pinMode(LED10, OUTPUT);
  pinMode(LED11, OUTPUT);
  pinMode(LED12, OUTPUT);
  pinMode(LED13, OUTPUT);
  pinMode(LED14, OUTPUT);
  pinMode(LED15, OUTPUT);
  pinMode(LED16, OUTPUT);
  pinMode(LED17, OUTPUT);
  pinMode(LED18, OUTPUT);
  pinMode(LED19, OUTPUT);
  pinMode(LED20, OUTPUT);
  pinMode(LED21, OUTPUT);

  // initialize the sensor pin as an input:
  pinMode(SENSORPIN, INPUT);
  digitalWrite(SENSORPIN, HIGH); // turn on the pullup

  Serial.begin(9600);

}

// if any of the switch targets are hit, turn on the led
void loop()
{
  //From switch target code:
  if(digitalRead(ST01)==1||digitalRead(ST02)==1||digitalRead(ST03)==1||digitalRead(ST04)==1||digitalRead(ST05)==1||digitalRead(ST06)==1||digitalRead(ST07)==1||digitalRead(ST08)==1||digitalRead(ST09)==1||digitalRead(ST10)==1||digitalRead(ST11)==1||digitalRead(ST12)==1||digitalRead(ST13)==1||digitalRead(ST14)==1||digitalRead(ST15)==1)
  {
    // turn LED on:
    digitalWrite(LEDPIN, HIGH); // use Tanner's serial function here in future to increment score
  }
  else
  {
    // turn LED off:
    digitalWrite(LEDPIN, LOW);
  }

  //From sensor state code:

  // read the state of the pushbutton value:
  sensorState = digitalRead(SENSORPIN);

  // check if the sensor beam is broken
  // if it is, the sensorState is LOW:
  if (sensorState == LOW) {
    // turn LED on:
    digitalWrite(LEDPIN, HIGH);
  }
  else {
    // turn LED off:
    digitalWrite(LEDPIN, LOW);
  }

  if (sensorState && !lastState) {
    Serial.println("Unbroken");
  }
  if (!sensorState && lastState) {
    Serial.println("Broken");
  }
  lastState = sensorState;

  //From the flipper code: (keeps the flipper active)
  digitalWrite(flipperPin, HIGH);

  //The sequence created before to light up all available LEDs
  /*
  digitalWrite(LED01, HIGH);
  delay(800);
  digitalWrite(LED01, LOW);
  digitalWrite(LED02, HIGH);
  delay(800);
  digitalWrite(LED02, LOW);
  digitalWrite(LED03, HIGH);
  delay(800);
  digitalWrite(LED03, LOW);
  digitalWrite(LED04, HIGH);
  delay(800);
  digitalWrite(LED04, LOW);
  digitalWrite(LED05, HIGH);
  delay(800);
  digitalWrite(LED05, LOW);
  digitalWrite(LED06, HIGH);
  delay(800);
  digitalWrite(LED06, LOW);
  digitalWrite(LED07, HIGH);
  delay(800);
  digitalWrite(LED07, LOW);
  digitalWrite(LED08, HIGH);
  delay(800);
  digitalWrite(LED08, LOW);
  digitalWrite(LED09, HIGH);
  delay(800);
  digitalWrite(LED09, LOW);
  digitalWrite(LED10, HIGH);
  delay(800);
  digitalWrite(LED10, LOW);
  digitalWrite(LED11, HIGH);
  delay(800);
  digitalWrite(LED11, LOW);
  digitalWrite(LED12, HIGH);
  delay(800);
  digitalWrite(LED12, LOW);
  digitalWrite(LED13, HIGH);
  delay(800);
  digitalWrite(LED13, LOW);
  digitalWrite(LED14, HIGH);
  delay(800);
  digitalWrite(LED14, LOW);
  digitalWrite(LED15, HIGH);
  delay(800);
  digitalWrite(LED15, LOW);
  digitalWrite(LED16, HIGH);
  delay(800);
  digitalWrite(LED16, LOW);
  digitalWrite(LED17, HIGH);
  delay(800);
  digitalWrite(LED17, LOW);
  digitalWrite(LED18, HIGH);
  delay(800);
  digitalWrite(LED18, LOW);
  digitalWrite(LED19, HIGH);
  delay(800);
  digitalWrite(LED19, LOW);
  digitalWrite(LED20, HIGH);
  delay(800);
  digitalWrite(LED20, LOW);
  digitalWrite(LED21, HIGH);
  delay(800);
  digitalWrite(LED21, LOW);
  delay(1600);
  */

}
