# iad-doc
Website built with vue.js.

Fallback md, in case the website doesn't work


# Interaction Design Documentation

![header image](./iad_exercise_3/iad-exercise_3-12.jpeg)

This is a documentation of the exercises I did for the course 'Interaction Design' at university. Students were tasked to experiment with different inputs and outputs in order to learn about the nature of designing interactive experiences.

The documentation aims to explain the different iterations each artifact went through. In order to keep things interesting to read through, I decided to deliver the documentation as a website thus giving me the possibility to design even more interactions - at least theoretically. In practice, I don't have much experience with building websites let alone setting up a single-page-application (SPA) this tries to be. Therefore, the delivery in itself was also a learning experience and the code behind some interactions and effects is heavily inspired by others, that I tried to (give) credit as much as possible.

As for my learning of Vue.js - the framework behind the SPA - credits go to [this](https://www.youtube.com/watch?v=1GNsWa_EZdw) tutorial.

## Exercise 1 - Double Click Dummy

I was teamed up with Tamara and Mario S.

### First steps

For the first exercise we had to build and program an interaction using a microcontroller and some components. We were restricted to only use a button or the touch-GPIO of the microcontroller as an input and a single LED as an output. As our microcontroller we chose the ESP32-module as it had both the possibility to try out a button and a touch-GPIO pin that the Arduino UNO lacks (though a quick google search revealed it is not that complicated to set up a similar functionality with the UNO).

After the LED was put in the breadboard the right way around, and we fixed some problems with our IDE not being able to upload code to the ESP32, the example code provided in the course repository worked. We fired up the LED while pressing a button - Hooray!

![led](./iad-exercise_1/iad-exercise_1-1.jpeg)

### Brainstorming

We then proceeded to think about an even more interesting interaction with both the LED and the input and came up with two ideas: use the button, and you have to enter a specific rhythm in order to permanently light the LED or - and this was Tamara's idea - use and experiment with the touch-GPIO, and you have to pet an aluminum animal in order to light up the LED.

The later idea was the more promising and interesting one from my perspective as you establish a direct physical connection with your palm as an input. Not only does this feel more natural - one might think of touching and stroking an animal without knowing about the animal being an input. Whereas with a button (even if it is a very basic concept and one might assume universally understandable) you do need some experience with buttons in order to recognize them as an input (Think about how a child would approach both setups!).

![tinfoil tapir](https://shorturl.at/koyEZ)
Source: 'Tinfoil Tapir' by M. Pena (Reptangle on [Deviantart](https://www.deviantart.com/reptangle/art/Foil-tapir-244925946))

Proceeding to bring this idea to life though, we encountered some issues. The most prominent was, that as soon as we touched the aluminum foil the value in the Arduino's IDE Serial Monitor that was returned by the built-in touchRead()-function reliably dropped but was not or only just slightly and very unreliably affected by the distance covered between the point on the foil where it connects to the ESP and the point where one touches the foil. This made it easy to recognize a touch but hard to determine whether the hand is moving on the foil (thus stroking the animal) or not, which was the plan initially.

Our second issue was the time constraint as we aimed to deliver an interesting interaction by the end of the day. We therefore brought back and modified the first idea: The aluminum foil has to be touched in a specific rhythm in order to light up the LED. But what rhythm should it be?

### The double click

When thinking of specific and basic rhythms to begin with, we thought about the famous double click with a computer mouse as a required input to use one of the most common operating systems - Microsoft Windows. I recalled my grandpa having issues with the required fast movement of the index finger and as it was put into our awareness in this course to also think about accessibility and context when developing, we figured that we can easily adapt here.

![Double click is hard for elderly people](./iad-exercise_1/double%20click.jpg)[Watch on YouTube](https://www.youtube.com/watch?v=bxNSCuiPiDs)

Our goal was now to build the prototype for a 'Double Click Dummy', a device for elderly people having issues with this input method. After a quick double tap on the aluminum foil the LED turns on signalling a successful input and turns off when you double tap a second time.

Note: We could have reverted to the button with this idea as it is better in mirroring the haptic feedback one gets when using a computer mouse. On the other hand, we were able to quickly model a mouse cause of the aluminum's feature of being able to be wrapped around other objects. One could also argue that it helps to understand touchpad double-clicking which on some laptops lacks haptic feedback or works without it.

We then tried to find a solution to detect two consecutive touches within a specific time frame, which was harder than estimated and we were already running late. So with the help of ChatGPT that introduced us to the concept of a debounce delay we came up with the following code:

```c++
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
```

The code worked 80 percent of the time. The times it failed, a double click was detected even though the foil was only touched once, which resulted when touched in the exact time in between the reading operations of the touchRead()-function thus resulting in both values to be below the threshold.

As shown below, a continuous touch is recognized as a series of double clicks,

![double click](./iad-exercise_1/iad-exercise-1.gif)

Closing thought: With touch inputs being most prominent in today's culture the double click seems already a bit outdated. I only use it to open an application or folder and do not know of any (web)app that requires this kind of input anymore, besides Google Drive or cloud applications that replicate the Explorer (Windows) / Finder (macOS) behavior. It will be interesting to see how long the double click outlasts and if we have to quickly prototype a device like this to tell our grandchildren about this input.

## Exercise 2 - Pls Smile

I was teamed up with Annika and Erik.

![pyserial](./iad-exercise_2/iad-exercise_2-4.jpeg)

This time we were allowed to choose an input of our liking, while the output was still restricted to be the LED.

### Brainstorming

We started a quick brainstorming session on what our input and output could be. We thought about a smile as an input to a camera and the detection of smoke or alcohol as an input to one of the sensors we were presented with. Possible outputs on the LED were also collected (it could be lit, blinking fast or slow, blinking in a specific pattern, fading in out slow and fast, or it can burn out).

A quick Google search revealed that detecting alcohol was not possible with the sensors presented. Detecting smoke on the other hand would have been a possibility. We decided against it due to the simple fact that smoke detection is a well known concept, and we wanted to create 'something new'. With Erik in our team who already worked with a library that takes emotions as an input, the first idea was the most exciting one. We were asked to also come up and explain a narrative, a context in which the artifact may be used.

### Send emotions to the Arduino

While Erik got the Python library he used working again, Annika and I tried to (1) understand how the Python code can work together with the Arduino IDE and also (2) come up with a narrative for our 'smile detection contraption'.

![brainstorming](./iad-exercise_2/iad-exercise_2-3.jpeg)

(1) How to get Python and Arduino to cooperate

A good starting point is [this](https://projecthub.arduino.cc/ansh2919/serial-communication-between-python-and-arduino-663756) tutorial that explains how the library PySerial is able to send data through the Arduino's serial port. In order to do so in the python code you first define the port to which the Arduino is connected. You can then send data over this port. The following is a **mockup code** and does not represent the actual code that Erik got working.

```python

import serial
import time

arduino = serial.Serial(port='COM4', baudrate=115200, timeout=0.1)

class CameraStream:
    def get_emotion(self):
        return "smile"

camera_stream = CameraStream()

def detect_smile(camera_input):
    emotion = camera_input.get_emotion()
    return emotion == "smile"

while True:
    if detect_smile(camera_stream):
        arduino.write(b'smile')
    else:
        time.sleep(0.05)
```

The Arduino on the other hand listens to the port:

```c++
const int ledPin = 15;

void setup() {
  Serial.begin(115200);
  Serial.setTimeout(1);
}

void  loop() {
  if (Serial.available());
digitalWrite(ledPin, HIGH);
}
```

Our main problem with this setup was that we were not able to monitor the systems' status. One would normally use Arduino IDE's 'Serial Monitor' as we did in the first exercise. The problem is that the monitor is usually running on the same serial port that the python code is now sending data to. We could not identify in the short amount of time, which data is arriving at the port but only that in fact there is data arriving, because our code worked out in the last minute before the presentation we did to show the other groups what we did. We tried to fix the code after the presentation. I will summarize the attempts after I explain the narrative we had in mind for the artifact - and the one we actually presented.

### The narrative we had in mind

![sticky notes on mirror](https://pbs.twimg.com/media/DsaQBfvVYAADs3y?format=jpg&name=large)
Source: [Alyssa Wong on Twitter/X](https://twitter.com/crashwong/status/1064696723639984128/photo/2)

(2) Cheer up a little vs. Please smile ("Lach doch mal" und "Bitte lächeln")

Our idea was to have the camera be mounted next to or behind a mirror, so it can detect when the user is watching themselves in it. The LED can then be mounted next to a sticky note that says 'pls smile :)' resembling similar notes on mirrors ('You are beautiful!', 'Carpe diem' etc.) that people put there to push their self-esteem or keep a good and productive mood. The LED would, in theory, increase this positive affirmation when smiling in the mirror which indeed has a proven positive effect on oneself.

However, in the end I was not sure if the artifact would ever be able to replicate this positive affirmation cause the note was in fact not written by the user themselves. It could then be perceived at best only as an invitation to smile or a demand to do so. What if the user is in fact not in the mood to smile? They may deliver their best fake smile in order to get done with the artifact - ruining its purpose. It would take some user testing and observation to see if the intended positivity is achievable. Or - if people feel pressured by the sticky note - we could modify the purpose and the piece can demonstrate that well-meant sentences like "Cheer up a little!" ("Lach doch mal!") can be invasive.

## Final presentation

We did not have the time to replicate the mirror and sticky note idea. However, Annika thankfully tinkered a smiley face that incorporated the LED, and that we could do the presentation with. She might as well explain it's meaning better in her own documentation.

In the end we got the prototype working and the LED lit up as soon as the smile is detected in the Python code. Still, some improvements have to be made, as we were not able to turn the LED off again after it has been lit.

![smile detection](./iad-exercise_2/iad-exercise_2-7.gif)

## Exercise 3 - Ein Hauch von Liebe

I teamed up with Emma and Florian for the last task.

### Brainstorming

For our last task the input and output were not restricted. Therefore, I came up with a lot of ideas, some that were new, some that improved upon former projects. Initially I was intrigued to finally build a game-like experience, maybe even for two players, where they have to get a specific rhythm right in order to light up LEDs consecutively, or a one-player-game similar to the [fishing mechanic in the game Stardew Valley](https://stardewvalleywiki.com/Fishing), where one has to keep a fish (a red dot moving up and down on an LED-RGB strip) inside a bar (a line of blue dots upon the same LED-strip forming a bar that can be moved up with a button press, and moves down as it was affected by gravity) for a certain amount of time to 'win'.

We concluded that we liked the idea of a game / an artifact that requires the interaction of two people at once more than it being experienced only by one user. However, those ideas did not quite fit the criteria that the interaction with the artifact should require an 'unusual interaction [...] questioning standards and depicting the limits of naturalness'.

![brainstorming](./iad_exercise_3/exercise-3-brainstorming.jpg)

So when we discussed my and the others' ideas in the group, we narrowed down the set of worthwhile ideas to three:

1. Blinking Blue Bluetooth

    When thinking about blinking lights in the former exercises, I thought about the blinking 'language' of Bluetooth devices' blue LEDs that has been established over time: A blinking or fading-in and fading-out light indicates that the BT device is searching for a connection, a constantly lit LED almost always indicates that the connection has been made. On the other hand, how one might start the searching process is varying: some devices require you to press a button once, some require you to keep it pressed for a couple of seconds.

    This communication with the user is very limited and faulty and troubleshooting gets frustrating, when the connection does not happen or pressing the buttons suddenly results into a fading LED when it has been blinking before. Which state indicates that the device is searching? And what is the other states purpose?

    The idea we came up with was to 'improve' on this confusion. The user is tasked to 'establish a Bluetooth connection' between two LEDs on a wooden board. One of these LEDs is blue and communicates randomly (with varying blinking patterns) to the press of a button that is mounted next to it. The 'solution' the user has to come up with is to rearrange some wires mounted on the board to resemble a Bluetooth symbol between the two LEDs, which then causes the two LEDs to be lit constantly.

  ![blinking pattern 1](https://images.support.creative.com/audio_usb/free/free_pairing1.gif)
  ![blinking pattern 2](https://images.support.creative.com/audio_usb/free/free_pairing2.gif)

2. (Light) mixing desk

    Florian came up with the idea to repurpose a DJ set, especially the mixing desk (mixer) to control everything else but the music that is played. For starters, we thought about going with LEDs or a motor that moves the whole set when you try to scratch or move the fader/slider.

Both ideas fit the criteria of an unusual interaction as described in the task, but none of them really convinced us. The first one seemed a little too goofy, though frustrating the user can trigger an interesting discussion about how you could improve the communication of BT devices. But if the user comes up with the solution of connecting the LED with wires they are more likely to feel annoyed than be happy about 'solving the riddle'.

So we were back to zero ideas and started a similar brainstorming process than I did with Annika and Erik for the second exercise. While collecting interesting inputs one particular sensor that was featured by another group in exercise 2 sparked our creativity: The humidity sensor.

It did fit the criteria of being an unusual input and when we thought about how to make an artifact that requires two people to interact with one another, the idea we finally chose was born: Two people, two humidity sensors between them, and both have to breathe in them to generate an output.

### Exploring the Dimensions of Cringe

#### Part 1 - The setup

Synchronized breathing in proximity is normally reserved for situations where two people show their affection to each other. A setup where this behavior is required as an input therefore not only challenges standards of (human-computer) interaction but also social standards. One might feel slightly uncomfortable before, during or after interacting with the kind of setup that we had in mind.

We thought about improving this feeling (often referred to as 'cringe') by adding other layers of input, like the necessity of holding hands while breathing but decided to first get a prototype working and do some testing.

We decided the best way to mount the two humidity sensors at mouths' height is an (acrylic) glass pane so that users can see each other (or look each other in the eyes?) while breathing together. As an output we decided to stick with a single LED and add more layers (playing music, a complex setup of LEDs forming a heart shape) when possible in the given time.

After discussing the setup we started to test the logic behind the setup on the breadboard and write some code. The code was very simple and in fact did not need to be changed at all afterwards, beside tinkering with the threshold (%-humidity) at which each breath ("HAUCH") is detected.

```c++
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
```
![building phase](./iad_exercise_3/iad-exercise_3-7.jpeg)
(Testing the logic)

With the logic working as expected we went to the workshop and:

- cut an acrylic glass pane
- drilled two holes inside it
- extended the cables of the humidity sensors
- cut two ropes to the right length
- hung the glass pane from the ceiling
- attached the sensors to the acrylic pane with tape (later hot glue)
- cut out a heart-shaped hole in some cardboard and covered it with crêpe paper
- lengthened the LEDs cable and mounted it behind the crêpe paper

![building phase 1](./iad_exercise_3/iad-exercise_3-5.jpeg)

![building phase 2](./iad_exercise_3/iad-exercise_3-8.jpeg)

![building phase 3](./iad_exercise_3/iad-exercise_3-9.jpeg)

With all this done, we could finally do the first tests with the setup:

![breathe out](./iad_exercise_3/iad-exercise-3.gif)

With all the effort we put into the artifact, we were happy to see, that we achieved the intended slightly 'cringe' feeling, when testing the artifact. Some user testing was necessary to be sure that others:

- feel a slight 'cringe' as well
- don't feel too uncomfortable
- know how to interact with the artifact

#### Part 2 - User Testing and Presentation

When we invited our fellow students to test the artifact, we were happy to get positive feedback. The interaction was slightly uncomfortable for everyone, but in a way that, when the LED finally fired, the small success and relief of being done with the interaction caused most of them to smile or laugh.

Everyone we invited to the testing, saw us interacting with the artifact beforehand. Experiments to see, if people know how to use the artifact correctly are yet to be conducted. But as we expected this to be a problem, we used the last hours of project time to find a way to get the message across to people walking by the artifact, as if it was presented in an exhibition.

After some brainstorming, we came up with a title: "Ein Hauch von Liebe" (A breath of love) for the artifact that hopefully gives enough of a hint on how to use the artifact.

![final presentation](./iad_exercise_3/iad-exercise_3-13.jpeg)

After our presentation, when everyone tested each other groups artifacts I realized that no one stepped up to our installation even though they knew how to use it. So we might have to think about another output that serves as an incentive for people to voluntarily challenge themselves to interact with our artifact.