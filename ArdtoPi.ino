int numTimes = 0;

void setup() {
  // put your setup code here, to run once:
  pinMode(LED_BUILTIN, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:
  if (Serial.available()) {
    delay(500);
    light(Serial.read() - '0');
    Serial.print("You have done this: ");
    Serial.print(numTimes, DEC);
    Serial.print(" times.\n");
  }
  delay(500);
}

void light(int n) {
  for (int i = 0; i < n; i++) {
    digitalWrite(LED_BUILTIN, HIGH);
    delay(100);
    digitalWrite(LED_BUILTIN, LOW);
    delay(100);
  }
  numTimes++;
}

/*void setup() {
  Serial.begin(9600);
}

void loop() {
  Serial.println("Hello Pi");
  delay(2000);
}*/
