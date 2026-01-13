/*[ JS 함수 실습 ]*/
/*실습 1: 성인 인증 함수
나이(age)를 매개변수로 받아, 20세 이상이면 true를, 미만이면 false를 반환하는 isAdult 함수를 만드세요.
isAdult(25)와 isAdult(17)의 결과를 각각 콘솔에 출력해 보세요.*/
// function isAdult( age ){
//     if( age >= 20){
//         console.log('true');
//     }else{console.log('false');}
// } isAdult(25); isAdult(17);
/* 교수님 풀이 */
// 1. 매개변수: age                    ⭐ 감으로 하지 말고 세 단계 꼭 확인하면서 풀기!!
// 2. 리턴값: true/false  
// 3. 처리: age가 20세 이상이면 true를, 미만이면 false를.
// function isAdult( age ){
//   if( age >= 20){ return true;}
//   else{return false; }
//   }
// let result = isAdult(25); //1. 함수 실행 -> 2. 함수 반환 -> 3. 반환값 변수저장 -> 4. 변수출력
// // 아니면 변수 없이 console.log( result ); . 변수 활용 하는지 안 하는지의 차이.

/*실습 2: 배열의 총합 구하기
숫자로 이루어진 배열을 매개변수로 받아, for 반복문을 사용해 
모든 요소의 합계를 구하여 반환하는 sumArray 함수를 만드세요. 아래 numbers 배열로 테스트해 보세요.*/
// const numbers = [10, 20, 30, 40, 50];
// function sumArray( num ){
//     let sum = 0;
//     for( let index = 0 ; index <= num.length-1 ; index++){
//         sum += num[index];
//     }
//     return sum;
// } console.log(sumArray(numbers));
/* 교수님 풀이 
// 1. 매개변수: 배열
// 2. 리턴값: 합계를 구하여 반환
// 3. 처리: for 반복문을 사용해 모든 요소의 합계
const numbers = [10, 20, 30, 40, 50];
function sumArray(배열){  // 매개변수: 함수호출시 전달되는 인자값 연결되는 변수
  // 주의할점: 매개변수도 지역변수 특징을 가지지만 함수 밖 numbers를 인자로 전달하더라도 매개변수랑은 다르다.
  let sum = 0; // 지역변수
  for(let i = 0 ; i <= 배열.length-1 ; i++){
         sum += sum+1;}
         return sum
} console.log(sumArray(numbers)); */

/*실습 3: 가장 긴 단어 찾기
문자열로 이루어진 배열을 매개변수로 받아, for 반복문을 사용해 
가장 긴 단어를 찾아 반환하는 findLongestWord 함수를 만드세요. 아래 words 배열로 테스트해 보세요.*/
// const words = ['apple', 'banana', 'kiwi', 'strawberry'];
// // 매개변수: 배열, 반환값: 가장 긴 단어, 처리: 첫번째 인덱스를 가장 큰 것으로 가정, for반복문 사용, if문 비교.
// function findLongestWord( array ){
//   let longword = array[0];
//   for(let index = 0 ; index <= array.length-1 ; index++){
//     if( array[index].length > longword.length){ longword = array[index]}
//   }
//   return console.log(longword);
// } findLongestWord(words)
/* 교수님 풀이 */
/* 매개변수: 문자열 배열. 리턴값: 가장 긴 단어 반환, 처리: 첫 인덱스를 가장 큰 것으로 가정, if문으로 가장 긴 단어 찾기.
function findLongestWord( array ){
  let long = words[0]; // 첫 번째 인덱스 값을 가장 큰 단어로 가정하고 시작 
  for( let index = 1; index <= array.length-1 ; index++){
    // 만약에 가장 긴 단어가 저장된 변수보다 index번째 단어가 더 길면
    if( long.length < array[index].length){long = array[index];} // 가장 긴 단어를 저장하는 변수에 대입
  }
  return long; // 반환값: 함수 내 선언된 변수들은 함수가 종료되면 사라진다.
        // 다른 곳에서 사용할 거면 return. 아니면 안 해
} console.log(findLongestWord(words));*/

/*실습 4: 게임 점수 관리하기
let userScore = 0; 전역 변수를 만드세요. 
gainScore() 함수는 userScore를 10 증가시키고, loseScore() 함수는 5 감소시킵니다.
gainScore()를 세 번, loseScore()를 한 번 호출한 뒤, 최종 점수를 콘솔에 출력하세요.*/
// let userScore = 0;
// function gainScore( ){
//     userScore += 10;
// }
// function loseScore( ){
//     userScore -= 5;
// }
// gainScore(); gainScore(); gainScore();
// loseScore()
// console.log(userScore);
/* 교수님 풀이
let userScore = 0; // 전역변수: JS파일 내 어떠한 {} 안에서 선언되지 않은 변수
function gainScore( ){userScore += 10;} // 전역변수는 아무런 조건없이 함수 안에서 사용가능 vs 전역변수를 인수로 매개변수로 전달
function loseScore( ){userScore -= 5;}
gainScore(); gainScore(); gainScore();
loseScore()
console.log(userScore); */

