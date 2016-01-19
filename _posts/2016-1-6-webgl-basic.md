---
layout: post
title: WebGL 기본 정리
categories: webgl
---

WebGL 공부에 앞서 살펴봐야 할 기본 내용을 정리해 본다.

## 1. 브라우저 지원
2012년만 해도 모바일웹에서 WebGL를 지원하는 브라우저가 전무했다.  
하지만 2016년 1월 현재, iOS/Android에서 WebGL를 어느정도 지원하고 있다.

* WebGL 지원 여부 확인 
 - [http://get.webgl.org](http://get.webgl.org)
 - [http://caniuse.com/#search=webgl](http://caniuse.com/#search=webgl)

* WebGL 세부사항 확인
 - [http://www.doesmybrowsersupportwebgl.com](http://www.doesmybrowsersupportwebgl.com)
 - [http://webglreport.com](http://webglreport.com)

* WebGL 데모
 - https://www.chromeexperiments.com
 - http://webglsamples.org

### PC
 - IE11+
 - Firefox 4+
 - Chrome 8+
 - Safari 5.1+

### 모바일
 - iOS Safari 8+
 - Android Browser 46+ (Android 5-6.x)
 - Chrome for Android 47+

## 2. 좌표계
오른손 좌표계 (모니터가 나를 향한 방향 Z+)

<img width="500" alt="webgl-view-coord" src="https://cloud.githubusercontent.com/assets/6646861/12256982/908e8ff2-b945-11e5-8aa6-36b37dee8ea8.png">

### 좌표계 범위
- -1 <= X <= +1
- -1 <= Y <= +1
- -1 <= Z <= +1

### 클립 공간 (2D)
<img width="500" alt="clip-space-2d" src="https://cloud.githubusercontent.com/assets/6646861/12261818/f054ba1c-b966-11e5-90a3-2e76e3dc2569.png">

### 로컬과 월드 공간
- 로컬은 객체마다 가지는 좌표 공간
- 월드는 로컬 좌표 공간을 가진 객체가 놓이는 공간

### 카메라 공간
- Camera/Eye/View 공간이라고 불림
- 사람의 눈. 즉, 카메라 좌표를  중심으로 바라본 공간
- 객체의 좌표는 카메라 공간을 중심으로 변환
- 객체 좌표(0,0,0) -> 카메라 좌표(0,0,100) = 카메라 기준 객체 좌표 (0,0,-100)

### 버텍스 회전 방향
- 버텍스 인덱스 순서로 회전 방향 결정
- 반시계방향(CCW): 앞면
- 시계방향(CW): 뒷면

## 텍스처링(texuring)

### 텍스처 좌표
- S, T
- (0, 0) 좌측하단
- (1, 1) 우측상단
