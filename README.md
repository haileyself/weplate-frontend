이 프로젝트는 wecode3기 1차 프로젝트 weplate팀의 결과물입니다.

맛있는 음식을 먹기 위해 맛집을 찾아야 하는 시간을 줄이고 믿을만한 맛집을 소개해주는  
MangoPlate를 Clone 한 Weplate

프로젝트 기술  
JS / react / scss / react-router / CRUD(fetch)

convention  
esLint(airbnb) / prettier

component에 대해 이해하고 구분 및 적용  
초기 css style의 통일성을 위해 eric meyer의 reset css 적용

주요 Page는

회원가입 : 회원가입을 하는 페이지  
로그인 : 로그인을 하는 페이지 / 카카오톡 소셜 로그인 기능  
메인 : 검색을 하고 맛집을 이미지로 보여주는 페이지  
상세 : 맛집에 대한 상세한 정보를 보여주는 페이지 / 카카오 맵 기능

주요 기능은
검색 : 맛집을 입력하고 검색 버튼 클릭 or enter 하면 맛집에 대한 상세한 정보를 보여주는 상세 페이지로 이동

카카오톡 소셜 로그인 / 카카오 맵은 카카오에서 제공해주는 SDK를 script해서  
라이브러리를 별도로 사용하지 않고 react(js)로 기능 구현.

카카오톡 소셜 로그인 : 카카오톡 email or 핸드폰 번호로 입력해서 로그인 가능  
카카오 맵 : 맛집에 대한 좌표 데이터를 사용해 맛집의 위치를 표시
