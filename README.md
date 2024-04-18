## 🛍️ 요약
- 서비스명: **Marketz**
- 주제: 쇼핑몰 웹사이트 UI와 로직 구현
- 기간: 24.04.16 개발 시작
- 링크: 

<br>

## 💥 기술 스택

<div>
    <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"/>
    <img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white"/>
    <img src="https://img.shields.io/badge/styled_components-DB7093?style=for-the-badge&logo=styled_components&logoColor=white"/>
    <img src="https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=Cloudflare&logoColor=white">
</div>

- 사용한 API: https://dummyjson.com/docs/products

<br>

## 💻 기능 리스트
### 0️⃣ 전반적인 기본 레이아웃 UI 구현
> _기능별로 컴포넌트 단위로 모듈하하여 styled-components를 활용하여 UI 구현_
- Main 페이지에는 grid를 사용하여 productCard 배치 로직 구성
- id를 통하여 Info 페이지 이동 및 url의 params를 이용하여 해당 상품에 대한 info 페이지로 라우팅 로직 적용 예정

<br>

![2024-04-171 38 08-ezgif com-speed](https://github.com/hyunjoebrother/marketz-task-fe/assets/66728383/488815a1-9bda-4995-a357-2a2efaa8a6cd)

<br>

### 1️⃣ 상품 목록 페이지 (Main)
> _fetch로 dummy API 사용하여 상품 데이터 받아오는 작업 진행_
- 전체 상품을 배열로 가져오고 map 메소드로 각 ProductCard 컴포넌트에 데이터 fetch 적용
- `react-router-dom`을 이용하여 id에 해당하는 상세 페이지 (/info/:id)로 이동 로직 구현

<br>

![2024-04-176 21 42-ezgif com-speed](https://github.com/hyunjoebrother/marketz-task-fe/assets/66728383/5a8adcbb-90fa-4b6e-b65d-facc70f0f5e5)


<br>

### 2️⃣ 상품 상세 페이지 (Info)
> _id를 통하여 Info 페이지 이동 및 url의 params를 이용_
- 전반적인 레이아웃 반응형으로 보완 작업
- info 상품 상세 페이지에서 images를 map 메소드를 사용해서 데이터 추출 및 슬라이더 UX 구현

<br>

![2024-04-1810 59 00-ezgif com-resize](https://github.com/hyunjoebrother/marketz-task-fe/assets/66728383/7fea8138-2c48-4816-b617-495a6f646933)


<br>

### 3️⃣ 상품 목록 로딩(더보기) 및 스크롤(맨 위로 이동) 로직
> _메인페이지에 상품 10개 보여진 상태에서 '더보기' 버튼 누를 시 10개씩 상품 데이터 추출 작업 진행_
- dummy API fetch할 때 limit=100으로 설정하여 total 상품 데이터 불러오도록 구성
- Main 페이지에서 `useState`, `useEffect`를 사용하여 초기에는 fetch한 100개의 데이터 중에서 10개만 표시
- 이후 '더보기' 버튼을 클릭 시 loadMore 함수를 통해, 새로운 데이터 10개씩 누적하여 표시하도록 로직 구현
- 모든 데이터 100개를 표시를 완료할 때, '더보기' 버튼 대신에 '맨 위로 이동' 버튼으로 대체하여 `scrollTo`를 사용하여 상단 스크롤로 이동하도록 UX 개선

<br>

![2024-04-181 19 40-ezgif com-speed](https://github.com/hyunjoebrother/marketz-task-fe/assets/66728383/018ea820-2289-4b42-b125-88e590272930)


<br>

### 4️⃣ 상품 검색 결과 조회 로직
> _search API를 사용하여 검색 로직 구현 작업 진행_
- 검색어 및 검색 결과 저장을 위하여 `Query String` 방식으로 search API 사용 선택
- Search 컴포넌트로부터 searchItem에 대한 검색 키워드 정보를 담은 query를 Main 페이지로 전달
- 검색 결과에 대한 searchResult 배열을 통해 검색 결과 후 보여지는 상품 데이터 표시하도록 구성
***
- 처음 접속하거나, 검색창에 아무것도 입력하지 않은 채로 검색 버튼을 클릭 시,
-> _전체 데이터 (products) 배열 선택_
- 검색창에 입력 후 검색 버튼을 클릭 시,
-> _검색 결과 (searchResult) 배열 선택_
- 검색창에 입력 후 결과 데이터 값이 없을 시,
-> _'해당 상품이 없습니다' 문구 표시_
***
- 또한, 검색창을 사용했을 때는 하단의 "더보기" 버튼 `display:none;` 처리
***
- `onKeyPress 메소드`를 통해, 키보드 enter 입력 로직 처리

<br>

![2024-04-182 26 07-ezgif com-speed](https://github.com/hyunjoebrother/marketz-task-fe/assets/66728383/1484d81c-90ee-470a-bd6b-3d18d7fea9f5)

<br>

### 5️⃣ 페이지 전환 추가 기능
> _작업 진행중_
