---
layout: post
title: 벡터
categories: math
---

선형대수(Linear algebra)의 기본인 벡터에 대해 알아보자.

## 1. 스칼라와 벡터의 정의
스칼라와 벡터의 차이는 방향 유무에 있다.

-  스칼라는 방향이 없고 크기만 가진 값이다.
-  벡터는 크기와 방향을 모두 가진 값이다.

## 2. 벡터(Orgin: carrer -> Latin: vector)
실수를 순서쌍(tuple)로 구성한 수의 체계(유리수, 무리수, 허수와 같은 수의 한 체걔)

### 벡터의 크기와 방향

#### 벡터 방향
- 화살표 시각화
- 좌표 공간에 따라 2/3차원 표현
- 같은 크기와 방향이면 동일한 벡터
- 좌표 원점을 기준으로 점의 위치 표시
- 벡터 = 끝점 위치 - 시작점 위치
- `vec2(3-1, 4-1) = vec2(2, 3)`
- 벡터 = 변화 혹은 변위(시작점과 끝점 차이)
- 0 벡터 = 변화 없음


#### 벡터 크기
- 끝점과 사작점 사이 거리 = 크기
- 크기는 피타고라스 정리로 구함 (a^2 + b^2 = c^2)
- `var dist = Math.sqrt(x*x + y*y)`
- 벡터 각 성분을 크기로 나누면 단위 벡터 (정규화 과정)
- `(3, 4) -> norm(3/5, 4/5) -> (0.6, 0.8) `
- 단위 벡터: 방향은 그대로 크기가 1인 벡터 (방향 벡터)
- 단위 벡터 = 벡터의 방향
- 단위 벡터 * 스칼라(크기) = 원래 벡터
- `vec2(0.6*5, 0.8*5) = vec2(3, 4)`

```` javascript
var x = 3;
var y = 4;
var dist = Math.sqrt(x*x + y*y);

console.log(x, y); // 3, 4
console.log(dist); // 5

console.log("Normalize");

var nx = x/dist;
var ny = y/dist;
var ndist = Math.sqrt(nx*nx + ny*ny);

console.log(nx, ny); // 0.6, 0.8
console.log(ndist);  // 1

console.log("Restore");

console.log(nx*dist, ny*dist); // 3, 4
````

## 3. 벡터 연산

### 벡터 합과 차

### 벡터 스칼라 곱

### 벡터 내적
 
### 벡터 외적