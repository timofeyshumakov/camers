const progressSlider = document.getElementById("reviewsCardsContainer");
const popupCloser = document.getElementById("popupCloser");
const footerPopupCloser = document.getElementById("footerPopupCloser");
const popupContainer = document.getElementById("popupContainer");
const popup = document.getElementById("popupContainer");
const footerPopup = document.getElementById("footerPopupContainer");
const progressCards = document.getElementsByClassName("reviews__card-container");
const scrollBarBody = document.getElementById("scrollBarBody");
const thumb = document.getElementById("thumb");
const burger = document.getElementById("burger");
const burgerList =  document.getElementById("burgerList");
const burgerContent1 = document.getElementById("burgerContent1");
const burgerContent2 = document.getElementById("burgerContent2"); 
const cardsOnScreen = 3;
const pixelsToMove = 100;
const progressCardsLength = progressCards.length;
const headerCityTxt = document.getElementById('headerCityTxt');
let newListItem = document.createElement('option');

let thumbTop;
let isBurgerClicked = false;
let currentProgressCard = 0;
let initialPosition = `translateY(0)`;
let isElementClicked = false;
let finishPosition = 0;
let startPosition = 0;
let posY = 0;
let popupIsActive = false;
let footerPopupIsActive = false;
let progressSliderHeight;

function showPopup(){
  if(popupIsActive){
    popup.style.display = "none";
    setTimeout(() => {
      popup.style.transform = "translateY(-1000px)";
    }, 100);
    popupIsActive = false;
  }else{
    setTimeout(() => {
      popup.style.transform = "translate(0, 0)";
    }, 100);
    popup.style.display = "flex";
    popupIsActive = true;
  }
}

function showFooterPopup(){
  if(footerPopupIsActive){
    footerPopup.style.transform = "translate(0, 2000px)";
    footerPopup.style.display = "none";
    footerPopupIsActive = false;
  }else{
    setTimeout(() => {
      footerPopup.style.transform = "translate(0, 0)";
    }, 100);
    footerPopupIsActive = true;
    footerPopup.style.display = "flex";
  }
}

window.addEventListener('load', () => {
  const reviewsScrollTop = document.getElementById('reviewsScrollTop');
  progressSliderHeight = parseInt(window.getComputedStyle(progressCards[0],null).getPropertyValue("height")) + parseInt(window.getComputedStyle(progressCards[1],null).getPropertyValue("height")) + parseInt(window.getComputedStyle(progressCards[2],null).getPropertyValue("height")); //по другому оно работать не хочет
  progressSlider.style.height = progressSliderHeight + 'px';
  });

window.addEventListener('resize', function() {
  if (window.innerWidth > 768) {
    burgerContent1.classList.remove("visible");
    burgerContent2.classList.remove("fixed2");
    burger.classList.remove("fixed");
  }
});

burger.addEventListener('click', function(e) {
  burgerContent1.classList.toggle("visible");
  burgerContent2.classList.toggle("fixed2");
  burger.classList.toggle("fixed");
});

document.addEventListener('click', function(e) {
  if (e.target === popupCloser || e.target === popupContainer){
    popup.style.transform = "translateY(-1000px)";
    popup.style.display = "none";
    popupIsActive = false;
  }else if(e.target === footerPopupCloser || e.target === footerPopup){
    setTimeout(() => {
      footerPopup.style.transform = "translate(0, 2000px)";
    }, 100);
    footerPopup.style.display = "none";
    footerPopupIsActive = false;
  }
});

function previousProgressCard() {
  currentProgressCard--;
  if(currentProgressCard < 0){
    currentProgressCard = progressCardsLength - (cardsOnScreen - 1);
    for(i = 0; i < progressCardsLength; i++){
      progressCards[i].style.transform = `translateY(-${currentProgressCard - 1}00%)`;
    }
    initialPosition = `translateY(0)`;
  }else{
    initialPosition = `translateY(-${currentProgressCard}00%)`;
    for(i = 0; i < progressCardsLength; i++){
      progressCards[i].style.transform = `translateY(-${currentProgressCard}00%)`;
    }
  }
  thumbTop = currentProgressCard / (progressCardsLength - cardsOnScreen);
  thumbTop > 0.82 ? thumb.style.top = '80%' : thumb.style.top = 10 + thumbTop  * 75 + '%'
}

function nextProgressCard() {
  currentProgressCard++;
  if(currentProgressCard >= progressCardsLength - (cardsOnScreen - 1)){
    currentProgressCard = 0;
    for(i = 0; i < progressCardsLength; i++){
      progressCards[i].style.transform = `translateY(0)`;
    }
    initialPosition = `translateY(0)`;
  }else{
    initialPosition = `translateY(-${currentProgressCard}00%)`;
    for(i = 0; i < progressCardsLength; i++){
      progressCards[i].style.transform = `translateY(-${currentProgressCard}00%)`;
    }
  }
  thumbTop = currentProgressCard / (progressCardsLength - cardsOnScreen);
  thumbTop <= 0.025 ? thumb.style.top = '10%' : thumb.style.top = thumbTop * 80 + '%'
}

let thumbStartPosition;
let isThumbClicked = false;
let thumbPosY;

scrollBarBody.addEventListener('mousedown', function(e) {
  thumbStartPosition = e.pageY;

  isThumbClicked = true;
});

scrollBarBody.addEventListener('mousemove', function(e) {
  thumbPosY = e.pageY;
  //thumbMoveFunction();
});

