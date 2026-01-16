// 등록함수
function boardWrite(){
    // 1. 입력받은 값 받아오기
    const titleDom = document.querySelector("#titleInput");
    const contentDom = document.querySelector("#contentInput");
    const pwdDom = document.querySelector("#pwdInput");
    // 2. 입력받은 값 저장하기
    let title = titleDom.value;
    let content = contentDom.value;
    let pwd = pwdDom.value;
    // 3. 객체화
    let obj = {title, content, pwd};
    // 4. 로컬에서 가져오기
    let boardList = localStorage.getItem('boardList');
    if(boardList == null){ boardList = []}
    else{ boardList = JSON.parse(boardList)};
    // 5. 배열 저장
    obj.no = boardList.length == 0? 1 : boardList[boardList.length-1].no +1 ;
    boardList.push(obj);
    // 6. 로컬로
    localStorage.setItem( 'boardList', JSON.stringify(boardList));
    // 7. 기타
    alert("등록이 완료되었습니다.");
    location.href = 'list.html';
    
}