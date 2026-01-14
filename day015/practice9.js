/*
[  인사 관리 대시보드 ] * 제출o
    - 2인 공통 시트작업. HTML&CSS / JS 나눠서 구현.

1. 목표

    부서, 사원, 그리고 휴가 신청 정보를 하나의 웹 페이지에서 통합적으로 관리하는 대시보드를 제작합니다.

    사용자는 부서 등록/삭제/수정, 사원 등록/삭제/수정, 휴가 신청/취소 기능을 직관적으로 사용할 수 있어야 합니다.

2. 화면 구성

    페이지는 '부서 관리(왼쪽)', '사원 관리(가운데)', '휴가 관리(오른쪽)' 라는 3개의 명확한 컬럼으로 구성되어야 합니다.

    부서 관리 영역:

        부서 등록:  새로운 부서의 이름을 텍스트로 입력할 수 있는 입력창과 "추가" 버튼이 있어야 합니다.

        부서 목록: 

            등록된 모든 부서 정보를 보여주는 표(테이블)가 있어야 합니다.

            표는 "부서명"과 "관리" 열로 구성됩니다.

            각 부서 항목마다 해당 부서를 수정하고 삭제할 수 있는 버튼이 제공되어야 합니다.

    사원 관리 영역:

        사원 등록:

        사원의 이름과 직급을 입력하는 텍스트 필드가 있어야 합니다.

        등록된 부서 목록에서 소속될 부서를 선택할 수 있는 드롭다운 메뉴가 있어야 합니다.

        사원의 사진을 등록할 수 있는 파일 선택 버튼이 있어야 합니다.

            사원 목록:

        등록된 모든 사원 정보를 보여주는 표(테이블)가 있어야 합니다.

        표는 "사진", "이름", "부서", "직급", "관리" 순서의 열로 구성됩니다.

        각 사원 항목마다 해당 사원의 이름과 직급을 수정하고, 사원 정보를 삭제할 수 있는 버튼이 제공되어야 합니다.

    휴가 관리 영역:

    휴가 신청:

    등록된 사원 목록에서 휴가를 신청할 사원을 선택하는 드롭다운 메뉴가 있어야 합니다.

    휴가 시작일과 종료일을 선택할 수 있는 날짜 입력 필드가 있어야 합니다.

    휴가 사유를 텍스트로 간단히 기입할 수 있는 입력창이 있어야 합니다.

    휴가 신청 전체 목록:

    제출된 모든 휴가 신청 내역을 보여주는 목록이 있어야 합니다.

    각 항목에는 신청한 사원의 이름, 휴가 기간, 사유가 표시되어야 합니다.

    각 휴가 신청 항목마다 해당 신청을 취소할 수 있는 "신청취소" 버튼이 제공되어야 합니다.

3. 핵심 기능

  초기 데이터 표시:

모든 데이터(부서, 사원, 휴가)는 웹 페이지가 실행되는 동안에만 유지되는 전역 배열을 통해 관리됩니다. 페이지를 새로고침하면 데이터는 초기 샘플
상태로 돌아갑니다.

사용자가 처음 페이지에 접속했을 때, 시스템 사용법을 쉽게 파악할 수 있도록 부서, 사원, 휴가 신청에 대한 예시 데이터가 기본적으로 화면에 표시되
어 있어야 합니다.

  부서 관리 기능:

등록: "추가" 버튼 클릭 시, 입력된 부서가 부서 목록과 사원 등록의 부서 선택 메뉴에 즉시 반영되어야 합니다. 이미 존재하는 부서명은 등록되지 않아
야 합니다.

수정: "수정" 버튼 클릭 시, prompt 대화상자가 나타나 새로운 부서명을 입력받고, 입력 완료 시 목록에 즉시 반영되어야 합니다.

삭제: "삭제" 버튼 클릭 시, 해당 부서가 목록에서 제거되어야 합니다. 단, 해당 부서에 소속된 사원이 한 명이라도 있을 경우, 삭제할 수 없다는 경고 메
시지를 표시해야 합니다.

  사원 관리 기능:

등록: 사원 정보를 입력하고 "등록" 버튼 클릭 시, 사원 목록과 휴가 신청의 사원 선택 메뉴에 즉시 추가되어야 합니다. 사진을 첨부하면 해당 사진이,
첨부하지 않으면 기본 이미지가 표시되어야 합니다.

수정: "수정" 버튼 클릭 시, prompt 대화상자를 통해 새로운 이름과 직책을 입력받아 해당 사원의 정보를 수정하고 목록을 즉시 갱신해야 합니다.

삭제: "삭제" 버튼 클릭 시, 해당 사원이 목록에서 제거되며, 관련된 모든 휴가 신청 기록도 함께 삭제되어야 합니다.

  휴가 관리 기능:

신청: 휴가 정보를 입력하고 "신청" 버튼 클릭 시, 휴가 신청 목록에 즉시 추가되어야 합니다.

취소: "신청취소" 버튼 클릭 시, 해당 휴가 신청 내역이 목록에서 제거되어야 합니다
*/

// [1] 메모리 설계
    // 1. 저장할 데이터 객체로 구성
    const departments = [ 
        { "dcode": 1,  "departmentName" : "개발팀"},
        { "dcode": 2,  "departmentName" : "디자인팀"},
        { "dcode": 3,  "departmentName" : "기획팀"} 
    ]
    const staff = [{ "scode": 1, "staffName": "김민준", "staffRank": "선임개발자", "staffImg": "https://placehold.co/100", "dcode": 1 },  { "scode": 2, "staffName": "이서연", "staffRank": "수석 디자이너", "staffImg": "https://placehold.co/100", "dcode": 2 }, { "scode": 3, "staffName": "박도윤", "staffRank": "팀장", "staffImg": "https://placehold.co/100", "dcode": 3 }, { "scode": 4, "staffName": "유재석", "staffRank": "대리", "staffImg": "https://dimg.donga.com/wps/SPORTS/IMAGE/2021/09/07/109129807.1.jpg", "dcode": 1 } ]

    
