/*예제 1: 기본 함수 선언 및 호출
'함수 호출 성공!'이라는 메시지를 콘솔에 출력하는 sayHello 라는 이름의 함수를 정의하고, 그 함수를 호출하시오.*/
// 매개변수: ㄴ, 반환값: ㄴ, 처리할명령어: console.log();
function sayHello(){
    console.log("함수 호출 성공!");
}
sayHello();

/*예제 2: 매개변수를 사용하는 함수
임의의 두 개의 숫자(number)를 매개변수로 받아, 그 합을 콘솔에 출력하는 printSum 함수를 정의하시오. printSum(5, 10)을 호출하여 결과를 확인하시오.*/
// [매개변수] x y , [명령어] console.log(); [반환값] x
function printSum( x, y){
    console.log(x, y);
}
printSum(5, 10);

/*예제 3: 값을 반환(return)하는 함수
임의의 이름을 문자열(string)로 매개변수를 받아 "환영합니다, [이름]님!" 형식의 문자열을 반환하는 getWelcomeMessage 함수를 정의하시오.
함수를 호출한 결과를 변수에 저장하고, 그 변수를 콘솔에 출력하시오. */
// [매개변수] name, [명령어] console.log(); [반환값] "환영합니다, [name]님!"
function getWelcomeMessage( name ){ //name는 매개변수. 매개변수는 아무 거나 했다.
    return `환영합니다, ${name}님!`;
}
let result3 = getWelcomeMessage( "홍길동" );
console.log(result3);


/*예제 4: 함수를 이용한 카운터
0의 값을 가진 counter라는 전역 변수를 만드시오. 호출될 때마다 counter의 값을 1씩 증가시키는 increaseCount 함수를 정의하시오.
함수를 세 번 호출한 뒤, counter의 값을 콘솔에 출력하여 3이 되었는지 확인하시오.*/
// 매개변수 x , 명령어 counter의 값을 1씩 증가, 반환 x
let counter = 0;
function increaseCount( ){
    counter += 1;
}
increaseCount();
increaseCount();
increaseCount();
console.log(counter);

/*예제 5: for 반복문을 포함한 함수
임의의 숫자 n을 매개변수로 받아, 1부터 n까지의 숫자를 콘솔에 차례대로 출력하는 printNumbers 함수를 정의하시오.*/
// 매개변수 n , 명령어 1부터 n까지 숫자 출력, 반환 x
function printNumbers( n ){
    for( let i = 1 ; i <= n ; i++){
        console.log(i)
    }
} printNumbers(5);

/*예제 6: prompt와 함수 활용
prompt를 이용해 사용자로부터 이름을 입력받으시오. 입력받은 이름을 매개변수로 받아, 해당 이름이 저장된 userList 전역 배열에 push하는 addUser 함수를 정의하고 호출하시오.*/
// 매개변수: 이름, 명령어: useList 번역 배역에 push, 반환: x
let userList = [] ; // 전역변수랑 매개변수랑 이름 다르게 하기.
function addUser( name ){
    userList.push( name );
}
let 이름 = prompt( "이름 입력: "); // 이름: 전역변수
addUser( 이름 );
console.log( userList ); // 확인

/*예제 7: 배열을 매개변수로 전달
임의의 이름 들이 담긴 배열을 매개변수로 받아, for 반복문을 사용하여 배열의 모든 요소를 콘솔에 하나씩 출력하는 printFruits 함수를 정의하시오. */
// 매개변수
let nameList = ["사과", "포도", "딸기"];
function printFruits( list ){
    for( let index = 0 ; index <= list.length-1 ; index++){
        console.log( list[index]);
    }
}
printFruits( nameList );

/*예제 8: Boolean 값 반환하기
임의의 숫자 하나를 매개변수로 받아, 그 숫자가 0보다 크면 true를, 그렇지 않으면 false를 반환하는 isPositive 함수를 만들어 보세요. */
// 매개변수
function isPositive( x ){
    if(  x > 0 ){return true;} // 조건에 따른 결과를 반환한다.
    else{return false;}
}
let result8 = isPositive( -1 ); // false;
console.log( result8 );

/*예제 9: 전역 변수와 지역 변수
let globalText = '전역'; 변수를 선언하세요. printLocal 함수 안에서는 let localText = '지역'; 변수를 선언하고, 
두 변수를 모두 콘솔에 출력해 보세요. 함수 바깥에서는 globalText만 출력되는 것을 확인하세요.  */
let globalText = '전역'; 
function printLocal(){
    let localText = '지역'
    console.log(globalText); // 즉] 선언 위치에 따른 {} 중괄호 안으로 들어가는 건 가능.
    console.log(localText);  // { } 중괄호 밖으로 나가는 건 불가능
}
console.log( globalText );
// console.log( localText ); [오류] localText is not defined