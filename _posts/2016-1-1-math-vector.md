---
layout: post
title: 벡터(vector)
thumb: https://cloud.githubusercontent.com/assets/6646861/12254936/c03c230e-b931-11e5-8268-20405fd88642.png
categories: math
---

선형대수학(Linear algebra)의 기본인 벡터에 대해 알아보자.

* **선형대수학**
 - 수 대신 문자(대수)를 사용한 방정식과 기하학의 만남
 - 점, 선을 데카르트 좌표로 표시하고 방정식을 그래프로 시각화 가능해짐


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
- 끝점과 사작점 사이 거리 = 크기 (∥A∥)
- 크기는 피타고라스 정리로 구함 (a^2 + b^2 = c^2)
- `var dist = Math.sqrt(x*x + y*y)`
- 벡터 각 성분을 크기로 나누면 단위 벡터 (정규화 과정)
- `(3, 4) -> norm(3/5, 4/5) -> (0.6, 0.8) `
- 단위 벡터: 방향은 그대로 크기가 1인 벡터 (방향 벡터)
- 단위 벡터 = 벡터의 방향
- 단위 벡터 * 스칼라(크기) = 원래 벡터
- 단위 벡터는 벡터 방향만 구할 때 사용
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

### 벡터 합
- A, B 두 벡터 합
- B 시작점을 A 끝점에 연결 (반대도 가능)
- A 시작점과 B 끝점을 연결 (A + B)

```glsl
vec2(A.x + B.x, A.y + B.y); 
```

### 벡터 차
- A, B 두 벡터 차
- B 벡터 방향을 반대로 하고 벡터 합 (A + -B)

```glsl
vec2(A.x - B.x, A.y - B.y); 
```


### 벡터 스칼라 곱
- A 벡터 스칼라 곱
- 벡터 크기에 영향

```glsl
vec2(A.x * Scalar, A.y * Scalar); 
```

### 벡터 내적(dot product)
- A, B 벡터 내적 (A ● B)
- 내적 결과는 스칼라 값(스칼라적)
- A, B 벡터 각 x, y 성분을 곱을 더한 결과
- A가 B 벡터에 투영된 길이 (B는 단위 벡터)

```glsl
스칼라 = A.x*B.x + A.y*B.y; // 2차원 내적
스칼라 = A.x*B.x + A.y*B.y + A.z*B.z; // 3차원 내적
```
- A ● B = 0, A와 B는 직교(ㅗ)
- A ● B < 0 (음수), θ > 90도 
- A ● B > 0 (양수), θ < 90도
- A ● B = ∥A∥∥B∥cosθ
- 내적과 두 벡터 크기로 두 벡터 사이각 구함
 
### 벡터 외적(cross product)
- A, B 벡터 외적 (A * B = C)
- 외적 결과는 3차원 벡터 (벡터적)
- 결과 벡터는 A, B 벡터와 직교하는 C 벡터(x,y,z)
- 표면 법선(surface normal) 계산

```glsl
vec3(A.y*B.z - A.z*B.y,  // x
	 A.z*B.x - A.x*B.z,  // y
	 A.x*B.y - A.y*B.x); // z
```

### 4. 참고
##### [네이버 지식백과 - 대수학(代數學, algebra)](http://terms.naver.com/entry.nhn?docId=2098120&categoryId=44413&cid=44413)
> 대수학(代數學, algebra)은 수 대신에 문자를 사용하여 방정식의 풀이 방법이나 대수적 구조를 연구하는 학문

##### [네이버 지식백과 - 선형대수학(線型代數學, linear algebra)](http://terms.naver.com/entry.nhn?docId=2164903&cid=44413&categoryId=44413#TABLE_OF_CONTENT2)
> 주어진 문제들을 추상화(abstraction)시켜 복잡한 문제를 정확하고 효율적으로 해결할 수 있는 방법론



