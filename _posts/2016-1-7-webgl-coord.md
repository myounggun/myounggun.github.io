---
layout: post
title: WebGL 좌표계
categories: webgl
---

WebGL 좌표계, 클립 공간, 뷰 볼륨에 대해 살펴봅니다.

## 1. 좌표계의 이해
### 데카르트 좌표계
<img width="500" alt="descartes_coord" src="https://cloud.githubusercontent.com/assets/6646861/12419771/7c54f146-befb-11e5-8433-e7ed9dbf582c.png">  
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

### 텍스처 좌표계  
<img width="500" alt="texture_coord" src="https://cloud.githubusercontent.com/assets/6646861/12419761/72045dda-befb-11e5-9ff6-cfe106a5f262.png">  
- S, T (U, V)  
- (0, 0) 좌측하단  
- (1, 1) 우측상단  

WebGL 텍스처 좌표는 위쪽이 +Y 방향이지만,  
이미지 좌표는 아래쪽이 +Y 방향인 스크린 좌표계를 따른다.  
따라서 별 다른 처리없이 이미지를 매핑하면 상이 뒤집힌다.

- 이미지 좌표  
<img width="500" alt="texture_screen_coord" src="https://cloud.githubusercontent.com/assets/6646861/12420107/d0972236-befd-11e5-89ee-3b56f4f0345d.png"> 
	- 이미지 좌표는 아래쪽 +Y 스크린 좌표

- 텍스처 좌표  
<img width="500" alt="texture_coord_flip" src="https://cloud.githubusercontent.com/assets/6646861/12420122/f4ffc2cc-befd-11e5-870c-43178a55bfd7.png">  
	- 이미지를 그대로 매핑하여 Y축 기준으로 이미지가 뒤집힌 상태
 
### 클립 영역
<img width="500" alt="clip-space-2d" src="https://cloud.githubusercontent.com/assets/6646861/12261818/f054ba1c-b966-11e5-90a3-2e76e3dc2569.png">   ㅇ

(작성중)

---

## 뷰 볼륨
WebGL 뷰 볼륨 2x2x2


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

---

### 참고
- [OpenGL Projection Matrix - songho.ca](http://www.songho.ca/opengl/gl_projectionmatrix.html)

![http://www.songho.ca/opengl/files/gl_projectionmatrix01.png](http://www.songho.ca/opengl/files/gl_projectionmatrix01.png)  
![http://www.songho.ca/opengl/files/gl_projectionmatrix03.png](http://www.songho.ca/opengl/files/gl_projectionmatrix03.png)  
![http://www.songho.ca/opengl/files/gl_projectionmatrix04.png](http://www.songho.ca/opengl/files/gl_projectionmatrix04.png)
> Perspective Frustum and Normalized Device Coordinates (NDC)  
