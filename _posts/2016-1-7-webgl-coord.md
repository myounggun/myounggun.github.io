---
layout: post
title: WebGL 좌표계
categories: webgl
---

WebGL 좌표계, 클립 공간, 뷰 볼륨에 대해 살펴봅니다.

## 1. 좌표계의 이해
### 데카르트 좌표계
- 위쪽 +Y 기본 좌표계
- 데카르트  == 카테시안
  (Orgin: Descartes -> Latin: Catesius adj. Cartesian)

### 오른손 좌표계
<img width="500" alt="webgl-view-coord" src="https://cloud.githubusercontent.com/assets/6646861/12256982/908e8ff2-b945-11e5-8aa6-36b37dee8ea8.png">
> \+ 방향만 표시한 오른손 좌표계 

- 모니터가 나를 향한 방향 +Z
- 카메라/모델의 죄표계로 사용
- 좌표계 범위
	- -1 <= X <= +1
	- -1 <= Y <= +1
	- -1 <= Z <= +1
 
### 클립 영역
<img width="500" alt="clip-space-2d" src="https://cloud.githubusercontent.com/assets/6646861/12261818/f054ba1c-b966-11e5-90a3-2e76e3dc2569.png">

## 뷰 볼륨
WebGL 뷰 볼륨 2x2x2

### NDC(normalized device coordinates)
<img width="500" alt="ndc" src="https://cloud.githubusercontent.com/assets/6646861/12261817/f02ced98-b966-11e5-905c-5a2378397ed6.png">

- [주의] 오른손 좌표계와 +Z 방향 반대 (모니터를 향한 방향 +Z)

### Near, Far 평면
- Near ~ Far 범위로 객체의 깊이를 구할 수 있다.
- Near 평면은 NDC Z축의 -1에 대응 (Near != 0)
- Far 평면은 NDC Z축의 +1에 대응
- 카메라 공간으로 NDC를 바라보면 Z는 음의 방향으로 멀어진다.
- Near: 0.1 -> -Near: -0.1
- Far: 100 -> -Far: -100
- -0.1 ~ -100 -> NDC 맵핑 

```
(0) z' = A * z + B
(1) A * -Near + B = -1
(2) A * -Far + B = 1
--
-(A * -Far + B) = -1 

-1 - 1 = -2
A * -Near + B -(A * -Far + B) = -2 // B 소거
A * (-Near + Far) = -2

따라서 A = 2 / (Near - Far)

(1) 대입

따라서 B = (Near + Far) / (Near - Far)

(0) 대입

결국 z' = 2 / (Near - Far) * z + (Near + Far) / (Near - Far)

Near = 0.1, Far = 100이라면
Near - Far = -99
Near _ Far = 100.1

z' = (2 * z + 100.1) / -99.9

z = -0.1 -> z' = -1
z = -100 -> z' = 1

```

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

---

### 참고
- [OpenGL Projection Matrix - songho.ca](http://www.songho.ca/opengl/gl_projectionmatrix.html)

![http://www.songho.ca/opengl/files/gl_projectionmatrix01.png](http://www.songho.ca/opengl/files/gl_projectionmatrix01.png)  
![http://www.songho.ca/opengl/files/gl_projectionmatrix03.png](http://www.songho.ca/opengl/files/gl_projectionmatrix03.png)  
![http://www.songho.ca/opengl/files/gl_projectionmatrix04.png](http://www.songho.ca/opengl/files/gl_projectionmatrix04.png)
> Perspective Frustum and Normalized Device Coordinates (NDC)  
