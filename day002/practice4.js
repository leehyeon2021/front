// js실습 - 문제2

// 1. 이름, 오늘 한 운동 종류, 운동 시간(분) 묻기
let name = prompt( "사용자의 이름을 입력하시오." );
let exercise = prompt( "운동의 종류를 입력하시오." );
let time = prompt( "운동 시간을 입력하시오. (분 단위)" );

// 2. 입력된 정보 콘솔에 출력 (오늘의 운동 기록)
console.log( "[ 운동 기록 ]" );
console.log( "이름:", name );
console.log( "운동 종류:", exercise );
console.log( "운동 시간:", time );

// 3. 분당 소모 칼로리를 곱해서 총 소모 칼로리를 계산하고 함께 출력
// 분당 소모 칼로리 1분당 7칼로리
let calorie = time * 7;
console.log( "칼로리:", calorie );