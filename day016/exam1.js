// [1] 다른 JS 파일에서 변수/함수 사용 가능여부
// HTML에서 여러 개 JS 파일 호출했을 때

// <script src="test1.js"></script>
// <script src="exam1.js"></script>

console.log('var1'); // 다른 test1.js에서 선언된 변수 사용
'func1()'; // 다른 test1.js 에서 선언된 함수 사용 가능.

// [2] js는 HTML에 종속된 관계라서 F5(새로고침)하면 초기화(변수재생성)
// --> 백엔드의 필요성. 벡엔드 없이 영구저장 할 수 있나요? 가능.
// 자동로그인, 검색기록, 비회원제장바구니, 최근본제품, 설정테마 등등.

/*
웹스토리지: 브라우저(크롬/엣지/사파리) 저장소 제공
    1. 브라우저 -> F12 -> [APPLICATION / 응용프로그램] 탭 -> 왼쪽 사이드바 메뉴
        [ 로컬저장소 ] / [ 세션 저장소 ]
    2. 종류
        1] sessionStorage: 세션 저장소를 관리하는 객체
            *차이점: 서로 다른 HTML 간의 자료를 공유하지 않는다.
                    모든 브라우저가 종료된다면 자료를 자동으로 삭제한다.
        2] localStroage: 로컬 저장소를 관리하는 객체
            *차이점: 서로 다른 HTML 간의 자료를 공유한다. <단, 도메인(http주소)이 동일할 때만.>
                    모든 브라우저가 종료되더라도(주석처리해도) 자료를 유지한다. (자동로그인은 로컬로.)
                    < 사용자가 직접 삭제해야 함.('인터넷기록삭제','쿠키')>
    *객체란? 기능과 데이터를 가지고 있는 애.
         console.log(localStorage);
         console.log(sessionStorage);
    3] 주요 기능/함수
        1] .setItem("key", value); 
          : 세션/로컬 저장소에 속성/자료 추가.
            공개된 자료. 자동 로그인에서 사용.
          sessionStorage.setItem( 'name', '유재석');
          localStorage.setItem('age', 40);
          F12 -> aplication 탭 -> 확인 가능.
        2] .getItem("key");
          : 세션/로컬 저장소에 'key' 해당하는 자료 호출
        3] .removeItem("key");
          : 세션/로컬 저장소에 'key' 삭제. (value 같이 삭제됨.)
           .clear();
          : 모든 key 삭제.
    4] JSON 변환
      : 세션/로컬 저장소는 ⭐문자열 저장⭐이 가능하다.
        1] 저장
          : JSON.stringify()
            : JS객체 -> JSON문자열
        2] 호출
          : JSON.parse()
            : ?JSON문자열 -> JS객체?

- 부가적인 것만 저장. 민감한 정보는 데이터베이스에.
*/

// (1) 저장
sessionStorage.setItem( 'name', '유재석');
localStorage.setItem('age', 40);

// (2) 호출
console.log(sessionStorage.getItem('name')); 
    // session저장소에 저장된 name키를 갖는 값을 호출한다.
console.log(localStorage.getItem('age'));
    // 로컬저장소에 저장된 'age' 키 갖는 값 호출.

// (3) 삭제
sessionStorage.removeItem('name');
    // 세션저장소에 'name' 키 삭제
localStorage.removeItem('age');
    // 로컬저장소에 'age' 키 삭제

// (4) 활용: 복잡한 (샘플) 데이터
    // * 세션/로컬 저장소는 문자열만 저장이 가능하다.
    // 그래서--> 배열/객체를 문자열로 변환하는 방법 
            // => JSON : 자바스크립트 객체 기반의 문자열 형식
sessionStorage.setItem('회원 목록' , [{name: "유재석", age: 40}, {name: "강감찬", age: 50}]);                   // -> 저장 안 된다.
sessionStorage.setItem('회원 목록' , JSON.stringify([{name: "유재석", age: 40}, {name: "강감찬", age: 50}]));   // -> 저장된다.
console.log(sessionStorage.getItem('회원 목록')); //-> 회색백그라운드로 뜸. -> 객체 아님. 문자열.
console.log(JSON.parse(sessionStorage.getItem('회원 목록'))); //-> 객체로 뜸. 붉은글자색