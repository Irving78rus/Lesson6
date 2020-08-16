
var shirt = { name: 'shirt', price: 1000 };
var shoes = { name: 'shoes', price: 2000 };
var jeans = { name: 'jeans', price: 3000 };
var clothes = [];
clothes.push(shirt, shoes, jeans);
for (var k = 0; k < clothes.length; k++) {
    var price1 = clothes[k].price
   
}
//Начальное количество товаров
var countShirt = 0;
var countShoes = 0;
var countJeans = 0;

//подсчет стоимости товаров
function countBasketPrice(countShirt, countShoes, countJeans) {

    var shirtCost = shirt.price * countShirt;
    var shoesCost = shoes.price * countShoes;
    var jeansCost = jeans.price * countJeans;

    return shirtCost + shoesCost + jeansCost
}
//подсчет количества товаров
function allСountBasket(countShirt, countShoes, countJeans) {
    return countShirt + countShoes + countJeans
}

//product
var product = document.createElement("div");
document.body.appendChild(product);
product.classList.add("product");

// массив для генерации имен

    mass = ['Shirt','Shoes','Jeans']
    // массив для генерации изображений
    massImg = ['img/shirt.png','img/boots.png','img/jeans.png']
   
     // рисуем блоки+ пишем цену +рисуем товар 
      for (var i = 0; i < mass.length; i++) {
        var div = document.createElement('div');
        var nameBlock = "block"+ mass[i]
        product.appendChild(div);
        div.id    = nameBlock ;
        document.getElementById(nameBlock).innerHTML = "Цена : " + clothes[i].price + 'р';

        var img = document.createElement("IMG");
        img.src = massImg[i];
        div.appendChild(img)
        var nameImg = "img"+ mass[i]
        img.id = nameImg

        
      }


      //кнопки для рубашки

      var buttonInShirt = document.createElement("button");buttonInShirt.id = 'buttonInShirt';buttonInShirt.onclick = BasketShirt;
      buttonInShirt.innerHTML = "Добавить товар в корзину";
      var buttonOutShirt = document.createElement("button");buttonOutShirt.id = 'buttonOutShirt';buttonOutShirt.onclick = BasketShirt;
      buttonOutShirt.innerHTML = "Убрать товар из корзины";
      blockShirt.appendChild(buttonInShirt);
      blockShirt.appendChild(buttonOutShirt);
      //кнопки для обуви
     
      var buttonInShoes = document.createElement("button");buttonInShoes.id = 'buttonInShoes';buttonInShoes.onclick = BasketShoes;
      buttonInShoes.innerHTML = "Добавить товар в корзину";
      var buttonOutShoes = document.createElement("button");buttonOutShoes.id = 'buttonOutShoes';buttonOutShoes.onclick = BasketShoes;
      buttonOutShoes.innerHTML = "Убрать товар из корзины";
      blockShoes.appendChild(buttonInShoes);
      blockShoes.appendChild(buttonOutShoes);
      //кнопки для джинсов
      
      var buttonInJeans = document.createElement("button");buttonInJeans.id = 'buttonInJeans';buttonInJeans.onclick = BasketJeans;
      buttonInJeans.innerHTML = "Добавить товар в корзину";
      var buttonOutJeans = document.createElement("button");buttonOutJeans.id = 'buttonOutJeans';buttonOutJeans.onclick = BasketJeans;
      buttonOutJeans.innerHTML = "Убрать товар из корзины";
      blockJeans.appendChild(buttonInJeans);
      blockJeans.appendChild(buttonOutJeans);



//рисуем корзину и текст  в ней
var allBasket = document.createElement("div");
document.body.appendChild(allBasket);
allBasket.classList.add("basket");
allBasket.id = 'allBasket';


var header = document.createElement("h2");
allBasket.appendChild(header);
header.id = 'header';
document.getElementById("header").innerHTML = "Корзина товаров";

var noBasket = document.createElement("div");
allBasket.appendChild(noBasket);
noBasket.id = 'noBasket';
document.getElementById("noBasket").innerHTML = "В корзине нет товаров";

var blockBasket = document.createElement("div");
allBasket.appendChild(blockBasket);
blockBasket.id = 'blockBasket';



