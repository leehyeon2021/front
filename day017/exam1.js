/*
[ 인터벌 (interval) ]
 : 간격 / 주기.
    1. 시간적인 간격에 따라 특정 코드/함수 실행  ((자동!!))
    2. 사용법
        (1) 생성
        setInterval( 함수명 , 밀리초 );
        - 함수명: 함수명만 작성. ()생략. 소괄호를 넣으면 그 자리에서 실행되는 것!!
        - 밀리초: 1/1000초. 1000 넣으면 1초마다 한 번씩.
        예시] let 변수명 = setInterval( 함수명, 밀리초 );
        (2) 종료
        clearInterval( 종료할interval객체 );
        - 그래서 전역변수 필요. 서로다른 함수간의 공유가 필요하기 때문.
        - interval을 clear 해준다.

시간 함수
1. new Date()
 : 현재 시스템의 날짜/시간 반환 함수

*/


// [1] 
let value = 0 ;
function 증가함수(){
    value = value + 1; // 전역변수 1증가
    const box1 = document.querySelector("#box1")
    box1.innerHTML = value;
}
// 특정한 시간/간격 마다 함수 실행
setInterval( 증가함수 , 1000 ) // 1초마다 '증가함수'가 자동 실행된다는 뜻
    // 주의할 점!!: 증가함수 는 함수 그 자체. 증가함수() 는 함수 실행.

// [2] 시계 만들기
function 시계함수(){
    // new Date(): 현재 시스템의 날짜/시간 반환 함수
    let today = new Date();
    let hour = today.getHours(); // '시' 구하기: new Date().getHours()
    let minute = today.getMinutes(); // '분' 구하기: new Date().getMinutes()
    let second = today.getSeconds();
    let time = `${hour} : ${minute < 10 ? '0'+minute : minute} : ${second < 10 ? '0'+second : second}`;
    const box2 = document.querySelector('#box2');
    box2.innerHTML = time;
}
setInterval( 시계함수 , 1000 ); //자동으로 1초마다 시계함수가 자동 실행된다.

// [3] 타이머
let time = 0 ;  // 현재 타이머의 시간(초)
let timerId;    // interval 객체를 저장하는 전역변수
타이머초기화();
function 타이머시작(){
    // 중요!: interval 실행 후 반환된 객체를 timmerId에 대입.
        // 왜??: 추후에 제어(종료)하기 위해서.
    timerId = setInterval( 시간함수 , 1000);
}
function 타이머중지(){
    clearInterval( timerId ); // clearInterval(종료할 interval객체)
}
function 시간함수(){
    time++ ; // 1 증가
    document.querySelector("#box3").innerHTML = time;
    // 홍길동객체.공부하기().밥먹기() <- 뒤에서부터 실행.
}
function 타이머초기화(){
    time = 0;
    document.querySelector("#box3").innerHTML = time;
}