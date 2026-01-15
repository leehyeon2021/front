boardPrint(); // JS가 실행될 때 해당 함수를 1번 호출
function boardPrint(){
    // 1. 어디에, <tbody id="boardTbody">
    const boardTbody = document.querySelector(`#boardTbody`)
    // 2. 무엇을
        // 2-1: localStorage에서 배열 가져오기
    let boardList = localStorage.getItem(`boardList`);
    if(boardList = null){ boardList = []}
    else{boardList = JSON.parse(boardList);}
        // 2-2: 반목문 이용하여 배열내 하나씩 조회
    let html = ``;
    for(let index = 0 ; index <= boardList.length -1 ; index++){
        
    }
}   