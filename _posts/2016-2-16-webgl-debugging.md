---
layout: post
title: 웹지엘 디버깅
categories: webgl
---

웹지엘 개발에 도움을 주는 디버깅 툴을 소개한다.

## 웹 개발 디버깅 툴
웹 개발 시 사용하는 디버깅 도구로 웹지엘 오류를 출력하는 방법을 설명한다.

- 크롬 개발자 도구(Chrome Developer Tools)
    - 구글 크롬 브라우저 내장
    - 보기 > 개발자 정보 > 개발자 도구 (맥: cmd+option+i, 윈도우: ctrl+shift+i)
- 파이어버그(Firebug)
    - 파이어폭스 확장 프로그램 by 조 휴잇(Joe Hewitt)
    - http://getfirebug.com
    - 도구 > 웹개발 도구 > Firebug > Firebug 열기 (F12)
- gl.getError()를 활용해서 웹지엘 오류를 자바스크립트 콘솔에 출력
    - webgl-debug.js [https://github.com/KhronosGroup/WebGLDeveloperTools](https://github.com/KhronosGroup/WebGLDeveloperTools)
    - webgl-debug.js 사용법 [https://www.khronos.org/webgl/wiki/Debugging](https://www.khronos.org/webgl/wiki/Debugging)
    - `gl = WebGLDebugUtils.makeDebugContext(canvas.getContext("webgl"));`

## 웹지엘 오류
- gl.NO_ERROR: 마지막 gl.getError() 호출 후에도 오류 없음.
- gl.INVALID_ENUM: GL enum 인자값의 범위를 초과함.
- gl.INVALID_VALUE: 숫자 타입 인자가 범위를 초과함.
- gl.INVALID_OPERATION: 웹지엘에 없는 메서드 호출하거나 호출 순서 잘못됨.
- gl.OUT_OF_MEMORY: 웹지엘 메서드 실행시 메모리 부족함.


## 웹지엘 인스펙터
### 소개 및 설치
- 웹지엘 전용 디버거 (DirectX: PIX, 오픈지엘: gDEBugger)
- 크롬 확장 프로그램 by 벤 베닉(Ben Vanik)
- [https://benvanik.github.io/WebGL-Inspector/](https://benvanik.github.io/WebGL-Inspector/)
- 크롬 웹스토어 - [WebGL Inspector](https://chrome.google.com/webstore/detail/webgl-inspector/ogkcjmbhnfmlnielkjhedpcjomeaghda?hl=ko)
- 웹지엘 인스펙터 설치 후 크롬 주소창에 'GL' 아이콘 표시
- 뷰포트 우측상단의 Capture, UI 버튼 표시

### 패널
- 트레이스(trace): 웹지엘 상태 변화와 무관한 호출을 강조 표시
	- F6: 소스코드 한단계씩 위로 이동
	- F7: 다음 호출 생략 (drawElement 단위로 바로 이동)
	- F8: 소스코드 한단계씩 아래로 이동
	- F9: 소스코드 마지막으로 이동 (전체 코드 실행)
	- F10: 처음으로 이동 (다시 시작)
- 타임라인(timeline): 실시간 통계 (어떻게 쓰는거야?)
- 스테이트(state): 캡처 상태의 정보의 스냅샷
- 텍스처(textures): 텍스처 주소, 필터링 등
- 버퍼(buffers): 버퍼 크기, 내용, 바이딩 등
- 프로그램(programs): 버텍스/프래그먼트 세이더 소스코드 확인
