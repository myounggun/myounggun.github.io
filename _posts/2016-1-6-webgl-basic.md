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
 - [http://webglreport.com](http://webglreport.com)

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
 
<img width="500" alt="webgl-view-coord" src="https://cloud.githubusercontent.com/assets/6646861/12256982/908e8ff2-b945-11e5-8aa6-36b37dee8ea8.png">

### 좌표계 범위
- -1 <= X <= +1
- -1 <= Y <= +1
- -1 <= Z <= +1

### 클립 공간 (2D)
<img width="500" alt="clip-space-2d" src="https://cloud.githubusercontent.com/assets/6646861/12261818/f054ba1c-b966-11e5-90a3-2e76e3dc2569.png">

### NDC(normalized device coordinates)
- [주의] 오른손 좌표계와 Z+ 방향 반대 (모니터를 향한 방향 Z+)  

<img width="500" alt="ndc" src="https://cloud.githubusercontent.com/assets/6646861/12261817/f02ced98-b966-11e5-905c-5a2378397ed6.png">

## 텍스처링(texuring)

### 텍스처 좌표
- S, T
- (0, 0) 좌측하단
- (1, 1) 우측상단

---

### 참고
- [OpenGL Projection Matrix - songho.ca](http://www.songho.ca/opengl/gl_projectionmatrix.html)

![http://www.songho.ca/opengl/files/gl_projectionmatrix01.png](http://www.songho.ca/opengl/files/gl_projectionmatrix01.png)  
![http://www.songho.ca/opengl/files/gl_projectionmatrix03.png](http://www.songho.ca/opengl/files/gl_projectionmatrix03.png)  
![http://www.songho.ca/opengl/files/gl_projectionmatrix04.png](http://www.songho.ca/opengl/files/gl_projectionmatrix04.png)
> Perspective Frustum and Normalized Device Coordinates (NDC)  
