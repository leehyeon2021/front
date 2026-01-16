// 출력함수
boardPrint();

function boardPrint(){
    // 1. 어디에
    let tbody = document.querySelector("#listTbody");
    // 2. 무엇을
    let boardList = localStorage.getItem('boardList');
    if( boardList == null){ boardList = []}
    else{ boardList = JSON.parse(boardList)};
    // 3. 어떻게
    let html = ``;
    for( let i = 0 ; i <= boardList.length-1 ; i++){
        let obj = boardList[i];
        html += `<tr>
                    <td>${obj.no}</td>
                    <td> <a href="view.html?no=${obj.no}"> ${obj.title} </a> </td>
                </tr>`
    }
    // 4. 출력
    tbody.innerHTML = html;
}