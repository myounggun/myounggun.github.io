---
layout: post
title: 행렬(matrix)
thumb: https://cloud.githubusercontent.com/assets/6646861/12262877/2dcfce8e-b96e-11e5-9aa8-ca7a6f9508d1.jpg
categories: math
---

벡터에 대해 이해했다면 2D/3D 행렬, 벡터와 행렬 연산, 아핀 변환에 대해 알아보자.  

![movie-matrix1](https://cloud.githubusercontent.com/assets/6646861/12262877/2dcfce8e-b96e-11e5-9aa8-ca7a6f9508d1.jpg)

## 1. Matrix2D
3D 프로그래밍에서 벡터와 행렬에 대한 이해는 필수입니다.  
객체의 2D 변환(이동, 크기조절, 회전, 기울리기)에 대해 살펴볼께요.  
보통 '아핀 변환'이라고 불리우는 중요한 개념입니다.

### A. 벡터의 행렬 표현 
---
#### 행행렬(row matrix) = 행벡터
아래 벡터는 한 줄로 되어 있습니다. 즉, 행벡터겠죠.

```
(x, y, 1)
```

1행 x 3열 -> <font color="green">**1** x **3** </font>행벡터입니다.

#### 열행렬(column matrix) = 열벡터

```
(x)
(y)
(z)
```
3행 x 1열 -> <font color="green">**3** x **1** </font> 열벡터입니다.

### B. 벡터와 행렬 연산
---
행렬 차수가 같아야 행렬연산이 가능합니다.  
<font color="red">마주보는 차수</font>가 같으면 행렬 연산이 가능하고,   
양 끝 차수가 합쳐져서 <font color="green">결과 행렬의 차수</font>가 됩니다.

<font color="green">1</font> x <font color="red">3</font> * <font color="red">3</font> x <font color="green">3</font> = <font color="green">1 x 3</font>


#### 행벡터 연산 
- <font color="green">1</font> x <font color="red">3</font> * <font color="red">3</font> x <font color="green">3</font> = <font color="green">1 x 3</font>

|  V | * | TM | = | V' |
|:-:|:-:|:-:|:-:|:-:|
| (<font color="red">x, y, 1</font>) | * | (<font color="red">m00</font>, m01, m02) | = | (x', y', 1') |
|           |   | (<font color="red">m10</font>, m11, m12) |   |   |
|           |   | (<font color="red">m20</font>, m21, m22) |   |   |

x' = <font color="red">x * m00 + y * m10 + 1 * m20</font>;  
y' = x * m01 + y * m11 + 1 * m21;  
1' = x * m02 + y * m12 + 1 * m22;  
(m02 = 0, m12 = 0, m22 = 1 따라서 1' = 1)

**V * TM = V'** (<font color="red">x * m00</font>)  
행벡터 연산은 우측에 곱해집니다. 

#### 열벡터 연산
- <font color="green">3</font> x <font color="red">3</font> * <font color="red">3</font> x <font color="green">1</font> = <font color="green">3 x 1</font>

| TM | * | V | = | V' |
|:-:|:-:|:-:|:-:|:-:|
| (<font color="red">m00, m01, m02</font>) | * | (<font color="red">x</font>) | = | (x', y', 1') |
| (m10, m11, m12) |   | (<font color="red">y</font>) |   |   |
| (m20, m21, m22) |   | (<font color="red">1</font>) |   |   |

x' = <font color="red">m00 * x + m01 * y + m02 * 1</font>;  
y' = m10 * x + m11 * y + m12 * 1;  
1' = m20 * x + m21 * y + m22 * 1;  
(m20 = 0, m21 = 0, m22 = 1 따라서 1' = 1)

**TM * V = V'** (<font color="red">m00 * x</font>)  
열벡터 연산은 좌측에 곱해집니다.  
즉, 행벡터 연산과 열벡터 연산은 다른 결과가 나오겠죠.

**AB ≠ BA**  
행렬의 기본성질 중에서 '행렬의 곱은 교환법칙이 성립하지 않는다.'와 관련이 있겠네요.

## C. 행렬의 기본 성질
- AB ≠ BA
- A(BC) = (AB)C
- AI = IA = A
- (A-1) * A = I  
    - A-1 = 역행렬  
    - I(idntity) = 단위행렬

## D. 아핀 변환 (Affine Transform)
아핀 변환은 '이동, 크기변환, 회전, 기울리기'를 하나의 행렬로 처리하기 위한 개념입니다.  
고등학교 교과서, 그래픽스 서적은 대부분 열벡터 연산을 기준으로 설명합니다. 저도 열벡터 연산을 기준으로 진행해 볼께요.  

아핀 변환행렬(Transform Matrix)은 아래와 같은 3x3 행렬로 정의합니다.

![tm-3x3](https://cloud.githubusercontent.com/assets/6646861/12262254/20c9d328-b96a-11e5-9eed-464c208a188f.png)

변환 행렬(TM)과 열벡터의 행렬곱
차수를 맞추기 위해  열벡터에 1을 추가합니다.  (x, y, <font color="red">1</font>)

<font color="green">3</font> x <font color="red">3</font> * <font color="red">3</font> x <font color="green">1</font> = <font color="green">3 x 1</font>  

![tm-3x3-v](https://cloud.githubusercontent.com/assets/6646861/12262253/20c11e04-b96a-11e5-91ba-1f04b4bca31e.png)

열벡터 연산은 아래와 같이 이루어집니다. (x -> x')  
![tm-3x3-v-red](https://cloud.githubusercontent.com/assets/6646861/12262252/20aefe7c-b96a-11e5-95d4-5fb284e02be5.png)

열벡터 연산은 좌측에 우측으로 곱한다고 했죠? (수학 교과서 방식)  
간단히 표기하면,

**TM * P = P'**  
(TM: Transform Matrix, P: Point)

각각의 변환을 개별적으로 알아보고, 마지막에 변환들을 합성해 보겠습니다.  
예제는 HTML 캔버스를 이용하여 구현해 봅시다.

### 이동 (Translate)
![tm-translate](https://cloud.githubusercontent.com/assets/6646861/12262251/20aac442-b96a-11e5-81c0-b9b13de69a3a.png)

**T * P = P'**  
(T: Translate)
 
50크기의 박스에 아핀 변환을 적용해 보죠. (그리드 한 칸: 50)  
HTML5 캔버스는 아핀 변환을 넣을 수 있는 인터페이스가 있습니다.  
a, b, c, d, tx, ty 순서로 파마메터를 넣어주는 방식입니다.

**context.transform(a, b, c, d, tx, ty);**

```javascript
context.transform(1, 0, 0, 1, 50, 50);

context.fillStyle = "#ff0000";
context.fillRect(0, 0, 50, 50);
```

![tm-translate-ex](https://cloud.githubusercontent.com/assets/6646861/12262461/7b21ac50-b96b-11e5-96cd-4d7888b8486b.png)


### 크기 (Scale)
![tm-scale](https://cloud.githubusercontent.com/assets/6646861/12262249/20a63418-b96a-11e5-9725-e19acd0798b3.png)

**S * P = P'**

```javascript
context.transform(2, 0, 0, 2, 0, 0);

context.fillStyle = "#ff0000";
context.fillRect(0, 0, 50, 50);
```

![tm-scale-ex](https://cloud.githubusercontent.com/assets/6646861/12262463/7b2683c4-b96b-11e5-81d7-3b946f87900e.png)

### 회전 (Rotate)
![tm-rotate](https://cloud.githubusercontent.com/assets/6646861/12262250/20a82b38-b96a-11e5-942e-2a3d0c8da8cd.png)

**R * P = P'**

```javascript
var A = 45 * Math.PI / 180,
        cosA = Math.cos(A),
        sinA = Math.sin(A); 
 
context.transform(cosA, sinA, -sinA, cosA, 0, 0); 

context.fillStyle = "#ff0000";
context.fillRect(0, 0, 50, 50);
```

![tm-rotate-ex](https://cloud.githubusercontent.com/assets/6646861/12262462/7b22c5ae-b96b-11e5-9067-4f441cd42cf8.png)

### 기울이기 (Skew or Shear)
![tm-skew](https://cloud.githubusercontent.com/assets/6646861/12262248/20a5656a-b96a-11e5-89c7-56459787c865.png)

**SH * P = P'**

```javascript
var A = 45 * Math.PI / 180,
    tanA = Math.tan(A); 
 
context.transform(1, 0, tanA, 1, 0, 0); 

context.fillStyle = "#ff0000";
context.fillRect(0, 0, 50, 50);
```

![tm-skew-ex](https://cloud.githubusercontent.com/assets/6646861/12262460/7b1a8646-b96b-11e5-836c-68fe87e416c5.png)


### 결합 (Composite)
![tm-composite-ex](https://cloud.githubusercontent.com/assets/6646861/12262247/209ee3ca-b96a-11e5-8cea-57484f748346.png)

지금까지 했던 변환을 결합해 봅시다.
 
SH * R * S * T * P = P'

**SH * P = P'**

```javascript
var m = new Matrix2D();
m = m.translate(50, 50);
m = m.scale(2, 2);
m = m.rotate(45 * Math.PI / 180);
m = m.skew(0, 1);
    
context.transform(m.a, m.b, m.c, m.d, m.tx, m.ty); 
```

![tm-composite-ex](https://cloud.githubusercontent.com/assets/6646861/12262247/209ee3ca-b96a-11e5-8cea-57484f748346.png)

### 변환 행렬(Transform Matrix)를 사용하는 이유?
사각형을 변환하는 예제를 살펴봤는데요.
실제로는 사각형을 구성하는 4개의 꼭지점(Vertex) 좌표를 변환한 겁니다.
 
**TM * P = P'**  
**P -> TM -> P'**  
 
예를들어, 3D 모델이 수천개의 정점(Vertex)으로 구성되었다면,  
수천개의 정점에 TM을 곱해주면 수천개의 변환 좌표를 한방에 구할 수있습니다.  
또한, 모델의 원본 좌표(P)는 변하지 않아서 재사용이 가능하죠.  
3D에서 P'는 3D 좌표를 스크린에 투영(project)하기 위해 변환한 2D 좌표입니다.

# 2. Matrix3D
(작성중)

---

## 참고
