// This code simply sets the appropriate pin high for the relay.
// This enables the flippers to be used.

const int flipperPin = 12;

void setup() {
  pinMode(flipperPin, OUTPUT);

}

void loop() {
  digitalWrite(flipperPin, HIGH);

}
