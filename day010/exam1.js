// 260107 수업 다시 듣기...


/*예제 1: 자기소개 객체 만들기
자신의 이름(name), 나이(age), 사는 곳(city)을 속성으로 갖는 person이라는 이름의 객체를 만들고, console.log()로 객체 전체를 출력하시오.
*/// [1] 객체 선언: { 속성명: 값 , 속성명: 값 , 속성명: 값 };
let person1 = { name: "이태현", age: 25, city: "서울시"};
// [2] 객체 전체 호출: (객체갖는)변수명
console.log( person1 );

/*예제 2: 객체의 값(Value) 출력하기
다음과 같은 book 객체가 있습니다. 반복문을 사용하여 이 객체의 모든 값 을 하나씩 콘솔에 출력하시오.*/
const book = { title: 'Cracking the Coding Interview', author: 'Gayle Laakmann McDowell', pages: 500 };
// [1] 객체 내 값 반환: Object.values( 변수명 );
let values = Object.values( book );
for( let index = 0 ; index <= values.length -1 ; index++ ){
    console.log( values[index] );
}

/*예제 3: 객체에 속성 추가 및 삭제하기
person 객체에 이메일(email) 주소를 추가합니다. , person 객체에서 나이(age) 속성을 삭제합니다.최종적으로 수정된 person 객체를 콘솔에 출력하시오.
;const person2 = { name: '김코딩', age: 25, }; 
*/// [1] 객체 내 속성 추가: (객체)변수명.새로운속성명 = 값;
person2.email = "qwe@qwe.com";
// [2] delete (객체)변수명.삭제할속성명;
delete person2.age;
// [3] 객체 확인
console.log(person2)

/* 예제 4: 객체 속성 값 계산하기
다음 product 객체는 상품의 이름, 가격, 재고량을 나타냅니다. 이 객체의 총 자산 가치(가격 * 재고량)를 계산하여 콘솔에 출력하시오.
*/const product = { name: '노트북', price: 1200000, stock: 50 }; 
// [1] 객체 내 1개 속성값 호출: (객체)변수명.속성명
const total = product.price * product.stock ;
console.log( total );

/* 예제 5: 대괄호 표기법 사용하기
다음 user 객체가 있습니다. 대괄호 표기법을 사용하여 job-title 속성의 값('개발자')을 콘솔에 출력하시오.
*/const user = { name: '김코딩','job-title': '개발자'};
    // 주의! user.job-title; [x] 불가능!
// [1] 객체 내 속성명이 특수문자('-')가 포함된 경우: 변수명["속성명"]
// [2] 접근 연산자가 아닌 [] 대괄호 표기법 사용한다.
console.log( user["job-title"] );

/*예제 6: 중첩된 객체 다루기
다음 student 객체에서 학생이 사는 도시(city)의 이름('Seoul')을 콘솔에 출력하시오.
*/const student = {  name: '이학생', age: 25, address: { city: 'Seoul', zipCode: '12345' } };
// [1] 객체 안에 객체가 포함될 수 있다. 중첩! 껍질 깔 때는 . 으로~~
console.log(student.address.city);

/* 예제 7: 객체에 특정 속성이 있는지 확인하기(  in 연산자 )
character 객체에 level이라는 속성이 있는지 in 연산자를 사용하여 확인하고, 결과를 true 또는 false로 콘솔에 출력하시오.
*/const character = {  name: '전사', hp: 200, mp: 50 }; 
// [1] "찾을속성명" in 변수명: 존재하면 true 아니면 false
console.log('level' in character);

/* 예제 8: Object.keys()와 Object.values()
country 객체의 모든 키(key) 들을 배열로 만들어 출력하고, 모든 값(value) 들을 또 다른 배열로 만들어 콘솔에 각각 출력하시오.
*/const country = {name: '대한민국', capital: '서울', population: 51780000 }; 
// [1] Object.keys( 객체변수명 ): 객체 내 모든 키 반환
let key = Object.keys(country);
// [2] Object.values( 객체변수명 ): 객체내 모든 값 반환
let values1 = Object.values(country);
console.log( key, values1);

/* 예제 9: 객체와 조건문 활용하기
다음 inventory 객체는 각 상품의 재고를 나타냅니다. for 반복문과 if 조건문을 사용하여 재고가 10개 미만인 상품의 이름을 콘솔에 출력하시오.
*/const inventory = { apple: 15, banana: 5, orange: 20, grape: 8 }; 
// [1] key를 알면 value를 알 수 있지만, value를 안다고 key를 알 수는 없다. == 값보다는 키를 꺼내는 것이 낫다.
const keys = Object.keys(inventory);
for( let index = 0 ; index <= keys.length-1 ; index++){
    // [3] 만약에 index번째 재고가 10보다 작으면, index번째 key(속성명)값 출력하기.
    if( inventory[ key[index] ] < 10){ console.log(keys[index]);}
}

/* 예제 10: 객체 배열 순회하기
다음은 여러 학생의 정보를 담은 students 배열입니다. for 반복문을 사용하여 각 학생의 이름과 전공을 "이름: 전공" 형태로 콘솔에 출력하시오.*/
const students = [ { name: '김철수', major: '컴퓨터공학' },  { name: '이영희', major: '경영학' },  { name: '박지성', major: '체육교육' } ];
// [1] 배열 순회: 0부터 마지막인덱스까지
for( let index = 0 ; index <= students.length-1 ; index++){
    // [2] index번째 학생개체 호출
    const student = students[index];
    // [3]
    console.log(`${student.name} : ${student.major}`);
}

/* 예제 11: 공공데이터 포털 : 인천 부평구 인구 현황 테이블 만들기
[구현 조건]
  1. 공공데이터 포털에서 '인천광역시 부평구_인구 현황' 의 open API 신청하여 결과를 복사하여 'response' 변수에 저장하시오.
  let response = {}
  2. response 객체 안의 data 배열을 반복문을 사용하여 순회합니다.
  3. 각 동(행)의 정보를 표시할 HTML <table> 태그를 문자열로 만듭니다.
  4. 테이블의 각 셀에는 '동별', '세대수', '인구수(계)', '인구수(남)', '인구수(여)' 정보가 순서대로 포함되어야 합니다.
  5. 최종적으로 완성된 HTML 테이블 문자열을 document.write() 사용하여 화면에 출력합니다.
[ 공공데이터 open API 신청 ]
  1. 공공데이터 포털 : https://www.data.go.kr
  2. 회원가입/로그인
  3. '부평구 인구' 검색
  4. '인천광역시 부평구_인구 현황' Open API를 찾아 [활용신청] 버튼을 누르고, 절차에 따라 인증키를 발급받습니다.
  5. 인증키 설정 ( Encoding , Decoding 순서대로 대입하여 설정 )
  6. 인증키 설정 후 'API 목록' 에서  [Open Api 호출] 합니다.
  7. **실행 결과(JSON)**를 전체 복사합니다.  
*/

