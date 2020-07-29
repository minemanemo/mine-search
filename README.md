# 지뢰찾기 (javascript)

## 개요

지뢰찾기 게임의 해답을 출력

## Usage

1. clone code
2. open index.html
   * index.html은 단순히 출력 결과를 간단하게 보여주는 코드입니다.
   * Internet Explorer에서 열리지 않습니다.


## 설명 (index.js)

**getMineMap (메인 로직 함수)**

* 메인 로직 함수, 지뢰와 카운팅이 추가된 2차원 배열을 반환하는 함수

1. 0으로 초기화된 10 x 10 배열 생성
2. 중복을 제외하여 랜덤 좌표(지뢰) 10개 생성
3. 생성된 지뢰와 1칸 인접한 노드들을 1 씩 카운팅
   * 인접 노드가 맵을 넘어가거나 지뢰인 경우 카운팅 제외

**generateTwoDemension**

* 0으로 초기화된 크기가 n x n의 2차원 배열을 반환

**generateMineXY**

* 크기가 size x size 인 배열의 좌표 중 중복없이 
  랜덤하게 num개를 선택한 배열을 반환하는 함수


## Screenshot

![screenshot_20200729](https://user-images.githubusercontent.com/49668613/88755332-e5936680-d19b-11ea-9fee-633dd1976581.png)