/*

[ 쿼리 스트링 ]
: 페이지 이동 또는 요청 간의 데이터를 전달할 수 있는 거

어디에 있나?
1. URL ? 변수명 = 값               (하나 있을 때)
    http://www.naver.com ? name
2. 주로 페이지 이동 간의 이동할 페이지에서 사용할 식별 데이터를 보낸다.
    URL ? 식별키 = 식별값   "test.html?no=3"
3. 여러 개 가능
    URL ? 식별키 = 식별값 & 식별키 = 식별값 & 식별키 = 식별값
    URL ? 변수명 = 값 & 변수명 = 값 & 변수명 = 값
4. 현재 주소상의 쿼리스트링 값 가져오기
    new URLSearchParams(location.search).get(변수명);
5. 전달하는 방법
    1] HTML: <a href="이동할HTML파일명 ? 변수명 = 값"></a>
    2] JS: location.href = "이동할HTML파일명 ? 변수명 = 값";
*/

// [1] 주소(URL) 상의 쿼리스트링(매개변수) 값
//const param = new URLSearchParams( location.search ).get("가지고 오고 싶은 변수명") //search가 쿼리스트링
const name = new URLSearchParams(location.search).get("name"); // " ?name=이동2"
console.log(name)

// [2] 
function 이동함수(){
    location.href = "exam4.html?name=이동3";
}