scrollBarBody.addEventListener('mouseup', function(e) {
  thumbTop = e.clientY - scrollBarBody.getBoundingClientRect().top;
  thumb.style.top = thumbTop + 'px';
  currentProgressCard = Math.floor(thumbTop / (scrollBarBody.clientHeight / (progressCardsLength - cardsOnScreen + 1)));

for(i = 0; i < progressCardsLength; i++){
  progressCards[i].style.transform = `translateY(-${currentProgressCard}00%)`;
}
});
progressSlider.addEventListener('touchend', function(e) {
  thumbTop = e.touches[0].clientY - scrollBarBody.getBoundingClientRect().top;
  thumb.style.top = thumbTop + 'px';
  currentProgressCard = Math.floor(thumbTop / (scrollBarBody.clientHeight / (progressCardsLength - cardsOnScreen + 1)));

for(i = 0; i < progressCardsLength; i++){
  progressCards[i].style.transform = `translateY(-${currentProgressCard}00%)`;
}
});

progressSlider.addEventListener('mousedown', function(e) {
  startPosition = e.pageY;
  isElementClicked = true;
});

progressSlider.addEventListener('touchstart', function(e) {
  startPosition = e.touches[0].pageY;
  isElementClicked = true;
});

progressSlider.addEventListener('mousemove', function(e) {
  posY = e.pageY;
  progressMoveFunction();
});

progressSlider.addEventListener('touchmove', function(e) {
  posY = e.touches[0].pageY;
  progressMoveFunction();
});

function thumbFunction(){
  isThumbClicked = false;
  thumbStartPosition = 0;
  
}
function thumbMoveFunction(){
  if(isThumbClicked){
    cw = scrollBarBody.offsetHeight;
    p = (thumbStartPosition - thumbPosY - 100);
    thumb.style.top = -p+ 'px';
  }
}
function progressMoveFunction(){
  
  if(isElementClicked){
    cw = progressSlider.offsetWidth;
    p = (currentProgressCard + ((startPosition - posY) / cw)) * 100;
    if(currentProgressCard < progressCardsLength){
      for(i = 0; i < progressCardsLength; i++){
      if(p > 0){
        progressCards[i].style.transform = `translateY(-${p}%)`;
      }else{
        progressCards[i].style.transform = `translateY(${-p}%)`;
      }
      }
    }
  }
}

function progressSliderFunction(){
  finishPosition = startPosition - posY;
  if(finishPosition > pixelsToMove){
    nextProgressCard();
  }else if(finishPosition < -pixelsToMove){
    previousProgressCard();
  }else{
    for(i = 0; i < progressCardsLength; i++){
      progressCards[i].style.transform = initialPosition;
    }
  }
  isElementClicked = false;
  startPosition = 0;
  progressCards[0].style.cursor = 'grab';
}

progressSlider.addEventListener('mouseup', function(e) {
  progressSliderFunction();
});

progressSlider.addEventListener('touchend', function(e) {
  progressSliderFunction();
});

let phoneForm = document.getElementById("phoneForm");
function validateForm() {
console.log(phoneForm.value.length);
  if (phoneForm.value.length !== 17) {
    alert("Введите 11 цифр.");
    return false;
  }
  return true;
}

let phonePopup = document.getElementById("phonePopup");
function validateFormPopup() {
  if (phonePopup.value.length !== 17) {
    alert("Введите 11 цифр.");
    return false;
  }
  return true;
}

function formatPhoneNumber(input) {
  let lastSymbol = input.value[input.value.length - 1];
  let value = input.value.replace('+7(', '');
  value = value.replace(/[^0-9]/g, ''); // Убираем все не цифры

    let maskedValue = '';

    if (value.length > 10) { // Если введено более 10 цифр, обрезаем
      value = value.substring(0, 11);
    }

    if (lastSymbol === ' ' || lastSymbol === ')' ){
      input.value = '+7(' + value.substring(0, 3);
      return;
    }
    if (value.length > 0) {
      maskedValue = '+7(' + value.substring(0, 3);
    }

    if (value.length > 2) {
      maskedValue = '+7(' + value.substring(0, 3) + ') ' + value.substring(3, 6);
    }
    if (value.length > 6) {
      maskedValue = '+7(' + value.substring(0, 3) + ') ' + value.substring(3, 6) + '-' + value.substring(6, 8);
    }
    if (value.length > 8) {
      maskedValue = '+7(' + value.substring(0, 3) + ') ' + value.substring(3, 6) + '-' + value.substring(6, 8) + '-' + value.substring(8,10);
    }

    input.value = maskedValue;
}

function addMask(input){
  if(input.value.length === 0){
    input.value = '+7(';
  }
}

reviewsCardsContainer.addEventListener('scroll', () => {

  scrollDifference = - (reviewsCardsContainer.scrollTop - reviewsCardsContainer.offsetHeight);

  if(scrollDifference < 0){
  scrollDifference = 0;
  }
  currentProgressCard = Math.ceil(scrollDifference / (reviewsCardsContainer.offsetHeight / (progressCardsLength -1 ))) + 1;
  console.log((currentProgressCard - progressCardsLength) * -1);
});

const listItems = burgerList.querySelectorAll('li'); // Выбираем все элементы списка

listItems.forEach(listItem => {
  listItem.addEventListener('click', () => {
    burgerContent1.classList.remove("visible");
    burgerContent2.classList.remove("fixed2");
    burger.classList.remove("fixed");
  });
});