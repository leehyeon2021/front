/*문제 6: 배열 요소의 합계와 평균 구하기
다음 학생들의 점수가 담긴 배열이 있습니다. for 반복문을 사용하여 모든 점수의 합계와 평균을 계산하여 콘솔에 출력하시오. */
// let scores = [85, 92, 78, 65, 95];
// // 1. 초기값: let 0 ; // 2. 조건문: index >= 0 (or... index <= scores.length-;)
// // 3. 증감식: index-- (or... index++) // 4. 실행문: sum = scores[index] + sum
// let sum = 0;
// for(let index = scores.length-1 ; index >= 0 ; index-- ){
//    (sum = scores[index]+ sum);}
// console.log(`총합: ${sum}, 평균: ${sum/scores.length}`);


/* 문제 7: 특정 조건에서 반복문 탈출하기 (break)
점수 배열에서 100점 만점자가 처음 나타나면, 그 학생의 점수를 출력하고 반복문을 즉시 종료하는 프로그램을 작성하시오.
출력 예시: 100점 만점자를 찾았습니다!*/
//let scores = [77, 82, 100, 54, 96];
// // 1. 초기값: let index = scores.length -1 // 2. 조건문: index >= 0
// // 3. 증감식: index-- // 4. 실행문: if( scores.indexOf(index) == 100 ){break;}
// for(let index = scores.length -1 ; index >= 0 ; index--){
//     if(scores.indexOf(100)==index){console.log(scores[index]); break;}}
// 교수님 풀이
//if(scores[0] == 100){console.log(scores[0]);} 이걸 사용한다.
//for(let index = 0; index <=scores.length -1 ; index++){
//    if(scores[index] == 100 ){
//        console.log(`100점 만점자를 찾았습니다!`);
//        break;
//    }
//}


/*문제 8: 특정 조건 건너뛰기 (continue: 증감식으로 이동.)
점수 배열에서 60점 미만(과락)인 점수는 건너뛰고, 60점 이상인 점수만 콘솔에 출력하는 프로그램을 작성하시오.*/
//let scores = [90, 45, 72, 88, 59, 100];
// 1. 초기값: let index = scores.length-1 ; // 2. 조건문: index >= 0
// 3. 증감식: index-- // 4. 실행문: if( scores[index] ==60){continue;} else{console.log(scores[index]);}
// for( let index = scores.length-1 ; index >= 0 ; index--){
//     if( scores[index] <= 60){continue;} else{console.log(scores[index]);}
// }
// 교수님 풀이
//for( let index = 0; index <= scores.length-1 ; index++){
//    if(scores[index] < 60){continue ; } // 가장 가까운 반복문의 증감식으로 이동.
//    console.log(scores[index]);
//}


/*문제 9: 배열에서 특정 값의 개수 세기
다음 배열에서 'A'형 혈액형을 가진 사람이 몇 명인지 for 반복문을 통해 세고, 그 수를 콘솔에 출력하시오. */
///let bloodTypes = ['A', 'B', 'O', 'AB', 'A', 'B', 'A'];
// 1. 초기값: let index = 0; // 2. 조건문: index <= bloodTypes.length-1;
// 3. 증감식: index++ // 4. 실행문:  if(bloodTypes[index] == 'A'){sum += 1;}
//let sum = 0;
//for( let index = 0 ; index <= bloodTypes.length-1 ; index++){
//    if(bloodTypes[index] == 'A'){(sum= sum+1);}
//}
//console.log(`'A'는 ${sum} 개`);


/*문제 10: 학생 점수 시각화하기 
주어진 학생 이름과 점수 배열을 이용하여, 각 학생의 점수를 동그라미(●, ○)로 시각화하여 HTML에 출력하는 프로그램을 작성하시오.
(1). 초기 데이터
학생 이름과 점수는 두 배열의 동일한 인덱스를 사용합니다.*/
let nameArray = ['유재석', '강호동', '신동엽'];
let scores = [92, 86, 72];
/*(2). 구현 조건
for 반복문을 사용하여 모든 학생의 데이터를 순회합니다.
점수를 100점 만점으로 환산하여 시각화합니다.
점수의 십의 자리 숫자만큼 꽉 찬 동그라미(●)를, **나머지(10 - 십의 자리 수)**만큼 빈 동그라미(○)를 출력합니다.
예시: 점수가 92점이면 십의 자리는 9이므로, ●●●●●●●●●○ 와 같이 표현합니다.
HTML에 학생 이름과 변환된 점수 시각화를 한 줄씩 출력합니다.
(3). 출력 예시 (HTML)
유재석 ●●●●●●●●●○
강호동 ●●●●●●●●○○
신동엽 ●●●●●●●○○○*/

// 교수님 풀이

let html = ''; //Html 마크업과 데이터를 저장할 변수."
// 1. 이름 출력  2. 점수 출력  3. 검은 출력  4. 흰 출력

// 1. 이름 출력 // 2. 몫을 구하면 된다. parseInt: 몫 구하는 거. 소수점 사라짐.
    //점수의 몫 구하기 . 몫 만큼 검은 별 ; parseInt( 값 / 수 );

for(let index = 0 ; index <= nameArray.length-1 ; index++){
    html += nameArray[index] //0부터 마지막 인덱스까지 1씩 증가 출력한다.

    let b = parseInt(scores[index] / 10);

    for( let i = 1 ; i <=10 ; i++){
        if( i <= b){ html += "●"}
        else(html += "○");
        
    } // 학생이 바뀌면 줄바꿈처리;. 학생이 바뀌면 줄바꿈처림 conso;te.console = /|n, HTMl <br/>

    html += "<br/>";

}

document.write(html); // doucument.write(""): JS에서 HTML으로 출력하는 함수. 