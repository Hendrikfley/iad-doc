const int ledPin = 15;
const int touchPin = 4;
const int threshold = 40;
int clickCount = 0;
bool ledState = false;
unsigned long lastClickTime = 0;
const unsigned long debounceDelay = 200; // Zeitfenster zwischen zwei Klicks

void setup() {
  pinMode(ledPin, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  int touchValue = touchRead(touchPin);
  Serial.println(touchValue);
  
  if (touchValue < threshold) {
    unsigned long currentTime = millis();
    if (currentTime - lastClickTime > debounceDelay) {
      clickCount++;
      lastClickTime = currentTime;
      if (clickCount == 2) {
        ledState = !ledState; // Toggle LED state
        digitalWrite(ledPin, ledState ? HIGH : LOW);
        clickCount = 0; // Reset click count
      }
    }
  }
}