/* [1] 초기 기본 데이터: member.js에서 처리

[2] 기능설계
제품검색목록: 제품 검색, 제품 출력
- 제품 검색: 제품 검색함수(입력), 제품 출력함수(찾아서 보여주기), 제품 수정함수
*/
let obj = [];

// localStorage 활용 productList 호출
    let products = localStorage.getItem("productList");
    if( products == null ){
        products = [];
    }else{
        products = JSON.parse(products);
    }

// [3-1] 검색함수
function productSearch() { 
    obj = [];

    // 1. 입력받은 값을 가져온다.
    const productNameDom = document.querySelector(".m_s_name");
    const productName = productNameDom.value;
    const brandDom = document.querySelector(".m_s_b");
    const brand = brandDom.value;
    const priceMinDom = document.querySelector(".m_s_min")
    const priceMin = priceMinDom.value;
    const priceMaxDom = document.querySelector(".m_s_max");
    const priceMax = priceMaxDom.value;
    const categoryDom = document.querySelector(".m_s_k");
    const categoryCode = categoryDom.value;

    if(productName==""&&brand==""&&priceMin==""&&priceMax==""&&categoryCode=='disabled'){alert("검색하실 상품 정보를 입력하십시오."); }

    // 2. 입력받은 값 찾아서 넣기.
    for (let i = 0; i < products.length; i++) {
        let prd = products[i];

        let SearchTrue = true; // 검색 결과가 일치한다고 가정하기
        
        if (productName != "" && prd.productName.includes(productName) == false) {
            SearchTrue = false;
        }
        if (brand != "" && prd.brand.includes(brand) == false) {
            SearchTrue = false;
        }
        if (categoryCode != 'disabled' && prd.categoryCode != categoryCode) {
            SearchTrue = false;
        }
        let min = priceMin == "" ? 0 : Number(priceMin);
        let max = priceMax == "" ? Infinity : Number(priceMax);
        if (prd.price < min || prd.price > max) {
            SearchTrue = false;
        }
        if (SearchTrue == true) {
            obj.push(prd);
        }
    }
    productPrint();
}

//호출
    // localStorage 활용 categories 호출
    let categories = localStorage.getItem("categories");
    if( categories == null ){
        categories = [];
    }else{
        categories = JSON.parse(categories);
    } 
    // localStorage 활용 inventories 호출
    let inventories = localStorage.getItem("inventories");
    if( inventories == null ){
        inventories = [];
    }else{
        inventories = JSON.parse(inventories);
    }

// [3-2] 출력함수
productPrint();
function productPrint(){

    // 1. 어디에?
    const tbody = document.querySelector(".m_s_tbody");
    // 2. 무엇을?
    let html = ``;
    for(let i = 0 ; i<= obj.length-1 ; i++){
        let prd = obj[i];
        let categoryName = '';
        for( let j = 0 ; j <= categories.length-1 ; j++){
            let cat = categories[j];
            if(cat.categoryCode == prd.categoryCode){
                categoryName = cat.categoryName;
            }
        }
        let currentStock = '';
        for( let u = 0 ; u <= inventories.length-1 ; u++){
            let inv = inventories[u];
            if(inv.productCode == prd.productCode){
                currentStock = inv.currentStock;
            }
        } 

        html += `<tr>
                    <td><img src="${prd.img}"/></td>
                    <td>${prd.productName}</td><td>${categoryName}</td>
                    <td>${prd.brand}</td><td>${Number(prd.price).toLocaleString()}</td><td>${currentStock}</td>
                    <td><button onclick="productUpdate('${prd.productCode}')">수정하기</button></td>
                </tr>`
    }
    tbody.innerHTML = html;
}

// [3-3] 수정함수
function productUpdate(productCode) {
    // 1. 수정하고자 하는 정보 찾기
    let productIndex = 0;
    for (let i = 0; i < products.length; i++) {
    if (products[i].productCode === productCode) {
        productIndex = i;  // 인덱스를 저장했다.
        break;}
    }
    if (productIndex === -1) {
        alert("해당 상품을 찾을 수 없습니다.");
        return;}

    // 2. 입력해라
    const newProductName = prompt("수정할 제품명을 입력하시오.");
    const newBrand = prompt("수정할 브랜드명을 입력하시오.");
    const newPrice = prompt("수정할 가격을 입력하시오.");

    // 3. 뭔가 입력했다면 바꾸기
    if (newProductName !== null){products[productIndex].productName = newProductName;}
    if (newBrand !== null){products[productIndex].brand = newBrand;}
    if (newPrice !== null){products[productIndex].price = Number(newPrice);}

    // 4. 로컬에 문자열로 저장
    localStorage.setItem("productList", JSON.stringify(products));

    // 5. 검색 리스트 동기화
    let objIndex = 0;
    for (let i = 0; i < obj.length; i++) {
        if (obj[i].productCode === productCode) {
            objIndex = i; // 또 인덱스를 저장했다
            break;}
    }
    obj[objIndex].productName = products[productIndex].productName;
    obj[objIndex].brand = products[productIndex].brand;
    obj[objIndex].price = products[productIndex].price;
    
    // 6. 새로고침
    productPrint();
}