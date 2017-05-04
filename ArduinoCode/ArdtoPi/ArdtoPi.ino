void setup() {
  Serial.begin(9600);
}

void loop() {  
  //Adds 300 score to the current running total (managed by the python)
  Serial.print("score 300 \n");

  //Sending the command "level" increments the level by one
  Serial.print("level \n");
 
  //balls 1 adds 1 ball to the current number of balls (as in the player gained another life)
  Serial.print("balls 1 \n");
  
  //Sets the value of the timer to 300000 (this is in milliseconds)
  Serial.print("timer 300000 \n");
  
  //This command means that there is a timer associated with the level
  Serial.print("timed true \n");
  
  //This command means that there is no timer associated with the level
  Serial.print("timed false \n");
}