//отображение цены корзины
function f (allcount,allcost){
    if (allcount == 0) {
        document.getElementById("noBasket").innerHTML = "В корзине нет товаров";
    }
    else { 
         document.getElementById("noBasket").innerHTML = "Сумма вашей покупки " + allcost + " Всего товаров " + allcount; 
    }
    return 
}
//добавление товара рубашка
function BasketShirt(e){
    if (e.target == buttonInShirt){
            countShirt++
    }
    else if (e.target == buttonOutShirt) {
            countShirt--
            if (countShirt <= 0) {
            countShirt = 0;
            document.getElementById("ShirtInBasket").remove();
            }
    }
    var allcost = countBasketPrice(countShirt, countShoes, countJeans);
    var allcount = allСountBasket(countShirt, countShoes, countJeans);
    var shirtCost = shirt.price * countShirt;

    f(allcount,allcost);
    //отрисовка товара рубашка в корзине
    if (countShirt>0){
        if (document.getElementById("ShirtInBasket")){
            document.getElementById("ShirtInBasket").remove();
            
          }
        console.log(countShirt)
        var ShirtInBasket = document.createElement("div");
        blockBasket.appendChild(ShirtInBasket);
        ShirtInBasket.id = 'ShirtInBasket';
        document.getElementById("ShirtInBasket").innerHTML = "Цена : " + shirt.price + 'р' + " x " + countShirt + " =" + shirtCost+ 'р';
        
        
        var basketImg = document.createElement("IMG");
        basketImg.src = massImg[0];
        ShirtInBasket.appendChild(basketImg)
        basketImg.id = 'basketImg'



      var buttonInShirtBasket = document.createElement("button");
      buttonInShirtBasket.innerHTML = "+";
      var buttonOutShirtBasket = document.createElement("button");
      buttonOutShirtBasket.innerHTML = "-";
      ShirtInBasket.appendChild(buttonInShirtBasket);
      ShirtInBasket.appendChild(buttonOutShirtBasket);
      buttonInShirtBasket.id = 'button'
      buttonOutShirtBasket.id = 'button'
      buttonInShirtBasket.onclick = function(){ buttonInShirt.click();}
      buttonOutShirtBasket.onclick = function(){ buttonOutShirt.click();}
      
    }
    
    return countShirt   
}
//добавление товара обувь
function BasketShoes(e){
    if (e.target == buttonInShoes){
        countShoes++

    }
    else if (e.target == buttonOutShoes) {
        countShoes--
            if (countShoes <= 0) {
                countShoes = 0;
                document.getElementById("ShoesInBasket").remove();
            }
            
    }
    var shoesCost = shoes.price * countShoes;
    var allcost = countBasketPrice(countShirt, countShoes, countJeans);
    var allcount = allСountBasket(countShirt, countShoes, countJeans);
    f(allcount,allcost);
    //отрисовка товара обувь в корзине
    if (countShoes>0){
        if (document.getElementById("ShoesInBasket")){
            document.getElementById("ShoesInBasket").remove();
            
          }
        console.log(countShoes)
        var ShoesInBasket = document.createElement("div");
        blockBasket.appendChild(ShoesInBasket);
        ShoesInBasket.id = 'ShoesInBasket';
        document.getElementById("ShoesInBasket").innerHTML = "Цена : " + shoes.price + 'р' + " x " + countShoes + " =" + shoesCost+ 'р';
        
        
        var basketImg1 = document.createElement("IMG");
        basketImg1.src = massImg[1];
        ShoesInBasket.appendChild(basketImg1)
        basketImg1.id = 'basketImg'




      var buttonInShoesBasket = document.createElement("button");
      buttonInShoesBasket.innerHTML = "+";
      var buttonOutShoesBasket = document.createElement("button");
      buttonOutShoesBasket.innerHTML = "-";
      ShoesInBasket.appendChild(buttonInShoesBasket);
      ShoesInBasket.appendChild(buttonOutShoesBasket);
      buttonInShoesBasket.id = 'button'
      buttonOutShoesBasket.id = 'button'
      buttonInShoesBasket.onclick = function(){ buttonInShoes.click();}
      buttonOutShoesBasket.onclick = function(){ buttonOutShoes.click();}
      
}
return countShoes 
}

//добавление товара обувь
function BasketJeans(e){
    if (e.target == buttonInJeans){
        countJeans++
    }
    else if (e.target == buttonOutJeans) {
        countJeans--
            if (countJeans <= 0) {
                countJeans = 0;
                document.getElementById("JeansInBasket").remove();
            }
    }
    var jeansCost = jeans.price * countJeans;
    var allcost = countBasketPrice(countShirt, countShoes, countJeans);
    var allcount = allСountBasket(countShirt, countShoes, countJeans);
    f(allcount,allcost);
    //отрисовка товара джинсы в корзине
    if (countJeans>0){
        if (document.getElementById("JeansInBasket")){
            document.getElementById("JeansInBasket").remove();
            
          }
        console.log(countJeans)
        var JeansInBasket = document.createElement("div");
        blockBasket.appendChild(JeansInBasket);
        JeansInBasket.id = 'JeansInBasket';
        document.getElementById("JeansInBasket").innerHTML = "Цена : " + jeans.price + 'р' + " x " + countJeans + " =" + jeansCost+ 'р';
        
        
        var basketImg = document.createElement("IMG");
        basketImg.src = massImg[2];
        JeansInBasket.appendChild(basketImg)
        basketImg.id = 'basketImg'




      var buttonInJeansBasket = document.createElement("button");
      buttonInJeansBasket.innerHTML = "+";
      var buttonOutJeansBasket = document.createElement("button");
      buttonOutJeansBasket.innerHTML = "-";
      JeansInBasket.appendChild(buttonInJeansBasket);
      JeansInBasket.appendChild(buttonOutJeansBasket);
      buttonInJeansBasket.id = 'button'
      buttonOutJeansBasket.id = 'button'
      buttonInJeansBasket.onclick = function(){ buttonInJeans.click();}
      buttonOutJeansBasket.onclick = function(){ buttonOutJeans.click();}
      
}
    return countJeans   
}




