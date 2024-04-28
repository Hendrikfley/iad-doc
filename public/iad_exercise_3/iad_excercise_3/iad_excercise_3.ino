#include "DHT.h"
#define DHTPIN1 2
#define DHTPIN2 4
#define DHTTYPE DHT11
#define LEDPIN 9
#define LEDPIN2 8

DHT dht1(DHTPIN1, DHTTYPE);
DHT dht2(DHTPIN2, DHTTYPE);

float humi1;
float tempC1;
float tempF1;
float humi2;
float tempC2;
float tempF2;

void setup() {
  Serial.begin(9600);
  dht1.begin(); // initialize the sensor
  dht2.begin(); // initialize the sensor
  pinMode(LEDPIN, OUTPUT);
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  // wait a few seconds between measurements.
  delay(2000);

  // read humidity
  humi1  = dht1.readHumidity();
  // read temperature as Celsius
  tempC1 = dht1.readTemperature();
  // read temperature as Fahrenheit
  tempF1 = dht1.readTemperature(true);

    // read humidity
  humi2  = dht2.readHumidity();
  // read temperature as Celsius
  tempC2 = dht2.readTemperature();
  // read temperature as Fahrenheit
  tempF2 = dht2.readTemperature(true);

  monitorData();

  if (humi1 >= 80.00 && humi2 >= 80.00){
  Serial.println("2 HAUCH DETECTED!!!!!");
  digitalWrite(LEDPIN, HIGH);
  digitalWrite(LEDPIN2, HIGH);
  digitalWrite(LED_BUILTIN, HIGH);
  }
  else
  {
    digitalWrite(LEDPIN, LOW);
    digitalWrite(LED_BUILTIN, LOW);
    digitalWrite(LEDPIN2, LOW);
  };
};  




void monitorData() {
  // check if any reads failed
  if (isnan(humi2) || isnan(tempC2) || isnan(tempF2)) {
    Serial.println("Failed to read from DHT2 sensor!");
  } else {
    Serial.print("Humidity ZWEI: ");
    Serial.print(humi2);
    Serial.print("%");

    Serial.print("  |  "); 

    Serial.print("Temperature ZWEI: ");
    Serial.print(tempC2);
    Serial.print("°C ~ ");
    Serial.print(tempF2);
    Serial.println("°F");
  };
  // check if any reads failed
  if (isnan(humi1) || isnan(tempC1) || isnan(tempF1)) {
    Serial.println("Failed to read from DHT1 sensor!");
  } else {
    Serial.print("Humidity EINS: ");
    Serial.print(humi1);
    Serial.print("%");

    Serial.print("  |  "); 

    Serial.print("Temperature EINS: ");
    Serial.print(tempC1);
    Serial.print("°C ~ ");
    Serial.print(tempF1);
    Serial.println("°F");
  }
};