
//      다시 하기 ..........


/*[ JS DOM객체 실습 ]

[ 제품 관리 페이지]

1. 목표
    사용자가 카테고리, 제품명, 가격, 이미지를 포함한 제품 정보를 등록하고, 
    등록된 모든 제품을 표 형태로 한눈에 확인하며 관리할 수 있는 웹 페이지를 제작합니다.

2. 화면 구성
    페이지는 사용자가 정보를 입력하는 **'제품 등록 영역'**과 
    등록된 결과를 보여주는 **'제품 목록 영역'**으로 명확히 구분되어야 합니다.

    제품 등록 영역 (<div id="header">):

        카테고리 선택: 미리 정의된 카테고리 목록에서 제품의 분류를 선택할 수 있는 
        드롭다운 메뉴가 있어야 합니다. (예: '음료', '과자')

        제품명 입력: 등록할 제품의 이름을 텍스트로 입력할 수 있어야 합니다. (예: "코카콜라")

        제품 가격 입력: 제품의 가격을 숫자로 입력할 수 있어야 합니다. (예: 1000)

        제품 이미지 입력: 제품의 사진을 사용자의 컴퓨터에서 파일 형태로 선택하여 첨부할 수 있어야 합니다.

        등록 버튼: 모든 정보를 입력한 후, 목록에 제품을 추가하기 위한 "등록" 버튼이 있어야 합니다.

    제품 목록 영역 (<div id="main">):

        등록된 모든 제품 정보를 보여주는 표(테이블)가 있어야 합니다.

        표는 "이미지", "카테고리명", "상품명", "가격", "등록일", "비고" 순서의 열로 구성되어야 합니다.

        각 제품 항목(행)마다 해당 제품을 관리할 수 있는 "삭제" 버튼과 "수정" 버튼이 포함되어야 합니다.

3. 핵심 기능

    초기 데이터 표시:
        사용자가 페이지에 처음 방문했을 때, 카테고리 선택 메뉴에는 두 개의 예시 카테고리('음료', '과
        자')가 기본적으로 표시되어 있어야 합니다.
        제품 목록 표에는 사용법을 쉽게 이해할 수 있도록 네 개의 예시 제품이 기본적으로 표시되어 있어
        야 합니다.

    제품 등록 기능:
        사용자가 '등록 영역'에 카테고리, 제품명, 가격을 모두 입력하고 "등록" 버튼을 클릭하면, 해당 제
        품이 '목록 영역' 표에 새로운 행으로 즉시 추가되어야 합니다.
        제품 등록 시, 등록 날짜는 현재 날짜로 자동 기록되어야 합니다.
        첨부된 이미지는 목록의 '이미지' 열에 표시되어야 하며, 이미지를 첨부하지 않은 경우 기본 이미지
        가 대신 표시되어야 합니다.

    제품 관리 기능:
        삭제: 각 제품의 "삭제" 버튼을 클릭하면 해당 제품이 목록에서 즉시 제거되어야 합니다.
        수정: "수정" 버튼을 클릭하면, prompt 창을 통해 새로운 제품명과 가격을 입력받아 해당 제품의
        정보를 수정하고 목록을 즉시 갱신해야 합니다.    */ // 번호를 하나씩 매겨서 그 번호의 '삭제/수정' 누르면 해당 객체 삭제/수정.


// [1] 메모리 설계
    // 표/테이블 = 배열, 표제목 = 속성명, 행/가로 1개 = 객체 1개
    // 1. 저장할 데이터들을 객체로 구성
    // 2. 각 객체들 간의 식별(구분. 주민번호/사번/학번 등.) 1개 이상 필요. 중복 없는 속성으로 선택.
        // pcode: produtCode 제품코드로써 삭제와 수정시 식별 용도로 사용.
        // { pcode: 1, "image": '#', '카테고리명': '1', '제품명': '코카콜라', '가격': 2000, '등록일': '2026-06-17'}
    // 3. 테이블 간의 연관관계 구성
        // 카테고리테이블(상위) --> 제품테이블(하위), 제품테이블의 ccode는 카테고리테이블의 ccode를 참조(교집합)한다.
        // {'ccode': 1, 'category' : '음료'}
        // {{ pcode: 1, "image": '#', '카테고리명': '1', '제품명': '코카콜라', '가격': 2000, '등록일': '2026-06-17'}
    // 4. 객체가 다수일 때는 배열을 사용한다.
    const categoryAry = [{"ccode": 1, 'category': '음료'}, {"ccode": 2, "category": '과자'}] 
                        // 나는 이거 안 만들고 그냥 냅다 카테고리명 넣었는데 이게 더 좋은 것 같음... >> '음료' 보다는 '2'가 데이터 적어서 경제적으로 유리.
                        // 코드로 입력받아서 카테고리명으로 출력하려면 for문을 사용하면 된다. (찾아서 일치하면 출력.)
    const productList = [{ "pcode": 1 , "img": "https://placehold.co/100", "ccode": '1', "name": '코카콜라', 'price': 2000, "date": "2026-01-10"},
                           { "pcode": 2 , "img": "https://placehold.co/100" ,"ccode": '2', "name": '새우깡', "price": 1000, "date": "2026-01-12"}]

