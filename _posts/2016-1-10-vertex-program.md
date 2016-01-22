---
layout: post
title: 버텍스 처리(vertex processing)
categories: webgl
---

3D 버텍스 좌표를 2D 스크린 좌표에 투영하는 과정을 말한다. 
특히 뷰 변환은 카메라와 관련이 있다. 웹지엘 카메라는 4x4 행렬을 이용한다.
행렬 변환으로 카메라와 3D 객체를 컨트롤하는 기본 내용을 담고 있다. (정리중)

## 1. 버텍스 변환
3D 객체를 구성하는 1x3 버텍스는 4x4 행렬을 거쳐 변환이 일어난다.  
행렬 연산은 마주보는 차수가 같아야 가능하다.    
버텍스 차수를 하나 늘린 동차 좌표를 사용하는 이유다. (1x4 * 4x4)

### 동차 좌표(homogenous coordinates)
- 4개의 요소를 갖는 버텍스(x, y, z, w) 사용
- w - 투영 공간(projective space)
- w = 1 -> Vertex
- w = 0 -> Vector
- 소실점(vanishing point)을 0으로 설정 
- 아핀/투영 변환에 이용

## 2. 모델 변환(model transform)
3D 객체를 구성하는 버텍스는 로컬 좌표계를 가지고,  
모델 행렬을 통해 월드 좌표계에 놓여진다.  

- 객체 로컬 좌표 -> 모델 변환 -> 월드 좌표

## 3. 뷰 변환(view transform)
뷰 변환은 월드 좌표를 뷰 기준 좌표로 바꾸는 것이다.  
모델 변환으로 나온 행렬에 뷰 행렬을 곱한다. (뷰 원점 기준의 새로운 버텍스 좌표 구하기)  
뷰 기준 좌표계에서 카메라 동작이 이루어진다.

- 월드 좌표 -> 뷰 변환 -> 뷰 좌표 (카메라가 월드를 바라본 좌표)

## 4. 투영 변환 (projective transform)

## 5. 원근 분할(perspective division)
원근 나눗셈이라고 불린다.

### 정규 디바이스 좌표계(NDC, normalized device coordinates)  
<img width="500" alt="ndc" src="https://cloud.githubusercontent.com/assets/6646861/12261817/f02ced98-b966-11e5-905c-5a2378397ed6.png">  

- 하드웨어 독립적인 중간 좌표계 사용
- [주의] 오른손 좌표계와 +Z 방향 반대 (모니터를 향한 방향 +Z)
