/*
숫자 자료: 2000(가격), 4000(총 결제 금액), 3(주문 수량)
문자 자료: 아메리카노(제품명), 커피(카테고리명), 주문번호(문자로 많이 씀)
불리언 자료: 품절, 영수증 출력 여부, 적립 여부
배열 자료: 카테고리명들, 제품명들, 가격들, 장바구니 내 제품들
객체 자료: 제품과 가격은 하나의 쌍 
    {제품명: "콜라", 가격: 1000, 재고:10}
    {선택된 제품: [], 총주문금액: 4000}
    {주문번호: 10, 결제금약: 350, 주문날짜: "2005-03-01"}


// 변수 생성
let 숫자 = [ 2000, 3, 43 ] 
let 문자 = [ "카페모카", "차(TEA)", "결제하기"]
let 불리언 = [ "품절 여부", "영수증 출력 여부", "포인트 적립 여부"]
let 배열 = [ "카테고리명들", "제품명들", "주문한 상품들"]
let 객체 = {주문번호: 71, 결제금액: 3500, 주문날짜: "2025-07-03"}
 
// 출력
console.log( "숫자 자료:", 숫자 )
console.log( "문자 자료:", 문자 )
console.log( "불리언 자료:", 불리언 )
console.log( "배열 자료:", 배열 )
console.log( "객체 자료:", 객체 )

이게 아닌가 봐
*/


// 1. 숫자 찾기
let 상품가격 = 2000; console.log( 상품가격 );
let 주문수량 = 3; console.log( 주문수량 );
let 주문번호 = 43; console.log( 주문번호 );

// 2. 문자열 찾기
console.log( "카페모카","차(TEA)", "결제하기");

// 3. 불리언 찾기
const 품절여부 = true; console.log(품절여부);
const 영수증출력여부 = false; console.log(영수증출력여부);
const 포인트적립여부 = false; console.log(포인트적립여부);

// 4. 배열 찾기
let category = [ "커피(COFFEE)", "음료(NON COFFEE)", "스무디/쉐이크(BLENDED)"]; 
console.log( category );
let productsAry = [ "아메리카노", "카페라테", "아이스티"]; 
console.log( productsAry );
let priceAry = [ 3000, 4000, 4500]; 
console.log( priceAry );

// 5. 객체 찾기
let produtObj = { name: "아메리카노", price: 2500, stock: 35 };
console.log( produtObj );
let receipt = { orderNum: 71, price: 3500, Date: "2025-07-03" };
console.log( receipt );
let payment = { 결제수단: "신용카드", 할인권: "모바일상품권", 적립: "번호적립" };
console.log( payment );