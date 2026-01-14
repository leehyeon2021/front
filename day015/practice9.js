

// [1] 메모리 설계
    // 1. 저장할 데이터 객체로 구성
    const departments = [ 
        { "dcode": 1,  "departmentName" : "개발팀"},
        { "dcode": 2,  "departmentName" : "디자인팀"},
        { "dcode": 3,  "departmentName" : "기획팀"} 
    ]
    const staff = [{ "scode": 1, "staffName": "김민준", "staffRank": "선임개발자", "staffImg": "https://placehold.co/100", "dcode": 1 },  { "scode": 2, "staffName": "이서연", "staffRank": "수석 디자이너", "staffImg": "https://placehold.co/100", "dcode": 2 }, { "scode": 3, "staffName": "박도윤", "staffRank": "팀장", "staffImg": "https://placehold.co/100", "dcode": 3 }, { "scode": 4, "staffName": "유재석", "staffRank": "대리", "staffImg": "https://dimg.donga.com/wps/SPORTS/IMAGE/2021/09/07/109129807.1.jpg", "dcode": 1 } ]
    const vacationArray = [
        {"vcode": 1, "scode": 1, "vacationStart": "2025-08-04", "vacationEnd": "2025-08-04", "vacationReason" : "병원 진료"}, 
        {"vcode": 2, "scode": 2, "vacationStart": "2025-07-21", "vacationEnd": "2025-07-25", "vacationReason" : "여름 휴가"}
    ];
    
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

