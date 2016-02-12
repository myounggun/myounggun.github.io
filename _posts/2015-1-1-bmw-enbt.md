---
layout: post
title: BMW eNBT - CCC to NBT Retrofit for E93
categories: bmw
---


- 원문 - [e90 CCC and CIC to NBT retrofit DIY](http://www.bimmerfest.com/forums/showthread.php?t=799458)

## Background:
<!--
I'm almost finished the elusive E90 CCC to NBT retrofit. Since the BMW community has helped me tremendously in the past, I thought I would share my experience on this scarcely documented procedure. CIC to NBT retrofit would be a subset of the CCC to NBT requirements.

I have a 2006 E90 330i. For equipment relevant to the retrofit, my car was equipped with CCC /w voice control, telematics, Logic 7, heated seats, and ALU satin trim. Your car may be different and may require parts suitable for your equipment package.
-->

나는 어려운 CCC에서 NBT로 이식을 거의 마무리 했다. 그동안 BMW 커뮤니티의 엄청난 도움을 받았다. 나의 경험을 문서화로 공유하고자 마음 먹었다. NBT 변경 작업은 CCC의 작은 부분을 NBT 부품으로 대체하는 것이다. 

나는  2006년식 E90 330i를 소유하고 있다. 내 차는 CCC와 보이스 컨트롤, 텔레메틱스, 로직6, 열선 시트 그리고 알루미늄 트림을 갖추고 있다. 네 차는 아마도 다른 부품이 필요할 수도 있다.

## Disclaimer:
<!--
I wasn't nearly as trigger happy with my camera as I should have been, and as a result, I took many pictures after the fact. I also "borrowed" a few from google images. If you own the image, please let me know and I can remove it or give credit.

I am NOT responsible if you buy parts that do not fit your car or if you damage your car in the process.
-->

내가 했던 작업을 멋진 사진으로 포장하여 뽐뿌를 넣지 않을 것이다. 나는 작업 현실을 위해 많은 사진을 찍었다. 또한 나는 구글 이미지를 마단으로 가져왔다.
네가 이미지의 저작권자라면 나는 이미지를 삭제하거나 그냥 사용할 수 있게 해주길 바란다.


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

- NBT HU (나는 HW: 07 버전을 가지고 있다. 비록 다른 HW 버전이라도 내가 가진 애뮬레이터에서 동작헐 것이다. HW: 27 버전 포함)
- NBT CID 8.8인치 (F20, F25, F30)
- iDriveController(아래 참고)

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

이베이에 올라온 NBT 킷은 전형적으로 F시리즈 기본 컨트롤러 혹은 터치 컨트롤러를 포함하고 있다. 이 두 컨트롤러는 마운트 포인트가 다른 새로운 K-CAN2 프로토콜에서 동작한다. 그리고 CIC 컨트롤러에 비해 약간 다른 치수를 가지고 있다. (주의)

CIC 컨트롤러는 분리된 프레임을 사용한다. (사진에 보여지는 블랙 트림)
F시리즈 컨트롤러는 프레임 안에 설치되어 있다. (한 덩어리를 말하는 것 같음)

F시리즈 컨트롤러는 내가 가진 애뮬레이터에 플러그앤 플레이로 연결되지 않는다. 그리고 컨트롤러는 애플레이터 장착하기 위해서 2개의 CAN 배선을 옮겨야 한다. 또한 두 배선을 마운트하기 위해 너의 독창성을 필요하다. 알루미늄 트림에 장착되어 보여지는 컨트롤러를 몇 mm 정도 잘라내야 한다. 2mm 이상 정도이다.
(F시리즈 컨트롤러를 사용하면 커스터마이징이 필수인 듯)

불필요한 말이지만, **나는 CIC 컨트롤러를 사용해서 골치거리를 덜어냈다.** 터치 컨트롤러는 다음 프로젝트에나 가능하다. 이베이에는 다른 파츠 넘버를 가진 CIC 컨트롤러가 널려있다. 다른 파츠 넘버의 컨트롤러가 모두 작동하는지는 확실하지 않다.

니가 터치 컨트롤러를 장착하는 방향으로 간다면, 너의 언어권에 맞는 터치 ECU 또한 필요하다. 

니가 어떤 방법을 선택하던지 필요한 품번은 아래 적어놨다.

- CIC 컨트롤러 프레임 51169170917 (2011년 이상 CIC 컨트롤러를 위한)
- Touch ECU English 65829320275 (확실하지 않음)

### 3. Emulator:
<!--
E-series cars use K-CAN (100kbps) while F-series cars use K-CAN2 (500kbps). The emulator does nav activation and video-in-motion, but more importantly, acts as a CAN bridge to adapt the communications between protocols. There is no way to use NBT in an E-series without an emulator that does CAN bridging. An F-series activation emulator will not be sufficient.

I purchased my adapter from www.customretrofit.ro, which is owned by neo_andersson, a well-respected community member whom I feel is a true asset to the BMW community and has contributed tremendous amounts of information. He is the brains and engineer behind the E-series NBT adapter. I've read each and every post he made on the topic of NBT in the last year before I made the decision to buy, knowing I'll be supporting someone who supports our community.

Coincidentally, neo_andersson and his wife were also passing through my area and were kind enough to grab coffee with me. Without a doubt, he has a true passion for BMWs and knows these cars inside out. Much of my information that I'm sharing in this post comes from him and he deserves credit where due. (Neo isn't his real name, but I'll refer to him as Neo.)
--> 
F바디가 K-CAN2(500kbps)를 사용해도 E바디는 K-CAN(1000kbps)를 사용한다. 애뮬레이터는 내비와 비디오인모션을 활성화 한다. 그러나 중요한건  프로토콜 사이의 통신을 연결하는 CAN 브릿지(필터)로서 역할도 수행한다. CAN 통신을 연결하는 애뮬레이터 없이 E바디에 NBT를 이식할 방법은 존재하지 않는다. F바디 액티베이션 애뮬레이터는 E바디에 적합하지 않다. 

나는 neo andersson이 운영하는 [customretrofit.ro](http://www.customretrofit.ro)에서 애뮬레이터를 구매했다. neo andersson은 BMW 동호회에 큰 기여를 한 신뢰가 가는 사람으로 E바디용 NBT 어댑터를 만들었다. E바디용 NBT 어댑터를 구매를 결심하기 전까지 나는 그가 지난 1년동안 NBT 주제로 올린 글을 매일 꼼꼼히 읽었다.

우연히도 neo andersson 부부가 내가 있는 곳을 지나가면서 커피 한잔한게 다야. 의심할 여지 없이 그는 BMW에 대한 진정한 열정을 가지고 있고 이 게시물에 공유하는 많은 정보도 그로부터 얻은것이니 그는 당근 신뢰할만 하다. 
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
- CIC Dash Cover 51459120979 (이건 열선 시트를 잘라낼거야. 자르기 실으면 다른 품번을 찾아봐라.)
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
- CAT5 network cable (나는 eNet와 마이크로폰 재연결 배선으로 이걸 사용했다. 어떤 배선을 사용해도 동작할 거야.)

내 차는 이미 AUX를 가지고 있어서 새로운 AUX 배선 연결이 불필요 했다.
(CIC에 있는 글로브 박스 USB는 NBT에서는 공식적으로 지원하지 않는다. 그러나 니가 USB 2개가 필요하다면 연결할 수는 있다.)

사진 아래 것이 OBD2 핀들이고 위가 MQS 핀이다. (사진 참고)  
<img src="http://www.abstractations.com/bmw/nbt/parts_02.jpg" width="600">

### 5. OEM components to remove TCU (since BT is built in to NBT):
<!--
If you have a TCU, MULF or Combox, you'll need to remove it.

MOST Termination Loop 61136917541
MOST Termination Plug 61136917978 (I didn't need this but other modules might have a combined MOST plug with 4 conductors. Buy it anyways. It's a few dollars.)
(Optionally you can also disconnect the MOST connection from the MOST junction under the rear seats, but this just seemed easier.)
-->

니 차량에 TCU, MULF 혹은 Combox가 있다면 그것들을 제거해야 할 것이다.

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

There is no OEM NBT display cable that I'm aware of that's long enough to use in an E90. Your other option is to purchase an OEM F30 cable and extend it yourself. It has 4 shielded conductors plus two power lines.
(NBT F30 CID Display Cable 61129261850)
E바디에 사용할 맘ㄴ큼 충분히 긴 NBT 디스플레이 케이블이 순정품으로는 나오지 않는다. 다른 방법은 F30 OEM 케이블을 구해서 연장하는 것이다.
(NBT F30 CID Display Cable 61129261850)

- 2x #8x3/8" tapping screws (CIC 전면 플레이트 설치용 – home depot sku 887480010213) 
- 2x #6 washers (CIC 전면 플레이트 설치용 – home depot sku 887480024517)

### 7. Backup Camera (optional)
<!--
Since my NBT emulator emulates the TRSVC unit, I can use any el-cheapo eBay backup camera. I purchased an E90 rear CCD camera that replaces the trunk handle for ~$50 on eBay. NBT takes standard NTSC composite video. Everyone should do this when you retrofit NBT!

The NBT emulator I purchased does not support dynamic parking lines. Neo also has another unit that will superimpose the parking lines based on steering wheel angle. I wish I knew he offered this when I made my purchase!
-->

나의  NBT 애뮬레이터는 TRSVC 유닛을 애뮬레이트 할 수 있어서 이베이에 올라온 어떤 후방카메라도 연결할 수 있다. 나는 이베이에서 50달러 이하로 판매되는 E90 전용 트렁크 핸들 1:1 교체 방식의 후면 CCD 카메라를 구매했다. NBT는 표준 NTSC 컴포짓 비디오를 가지고 있다. 

내가 구매한 애뮬레이터는 동적 주차라인을 지원하지 않는다. Neo는 핸들 조양각 기반으로 주차라인을 

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