// [2] 기능 설계
    // (1) 1. 등록 처리 기능. 2. 표에 출력 기능. 3. 수정 기능. 4. 삭제 기능. (CRUD)
    // (2) 등록함수, 매개변수: X, 리턴값: X, 처리: 입력받은 4개와 현재시스템날짜를 객체로 만들어서 배열에 저장, 
    //              실행조건: <등록> 클릭
    // (3) 출력함수, 매개변수: X , 리턴값: X, 처리: 배열 내 모든 객체들을 tr 구성하여 출력, 
    //              실행조건: 1. 페이지 열렸을 떄 2. 등록성공 3. 삭제성공 4.수정성공
    // (4) 수정함수, 매개변수: pcode(수정할대상) , 리턴값: X, 처리: 수정할 값 PROMPT 받아서 매개변수의 제품 수정
    //              실행조건: <수정> 클릭하면
    // (5) 삭제함수, 매개변수: pcode(수정할대상) , 리턴값: X, 처리: 매개변수의 제품 삭제
    //              실행조건: <삭제> 클릭하면

// [3] 구현 (등록함수, 출력함수, 수정함수, 삭제함수)
// // 3-1] 등록함수 (내가한거 - 뭔가 부족함,,)
// function Create(){
//     //1) 입력받은 값 가져오기   
//         let categoryDom = document.querySelector(".category");
//         let categoryinput = categoryDom.value;   // value 설정했으니 번호로 들어올 것임
//         let nameDom = document.querySelector(".name");
//         let nameinput = nameDom.value;
//         let priceDom = document.querySelector(".price");
//         let priceinput = priceDom.value;
//         let imgDom = document.querySelector(".img");
//         let imginput = imgDom.value;
//     //2) 입력받은 값 객체 구성
//         let newpcode = productList[productList.length-1].pcode + 1 ;
//         let obj = {"pcode": newpcode , "img": imginput ,"category": categoryinput, "name": nameinput, "price": priceinput, "date: ""};

//     //3) (전역) 배열에 저장
//         productList.push(obj);
//         //alert("등록성공");
//         nameDom.value = "";
//         print()
// }       
// 3-2] 출력함수: 어디에 무엇을 출력하는지?
print()
function print(){
    // 1. 어디에: tbody에
    const tbody = document.querySelector("tbody"); 
    // 2. 무엇을: 입력 받은 배열 내 객체들을 tr구성으로 출력.  (나중에 백엔드나 AI할 때 결과물 여기에 넣으면 된대)
    let html = ``;
    for( let index = 0 ; index <= productList.length -1 ; index++){
        let product = productList[index];
        // 카테고리명에 숫자가 아니라 문자값으로 나오게 변경. ccode --> category 변경: ccode의 category 배열에서 찾기.
            let category = "";
            for(let index = 0 ; index <= categoryAry.length-1 ; index++){ //카테고리 객체 만들었던 거
                if( product.ccode == categoryAry[index].ccode){ // 만약에 제품의 카테고리코드가 index번째 카테고리코드와 같으면
                    category = categoryAry[index].category; // 찾은 카테고리명
                    break;
                }
            }
        html += `<tr>
                    <td><img src="${product.img}"/></td>
                    <td>${category}</td> <td>${product.name}</td> <td>${Number(product.price).toLocaleString()}</td> <td>${product.date}</td>
                    <td><button class="del" onclick="productDelete(${product.pcode})">삭제</button>
                    <button class="add" onclick="productUpdate(${product.pcode})">수정</button></td>
                </tr>` 
    }
    // 3. 출력
    tbody.innerHTML = html; 
    console.log(productList[productList.length-1].pcode); // 삭제해도 바뀌는지 확인하려고 만듦 -> 안 바뀌네요!! 하긴 안 만들긴 함
}
// 3-3] 삭제함수: 해당하는 행의 <삭제> 버튼을 클릭하면 삭제(배열 내 제거 = .splice() )처리.
function productDelete( pcode ){ // 매개변수로 삭제할 pcode 받았다. [삭제할 대상자]!!
    for( let index = 0 ; index <= productList.length -1 ; index++){ // 1. pcode의 배열 내 인덱스 찾기.
        if(pcode == productList[index].pcode){ // 2. 만약에 삭제할 pcode와 index번째 pcode가 같으면
            productList.splice( index, 1 ); // 3. 배열명.splice( 삭제할 인덱스, 개수 );
            print(); // ⭐ 삭제 성공시 화면 새로고침/렌더링 필요!! [출력함수 재호출] JS에서 삭제하더라도 HTML에서 다시 출력해야하기 때문. JS랑 HTML은 다르니까.
            break; // 4. 1개만 삭제할 예정이므로 멈춰야 함. 목표(삭제) 이뤘으면 반복문 종료
            // vs. 또는 함수 종료인 return으로 해도 된다.
        }   // 지금은 새로고침하면 지워짐. 데이터베이스 공부하면 영구 저장 가능하대.
                //  JS는 사용자 혼자 사용하는 것 vs. 데이터베이스(SQL)은 공유해서 사용하는 거
    }
}

