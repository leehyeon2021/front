// [1] 쿼리스트링에서 특정한 게시물번호의 정보 조회
getBoard(); // JS 실행될 때 최초1번 자동으로 함수 실행
function getBoard(){
    // 1. URL(웹주소) 상의 웹주소 가져오기
    const url = new URLSearchParams(location.search);
    // 2. 웹주소에서 선택된 게시물번호(쿼리스트링값) 가져오기
    const selectNo = url.get('no');
    // 3. localStorage에서 배열 가져오기 
    let boardList = localStorage.getItem('boardList');
    if(boardList == null){boardList = []}
    else{boardList = JSON.parse(boardList)};
    // 4. 선택된 게시물번호와 일치한 게시물 찾기 
    for( let i = 0 ; i <= boardList.length-1 ; i++){
        const obj = boardList[i];
        if(obj.no == selectNo){
            document.querySelector('#title').innerHTML = obj.title
            document.querySelector('#content').innerHTML = obj.content;
            return;
        } // if end
    } // for end
} // func end


// [2] 삭제함수
function boardDelete(){
    // 1. URL(웹주소)의 경로 가져오기
    const url = new URLSearchParams(location.search);
    // 2. 경로 상의 선택된 게시물번호(쿼리스트링) 가져오기
    const selectNo = url.get('no');
    // 3. localStorage에서 배열 가져오기
    let boardList = localStorage.getItem('boardList');
    if(boardList == null){ boardList = []}
    else{boardList = JSON.parse(boardList)};
    // 4. 배열내 선택된 게시물번호가 존재하면
    for(let i = 0 ; i <= boardList.length-1 ; i++){
        const obj = boardList[i];
        if(obj.no == selectNo){
            // 5. 확인용비밀번호를 입력받아 기존 비밀번호와 일치하면 삭제, 아니면 실패
            const confirm = prompt('비밀번호 입력');
            if( obj.pwd == confirm ){
                boardList.split(i , 1);
                localStorage.setItem('boardList', JSON.stringify(boardList));
                alert('삭제 성공');
                // 6. (성공) list.html 이동
                location.href = 'list.html';
            }else{
                alert('삭제 실패: 비밀번호 불일치')
            }
        }
    } // for end
} // func end

function boardUpdateView(){

}