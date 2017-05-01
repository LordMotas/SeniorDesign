void setup()
{
  Serial.begin(9600);
  InitialiseIO();
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
