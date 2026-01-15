
/*예제 1: localStorage에 데이터 저장하고 불러오기
localStorage에 <input> 으로 입력받은 사용자의 아이디를 저장하고, 
페이지를 새로고침해도 그 값이 유지되는 것을 확인 하시오.  */
// [1] 실행조건: 버튼을 클릭했을 때.
function func1(){ // 매:x 리:x 처:입력밷은값 스토리지 저장
    // 1. 입력받은 값 가져오기
    const id = document.querySelector(".box1").value;
    // 2. localStorage에 입력받은 값 저장
    localStorage.setItem('id', id); //'id'라는 이름으로 입력받은 id값 저장.
}

/*예제 2: localStorage에 객체 저장하기 (JSON.stringify)
아래 사용자의 환경 설정(객체)을 문자열로 변환하여 localStorage에 저장 하시오. */
const userSettings = { theme: 'dark', notifications: true, language: 'ko' };
    // (1) 로컬/세션 저장소는 문자열만 저장이 가능하다. <타입변환>
let value2 = JSON.stringify( userSettings ); //JS타입 --> JSON타입 변환
    // (2) 변환된 자료를 로컬저장소에 저장한다.
localStorage.setItem('setting', value2);

/*예제 3: localStorage에서 객체 불러오기 (JSON.parse)
localStorage에 문자열로 저장된 사용자 설정(userSettings) 을 다시 객체로 변환하여 사용 하시오.  */
// (3) 로컬저장소에 저장된 자료 가져오기
let setting = localStorage.getItem('setting'); // ''문자 안에서 띄어쓰기 들어가면 오류 남 
// (4) 가져온 자료를 JS타입으로 변환
setting = JSON.parse(setting);                      console.log(setting);

/*예제 4: 데이터 삭제하기 (removeItem, clear)
스토리지에 저장된 특정 데이터(userSettings) 또는 전체 데이터를 삭제 하시오.  */
// (5) 로컬저장소에 저장된 자료 삭제
localStorage.removeItem('setting'); 
// localStorage.clear(); 전부 삭제

/*예제 5: 방문 횟수 카운터 만들기
페이지가 로드될 때마다 sessionStorage를 사용하여 방문 횟수를 1씩 증가시키시오. 
현재 방문 횟수를 id="visitCount"인 span 태그에 "이번 세션에서 O번째 방문입니다." 형식으로 출력하시오. 
(페이지를 새로고침하면 숫자가 올라가고, 브라우저 탭을 닫았다 다시 열면 1로 초기화되어야 합니다.) (local은 초기화 안 됨) */
let visitCount = 1;
    //(1) 기존의 웹스토리지가 존재하는지 확인
    let visit =  sessionStorage.getItem('visit');

    // (2) 만약에 존재하지 않은 웹스토리지 이면 스토리지 추가
    if( visit == null ){   //null 이란? 자료가 없다는 뜻. undefined 자료가 정의되지 않음
        sessionStorage.setItem('visit', visitCount);

    }else{ 
        // (3) 존재하면 스토리지에서 꺼내온 값에 +1 한다. <<문제: 스토리지는 문자열만 저장한다.>>
        visitCount = Number(visit)+ 1 //Number아니면 JSON. ⬅️ 숫자로 바꾸기. ⤴️

        // (4) 더한 값을 스토리지에도 저장한다.
        sessionStorage.setItem('visit', visitCount);
}

// 어디에 
const spanDom = document.querySelector('#visitCount');
// 무엇을
let html = `이번 세션에서 ${visitCount}번째 방문입니다.`;
// 출력
spanDom.innerHTML = html;


