---
layout: post
title: BMW eNBT - CCC to NBT Retrofit for E93
categories: bmw
---


- 원문(일부 각색) - [e90 CCC and CIC to NBT retrofit DIY](http://www.bimmerfest.com/forums/showthread.php?t=799458)

## Background:
<!--
I'm almost finished the elusive E90 CCC to NBT retrofit. Since the BMW community has helped me tremendously in the past, I thought I would share my experience on this scarcely documented procedure. CIC to NBT retrofit would be a subset of the CCC to NBT requirements.

I have a 2006 E90 330i. For equipment relevant to the retrofit, my car was equipped with CCC /w voice control, telematics, Logic 7, heated seats, and ALU satin trim. Your car may be different and may require parts suitable for your equipment package.
-->

난 어려운 CCC에서 NBT로 이식을 거의 마무리 지었다. 그동안 BMW 커뮤니티의 엄청난 도움을 받아서 나의 경험을 문서로 공유하고자 마음 먹었다. NBT 변경 작업은 CCC의 작은 부분을 NBT 부품으로 대체하는 것이다. 

내 차량은 2007년식 E93 컨버이다. E93은 CCC, 보이스 컨트롤, 텔레메틱스, 로직7 오디오 시스템, 열선 시트 그리고 알루미늄 트림을 갖추고 있다. 타 차량은 아마도 다른 부품이 필요할 수도 있다.

## Disclaimer:
<!--
I wasn't nearly as trigger happy with my camera as I should have been, and as a result, I took many pictures after the fact. I also "borrowed" a few from google images. If you own the image, please let me know and I can remove it or give credit.

I am NOT responsible if you buy parts that do not fit your car or if you damage your car in the process.
-->

내가 했던 작업을 멋진 사진으로 포장하여 뽐뿌를 넣지 않을 것이다. 난 있는 그대로 전달하기 위한 사진을 많이 찍었다. 이 게시물에는 구글에서 퍼온  이미지를 무단으로 사용하고 있다. 혹시 본인이 이미지의 저작권자라면 관련 이미지 삭제를 요구하거나 사용 허락을 해줬으면 좋겠다.

## Acronyms and Definitions (용어 정의)
- CCC – Car Communications Computer iDrive Generation 1: dino era to ~2008  
- CIC – Car Information Computer iDrive Generation 2: ~2009-2012  
- NBT – Next Best Thing (aka CIC-High) iDrive Generation 3: ~2012+  
- K-CAN1/2 – Car Area Network communications protocol  
- MOST – ring topology fiber optic communications protocol  
- ALU – aluminum (referring to my aluminum interior trim)  
- ECU – electronic control unit  
- TCU – telematics control unit for telematics and BT (TCU also stands for transmission control unit, but - - were   not working on the transmission here)   
- TRSVC - control unit for rear and side view cameras  
- quadlock – main square wiring harness on the HU  
- kombi – instrument cluster  
- fzd – front courtesy light  


## Required Parts (필요한 부품들)

<img src="http://www.abstractations.com/bmw/nbt/parts_01.jpg" width="600">

### 1. eBay NBT kits:
<!---
- NBT HU (I have HW:07 with internal gyro, although any HW version will work with the emulator I got, including HW:21)
- NBT CID (must be 8.8" from a F20, F25 or F30)
- iDrive Controller (see below)
-->

- NBT HU  
  참고 - 난  HW: 07 버전을 가지고 있다. 비록 다른 HW 버전이라도 내가 가진 애뮬레이터에서 동작헐 것이다. HW: 27 버전 포함
- NBT CID 8.8인치 (F20, F25, F30)
- iDriveController (아래 내용 참고해라.)

### 2. iDrive Controller:
<!---
NBT kits on eBay typically include either the F-series standard controller or the touch controller. These run on the newer K-CAN2 protocol, have different mounting points, and have slightly different dimensions than the CIC iDrive controller.

CIC controllers use a separate frame (the black trim you see in pictures)
F-Series controllers have a built in frame

F-series controllers are NOT plug and play on my emulator and will require moving the two iDrive controller CAN wires from before the emulator to after the emulator. They also require your own ingenuity to mount and, at least on mine, a few mm needs to be shaved off from the CIC controller opening in the ALU trim. It's about 2 mm longer.

My CCC controller with haptic feedback would not register scrolling. You can try your luck with a CCC controller without haptic feedback but you'd be missing the best part of the newer controllers – the shortcuts!

Needless to say, I used a CIC controller and saved the headache. Touch can always be a later project. There are many CIC controllers available on eBay with different part numbers. Not sure what the differences are but they should all work.

If you're going the touch controller route, it also requires the touch ECU, which is specific to your language.

Whichever route you go, here are some handy part numbers:
CIC Controller Frame 51169170917 (only for <2011 CIC controllers)
Touch ECU English 65829320275 (not confirmed)
-->

이베이에 올라온 NBT 킷은 기본적으로  F시리즈 기본 컨트롤러 혹은 터치 컨트롤러를 포함하고 있다. 이 두 컨트롤러는 마운트 포인트가 다른 새로운 K-CAN2 프로토콜를 통해 동작한다. 그리고 CIC 컨트롤러에 비해 약간 다른 치수를 가지고 있다.

CIC 컨트롤러는 분리된 프레임을 사용하지만 F시리즈 컨트롤러는 프레임 안에 설치되어 있다. (한 덩어리를 말하는 것 같음)

F시리즈 컨트롤러는 내 애뮬레이터를 사용하면 플러그앤 플레이로 연결되지 않는다. 그리고 컨트롤러에 애플레이터를 장착하려면 2개의 CAN 배선을 옮기는 작업을 해야한다. 또한 두 배선을 연결하기 위해  머리를 써야 할 것이다. 알루미늄 트림에 장착한 상태에서 보여지는 컨트롤러의 윗부분을 몇 mm 정도 잘라내야 한다. (2mm 이상 정도, F시리즈 컨트롤러를 사용하면 커스터마이징이 필수인 듯)

불필요한 말이지만, **나는 CIC 컨트롤러를 사용해서 골치거리를 덜어냈다.** 터치 컨트롤러는 다음 프로젝트에나 가능하다. 이베이에는 다른 파츠 넘버를 가진 CIC 컨트롤러가 널려있다. 다른 파츠 넘버의 컨트롤러가 모두 작동하는지는 확실하지 않다.

터치 컨트롤러를 장착하고 싶다면 본인의 언어권에 맞는 터치 ECU가 추가적으로 필요하다. 

어떤 방법을 선택하던지 아래의 품번이 필요할 것이다.

- CIC 컨트롤러 프레임 51169170917 (2011년 이상 CIC 컨트롤러를 위한)
- Touch ECU English 65829320275 (확실하지 않음)

### 3. Emulator:
<!--
E-series cars use K-CAN (100kbps) while F-series cars use K-CAN2 (500kbps). The emulator does nav activation and video-in-motion, but more importantly, acts as a CAN bridge to adapt the communications between protocols. There is no way to use NBT in an E-series without an emulator that does CAN bridging. An F-series activation emulator will not be sufficient.

I purchased my adapter from www.customretrofit.ro, which is owned by neo_andersson, a well-respected community member whom I feel is a true asset to the BMW community and has contributed tremendous amounts of information. He is the brains and engineer behind the E-series NBT adapter. I've read each and every post he made on the topic of NBT in the last year before I made the decision to buy, knowing I'll be supporting someone who supports our community.

Coincidentally, neo_andersson and his wife were also passing through my area and were kind enough to grab coffee with me. Without a doubt, he has a true passion for BMWs and knows these cars inside out. Much of my information that I'm sharing in this post comes from him and he deserves credit where due. (Neo isn't his real name, but I'll refer to him as Neo.)
--> 
F바디가 K-CAN2(500kbps)를 사용해도 E바디는 K-CAN(1000kbps)를 사용한다. 애뮬레이터는 내비와 비디오인모션을 활성화 한다. 그러나 더 중요한건  프로토콜 사이의 통신을 연결하는 CAN 브릿지(필터)로서 역할도 수행한다는 것이다. CAN 통신을 연결하는 애뮬레이터 없이 E바디에 NBT를 이식할 수 있는 방법은 존재하지 않는다. F바디 전용 액티베이션 애뮬레이터는 E바디에 적합하지 않다. 

Neo(neo andersson)가 운영하는 [customretrofit.ro](http://www.customretrofit.ro)에서 애뮬레이터를 구매했다. Neo는 BMW 동호회에 큰 기여를 한 신뢰가 가는 동호회 멤버이고 E바디용 NBT 어댑터를 제작했다. E바디 전용  NBT 어댑터 구매를 결심하기 전인  지난 1년동안 Neo가 NBT 주제로 올린 게시글을 매일 꼼꼼히 읽었다.

우연히도 Neo 부부가 내 거주지 근처를 지나게 되면서  커피를 한잔한 적이 있다. 의심할 여지 없이 그는 BMW에 대한 진정한 열정을 가지고 있었고 이 게시물에 공유하는 많은 정보도 그로부터 얻은것이니 그는 당연히 신뢰할만 하다. 
(Neo는 그의 진짜 이름이 아니지만 앞으로 Neo로 언급할거야)


### 3. OEM components coming from CCC (not needed if you have CIC):
<!--
- CIC HU Front Panel 6 Button+AM/FM+Mode 65129270248 (More info later)
  OR Euro CIC HU Front Panel 8 Buttons 65129270250 (not available in NA)
- CIC HU Front Panel Knob 65129114289 (CIC front panel came with the knob)
- CIC Dash Cover 51459120979 (This has heated seats cutout. Find a different part if you don't need the cutout.)  
- E90 LCI Center Console Trim ALU Satin (for CIC controller. Different PN for diff finish.) 51169145143
- 5x MQS Pins (for eNet) 61131393703
- 5x OBD2 Pins (for eNet) (No part number since I was given these. Ask at BMW parts counter.)
-->

- CIC HU Front Panel 6 Button+AM/FM+Mode 65129270248 (More info later)
  OR Euro CIC HU Front Panel 8 Buttons 65129270250 (not available in NA)
- CIC HU Front Panel Knob 65129114289 (CIC 전면 패널은 손잡이와 함께 딸려온다.)
- CIC Dash Cover 51459120979 (이건 열선 시트를 잘라낼거야. 자르기 싫다면 다른 품번을 찾아봐라.)
- E90 LCI Center Console Trim ALU Satin (CIC controller 전용 트림. Different PN for diff finish.) 51169145143
- 5x MQS Pins (for eNet) 61131393703 (차량 전기 장치 > 핀 접점 MQS ELA 핀 5개)
- 5x OBD2 Pins (for eNet) (아직 품번을 몰라서 BMW 센터에 문의할거야.)

### 4. OEM components coming from either CCC or CIC:
<!--
- 4-6x MQS Pins (for microphone rewiring) 61131393703
- Bluetooth Arial Cable 61120137616 (this is from an X5)
- Aux/USB center console socket (4 pin version) 84109237653  
  (you'll have this if you have USB already. There's some 6 pin versions but not sure what they're used for.)
- USB cable 61119129360
- CAT5 network cable   
  (I used these wires for eNet and microphone rewiring, although any wire would work.)

My car already had AUX so no new AUX wiring to HU was required.

(NBT does not officially have a glovebox USB akin to CIC's, but one can be hooked up if desired to USB2.)

OBD2 pins on the bottom and MQS pins on the top
-->

- 4-6x MQS Pins 61131393703 (microphone 재연결용)
- Bluetooth Arial Cable 61120137616 (X5용 품번)
- Aux/USB center console socket 84109237653 (4핀 버전)  
  단, USB가 이미 있어도 6핀 버전이라면 이게 필요할거다. 확실한건 아니다.
- USB cable 61119129360
- CAT5 network cable (나는 eNet와 마이크로폰 재연결용 배선으로 이걸 사용했다. 어떤 배선을 사용해도 동작할 거야.)

내 차는 이미 AUX를 가지고 있어서 새로운 AUX 배선 연결은 필요없었다.
(CIC에 포함되는 글로브 박스 USB는 NBT에서 공식적으로 지원하지 않는다. 그러나 USB 2개가 필요하다면 연결할 수는 있다.)

사진 아래 것이 OBD2 핀들이고 위가 MQS 핀이다. (사진 참고)  
<img src="http://www.abstractations.com/bmw/nbt/parts_02.jpg" width="600">

### 5. OEM components to remove TCU (since BT is built in to NBT):
<!--
If you have a TCU, MULF or Combox, you'll need to remove it.

MOST Termination Loop 61136917541
MOST Termination Plug 61136917978 (I didn't need this but other modules might have a combined MOST plug with 4 conductors. Buy it anyways. It's a few dollars.)
(Optionally you can also disconnect the MOST connection from the MOST junction under the rear seats, but this just seemed easier.)
-->

 이미  TCU, MULF 혹은 Combox가 있다면 그것들을 제거해야 할 것이다.

- MOST Termination Loop 61136917541
- MOST Termination Plug 61136917978  
  단, 나는 이것이 필요하지 않았다. 그러나 다른 모듈들은 MOST 플러그와 결합해야 할 것이다. 몇 푼 아하니 사길 바란다.

선택적으로 뒷 시트 아래  MOST 결합부분에서 MOST 연결를 제거할 수 있는 손쉬운 방법도 있다.


### 6. Aftermarket Components:
<!--
- NBT CID Display Cable 70CM+ (from the emulator seller)

There is no OEM NBT display cable that I'm aware of that's long enough to use in an E90. Your other option is to purchase an OEM F30 cable and extend it yourself. It has 4 shielded conductors plus two power lines.
(NBT F30 CID Display Cable 61129261850)

- 2x #8x3/8" tapping screws (for CIC faceplate mounting – home depot sku 887480010213) 
- 2x #6 washers (for CIC faceplate mounting – home depot sku 887480024517)
-->
- NBT CID Display Cable 70CM+ (애뮬레이터 셀러로 부터 얻을 수 있다.)  
  E바디에 사용할 맘ㄴ큼 충분히 긴 NBT 디스플레이 케이블이 순정품으로는 나오지 않는다.  
  다른 방법은 F30 OEM 케이블을 구해서 연장하는 것이다. (NBT F30 CID Display Cable 61129261850)

- 2x #8x3/8" tapping screws (CIC 전면 플레이트 설치용 – home depot sku 887480010213) 
- 2x #6 washers (CIC 전면 플레이트 설치용 – home depot sku 887480024517)

### 7. Backup Camera (optional)
<!--
Since my NBT emulator emulates the TRSVC unit, I can use any el-cheapo eBay backup camera. I purchased an E90 rear CCD camera that replaces the trunk handle for ~$50 on eBay. NBT takes standard NTSC composite video. Everyone should do this when you retrofit NBT!

The NBT emulator I purchased does not support dynamic parking lines. Neo also has another unit that will superimpose the parking lines based on steering wheel angle. I wish I knew he offered this when I made my purchase!
-->

E바디용 NBT 애뮬레이터는 TRSVC 유닛을 애뮬레이트 할 수 있어서 이베이에 올라온 어떤 후방카메라도 연결할 수 있다. 난 이베이에서 50달러 이하로 판매되는 E90 전용 트렁크용 후면 CCD 카메라를 구매했다. NBT는 표준 NTSC 컴포짓 비디오를 가지고 있다. 

내가 구매한 애뮬레이터는 동적 주차라인을 지원하지 않지만 Neo는 핸들 조양각 기반으로 주차라인을 비디오 위에 올릴 수 있다고 한다. Neo가 추천한 제품을 구매할 것이다. 

### 8. Random Stuff:
- Trim removal tools (ebay)
- Cheapo multi-meter
- Dremel with cutoff wheel
- zip ties
- fabric tape
- electric tape
- heat shrink tubing
- torx screwdriver bits
- random common tools
- Posi-Taps and Posi-Locks (for those who want to avoid soldering. available on amazon)
- 0.5A fast blow fuse and inline holder (for rear view camera)

## Coding Hardware and Software:
- eNet Cable (eBay)
- K+DCAN USB Cable (eBay) (pins 7&8 needs to be disconnected)
- Laptop running 32bit windows (use vmware if necessary)
- eSys + PSdZDATA (and token and/or patched esys jar files)
- NCS Expert + datan (to decode any removed modules)



## Installation

I'm not going to cover everything. Instructions to remove specific parts can be found all over the internet. All you need to do is google "bmw e90 remove [part]". I'll only cover areas that are not well documented or I had trouble doing as others suggested.

Most of the pins, including the quadlock, are standard MQS pins. The exception is the OBD2 port, which uses different pins. See eNet section for pictures.


### 1. Remove existing HU
This has been well documented with the CIC retrofit threads.

### 2. Wire eNet if coming from CCC
CIC equipped cars are already prewired with eNet wiring. CCC cars need 5 new wires.
On my car, pin 29 on the quadlock was already occupied by a positive fan power line for the CCC unit. This won't be needed since we're taking out CCC. In it's place, you can wire up ETH_A.
Match up the wires from the quadlock to the OBD2 using these two pinouts diagrams.

Wires can be pulled under the carpeting in the driver footwell. Remove the driver foot panel and the panel covering the obd2 port. 3 torxs screws on the foot panel. 2 philips screws on the obd2 cover. Careful with the MOST diagnostics port connected to the foot panel. As always, treat fiber optic cables with the utmost respect! Do not bend them any more than absolutely necessary!

### 3. Wire microphone from courtesy lights to quadlock
Remove FZD (courtesy lights) by taking out the two sun visors. You can get your hand between the headliner to release the two clips right above the circular lights. I tried using the screwdriver prying method others talk about online to no avail.

Remove A-piller.
Remove glovebox

Pull wire down, making sure the wire in the A-piller is where the existing wires are bundled and not in front of the curtain airbag. Wires went behind the square metal bar used to hold he glovebox in place. If wiring is above, below or in front, I would expect trouble reinstalling the glovebox.

Microphone and quadlock both use MQS pins. Mine had two conductors although some may have three.

### 4. Wire BT antenna from driver footwell to HU
Remove driver side foot panel. It's three torx screws. BT module is the little black box towards the left mounted on the backside of the panel. You'll need to shave off one of the flanges on the NBT Bluetooth connector to fit the BT cable. Look carefully and you'll know which one needs to go. No modifications necessary on the BT aerial end.

### 5. Wire USB from center console to HU
Remove rear air vent by pulling the back or using a trim tool. Pull air vent back as far as possible by releasing the retention clips on the sides. Stick your hand between to push out the aux faceplate strait up and out. This was a real punisher with lots of pain.
Take out the gear shifter by pulling strait up. Pull up the black plastic frame surrounding the gear shifter by grabbing the edge through the faux leather. Take out the center console trim by grabbing through the gear shifter hole and pulling strait up hard. Pull the new USB wire to the HU.

Note: USB cable needs to be rotated 180 degrees. You can do that by shaving the connector and cutting off the clip on one side.

### 6. Wire backup camera from trunk lid to HU
Instructions are all over the internet for installing it on your trunk. Pull the composite video cable up to the quadlock and plug in the two MQS pins.

To get wiring past the backseat to the cabin, remove the seat cushion by pulling it strait up near the corners. You can pull this wire without taking out all the trim on the right side of the car. Simply slip it under the black plastic edging. Here, you'll be up to the glovebox.
Inner wire on the composite cable is the positive.

I got a switched positive lead from pin 13 from the quadlock using a posi-tap on the plug and play harness. This is a radio_on trigger line with a 0.5A current load. Although the camera consumes <100mW, make sure to add a 0.5A inline fast blow fuse to protect the head unit. Ground can come from most nuts and bolts in the trunk. Use a multimeter to test for power.


### 7. Retrofit NBT LCD to CCC/CIC monitor frame
Get the CCC or CIC screen out. See CIC retrofit threads if needed. It's only held in by two torx screws at the top.

Take off the back plastic cover from the NBT CD screen by releasing the clips. The LCD is attached to the front glass by double sided foam adhesives. You'll need to break the bond with brute force. Grab the LCD and pull directly out as hard as you can. You'll break the outer glass in the process. After it breaks, just keep pulling until you get the screen out. The inner frame will take the stress off the LCD panel and you won't damage the LCD in the process.
Next, cut off the lower edge and metal hooks with a dermal.

The NBT LCD had a thinner bezel than my CCC screen. Shave or dremel out anything that prevents the LCD from sitting flush in the frame, namely the two edges where the wings are different. Remember to use masking tape and paper/bag/something to seal the LCD opening in the CCC frame to prevent shavings from entering the area while you're trimming the edges.
Take a look at the screen in the frame to feel out the "center" position for the LCD screen. Cut and stick 3M double-sided foam adhesives to the LCD frame. Stick. Done. You'll only have one shot. Get it right! If you want to go crazy, dremel out everything that's preventing the back plate from clipping back together.

### 8. Install NBT head unit in dashboard
<!--
I used a plug and play wiring harness instead of tapping and cutting the original wires. This was by far the most painful part of the installation. It took me 4 hours and a lot of scrapes. At the end, I had to remove the radio/climate frame and put all unnecessary stuff to the empty space on the right. I also needed a zip tie to hold up the bundle of wires to clear the USB, BT, and video connectors.

I haven't made new mounting points to screw in the HU yet. It should require drilling two holes and moving the metal clips that the screw threads catch on to.
Note: If you have Logic 7 and going for the plug and play wiring harness, you'll need to transfer the fiber optic lines from the original quadlock to the new quadlock. Be gentle with the fiber optic cables.
-->
나는 순정 배선을 회손하는 대신에 플러그앤플레이 하네스를 사용했다. 하네스는 설치시 괴로운 부분을  수월하게 해준다. 헤드 유닛 설치에 4시간이 걸리고 많은 스크레치를 남겼다. 라디오/공조기 프레임과 불필요한 부품들을 걷어냈다. 또한 USB, 블루투스 그리고 비디오 커넥터의 배선을 정리하기 위해 zip tie가 필요했다.

나는 아직 헤드유닛 안에 새로운 연결 포인트를 만들지 않았다. 새로운 연결 포인트는 두 개의 드릴 구멍이 필요하고 메탈 클립을 위치를 옮겨야 한다.
[주의] 로직 7 장착 차량이고 프러그앤 플레이 하네스를 사용한다면, 쿼드록의 섬유 광 케이블 라인을 수정할 필요가 있다.


### 9. Remove redundant parts (TCU, MULF, Combox)
My TCU was in the trunk under the removable bottom panel. I didn't take any pictures in the process but it's pretty simple. Just unplug everything, plug the MOST line in to the MOST terminator and wrap everything up with foam to prevent rattles. This took me at most five minutes.


### 10. Install new CIC front panel and dash cover
Cut upper pins. Cut clips. Shorten guides and screw in front panel.


## Coding
You'll need your emulator provider to do the coding or provide instructions. The coding to get it working at a bare minimum level is beyond me and probably specific to the emulator's implementation.
I did some coding myself with e-sys. There's no DHCP server handing out IP addresses to the NBT. Connect via gateway URL using default IP: port 169.254.199.99:6801 with windows Ethernet IP set to 169.254.199.100 and gateway 255.255.0.0. I had to make my own VO file before e-sys would code successfully.
I should have needed to remove TCU VO to prevent SOS error. However, for some reason, mine didn't throw an error on the kombi so I didn't do this step.


## Open Issues with Coding/Firmware

I'm sure most of these can be corrected with coding.

- [FIXED with firmware update] North America 2015-1 NEXT maps don't map addresses correctly in my area. NA 2014-2 seems better.
- RDS-TMC traffic not working
- [Fixed with coding] Can't seem to remove BMW Assist menu items (probably some coding issue)

Observations about NBT in E-series

- [FIXED with firmware update] Reads but cannot play MP3s from USB. Oddly, can copy to hard drive and play without issues.
- [FIXED with firmware update] Navigation arrival time wrong. Makes the nav unit just about useless. 
- Emulator supports video in motion.
- Sports display units do not stick. Will need to change to HP & lbs/ft each power cycle.
- CIC front panel backlights are lit when I enter the car. Apparently this is to match cars with FRM2 and FRM3's welcome lights that turn backlights on on unlock.
- US CIC faceplate with 6 buttons, AM/FM and Mode buttons. 1-6 are touch sensitive, and AM/FM and Mode act as shortcut 7&8. Coding to 6button_us only disables AM/FM. Fix, buy euro faceplate?
- [FIXED with firmware update] Service required menu shows two blanks for sparkplug and microfilter. Apparently these fields were removed from F-series vehicles. Can be coded out of kombi on E-series to remove the blanks.


## Next Steps
- [Done] Drill new holes in dash bracket to secure NBT head unit.
- [Done] Clean up rear view camera wiring.
- [Done] Reinstall dash trim.

## Done!
NBT is great! Best thing you can do for your car if you're looking for something refreshed from CCC or CIC. Not much more I can say asides from the system being absolutely wonderful to use! It has all the bells and whistlers of any modern media system.