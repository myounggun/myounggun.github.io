---
layout: post
title: WebGL 필수 용어 정리
categories: webgl
---

WebGL을 공부할 때 필수적으로 알아야 할 용어를 정리해 본다.

## 기본 용어

---

### 버텍스(vertex)
	- 3D 객체의 꼭지점 혹은 정정
	- 하나의 정점은 3차원 좌표계로 구성(x, y, z)
	- 실수형(float type)

### 인덱스(index)
	- 버택스의 접근자
	- 정수형(integer type)

### 기하(geometry)
	- 버텍스로 구성하는 도형
	- 3개의 버텍스로 이루어진 하나 이상의 삼각형으로 구성

### 텍스처(texure)
	- 물체의 표면의 질감을 나타내는 2차원 사진
	- 텍스처 좌표는 S(x), T(y) 2차원 좌표로 구성 (DirectX는 UV로 표현)
	- 사진은 픽셀(pixel, picture element)로 구성
	- 텍스처는 텍셀(texel, texture element)로 구성

### 프래그먼트(fragment)
	- 웹지엘에서 픽셀을 프래그먼트로 표현
	- 버텍스로 구성된 삼각형에 색상/텍스처 등을 할당

### 버퍼(buffer)
	- 버텍스/인덱스/컬러 정보/텍스처 좌표 등을 저장하는 GPU 메모리

### 타입드어레이(typed array)
	- 자바스크립트 배열로 8종 (Int8/16/32Array, Uint8/16/32Array, Float32/64Array)
	- 바이너리 데이터 접근으로 기하 처리 성능 향상
	- bufferData 소스로 사용

### 버텍스 버퍼 오브젝트(VBO, Vertex Buffer Object)
	- 웹지엘용 버텍스 버퍼 객체
	- 버텍스 좌표로 구성된 기하 데이터 저장
	- 데이터는 자바스크립트 배열 사용(Float32Array, typed array)

### 인덱스 버퍼 오브젝트(IBO, Index Buffer Object)
	- 웹지엘용 인덱스 버퍼 객체
	- 데이터는 자바스크립트 배열 사용(Uint16Array, typed array)
	- 16비트 정수형으로 제한(65,535개)


## 셰이더 용어
---

GLSL(OpenGL Shading Language, 오픈지엘 셰이딩 언어)에 대한 이해가 필요하다.

### 버택스 셰이더(vertex shader)
	- 버텍스 마다 호출
	- 기하 데이터(버텍스 좌표, 텍스처 좌표 등) 처리

### 프래그먼트 셰이더(pragment shader)
	- 각 픽셀(프래그먼트)의 색상 계산 처리

### 셰이더 프로그램(shader program)
	- 컴파일한 버텍스/프래그먼트 셰이더를 링크하여 GPU에 전달
	- 두 개 셰이더를 링크 하는 순간 동일한 이름으로 선언된 베이링 변수 연결

### 애트리뷰트(attribute)
	- 버텍스 셰이더와 웹지엘 간의 버텍스 데이터 연결
	- 버텍스 세이더에서 사용하는 입력 변수
	- 버택스 좌표/색상, 텍스쳐 좌표, 법선 벡터(vertex normal) 등 처리

### 유니폼(uniform)
	- 버텍스/프래그먼트 셰이더 양쪽에서 사용하는 읽기 전용 변수
	- 광원 등 처리
	- gl.unifomMatix#fv()를 통해 자바스크립트에서 셰이더로 전달
	- gl.uniformMatrix4fv는 실수형 벡터를 사용하는 4x4 행렬 의미
	- gl.uniform3fv는 3개의 실수형 벡터 의미 (3차원 좌표, vec3)

### 베어링(varing)
	- 버택스 세이더에서 프래그먼트 세이더로 값을 전달할 때 사용하는 변수
	- 양쪽 셰이더에서 동일한 변수명으로 선언해야 변수 공유 가능
	- 버텍스 셰이더에서는 읽기/쓰기 가능하지만 프래그먼트 셰이더에서는 읽기 전용

### 상수(const)
	- 컴파일타임(compile-time) 상수

### 타입(type)
	- void: 반환값 없는 함수
	- bool: 조건형
	- int: 부호가 있는 정수형(signed integer)
	- float: 실수형
	- vec#: #개의 실수형 벡터(vec2, vec3, vec4)
	- bvec#: #개의 조건형 벡터(bvec2, bvec3, bvec4)
	- ivec#: #개의 정수형 벡터(ivec2, ivec3, ivec4)
	- mat#: #X# 실수형 행렬(mat2, mat3, mat4)
	- sampler2D: 2D 텍스처 핸들
	- samplerCube: 큐브맵 텍스처 핸들

``` glsl
attribute vec3 aVertexPosition;
	
varying vec4 vColor;
varying vec2 vTextureCoord;
varying vec3 vVertexNormal;

uniform sampler2D uSampler;
uniform samplerCube uCubeSampler;
```
