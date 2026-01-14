

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
    if(departmentNames == "" || `${departmentNames}` in departments == true ){ alert("부서명을 확인하십시오."); return;}
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
    const tbody = document.querySelector("tbody");
    // 2. 무엇을 어떻게. 입력받은 것들을 html의 '어디에'에 tr 출력.
    let html = ``;
    for( let index = 0 ; index <= departments.length-1 ; index++){
        let dep = departments[index];
        html += `<tr>
                    <td>${dep.departmentName}</td>
                    <td><button class="update" onclick="departmentUpdate( )">수정</button></td>
                    <td><button class="delete" onclick="departmentDelete( )">삭제</button></td>
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
    const staffNameDom = document.querySelector(".staffName");
    const staffNames = staffNameDom.value;
    const staffRankDom = document.querySelector(".staffLank");
    const staffRanks = staffRankDom.value;
    const staffDepartmentDom = document.querySelector(".department");
    const staffDepartment = staffDepartmentDom.value;
    const staffImgDom = document.querySelector(".image");
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



// ======= 아래는 장민서님이 하신 것 =======

//사원 출력 함수
staffPrint()
function staffPrint(){
    const tbody = document.querySelector(".staffTable tbody"); // html id나 클래스에 따라 바꿔야 하는곳
    let html = "";
    for(let i = 0; i<staff.length; i++){ // staff 배열를 순회
        const member = staff[i]; // staff의 객체 하나를 저장
        
        let memberDepartmentName = ""; // 부서명을 가져오기위한 변수
        for(let j = 0; j < departments.length; j++){ // departments 배열을 순회
            if(member.dcode == departments[j].dcode){ // 일치하는 부서명을 찾으면
                memberDepartmentName = departments[j].departmentName; //부서명 저장
                break;
            };
        };

        html += `
            <tr>
                <td> <img src ="${member.staffImg == "" ? "https://placehold.co/100" : member.staffImg}"></td>
                <td>${member.staffName}</td>
                <td>${memberDepartmentName}</td>
                <td>${member.staffRank}</td>
                <td>
                    <button class="update" onclick="staffFix(${member.scode})">수정</button>
                    <button class="delete" onclick="staffDel(${member.scode})">삭제</button>
                </td>
            </tr>
        `;
    };
    tbody.innerHTML = html; // 상단 이름에 맞춰 변경해야 하는곳
};

function staffDel(scode){ // 사원 삭제 함수
    for(let i = 0; i < staff.length; i++){ //staff 배열 순회
        if(scode == staff[i].scode) { // 매개변수로 받은 사원 코드와 배열의 객체 안에 있는 사원 코드와 같으면
            staff.splice(i, 1); // 그 부분 삭제
            break //종료
        }
    }
    staffPrint();// 화면 새로고침
}

function staffFix(scode){ // 사원 수정 함수
    for(let i = 0; i < staff.length; i++){ //staff 배열 순회
        if(scode == staff[i].scode) { // 매개변수로 받은 사원 코드와 배열의 객체 안에 있는 사원 코드와 같으면
            const newStaffName = prompt("수정할 사원명 : "); // 새로운 사원명 받기  
            const newStaffRank = prompt("수정할 직급 : "); // 새로운 직급 받기
            staff[i].staffName = newStaffName; // 기존 사원명위치에 새로운 사원명으로 저장
            staff[i].staffRank = newStaffRank; // 기존 직급 위치에 새로운 직급으로 저장
            break
        };
    };
    staffPrint();
}

// 휴가 목록 출력 함수
vacationPrint()
function vacationPrint(){
    const right_bottomDom = document.querySelector("#right_bottom") // html에 따라 바꿔야 하는곳
    let html = "";
    for(let i = 0; i<vacationArray.length; i++){ // 휴가 배열를 순회
        const vacation = vacationArray[i]; // 휴가의 객체 하나를 저장
        
        let staffName = ""; // 사원명을 가져오기위한 변수
        for(let j = 0; j < staff.length; j++){ // 사원 배열을 순회
            if(vacation.scode == staff[j].scode){ // 일치하는 사원코드을 찾으면
                staffName = staff[j].staffName; //사원명 저장
                break;
            };
        };

        html += `
                <div id="box2">
                    <div class="line1">
                        <div>${staffName}</div><button class="vacationDel" onclick="vacationDel(${vacation.vcode})">신청취소</button>
                    </div>
                    <div class="line2">
                        ${vacation.vacationStart}~${vacation.vacationEnd}
                    </div>
                    <div class="line3">
                        ${vacation.vacationReason}
                    </div>
                </div>
        `;
    };
    right_bottomDom.innerHTML = html;
}

//휴가 신청 삭제 함수
function vacationDel(vcode){
    for(let i = 0; i < vacationArray.length; i++){
        if(vcode == vacationArray[i].vcode) {
            vacationArray.splice(i,1);
            break
        }
    }
    vacationPrint();
}

// 휴가 신청 함수
let vcode = 3;
function vacationAdd(){
    const staffDom = document.querySelector(".staffselect");
    const scode = staffDom.value;
    const startDom = document.querySelector(".startdate")
    const start = startDom.value;
    const endDom = document.querySelector(".enddate");
    const end = endDom.value;
    const reasonDom = document.querySelector(".reason");
    const reason = reasonDom.value; 
    if(scode == "disabled"){
        alert("사원을 선택하세요!");
        return;
    };
    if(start == "" || end == ""){
        alert("날짜를 입력해 주세요!");
        return;
    };
    if(reason == ""){
        alert("휴가 사유를 적어주세요!");
        return;
    }

    vcode +=1
    const obj = {
        "vcode" : vcode,
        "scode" : scode,
        "vacationStart" : start,
        "vacationEnd" : end,
        "vacationReason" : reason
    };
    vacationArray.push(obj)
    vacationPrint();
    startDom.value = "";
    endDom.value = "";
    reasonDom.value = "";
}