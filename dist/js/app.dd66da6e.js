(()=>{"use strict";var e={8453:(e,t,i)=>{i(3792),i(3362),i(9085),i(9391);var n=i(5130),o=i(6768);function a(e,t,i,n,a,r){var s=(0,o.g2)("navbar"),h=(0,o.g2)("page-content");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.bF)(s,{pages:a.pages,"active-page":0,"nav-link-click":function(e){return a.activePage=e}},null,8,["pages","nav-link-click"]),(0,o.bF)(h,{page:a.pages[a.activePage],innerHTML:a.pages[a.activePage].pageContent},null,8,["page","innerHTML"])],64)}var r=i(4232),s={id:"content",class:"container"};function h(e,t,i,n,a,h){return(0,o.uX)(),(0,o.CE)("div",s,[(0,o.Lk)("h1",null,(0,r.v_)(i.page.pageTitle),1),(0,o.Lk)("p",null,(0,r.v_)(i.page.pageContent),1)])}const l={props:["page"]};var u=i(1241);const d=(0,u.A)(l,[["render",h]]),c=d;i(778);const p=i.p+"img/coco-logo-scaled.27f3aca4.svg";var m={class:"desktop"},g={class:"logo"},f=["href"],w=["href"],b=(0,o.Lk)("p",{style:{color:"whitesmoke"}},"interaction design",-1),y={class:"menu"},k={class:"nav-item dropdown"},v=["href","title","onClick"],T={key:1,class:"tutorials-menu"},E=["href","title","onClick"],x={class:"mobile"},D={class:"logo"},L=["href"],C=["href"],q=(0,o.Lk)("p",{style:{color:"whitesmoke"}},"interaction design",-1),I=(0,o.Lk)("button",{onclick:"document.querySelector(`.mobile-menu-container`).classList.toggle(`display`)","data-menu-button":""},[(0,o.Lk)("span",{class:"top bar"}),(0,o.Lk)("span",{class:"middle bar"}),(0,o.Lk)("span",{class:"bottom bar"})],-1),S={class:"mobile-menu-container"},_={class:"nav-item dropdown"},P=["href","title","onClick"],W={key:1},H=["href","title","onClick"];function A(e,t,i,a,s,h){return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.Lk)("nav",m,[(0,o.Lk)("div",g,[(0,o.Lk)("a",{href:i.pages[0].link.url,onClick:t[0]||(t[0]=(0,n.D$)((function(e){return i.navLinkClick(0)}),["prevent"])),onclick:"window.scrollTo(0,0)"},[(0,o.Lk)("img",{src:p,href:i.pages[0].link.url},null,8,w)],8,f),b]),(0,o.Lk)("ul",y,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(i.pages,(function(e,t){return(0,o.uX)(),(0,o.CE)("li",k,[0!==t?((0,o.uX)(),(0,o.CE)("a",{key:0,"aria-current":"page",href:e.link.url,title:"This link goes to ".concat(e.link.text),onclick:"window.scrollTo(0,0)",onClick:(0,n.D$)((function(e){return i.navLinkClick(t)}),["prevent"])},(0,r.v_)(e.link.text),9,v)):(0,o.Q3)("",!0),null!=e.subpages?((0,o.uX)(),(0,o.CE)("ul",T,[null!=e.subpages?((0,o.uX)(!0),(0,o.CE)(o.FK,{key:0},(0,o.pI)(e.subpages,(function(e,t){return(0,o.uX)(),(0,o.CE)("li",{key:t},[(0,o.Lk)("a",{class:"nav-link","aria-current":"page",href:e.link.url,title:"This link goes to ".concat(e.link.text),onclick:"window.scrollTo(0,0)",onClick:(0,n.D$)((function(e){return i.navLinkClick(t)}),["prevent"])},(0,r.v_)(e.link.text),9,E)])})),128)):(0,o.Q3)("",!0)])):(0,o.Q3)("",!0)])})),256))])]),(0,o.Lk)("nav",x,[(0,o.Lk)("div",D,[(0,o.Lk)("a",{href:i.pages[0].link.url,onclick:"window.scrollTo(0,0)",onClick:t[1]||(t[1]=(0,n.D$)((function(e){return i.navLinkClick(0)}),["prevent"]))},[(0,o.Lk)("img",{src:p,href:i.pages[0].link.url},null,8,C)],8,L),q]),I]),(0,o.Lk)("div",S,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(i.pages,(function(e,t){return(0,o.uX)(),(0,o.CE)("li",_,[0!==t?((0,o.uX)(),(0,o.CE)("a",{key:0,"aria-current":"page",href:e.link.url,title:"This link goes to ".concat(e.link.text),onClick:(0,n.D$)((function(e){return i.navLinkClick(t)}),["prevent"]),onclick:"document.querySelector(`.mobile-menu-container`).classList.toggle(`display`); window.scrollTo(0,0)"},(0,r.v_)(e.link.text),9,P)):(0,o.Q3)("",!0),null!=e.subpages?((0,o.uX)(),(0,o.CE)("ul",W,[null!=e.subpages?((0,o.uX)(!0),(0,o.CE)(o.FK,{key:0},(0,o.pI)(e.subpages,(function(e,t){return(0,o.uX)(),(0,o.CE)("li",{key:t,style:{"font-size":"18px","font-weight":"lighter",margin:"0.5em"}},[(0,o.Lk)("a",{class:"nav-link","aria-current":"page",href:e.link.url,title:"This link goes to ".concat(e.link.text),onClick:(0,n.D$)((function(e){return i.navLinkClick(t)}),["prevent"]),onclick:"document.querySelector(`.mobile-menu-container`).classList.toggle(`display`)"},(0,r.v_)(e.link.text),9,H)])})),128)):(0,o.Q3)("",!0)])):(0,o.Q3)("",!0)])})),256))])],64)}const O={props:["pages","activePage","navLinkClick"]},F=(0,u.A)(O,[["render",A]]),N=F,j={components:{PageContent:c,Navbar:N},data:function(){return{activePage:0,pages:[{link:{text:"home",url:"../sites/home.html"},pageTitle:"Home",pageContent:'<h1>Interaction Design Documentation</h1>\n<p><p style="color: darkgray">Hendrik Fley, 27. April 2024</p><div class="container-img-text"></div><p>This is a documentation of the exercises I did for the course \'Interaction Design\' at university. Students were tasked to experiment with different inputs and outputs in order to learn about the nature of designing interactive experiences. <p>The documentation aims to explain the different iterations each artifact went through. In order to keep things interesting to read through, I decided to deliver the documentation as a website thus giving me the possibility to design even more interactions - at least theoretically. In practice, I don\'t have much experience with building websites let alone setting up a single-page-application (SPA) this tries to be. Therefore, the delivery in itself was also a learning experience and the code behind some interactions and effects is heavily inspired by others, that I tried to (give) credit as much as possible.</p>\n<p>As for my learning of Vue.js - the framework behind the SPA - credits go to <a href="https://www.youtube.com/watch?v=1GNsWa_EZdw">this</a> tutorial. After some serious frustration over css I picked <a href="https://picocss.com/">pico.css</a> as a basis for the styling. </p>'},{link:{text:"double click dummy",url:"./public/exercise-1.html"},pageTitle:"Exercise 1 - 'Double Click Dummy'",pageContent:'<h2>Exercise 1 - Double Click Dummy</h2>\n<p>I was teamed up with Tamara and Mario S.</p>\n<h3>First steps</h3>\n<div class="container-led-text"><div id="led-img"></div><p>For the first exercise we had to build and program an interaction using a microcontroller and some components. We were restricted to only use a button or the touch-GPIO of the microcontroller as an input and a single LED as an output. As our microcontroller we chose the ESP32-module as it had both the possibility to try out a button and a touch-GPIO pin that the Arduino UNO lacks (though a quick google search revealed it is not that complicated to set up a similar functionality with the UNO).</p>\n<p>After the LED was put in the breadboard the right way around, and we fixed some problems with our IDE not being able to upload code to the ESP32, the example code provided in the course repository worked. We fired up the LED while pressing a button - Hooray!</p>\n</div><h3>Brainstorming</h3>\n<p>We then proceeded to think about an even more interesting interaction with both the LED and the input and came up with two ideas: use the button, and you have to enter a specific rhythm in order to permanently light the LED or - and this was Tamara\'s idea - use and experiment with the touch-GPIO, and you have to pet an aluminum animal in order to light up the LED.</p>\n<p>The later idea was the more promising and interesting one from my perspective as you establish a direct physical connection with your palm as an input. Not only does this feel more natural - one might think of touching and stroking an animal without knowing about the animal being an input. Whereas with a button (even if it is a very basic concept and one might assume universally understandable) you do need some experience with buttons in order to recognize them as an input (Think about how a child would approach both setups!).</p>\n<p><img id="tapir" src="foil_tapir_by_reptangle_d41tm2i-414w-2x.jpg" alt="tinfoil tapir">\n<p>Source: \'Tinfoil Tapir\' by M. Pena (Reptangle on <a href="https://www.deviantart.com/reptangle/art/Foil-tapir-244925946">Deviantart</a>)</p>\n<p>Proceeding to bring this idea to life though, we encountered some issues. The most prominent was, that as soon as we touched the aluminum foil the value in the Arduino\'s IDE Serial Monitor that was returned by the built-in touchRead()-function reliably dropped but was not or only just slightly and very unreliably affected by the distance covered between the point on the foil where it connects to the ESP and the point where one touches the foil. This made it easy to recognize a touch but hard to determine whether the hand is moving on the foil (thus stroking the animal) or not, which was the plan initially.</p>\n<p>Our second issue was the time constraint as we aimed to deliver an interesting interaction by the end of the day. We therefore brought back and modified the first idea: The aluminum foil has to be touched in a specific rhythm in order to light up the LED. But what rhythm should it be?</p>\n<h3>The double click</h3>\n<p>When thinking of specific and basic rhythms to begin with, we thought about the famous double click with a computer mouse as a required input to use one of the most common operating systems - Microsoft Windows. I recalled my grandpa having issues with the required fast movement of the index finger and as it was put into our awareness in this course to also think about accessibility and context when developing, we figured that we can easily adapt here.</p>\n<p><img id="modern-family" href="https://www.youtube.com/watch?v=bxNSCuiPiDs" src="./iad-exercise_1/double%20click.jpg" alt="Double click is hard for elderly people"><a href="https://www.youtube.com/watch?v=bxNSCuiPiDs"><p>Watch on YouTube</a></p></p>\n<p>Our goal was now to build the prototype for a \'Double Click Dummy\', a device for elderly people having issues with this input method. After a quick double tap on the aluminum foil the LED turns on signalling a successful input and turns off when you double tap a second time.</p>\n<p>Note: We could have reverted to the button with this idea as it is better in mirroring the haptic feedback one gets when using a computer mouse. On the other hand, we were able to quickly model a mouse cause of the aluminum\'s feature of being able to be wrapped around other objects. One could also argue that it helps to understand touchpad double-clicking which on some laptops lacks haptic feedback or works without it.</p>\n<p>We then tried to find a solution to detect two consecutive touches within a specific time frame, which was harder than estimated and we were already running late. So with the help of ChatGPT that introduced us to the concept of a debounce delay we came up with the following code:</p>\n<details><summary>Click to view/hide code</summary><pre><code class="language-c++">const int ledPin = 15;\nconst int touchPin = 4;\nconst int threshold = 40;\nint clickCount = 0;\nbool ledState = false;\nunsigned long lastClickTime = 0;\nconst unsigned long debounceDelay = 200; // Zeitfenster zwischen zwei Klicks\n\nvoid setup() {\n  pinMode(ledPin, OUTPUT);\n  Serial.begin(9600);\n}\n\nvoid loop() {\n  int touchValue = touchRead(touchPin);\n  Serial.println(touchValue);\n\n  if (touchValue &lt; threshold) {\n    unsigned long currentTime = millis();\n    if (currentTime - lastClickTime &gt; debounceDelay) {\n      clickCount++;\n      lastClickTime = currentTime;\n      if (clickCount == 2) {\n        ledState = !ledState; // Toggle LED state\n        digitalWrite(ledPin, ledState ? HIGH : LOW);\n        clickCount = 0; // Reset click count\n      }\n    }\n  }\n}\n</code></pre></details>\n<p>The code worked 80 percent of the time. The times it failed, a double click was detected even though the foil was only touched once, which resulted when touched in the exact time in between the reading operations of the touchRead()-function thus resulting in both values to be below the threshold.</p>\n<p>As shown below, a continuous touch is recognized as a series of double clicks,</p>\n<p><img src="./iad-exercise_1/iad-exercise-1.gif" alt="double click"></p>\n<p>Closing thought: With touch inputs being most prominent in today\'s culture the double click seems already a bit outdated. I only use it to open an application or folder and do not know of any (web)app that requires this kind of input anymore, besides Google Drive or cloud applications that replicate the Explorer (Windows) / Finder (macOS) behavior. It will be interesting to see how long the double click outlasts and if we have to quickly prototype a device like this to tell our grandchildren about this input.</p>'},{link:{text:"pls smile",url:"../sites/interaction-design.html"},pageTitle:"Exercise 2 - 'Pls Smile'",pageContent:'<h2>Exercise 2 - Pls Smile</h2>\n<p>I was teamed up with Annika and Erik.</p>\n<p><div id="code-img"></div></p>\n<p>This time we were allowed to choose an input of our liking, while the output was still restricted to be the LED.</p>\n<h3>Brainstorming</h3>\n<p>We started a quick brainstorming session on what our input and output could be. We thought about a smile as an input to a camera and the detection of smoke or alcohol as an input to one of the sensors we were presented with. Possible outputs on the LED were also collected (it could be lit, blinking fast or slow, blinking in a specific pattern, fading in out slow and fast, or it can burn out).</p>\n<p>A quick Google search revealed that detecting alcohol was not possible with the sensors presented. Detecting smoke on the other hand would have been a possibility. We decided against it due to the simple fact that smoke detection is a well known concept, and we wanted to create \'something new\'. With Erik in our team who already worked with a library that takes emotions as an input, the first idea was the most exciting one. We were asked to also come up and explain a narrative, a context in which the artifact may be used.</p>\n<h3>Send emotions to the Arduino</h3>\n<p>While Erik got the Python library he used working again, Annika and I tried to (1) understand how the Python code can work together with the Arduino IDE and also (2) come up with a narrative for our \'smile detection contraption\'.</p>\n<p><img id="brainstorm" src="./iad-exercise_2/iad-exercise_2-3.jpeg" alt="brainstorming"></p>\n<p>(1) How to get Python and Arduino to cooperate</p>\n<p>A good starting point is <a href="https://projecthub.arduino.cc/ansh2919/serial-communication-between-python-and-arduino-663756">this</a> tutorial that explains how the library PySerial is able to send data through the Arduino\'s serial port. In order to do so in the python code you first define the port to which the Arduino is connected. You can then send data over this port. The following is a <strong>mockup code</strong> and does not represent the actual code that Erik got working.</p>\n<details><summary>Click for Python (dummy) code</summary><pre><code class="language-python">\nimport serial\nimport time\n\narduino = serial.Serial(port=\'COM4\', baudrate=115200, timeout=0.1)\n\nclass CameraStream:\n    def get_emotion(self):\n        return &quot;smile&quot;\n\ncamera_stream = CameraStream()\n\ndef detect_smile(camera_input):\n    emotion = camera_input.get_emotion()\n    return emotion == &quot;smile&quot;\n\nwhile True:\n    if detect_smile(camera_stream):\n        arduino.write(b\'smile\')\n    else:\n        time.sleep(0.05)\n</code></pre></details>\n<p>The Arduino on the other hand listens to the port:</p>\n<details><summary>Click for Arduino code</summary><pre><code class="language-c++">const int ledPin = 15;\n\nvoid setup() {\n  Serial.begin(115200);\n  Serial.setTimeout(1);\n}\n\nvoid  loop() {\n  if (Serial.available());\ndigitalWrite(ledPin, HIGH);\n}\n</code></pre></details>\n<p>Our main problem with this setup was that we were not able to monitor the systems\' status. One would normally use Arduino IDE\'s \'Serial Monitor\' as we did in the first exercise. The problem is that the monitor is usually running on the same serial port that the python code is now sending data to. We could not identify in the short amount of time, which data is arriving at the port but only that in fact there is data arriving, because our code worked out in the last minute before the presentation we did to show the other groups what we did. We tried to fix the code after the presentation. I will summarize the attempts after I explain the narrative we had in mind for the artifact - and the one we actually presented.</p>\n<h3>The narrative we had in mind</h3>\n<p><img id="mirror-notes" src="https://pbs.twimg.com/media/DsaQBfvVYAADs3y?format=jpg&amp;name=large" alt="sticky notes on mirror">\n<p>Source: <a href="https://twitter.com/crashwong/status/1064696723639984128/photo/2">Alyssa Wong on Twitter/X</a></p>\n<p>(2) Cheer up a little vs. Please smile (&quot;Lach doch mal&quot; und &quot;Bitte lächeln&quot;)</p>\n<p>Our idea was to have the camera be mounted next to or behind a mirror, so it can detect when the user is watching themselves in it. The LED can then be mounted next to a sticky note that says \'pls smile :)\' resembling similar notes on mirrors (\'You are beautiful!\', \'Carpe diem\' etc.) that people put there to push their self-esteem or keep a good and productive mood. The LED would, in theory, increase this positive affirmation when smiling in the mirror which indeed has a proven positive effect on oneself.</p>\n<p>However, in the end I was not sure if the artifact would ever be able to replicate this positive affirmation cause the note was in fact not written by the user themselves. It could then be perceived at best only as an invitation to smile or a demand to do so. What if the user is in fact not in the mood to smile? They may deliver their best fake smile in order to get done with the artifact - ruining its purpose. It would take some user testing and observation to see if the intended positivity is achievable. Or - if people feel pressured by the sticky note - we could modify the purpose and the piece can demonstrate that well-meant sentences like &quot;Cheer up a little!&quot; (&quot;Lach doch mal!&quot;) can be invasive.</p>\n<h2>Final presentation</h2>\n<p>We did not have the time to replicate the mirror and sticky note idea. However, Annika thankfully tinkered a smiley face that incorporated the LED, and that we could do the presentation with. She might as well explain it\'s meaning better in her own documentation.</p>\n<p>In the end we got the prototype working and the LED lit up as soon as the smile is detected in the Python code. Still, some improvements have to be made, as we were not able to turn the LED off again after it has been lit.</p>\n<p><img style="margin-bottom: 2em" src="./iad-exercise_2/iad-exercise_2-7.gif" alt="smile detection"></p><p> </p>'},{link:{text:"ein hauch von liebe",url:"../sites/interaction-design.html"},pageTitle:"Exercise 3 - 'Ein Hauch von Liebe'",pageContent:'<h2>Exercise 3 - Ein Hauch von Liebe</h2>\n<p>I teamed up with Emma and Florian for the last task.</p>\n<p><div id="ideas-img"></div></p>\n<h3>Brainstorming</h3>\n<p>For our last task the input and output were not restricted. Therefore, I came up with a lot of ideas, some that were new, some that improved upon former projects. Initially I was intrigued to finally build a game-like experience, maybe even for two players, where they have to get a specific rhythm right in order to light up LEDs consecutively, or a one-player-game similar to the <a href="https://stardewvalleywiki.com/Fishing">fishing mechanic in the game Stardew Valley</a>, where one has to keep a fish (a red dot moving up and down on an LED-RGB strip) inside a bar (a line of blue dots upon the same LED-strip forming a bar that can be moved up with a button press, and moves down as it was affected by gravity) for a certain amount of time to \'win\'.</p>\n<p>We concluded that we liked the idea of a game / an artifact that requires the interaction of two people at once more than it being experienced only by one user. However, those ideas did not quite fit the criteria that the interaction with the artifact should require an \'unusual interaction [...] questioning standards and depicting the limits of naturalness\'.</p>\n<p>So when we discussed my and the others\' ideas in the group, we narrowed down the set of worthwhile ideas to three:</p>\n<ol>\n<li>\n<p>Blinking Blue Bluetooth</p>\n<p>When thinking about blinking lights in the former exercises, I thought about the blinking \'language\' of Bluetooth devices\' blue LEDs that has been established over time: A blinking or fading-in and fading-out light indicates that the BT device is searching for a connection, a constantly lit LED almost always indicates that the connection has been made. On the other hand, how one might start the searching process is varying: some devices require you to press a button once, some require you to keep it pressed for a couple of seconds.</p>\n<p>This communication with the user is very limited and faulty and troubleshooting gets frustrating, when the connection does not happen or pressing the buttons suddenly results into a fading LED when it has been blinking before. Which state indicates that the device is searching? And what is the other states purpose?</p>\n<p>The idea we came up with was to \'improve\' on this confusion. The user is tasked to \'establish a Bluetooth connection\' between two LEDs on a wooden board. One of these LEDs is blue and communicates randomly (with varying blinking patterns) to the press of a button that is mounted next to it. The \'solution\' the user has to come up with is to rearrange some wires mounted on the board to resemble a Bluetooth symbol between the two LEDs, which then causes the two LEDs to be lit constantly.</p>\n</li>\n</ol>\n<p><img src="https://images.support.creative.com/audio_usb/free/free_pairing1.gif" alt="blinking pattern 1">\n<img src="https://images.support.creative.com/audio_usb/free/free_pairing2.gif" alt="blinking pattern 2"></p>\n<p>Confusing blue leds: What do the blinking patterns mean? (Source: creative.com [<a href="https://images.support.creative.com/audio_usb/free/free_pairing1.gif">1</a>] [<a href="https://images.support.creative.com/audio_usb/free/free_pairing2.gif">2</a>])</p><ol start="2">\n<li>\n<p>(Light) mixing desk</p>\n<p>Florian came up with the idea to repurpose a DJ set, especially the mixing desk (mixer) to control everything else but the music that is played. For starters, we thought about going with LEDs or a motor that moves the whole set when you try to scratch or move the fader/slider.</p>\n</li>\n</ol>\n<p>Both ideas fit the criteria of an unusual interaction as described in the task, but none of them really convinced us. The first one seemed a little too goofy, though frustrating the user can trigger an interesting discussion about how you could improve the communication of BT devices. But if the user comes up with the solution of connecting the LED with wires they are more likely to feel annoyed than be happy about \'solving the riddle\'.</p>\n<p>So we were back to zero ideas and started a similar brainstorming process than I did with Annika and Erik for the second exercise. While collecting interesting inputs one particular sensor that was featured by another group in exercise 2 sparked our creativity: The humidity sensor.</p>\n<p>It did fit the criteria of being an unusual input and when we thought about how to make an artifact that requires two people to interact with one another, the idea we finally chose was born: Two people, two humidity sensors between them, and both have to breathe in them to generate an output.</p>\n<h3>Exploring the Dimensions of Cringe</h3>\n<h4>Part 1 - The setup</h4>\n<p>Synchronized breathing in proximity is normally reserved for situations where two people show their affection to each other. A setup where this behavior is required as an input therefore not only challenges standards of (human-computer) interaction but also social standards. One might feel slightly uncomfortable before, during or after interacting with the kind of setup that we had in mind.</p>\n<p>We thought about improving this feeling (often referred to as \'cringe\') by adding other layers of input, like the necessity of holding hands while breathing but decided to first get a prototype working and do some testing.</p>\n<p>We decided the best way to mount the two humidity sensors at mouths\' height is an (acrylic) glass pane so that users can see each other (or look each other in the eyes?) while breathing together. As an output we decided to stick with a single LED and add more layers (playing music, a complex setup of LEDs forming a heart shape) when possible in the given time.</p>\n<p>After discussing the setup we started to test the logic behind the setup on the breadboard and write some code. The code was very simple and in fact did not need to be changed at all afterwards, beside tinkering with the threshold (%-humidity) at which each breath (&quot;HAUCH&quot;) is detected.</p>\n<details><summary>Click for Arduino code</summary><pre><code class="language-c++">#include &quot;DHT.h&quot;\n#define DHTPIN1 2\n#define DHTPIN2 4\n#define DHTTYPE DHT11\n#define LEDPIN 9\n#define LEDPIN2 8\n\nDHT dht1(DHTPIN1, DHTTYPE);\nDHT dht2(DHTPIN2, DHTTYPE);\n\nfloat humi1;\nfloat tempC1;\nfloat tempF1;\nfloat humi2;\nfloat tempC2;\nfloat tempF2;\n\nvoid setup() {\n  Serial.begin(9600);\n  dht1.begin(); // initialize the sensor\n  dht2.begin(); // initialize the sensor\n  pinMode(LEDPIN, OUTPUT);\n  pinMode(LED_BUILTIN, OUTPUT);\n}\n\nvoid loop() {\n  // wait a few seconds between measurements.\n  delay(2000);\n\n  // read humidity\n  humi1  = dht1.readHumidity();\n  // read temperature as Celsius\n  tempC1 = dht1.readTemperature();\n  // read temperature as Fahrenheit\n  tempF1 = dht1.readTemperature(true);\n\n    // read humidity\n  humi2  = dht2.readHumidity();\n  // read temperature as Celsius\n  tempC2 = dht2.readTemperature();\n  // read temperature as Fahrenheit\n  tempF2 = dht2.readTemperature(true);\n\n  monitorData();\n\n  if (humi1 &gt;= 80.00 &amp;&amp; humi2 &gt;= 80.00){\n  Serial.println(&quot;2 HAUCH DETECTED!!!!!&quot;);\n  digitalWrite(LEDPIN, HIGH);\n  digitalWrite(LEDPIN2, HIGH);\n  digitalWrite(LED_BUILTIN, HIGH);\n  }\n  else\n  {\n    digitalWrite(LEDPIN, LOW);\n    digitalWrite(LED_BUILTIN, LOW);\n    digitalWrite(LEDPIN2, LOW);\n  };\n};  \n\n\n\n\nvoid monitorData() {\n  // check if any reads failed\n  if (isnan(humi2) || isnan(tempC2) || isnan(tempF2)) {\n    Serial.println(&quot;Failed to read from DHT2 sensor!&quot;);\n  } else {\n    Serial.print(&quot;Humidity ZWEI: &quot;);\n    Serial.print(humi2);\n    Serial.print(&quot;%&quot;);\n\n    Serial.print(&quot;  |  &quot;); \n\n    Serial.print(&quot;Temperature ZWEI: &quot;);\n    Serial.print(tempC2);\n    Serial.print(&quot;°C ~ &quot;);\n    Serial.print(tempF2);\n    Serial.println(&quot;°F&quot;);\n  };\n  // check if any reads failed\n  if (isnan(humi1) || isnan(tempC1) || isnan(tempF1)) {\n    Serial.println(&quot;Failed to read from DHT1 sensor!&quot;);\n  } else {\n    Serial.print(&quot;Humidity EINS: &quot;);\n    Serial.print(humi1);\n    Serial.print(&quot;%&quot;);\n\n    Serial.print(&quot;  |  &quot;); \n\n    Serial.print(&quot;Temperature EINS: &quot;);\n    Serial.print(tempC1);\n    Serial.print(&quot;°C ~ &quot;);\n    Serial.print(tempF1);\n    Serial.println(&quot;°F&quot;);\n  }\n};\n</code></pre></details>\n<p><img id="setup" src="./iad_exercise_3/iad-exercise_3-7.jpeg" alt="building phase">\n<p>(Testing the logic)</p>\n<p>With the logic working as expected we went to the workshop and:</p>\n<ul>\n<li>cut an acrylic glass pane</li>\n<li>drilled two holes inside it</li>\n<li>extended the cables of the humidity sensors</li>\n<li>cut two ropes to the right length</li>\n<li>hung the glass pane from the ceiling</li>\n<li>attached the sensors to the acrylic pane with tape (later hot glue)</li>\n<li>cut out a heart-shaped hole in some cardboard and covered it with crêpe paper</li>\n<li>lengthened the LEDs cable and mounted it behind the crêpe paper</li>\n</ul>\n<div id="gallery"><p><img src="./iad_exercise_3/iad-exercise_3-5.jpeg" alt="building phase 1"></p>\n<p><img src="./iad_exercise_3/iad-exercise_3-8.jpeg" alt="building phase 2"></p>\n<p><img src="./iad_exercise_3/iad-exercise_3-9.jpeg" alt="building phase 3"></p></div>\n<p>With all this done, we could finally do the first tests with the setup:</p>\n<p><img src="./iad_exercise_3/iad-exercise-3.gif" alt="breathe out"></p>\n<p>With all the effort we put into the artifact, we were happy to see, that we achieved the intended slightly \'cringe\' feeling, when testing the artifact. Some user testing was necessary to be sure that others:</p>\n<ul>\n<li>feel a slight \'cringe\' as well</li>\n<li>don\'t feel too uncomfortable</li>\n<li>know how to interact with the artifact</li>\n</ul>\n<h4>Part 2 - User Testing and Presentation</h4>\n<div id="img-txt"<p><div id="img"><img id="presentation" src="./iad_exercise_3/iad-exercise_3-13.jpeg" alt="final presentation"></div></p><div id="txt"><p>When we invited our fellow students to test the artifact, we were happy to get positive feedback. The interaction was slightly uncomfortable for everyone, but in a way that, when the LED finally fired, the small success and relief of being done with the interaction caused most of them to smile or laugh.</p>\n<p>Everyone we invited to the testing, saw us interacting with the artifact beforehand. Experiments to see, if people know how to use the artifact correctly are yet to be conducted. But as we expected this to be a problem, we used the last hours of project time to find a way to get the message across to people walking by the artifact, as if it was presented in an exhibition.</p>\n<p>After some brainstorming, we came up with a title: &quot;Ein Hauch von Liebe&quot; (A breath of love) for the artifact that hopefully gives enough of a hint on how to use the artifact.</p>\n<p>After our presentation, when everyone tested each other groups artifacts I realized that no one stepped up to our installation even though they knew how to use it. So we might have to think about another output that serves as an incentive for people to voluntarily challenge themselves to interact with our artifact.</p></div></div>\n'}]}}},B=(0,u.A)(j,[["render",a]]),X=B;(0,n.Ef)(X).mount("#app")}},t={};function i(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,i),a.exports}i.m=e,(()=>{var e=[];i.O=(t,n,o,a)=>{if(!n){var r=1/0;for(u=0;u<e.length;u++){for(var[n,o,a]=e[u],s=!0,h=0;h<n.length;h++)(!1&a||r>=a)&&Object.keys(i.O).every((e=>i.O[e](n[h])))?n.splice(h--,1):(s=!1,a<r&&(r=a));if(s){e.splice(u--,1);var l=o();void 0!==l&&(t=l)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[n,o,a]}})(),(()=>{i.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return i.d(t,{a:t}),t}})(),(()=>{i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{i.p="/iad-doc//"})(),(()=>{var e={524:0};i.O.j=t=>0===e[t];var t=(t,n)=>{var o,a,[r,s,h]=n,l=0;if(r.some((t=>0!==e[t]))){for(o in s)i.o(s,o)&&(i.m[o]=s[o]);if(h)var u=h(i)}for(t&&t(n);l<r.length;l++)a=r[l],i.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return i.O(u)},n=self["webpackChunkvue_start_spa"]=self["webpackChunkvue_start_spa"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=i.O(void 0,[504],(()=>i(8453)));n=i.O(n)})();
//# sourceMappingURL=app.dd66da6e.js.map