/*실습 5: 최고 점수 학생 찾기
전역변수 students 배열 데이터를 이용하여 , 가장 높은 점수(score)를 가진 학생의 이름을 찾아 반환하는 findTopStudent 함수를 만드세요.
const students = [  { name: '김철수', score: 85 },  { name: '이영희', score: 92 },  { name: '박민준', score: 78 }];
// 매개변수: students, 리턴값: 가장 높은 score의 name, ⭐처리: 최고 점수를 가진 객체를 top에 저장, top의 'name'만 리턴.
function findTopStudent(){
  let top = students[0]; // 첫번째 학생을 최고 점수 가정 시작
  for( let index = 0 ; index <= students.length-1 ; index++){
    if( top.score < students[index].score ){ // 만약에 최고 점수의 점수보다 index번째 객체의 점수가 더 크면.  객체 내 !속성값!을 비교하고
      top = students[index]; // index번째 객체를 top 저장.                                               객체 대입.
    }
  }
  return top.name;    // 입력 후 findTopStudent()로 들어갔을 때 나오는 것은 top.name
} console.log( findTopStudent() ); */

/*실습 6: 상품 목록 페이지 만들기
전역변수 products 배열 데이터를 이용하여, 각 상품을 소개하는 HTML 요소를 동적으로 만들어 페이지에 표시하는 renderProducts 함수를 만드세요.
각 상품은 이름(<h4>), 가격(<p>), 재고(<p>)를 포함한 div로 묶여야 합니다.
const products = [{ name: '노트북', price: 1200000, stock: 5 }, { name: '모니터', price: 350000, stock: 12 }, { name: '키보드', price: 80000, stock: 25 }];
// 매개변수: products , 리턴값: ㄴ, 
function renderProducts( ){
  let html = ``; // 구성한 html 문자열 저장하는 변수
  for( let index = 0 ; index <= products.length -1 ; index++){
    let prod = products[index]; // index 번째 제품(객체)호출
    html += `<div>
              <h4> ${prod.name} </h4>
              <p> ${prod.price} </p>
              <p> ${prod.stock} </p>
            </div>`; // 객체 하나씩 div를 구성하여 html에 추가.
  }
  document.write(html);
} renderProducts()*/

/*실습 7: 간단한 계산기
num1, num2, operator ( '+', '-') 세 개의 매개변수를 받는 calculator 함수를 만드시오.
operator가 '+'이면 두 수의 합을, '-'이면 두 수의 차를 콘솔에 출력하시오. (if문 사용)
// 매개변수: num1, num2, operator. 리턴값:... , 처리: if문 
function calculator( num1 , num2, operator ){
  if( operator == '+'){console.log(num1 + num2);}
  else if( operator == '-'){console.log(num1 - num2);}
}
calculator(1, 2 , '+')*/

/*실습 8: HTML 리스트(ul, li) 동적 생성
todoList라는 할 일 목록이 담긴 전역 배열이 있습니다.
renderList() 함수를 정의하시오. 이 함수는 todoList 배열을 순회하며 <li>할 일 내용</li> 형태의 HTML 문자열을 만듭니다.
최종적으로 이 문자열을 HTML <ul> 태그로 표현하여 리스트를 화면에 그리시오.
// 매개변수: , 리턴값: , 처리: for문 배열 순회, html <ul> 생성, html 안에 todoList를 <li>안에 담기, document로 html쓰기
let todoList = ['장보기', '운동하기']
function renderList(){
  let html = `<ul style="list-style-type: none; color: red;">`;
  for( index = 0 ; index <= todoList.length-1 ; index++){
    let todo = todoList[index]; // index 번째의 문자열 1개 호출해서 변수 담음.
    html += `<li> ${ todo } </li>`
  }
  html += `</ul>`
  document.write(html);
}
renderList();*/

/*실습 9: 입장료 계산 함수
임의의 나이(age)를 매개변수로 받아 입장료를 반환하는 getTicketPrice 함수를 만드시오.
8세 미만: "무료"
8세 이상 19세 이하: "5,000원"
20세 이상: "10,000원"
계산된 가격 문자열을 반환(return)하시오.
// 매개변수: age, 반환값: 계산된 가격 문자열, 처리: if문 20세이상-> 8세이상19세이하 -> 8세미만 순서.
function getTicketPrice( age ){
  if( age >=20 ){ return "10,000원"}
  else if( age >= 8){ return "5,000원"}
  else{ return "무료"};
} console.log(getTicketPrice( 25 ));*/


/* [================ 전역변수와 지역변수 ==================]

변수의 종류 분류 시점: 선언.
  - 위치(언제 사용했느냐)에 따라 변수의 종류가 바뀜. (전역/지역)
  - 선언: let / const / function 키워드가 기준.
    - if 안에 들어간 것도 지역변수로 분류.

변수 = 하나의 값/자료 저장.
  - 전역변수: { }에서 선언 안 된.
  - 

*/