// [2] 기능 설계
//내가 맡은 곳
// 부서영역: 부서 등록, 부서 목록.  사원영역: 사원 목록.
// 부서영역: 부서 등록함수, 부서 출력함수, 부서 수정함수, 부서 삭제함수.
    // 부서 등록함수] 매개변수: x, 리턴값: x, 처리: 입력받은 1개 배열에 저장. 중복되면 안 됨! 
                // 실행조건: <추가> 클릭.
    // 부서 출력함수] 매개변수: x, 리턴값: x, 처리: 배열 내 모든 객체들을 tr구성하여 출력. 
                // 실행조건: 1. 페이지 열렸을 때, 등록성공, 삭제성공, 수정성공.
    // 부서 수정함수] 매개변수: dcode(수정 대상), 리턴값: x, 처리: 수정할 값 prompt로 받아 매개변수의 부서명 수정. 
                // 실행조건: <수정> 클릭.
    // 부서 삭제함수] 매개변수: dcode(삭제 대상), 리턴값: x, 처리: 삭제할 값 삭제, staff에 하나라도 있으면 삭제 못한다는 경고창. 
                // 실행조건: <삭제> 클릭.
// 사원영역: 사원 등록함수
    // 부서 등록함수] 매개변수: x, 리턴값: x, 처리: 입력받은 4개 배열에 저장하고 신청사원 목록에 추가. 
                // 실행조건: <등록> 클릭.

// [3] 부서영역 구현
//3-1] 부서 등록함수
let dcode = departments[departments.length-1].dcode;
function departmentAdd( ){
    // 1. 입력받은 값들을 가져온다.
    const departmentNameDom = document.querySelector(".department");
    const departmentNames = departmentNameDom.value;
    // 유효성 검사
    if(departmentNames == "" || `${departmentNames}` in departments == false ){ alert("부서명을 확인하십시오."); return;}
    // 2. 식별코드
    dcode += 1;
    // 3. 구성한 객체를 배열에 저장한다.
    const obj = { 'dcode': dcode, "departmentName": departmentNames};
    // 사원 등록의 부서 칸도 departments를 사용하니 저장되지 않을까요
    
    // 4. 화면 새로고침/랜더링.
    departments.push(obj);
    departmentPrint();
}

//3-2] 부서 출력함수
departmentPrint();
function departmentPrint( ){
    // 1. 어디에
    const tbody = document.querySelector(" 여기에 부서목록 tbody ");
    // 2. 무엇을 어떻게. 입력받은 것들을 html의 '어디에'에 tr 출력.
    let html = ``;
    for( let index = 0 ; index <= departments.length-1 ; index++){
        let dep = departments[index];
        html += `<tr>
                    <td>${dep.departmentName}</td>
                </tr>`
    }
    // 3. 출력
    tbody.innerHTML = html;
}

//3-3] 부서 수정함수
function departmentUpdate( dcode ){
    for( let index = 0 ; index <= departments.length-1 ; index++){
        if( dcode == departments[index].dcode){
            const newDepartment = prompt("수정할 부서명을 입력하십시오.");
            departments[index].departmentName = newDepartment;
            departmentPrint();
            break;
        }
    }
}

//3-4] 부서 삭제함수
function departmentDelete( dcode ){
    for(let index = 0 ; index <= departments.length-1 ; index++){
        for(let index = 0 ; index <= staff.length-1 ; index++){
            if( dcode == staff[index].dcode){ 
                alert("부서에 소속된 사원이 존재하므로 삭제할 수 없습니다."); 
                return; }
            if(dcode == departments[index].dcode){
            departments.splice(index, 1);
            departmentPrint();               
            return;}
        }
    }
}

// [4] 사원영역 구현
//4-1] 사원 등록함수
let scode = staff[staff.length-1].scode;
function staffAdd( ){
    // 1. 입력받은 것 가져오기
    const staffNameDom = document.querySelector(" 직원 이름 입력 칸 ");
    const staffNames = staffNameDom.value;
    const staffRankDom = document.querySelector(" 직급 입력 칸 ");
    const staffRanks = staffRankDom.value;
    const staffDepartmentDom = document.querySelector(" 부서 select 칸 ");
    const staffDepartment = staffDepartmentDom.value;
    const staffImgDom = document.querySelector(" 이미지 첨부 칸 ");
    const staffImgs = staffImgDom.value;
    // 유효성 검사
    if(staffDepartment == 'disabled'){alert("부서를 선택하세요."); return;}
    if(staffNames == "" || staffRanks == ""){alert("이름과 직급 입력은 필수입니다."); return;}
    // 2. 객체 구성하기. (입력받은 값 / 식별코드)
    scode += 1;
    
    // 3. 구성한 객체를 배열에 저장하기.
    let obj = {
         "scode": scode, 
         "staffName": staffNames, 
         "staffRank": staffRanks, 
         "staffImg": staffImgs == undefined ? "https://placehold.co/100" : URL.createObjectURL( staffImgs ), 
         "dcode": staffDepartment
    };

    // 4. 화면 새로고침/렌더링
    staff.push(obj);
    staffPrint();
}

