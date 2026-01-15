
/*
실습] 웹 스토리지를 이용한 회원가입/로그인 페이지

1. 목표
    -사용자가 아이디와 비밀번호를 등록하고, 저장된 정보를 바탕으로 로그인 기능을 확인할 수 있는 기본 인증 페이지를 제작합니다. 
    -모든 회원 정보는 브라우저의 localStorage를 활용하여 관리합니다.

2. 화면 구성
    -페이지는 **'회원가입 영역'**과 '로그인 영역' 두 개의 <div>으로 명확히 구분되어야 합니다.
    -회원가입 영역:
       --아이디 입력: 가입할 아이디를 입력받는 <input> 필드가 있어야 합니다. (클래스명: signId)
        --비밀번호 입력: 가입할 비밀번호를 입력받는 <input> 필드가 있어야 합니다. (클래스명: signPw)
        --회원가입 버튼: 클릭 시 signup()를 호출하는 "회원가입" 버튼이 있어야 합니다.
    -로그인 영역:
        --아이디 입력: 로그인할 아이디를 입력받는 <input> 필드가 있어야 합니다. (클래스명: loginId)
        --비밀번호 입력: 로그인할 비밀번호를 입력받는 <input> 필드가 있어야 합니다. (클래스명: loginPw)
        --로그인 버튼: 클릭 시 login()를 호출하는 "로그인" 버튼이 있어야 합니다.

3. 데이터 관리
    -저장소: 모든 회원 정보는 브라우저의 **localStorage**를 사용하여 저장 및 관리되어야 합니다. (브라우저 탭 종료 시 데이터 초기화)
    -데이터 구조: 회원 목록은 객체(Object)를 담는 배열(Array) 형태로 관리합니다.
    -각 회원 객체는 { 'no' : 회원번호 , 'id' : 아이디, 'pw' : 비밀번호 } 형태를 가집니다.
    -회원번호(no)는 등록 시마다 1씩 자동 증가해야 합니다.
    -이 배열 전체는 JSON.stringify()를 통해 문자열로 변환된 후, localStorage에 'memberList'라는 키(key)로 저장되어야 합니다.

4. 핵심 기능 구현
    -signup() 구현:
        --입력된 아이디와 비밀번호를 입력받아 (memberList)배열 에 새로 생성한 회원 객체를 추가(push)합니다.
        --회원번호는 현재 배열의 마지막 회원번호에 1을 더한 값으로 자동 부여합니다.
    -login() 구현:
        --입력된 아이디와 비밀번호를 입력받아 (memberList)배열 내의 어떤 회원 객체의 id, pw 값과 모두 일치하면,
          "로그인 성공" 알림창을 띄우고 함수를 즉시 종료합니다.
         --일치하는 정보를 찾지 못하면, "동일한 회원정보가 없습니다. 로그인실패" 알림창을 띄웁니다.
*/

// [1] 메모리 설계
// 1. 저장할 자료를 하나의 객체로  구성
// { 'no' : 회원번호 , 'id' : 아이디, 'pw' : 비밀번호 }
// 2. 여러 개 객체들을 배열로 구성
let memberList = [
    { 'no' : 1 , 'id' : 'asd', 'pw' : '2134' },
    { 'no' : 2 , 'id' : 'age', 'pw' : '1234' }
];

// [2] 함수 설계
// 1. 등록함수: 매:x, 리:x, 처: 입력받은 값을 객체 생성하여 배열에 저장
// 2. 로그인함수: 매:x, 리:x, 처: 입력받은 값을 배열 내 존재하는지 비교.

// [3] 등록 함수 구현: 등록버튼을 클릭했을 때
function signup(){
    // 1. 입력받은 값을 가져온다.
    const signIdDom = document.querySelector(".signId");
    const id = signIdDom.value;
    const signPwDom = document.querySelector(".signPw");
    const pw = signPwDom.value;

    // 2. 입력받은 값들을 객체로 구성한다.
    let no = memberList.length >= 1 ? memberList[memberList.length-1].no + 1  : 1
    // no가 존재하면 ? 마지막 인덱스 넘버 가져옴 : 아니면 1
    //let obj = {"no": no , "id": id , "pw": pw} ; // *만약에 속성명과 속성값변수명이 같으면 생략 가능하다.
    let obj = {no, id, pw}; // ⬅️ 이렇게하면 짧아지니 된다면 이렇게 하는 게 좋다고 하심 ⤴️
    // 3. 구성한 객체를 배열에 저장한다.
    memberList.push(obj); alert("회원가입 성공.")

    console.log(memberList)
}

// [3] 로그인함수 구현: 로그인버튼을 클릭했을 때
function login(){
    // 1. 입력받은 값 가져온다.
    const loginIdDom = document.querySelector(".loginId");
    const id = loginIdDom.value;
    const loginPwDom = document.querySelector(".loginPw");
    const pw = loginPwDom.value;

    // 2. 입력받은 값이 배열(회원목록) 내 존재하면 로그인 성공, 아니면 실패. 일일이 다 찾아야하는 수밖에 없음.
    for( let i = 0 ; i <= memberList.length -1 ; i++){
        const member = memberList[i];           // i번째 맴버(객체) 꺼내기
        if(member.id == id && member.pw == pw){ // 만약에 i번째 객체 내 id가 입력받은 id와 같으면
            alert("로그인 성공"); return;         // 안내 후 함수를 강제 종료. return으로 함수 종료.
        }
    }
    alert("로그인 실패");
}

// [4] 

















// let member = [ {'no': 1, 'id': 'asdf', 'pwd': '1234'}];

// // [1] 핵심 기능 구현
// function signup(){
//     let idDom = document.querySelector(".signId");
//     let id = idDom.value;
//     let pwdDom = document.querySelector(".signPw");
//     let pwd = pwdDom.value;

//     let memberid = {};

// }

// function login(){

// }

// // [2] 데이터 관리