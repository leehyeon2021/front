
// 컴퓨터는 2진수(기계어 = 1, 0 = 비트), true(1) / false(0). 그러나 세상의 모든 자료들을 대체할 수 없다.
// 그래서 true, false를 대체할 수 있는 문법: 1. 삼항연산자 2. 조건문

// 조건 풀 때 찾을 것
// 1. 조건1 : 참 : 거짓


// 1. if(조건) 참일 때 코드
// 조건: 총점이 90점 이상, 참: '성공', 거짓: '실패'
// let 점수1 = prompt(`점수1: `);
// let 점수2 = prompt(`점수2: `);
// let 총점1 = 점수1 + 점수2;
// // if( 조건 ) { 참 } else{ 거짓 };
// if( 총점 >= 90 ) { console.log("성공"); } 
// else{ console.log("실패"); }

// 2. 두 수 중 더 큰 수 찾기
// 조건: 두 수 중 더 큰 수, 참: 더 큰 수, 거짓: 더 큰 수
    // a가 b보다 크면 a 출력, 아니면 b 출력.
// let 숫자1 = prompt("숫자1: ");
// let 숫자2 = prompt("숫자2: ");
// if(숫자1 > 숫자2) {console.log(숫자1);}
// else{console.log(숫자2);}

// 3. 로그인 시스템
// 조건: 아이디 'admin' 비밀번호 '1234' 모두 일치, 참: '로그인 성공', 거짓: '로그인 실패'
// let id = prompt(`아이디: `);
// let pwd = prompt(`비밀번호: `);
// if(id=='admin' && pwd=='1234'){console.log(`로그인 성공`);}
// else{console.log(`로그인 실패`);}

// 4. 비밀번호 보안 등급 확인
// 조건: 비밀번호 길이 8자미만 8자이상12자미만 12자이상, 참1: '보안 등급: 약함 (8자 이상으로 설정해주세요.)', 참2: '보안등급: 보통', 그외: '보안 등급: 강함'
// let pwdlen = prompt(`비밀번호: `);
// if( pwdlen.length < 8){console.log('보안 등급: 약함 (8자 이상으로 설정해주세요.)');}
// else if(pwdlen.length >= 8 && pwdlen.length < 12 ){console.log('보안등급: 보통');}
// else{console.log('보안등급: 강함');}

// 5. 좌석 예약 시스템
// 조건: 해당 좌석이 예약 가능('X')하면, 참: '예약 성공', 거짓: '예약 불가'.
// let seatlist = ['O', 'X', 'O']; //배열은 대괄호 안에 인덱스. 호출은 변수명[인덱스]
// let book = prompt(`예약할 좌석 번호 0 ~ 2: `)
// if(seatlist[book] == 'X'){console.log(`예약 성공`);}
// else{console.log(`예약 불가`);}

// 6. 점수에 따른 상품 지급
// 조건: 게임 점수 900점이상 700점이상900점미만 500점이상700점미만, 500점미만, 참1: 'A급 경품;, 참2: 'B급 경품', 참3: 'C급 경품', 그외: '참가상'
let score = Number(prompt(`게임 점수: `));
if(score >= 900){console.log(`A급 경품`);}
else if(score >= 700 && score < 900){console.log(`B급 경품`);}
else if(score >= 500 && score < 700){console.log(`C급 경품`);}
else{console.log(`참가상`);}

// 7. 사용자 역할에 따른 접근 권한 부여