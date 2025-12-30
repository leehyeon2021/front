
// 컴퓨터는 2진수(기계어 = 1, 0 = 비트), true(1) / false(0). 그러나 세상의 모든 자료들을 대체할 수 없다.
// 그래서 true, false를 대체할 수 있는 문법: 1. 삼항연산자 2. 조건문

// 조건 풀 때 찾을 것
// 1. 조건1 : 참 : 거짓


// 1. if(조건) 참일 때 코드
// 조건: 총점이 90점 이상, 참: '성공', 거짓: '실패'
// let 점수1 = Number(prompt(`점수1: `));
// let 점수2 = Number(prompt(`점수2: `));
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
// let score = Number(prompt(`게임 점수: `));
// if(score >= 900){console.log(`A급 경품`);}
// else if(score >= 700){console.log(`B급 경품`);}
// else if(score >= 500){console.log(`C급 경품`);}
// else{console.log(`참가상`);}

// 7. 사용자 역할에 따른 접근 권한 부여
// 조건: 사용자 admin editor viewer 그외.
// let role = prompt(`사용자 역할: `);
// if(role=='admin'){console.log(`모든 기능에 접근할 수 있습니다.`);}
// else if(role == 'editor'){console.log(`콘텐츠 수정 및 생성 기능에 접근할 수 있습니다.`);}
// else if(role == 'viewer'){console.log(`콘텐츠 조회만 가능합니다.`);}
// else{console.log(`정의되지 않은 역할입니다.`);}

// 8. 나이에 따른 놀이공원 입장료 계산
// 조건: 사용자 나이가 8세미만 8세이상19세이하 20세이상65세미만 65세이상
// let age = Number(prompt(`사용자 나이: `));
// if(age<8){console.log(`무료`);}
// else if(age<=19){console.log(`5,000원`);}
// else if(age<=65){console.log(`10,000원`);}
// else{console.log(`3,000원`);}

// 9. 성적 등급 계산
// 조건: 점수 90이상 80점이상90점미만 70점이상80점미만 70점미만(그외)
// let score1 = Number(prompt(`성적: `));
// if(score1>=90){console.log(`A등급`);}
// else if(score1>=80){console.log(`B등급`);}
// else if(score1>=70){console.log(`C등급`);}
// else{console.log(`재시험`)}

// 10. 음료 자판기
// 조건: 음료0 음료1 음료2, 참1: 출력, 그외: '없는 상품입니다.'
let drinkNames = ['콜라', '사이다', '커피'];
let drinkPrices = ['1000', '1000', '1500'];
let drink = Number(prompt(`음료 제품 번호 선택 : 콜라(0), 사이다(1) 커피(2) `));
// 문자열과 변수를 함께 출력하는 방법: 1. + 연결 연산자 2. 백틱${}

if(drink >= 0 && drink <=2 ){console.log(`선택하신 음료는 ${ drinkNames[drink] }입니다. 가격은 ${drinkPrices[drink]}입니다.`);}
else{console.log(`없는 상품입니다.`);}

