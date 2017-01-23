void setup()
{
  Serial.begin(9600);
  InitialiseIO();
  InitialiseInterrupt();
}

void loop() {
  // put your main code here, to run repeatedly:
  //Interrupts should trigger if hardware happens
  delay(4000);
  Serial.print("score 300\n");
  delay(4000);
  Serial.print("level \n");
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
}
