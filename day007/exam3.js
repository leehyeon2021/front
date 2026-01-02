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