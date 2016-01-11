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
 - [http://get.webgl.org](http://get.webgl.org/)
 - [http://caniuse.com/#search=webgl](http://caniuse.com/#search=webgl)

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
- 데카르트 좌표계 사용 (위쪽 Y+)  
- 데카르트 == 카테시안 좌표계(Orgin: Descartes -> Latin: Catesius adj. Cartesian)
- 오른손 좌표계 (모니터가 나를 향한 방향 Z+)

### 좌표계 범위
- -1 <= X <= +1
- -1 <= Y <= +1
- 0 <= Z < +1

### 텍스처 좌표계
- S, T
- (0, 0) 좌측하단
- (1, 1) 우측상단

