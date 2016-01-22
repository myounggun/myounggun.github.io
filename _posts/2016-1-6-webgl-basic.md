---
layout: post
title: 웹지엘 소개
categories: webgl
---

웹지엘 공부에 앞서 살펴봐야 할 기본 내용을 정리해 본다.

## 웹지엘
- 오픈지엘 ES 2.0 기반 - [웹지엘 소개](https://www.khronos.org/webgl)
- Canvas3D로 프로토타입 시작
- 2009년, 웹지엘 위원회 창설
- 2011년, 웹지엘 1.0 스펙 결정 - [웹지엘 스펙](https://www.khronos.org/registry/webgl/specs/latest)
- 로우 레벨 API
- 로열티 없는 공개 표준
- GPU 렌더링 지원
- 웹 브라우저 내장 (플러그 X)
- 많은 브라우저 벤더 참여

## 렌더링 방법
그래픽 라이브러리는 두 가지 렌더링 방식을 가지고 있다.

### 즉시 모드(immedate mode)
- 프레임마다 전체 장면을 다시 그린다.
- 사용자가 구현할 부분이 많다.
- 웹지엘은 즉시모도 사용한다.


### 지연(보류) 모드(retain mode) 
- 내부 모델(렌더 트리 등)을 유지하여 변화된 부분만 업데이트 한다.
- 그래픽 라이브러리에서 많은 일을 사용자 대신 해준다.
- [three.js](http://threejs.org), SVG, Flash 등이 지연모드를 사용한다.

## 브라우저 지원
2012년만 해도 모바일웹에서 웹지엘을 지원하는 브라우저가 전무했다.  
하지만 2016년 1월 현재, iOS/Android에서 웹지엘을 어느정도 지원하고 있다.

* 웹지엘 지원 여부 확인 
 - [http://get.webgl.org](http://get.webgl.org)
 - [http://caniuse.com/#search=webgl](http://caniuse.com/#search=webgl)

* 웹지엘 세부사항 확인
 - [http://www.doesmybrowsersupportwebgl.com](http://www.doesmybrowsersupportwebgl.com)
 - [http://webglreport.com](http://webglreport.com)

* 웹지엘 데모
 - [https://www.chromeexperiments.com](https://www.chromeexperiments.com)
 - [http://webglsamples.org](http://webglsamples.org)

### PC
 - IE11+
 - Firefox 4+
 - Chrome 8+
 - Safari 5.1+

### 모바일
 - iOS Safari 8+
 - Android Browser 46+ (Android 5-6.x)
 - Chrome for Android 47+