// 3-4] 수정함수: 해당하는 행의 <수정>버튼 클릭하면 수정. ( 배열변수명[인덱스].속성명 = 새로운값 ) 
function productUpdate( pcode ){
    for( index = 0 ; index <= productList.length -1 ; index++){ // 1. 수정할 pcode의 인덱스를 배열에서 찾는다.
        if(pcode == productList[index].pcode){ // 2. 수정할 코드와 index번째 제품(객체)와 같으면
            const newName =  prompt("수정할 상품명: "); // prompt 안 쓰고 HTML 별도로 만들거나 모달 사용한대
            const newPrice = prompt("수정할 가격: "); // ** 추후: 수정페이지/모달 사용. **
            productList[index].name = newName;
            productList[index].price = newPrice;
            print(); // === 수정 성공시 !!즉시!! 화면 새로고침/랜더링 필요 ===
            break; // vs. 또는 함수 종료인 return으로 해도 된다.
        }
    }
}

// 3-1] 등록함수: 입력받은 값들을 개체(묶어서) 구성하여 배열에 저장(.push)
let pcode = 3; //전역변수로 빼서 처음에는 1로 가정하고(이미 1, 2 있으니 3부터.) 시작. 샘플 데이터가 존재하면 마지막 코드.
function productAdd( ){
    // 1. 입력받은 값들을 가져온다.
    const categoryDom = document.querySelector(".category");
    const categoryinput = categoryDom.value;
    const nameDom = document.querySelector(".name");
    const nameinput = nameDom.value;
    const priceDom = document.querySelector(".price");
    const priceinput = priceDom.value;
    const imgDom = document.querySelector(".img");
    const imginput = imgDom.files[0];  // 업로드 한 파일 중에서 첫 번째 파일 호출.

    // +) 유효성 검사 : 필요 없거나 잘못된 데이터 검증 (1번에서 입력 받고 바로 하는 것이 좋음.) if많이 씀.
        if(categoryinput == "disabled"){alert("카테고리를 선택하세요."); return;} // 함수종료 [저장 실패]
        if(nameinput == "" || priceinput == ""){alert("제품명과 가격 입력은 필수입니다."); return;}

    // 2. 객체 구성하기. (입력받은 값 / 식별코드(+1) / 현재날짜(new Date()함수 사용))로 객체를 구성한다.
      // **** new Date() 현재 시스템 날짜/시간 반환 ****
        const year = new Date().getFullYear(); // 현재 연도
        const month = new Date().getMonth()+1; // 현재 월. 컴퓨터는 1월 -> 0 취급. 2월 -> 1. 12월 -> 11. => 그래서 +1 필수.
        const day = new Date().getDate(); // getDay 현재 요일 vs. getDate 현재 일
        // [날짜 두자릿수 만들기 - 삼항연산식 사용.] 위를 조합하여 만들기.
        const date = `${ year }-${ month < 10 ? "0"+month : month}-${ day < 10 ? "0"+day : day}`;  // '01'은 문자. 앞의 0은 숫자이면 생략된다.
      // **** pcode는 자동으로 마지막 객체의 pcode + 1 **** 
        pcode += 1; // 다음 객체는 1증가한 식별코드를 갖는다.

    // 3. 구성한 객체를 배열에 저장한다.
    const obj = {
        "pcode": pcode ,
        // URL.createObjectURL(이미지객체) : 이미지객체를 http 주소로 변경. 
        // 만약에 업로드된 이미지가 존재하지 않으면 ? 샘플이미지 : 존재하면 이미지 출력 <미리보기 기능 제공할 때>
        "img": imginput == undefined ? "https://placehold.co/100" : URL.createObjectURL( imginput ),
        "ccode": categoryinput, 
        "name": nameinput, 
        "price": priceinput, 
        "date": date
    };
    
    // 4. 화면 새로고침/렌더링 한다.
    productList.push(obj);
    print();
}