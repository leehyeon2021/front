/*문제 1: 1부터 10까지 출력하기
for 반복문을 사용하여 1부터 10까지의 숫자를 콘솔에 순서대로 
출력하는 프로그램을 작성하시오.*/
// 1. 초기값: let i = 1 ;
// 2. 조건문: i <= 10 ;  *i가 11이면 false이므로 반복문 종료. 
// 3. 증감식: i++ ;
// 4. 실행문: console.log(i);
// for(let i = 1 ; i <= 10 ; i++ ){console.log(i);}

/*문제 2: 배열의 모든 요소 출력하기
다음과 같은 과일 배열이 있습니다. for 반복문을 사용하여 
배열의 모든 요소를 하나씩 콘솔에 출력하시오.*/
// let fruits = ['사과', '바나나', '포도', '딸기'];
// // 1. 초기값: let index = 0 ; // 2. 조건문: index <= fruits.length - 1 ; (마지막 인덱스 구하기)
// // 3. 증감식: index++ // 4. 실행문: console.log(fruits[index]);
// for( let index = 0 ; index <= fruits.length - 1 ; index++){console.log(fruits[index]);}

/*문제 3: 배열 역순으로 출력하기
주어진 배열을 for 반복문을 사용하여 
역순으로 (마지막 요소부터 첫 요소 순서로) 출력하는 프로그램을 작성하시오. */
// let numbers = [1, 2, 3, 4, 5];  // 출력 예시: 5 4 3 2 1 
// // 1. 초기값: let index = numbers.length-1 ; // 2. 조건문: index >= 0 ;
// // 3. 증감식: index-- ; // 4. 실행문: console.log(index)
// for(let index = numbers.length-1; index >= 0 ; index--){console.log(index);}

/*문제 4: 1부터 50까지의 합계 구하기
for 반복문을 사용하여 1부터 50까지 모든 정수의 합을 구하여 콘솔에 출력하시오.*/
// 1. 초기값: let i = 0 // 2. 조건문: i <= 50
// 3. 증감식: i++ // 4. 실행문: console.log(sum = sum + i)
// let sum = 0;
// for( let i = 1 ; i <= 50 ; i++){ sum = sum + i ;}  // == sum += i
// console.log(sum);

/*문제 5: 짝수만 출력하기
for 반복문과 if 조건문을 사용하여, 1부터 20까지의 숫자 중 짝수만 콘솔에 출력하시오.*/
// 짝수 찾기: 값 % 2 == 0 [짝수], 값 % 2 == 1 [홀수]
// 1. 초기값: let i = 1 // 2. 조건문: i <=20
// 3. 증감식: i++ // 4. 실행문: if(i % 2 == 0){console.log(i);}
// for(let i = 1 ; i <= 20 ; i++){
//     if(i%2==0){console.log(i);}  // for문에 if도 들어갈 수 있다.
//     else{console.log(`홀수`)} //그냥 해봄 ㅎ.ㅎ
// } 

/* ../day008/exam1.js */
/*문제 6: 배열 요소의 합계와 평균 구하기
다음 학생들의 점수가 담긴 배열이 있습니다. for 반복문을 사용하여 모든 점수의 합계와 평균을 계산하여 콘솔에 출력하시오. */
// let scores = [85, 92, 78, 65, 95];
// // 1. 초기값: let 0 ; // 2. 조건문: index >= 0
// // 3. 증감식: index++ // 4. 실행문: sum = index + sum
// let sum = 0;
// for(let index = scores.length-1 ; index >= 0 ; index-- ){(sum = scores[index]+ sum); (평균 = sum/scores.length)}
// console.log(`총합: ${sum}, 평균: ${평균}`);


/* 문제 7: 특정 조건에서 반복문 탈출하기 (break)
점수 배열에서 100점 만점자가 처음 나타나면, 그 학생의 점수를 출력하고 반복문을 즉시 종료하는 프로그램을 작성하시오.
출력 예시: 100점 만점자를 찾았습니다!*/
// let scores = [77, 82, 100, 54, 96];
// // 1. 초기값: let index = scores.length -1 // 2. 조건문: index >= 0
// // 3. 증감식: index-- // 4. 실행문: if( scores.indexOf(index) == 100 ){break;}
// for(let index = scores.length -1 ; index >= 0 ; index--){
//     if(scores.indexOf(100)==index){console.log(scores[index]); break;}
// }

/*문제 8: 특정 조건 건너뛰기 (continue)
점수 배열에서 60점 미만(과락)인 점수는 건너뛰고, 60점 이상인 점수만 콘솔에 출력하는 프로그램을 작성하시오.*/
// let scores = [90, 45, 72, 88, 59, 100];
// // 1. 초기값: let index = scores.length-1 ; // 2. 조건문: index >= 0
// // 3. 증감식: index-- // 4. 실행문: if( scores[index] ==60){continue;} else{console.log(scores[index]);}
// for( let index = scores.length-1 ; index >= 0 ; index--){
//     if( scores[index] <= 60){continue;} else{console.log(scores[index]);}
// }

/*문제 9: 배열에서 특정 값의 개수 세기
다음 배열에서 'A'형 혈액형을 가진 사람이 몇 명인지 for 반복문을 통해 세고, 그 수를 콘솔에 출력하시오. */
let bloodTypes = ['A', 'B', 'O', 'AB', 'A', 'B', 'A'];
// 1. 초기값: let index = bloodTypes.lenght-1 // 2. 조건문: index >= 0
// 3. 증감식: index-- // 4. 실행문: if(bloodTypes == `A`){sum = sum + 1} else{continue;}
let sum = 0;
for( let index = bloodTypes.length-1 ; index >= 0 ; index--){
    if(bloodTypes[index] == 'A' ){sum =+ 1;}
    else{ continue;}
    }
console.log(sum); // 안 됨........ㅠ.ㅠ 다시 하기

/*문제 10: 학생 점수 시각화하기 
주어진 학생 이름과 점수 배열을 이용하여, 각 학생의 점수를 동그라미(●, ○)로 시각화하여 HTML에 출력하는 프로그램을 작성하시오.
(1). 초기 데이터
학생 이름과 점수는 두 배열의 동일한 인덱스를 사용합니다.
let nameArray = ['유재석', '강호동', '신동엽'];
let scores = [92, 86, 72];
(2). 구현 조건
for 반복문을 사용하여 모든 학생의 데이터를 순회합니다.
점수를 100점 만점으로 환산하여 시각화합니다.
점수의 십의 자리 숫자만큼 꽉 찬 동그라미(●)를, **나머지(10 - 십의 자리 수)**만큼 빈 동그라미(○)를 출력합니다.
예시: 점수가 92점이면 십의 자리는 9이므로, ●●●●●●●●●○ 와 같이 표현합니다.
HTML에 학생 이름과 변환된 점수 시각화를 한 줄씩 출력합니다.
(3). 출력 예시 (HTML)
유재석 ●●●●●●●●●○
강호동 ●●●●●●●●○○
신동엽 ●●●●●●●○○○  */
let nameArray = ['유재석', '강호동', '신동엽'];
let scores = [92, 86, 72];
// 1. 
console.log()