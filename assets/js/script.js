const progressSlider=document.getElementById("reviewsCardsContainer"),popupCloser=document.getElementById("popupCloser"),footerPopupCloser=document.getElementById("footerPopupCloser"),popupContainer=document.getElementById("popupContainer"),popup=document.getElementById("popupContainer"),footerPopup=document.getElementById("footerPopupContainer"),progressCards=document.getElementsByClassName("reviews__card-container"),scrollBarBody=document.getElementById("scrollBarBody"),thumb=document.getElementById("thumb"),burger=document.getElementById("burger"),burgerContent1=document.getElementById("burgerContent1"),burgerContent2=document.getElementById("burgerContent2"),cardsOnScreen=3,pixelsToMove=100,progressCardsLength=progressCards.length,headerCityTxt=document.getElementById("headerCityTxt");let newListItem=document.createElement("option"),thumbTop,isBurgerClicked=!1,currentProgressCard=0,initialPosition="translateY(0)",isElementClicked=!1,finishPosition=0,startPosition=0,posY=0,popupIsActive=!1,footerPopupIsActive=!1,progressSliderHeight;function showPopup(){popupIsActive=popupIsActive?(setTimeout(()=>{popup.style.transform="translateY(-1000px)"},100),!(popup.style.display="none")):(setTimeout(()=>{popup.style.transform="translate(0, 0)"},100),popup.style.display="flex",!0)}function showFooterPopup(){footerPopupIsActive=footerPopupIsActive?!(footerPopup.style.transform="translate(0, 20000px)"):(setTimeout(()=>{footerPopup.style.transform="translate(0, 0)"},100),!0)}function previousProgressCard(){if(--currentProgressCard<0){for(currentProgressCard=progressCardsLength-(cardsOnScreen-1),i=0;i<progressCardsLength;i++)progressCards[i].style.transform=`translateY(-${currentProgressCard-1}00%)`;initialPosition="translateY(0)"}else for(initialPosition=`translateY(-${currentProgressCard}00%)`,i=0;i<progressCardsLength;i++)progressCards[i].style.transform=`translateY(-${currentProgressCard}00%)`;.82<(thumbTop=currentProgressCard/(progressCardsLength-cardsOnScreen))?thumb.style.top="80%":thumb.style.top=10+75*thumbTop+"%"}function nextProgressCard(){if(++currentProgressCard>=progressCardsLength-(cardsOnScreen-1)){for(currentProgressCard=0,i=0;i<progressCardsLength;i++)progressCards[i].style.transform="translateY(0)";initialPosition="translateY(0)"}else for(initialPosition=`translateY(-${currentProgressCard}00%)`,i=0;i<progressCardsLength;i++)progressCards[i].style.transform=`translateY(-${currentProgressCard}00%)`;(thumbTop=currentProgressCard/(progressCardsLength-cardsOnScreen))<=.025?thumb.style.top="10%":thumb.style.top=80*thumbTop+"%"}window.addEventListener("load",()=>{document.getElementById("reviewsScrollTop");progressSliderHeight=parseInt(window.getComputedStyle(progressCards[0],null).getPropertyValue("height"))+parseInt(window.getComputedStyle(progressCards[1],null).getPropertyValue("height"))+parseInt(window.getComputedStyle(progressCards[2],null).getPropertyValue("height")),progressSlider.style.height=progressSliderHeight+"px"}),window.addEventListener("resize",function(){768<window.innerWidth&&(burgerContent1.classList.remove("visible"),burgerContent2.classList.remove("fixed2"),burger.classList.remove("fixed"))}),burger.addEventListener("click",function(e){burgerContent1.classList.toggle("visible"),burgerContent2.classList.toggle("fixed2"),burger.classList.toggle("fixed")}),document.addEventListener("click",function(e){e.target===popupCloser||e.target===popupContainer?(popup.style.transform="translateY(-1000px)",popupIsActive=!1):e.target!==footerPopupCloser&&e.target!==footerPopup||(setTimeout(()=>{footerPopup.style.transform="translate(0, 20000px)"},100),footerPopupIsActive=!1)});let thumbStartPosition,isThumbClicked=!1,thumbPosY;function thumbFunction(){isThumbClicked=!1,thumbStartPosition=0}function thumbMoveFunction(){isThumbClicked&&(cw=scrollBarBody.offsetHeight,p=thumbStartPosition-thumbPosY-100,thumb.style.top=-p+"px")}function progressMoveFunction(){if(isElementClicked&&(cw=progressSlider.offsetWidth,p=100*(currentProgressCard+(startPosition-posY)/cw),currentProgressCard<progressCardsLength))for(i=0;i<progressCardsLength;i++)0<p?progressCards[i].style.transform=`translateY(-${p}%)`:progressCards[i].style.transform=`translateY(${-p}%)`}function progressSliderFunction(){if((finishPosition=startPosition-posY)>pixelsToMove)nextProgressCard();else if(finishPosition<-pixelsToMove)previousProgressCard();else for(i=0;i<progressCardsLength;i++)progressCards[i].style.transform=initialPosition;isElementClicked=!1,startPosition=0,progressCards[0].style.cursor="grab"}scrollBarBody.addEventListener("mousedown",function(e){thumbStartPosition=e.pageY,isThumbClicked=!0}),scrollBarBody.addEventListener("mousemove",function(e){thumbPosY=e.pageY}),scrollBarBody.addEventListener("mouseup",function(e){for(thumbTop=e.clientY-scrollBarBody.getBoundingClientRect().top,thumb.style.top=thumbTop+"px",currentProgressCard=Math.floor(thumbTop/(scrollBarBody.clientHeight/(progressCardsLength-cardsOnScreen+1))),i=0;i<progressCardsLength;i++)progressCards[i].style.transform=`translateY(-${currentProgressCard}00%)`}),progressSlider.addEventListener("touchend",function(e){for(thumbTop=e.touches[0].clientY-scrollBarBody.getBoundingClientRect().top,thumb.style.top=thumbTop+"px",currentProgressCard=Math.floor(thumbTop/(scrollBarBody.clientHeight/(progressCardsLength-cardsOnScreen+1))),i=0;i<progressCardsLength;i++)progressCards[i].style.transform=`translateY(-${currentProgressCard}00%)`}),progressSlider.addEventListener("mousedown",function(e){startPosition=e.pageY,isElementClicked=!0}),progressSlider.addEventListener("touchstart",function(e){startPosition=e.touches[0].pageY,isElementClicked=!0}),progressSlider.addEventListener("mousemove",function(e){posY=e.pageY,progressMoveFunction()}),progressSlider.addEventListener("touchmove",function(e){posY=e.touches[0].pageY,progressMoveFunction()}),progressSlider.addEventListener("mouseup",function(e){progressSliderFunction()}),progressSlider.addEventListener("touchend",function(e){progressSliderFunction()});const popupForm=document.getElementById("popupForm"),form=(popupForm.addEventListener("submit",e=>{e.preventDefault();e=e.target.querySelector("input[name='name']").value;let t=headerCityTxt.options[headerCityTxt.selectedIndex];var r=(t=void 0===headerCityTxt.selectedIndex?"другой город":t).textContent,e={name:e,phone:phone,email:email,city:r};popup.style.display="none",fetch("адрес сервера",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(e=>e.json()).then(e=>{console.log(e)}).catch(e=>{console.error(e)})}),document.getElementById("form"));function formatPhoneNumber(e){var t=e.value[e.value.length-1];let r=e.value.replace("+7(",""),s="";10<(r=r.replace(/[^0-9]/g,"")).length&&(r=r.substring(0,11))," "===t||")"===t?e.value="+7("+r.substring(0,3):(0<r.length&&(s="+7("+r.substring(0,3)),2<r.length&&(s="+7("+r.substring(0,3)+") "+r.substring(3,6)),6<r.length&&(s="+7("+r.substring(0,3)+") "+r.substring(3,6)+"-"+r.substring(6,8)),8<r.length&&(s="+7("+r.substring(0,3)+") "+r.substring(3,6)+"-"+r.substring(6,8)+"-"+r.substring(8,10)),e.value=s)}function addMask(e){0===e.value.length&&(e.value="+7(")}form.addEventListener("submit",e=>{e.preventDefault();e=e.target.querySelector("input[name='name']").value;let t=headerCityTxt.options[headerCityTxt.selectedIndex];(t=void 0===headerCityTxt.selectedIndex?"другой город":t).textContent;e={name:e,phone:phone};fetch("адрес сервера",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(e=>e.json()).then(e=>{console.log(e)}).catch(e=>{console.error(e)})}),reviewsCardsContainer.addEventListener("scroll",()=>{(scrollDifference=-(reviewsCardsContainer.scrollTop-reviewsCardsContainer.offsetHeight))<0&&(scrollDifference=0),currentProgressCard=Math.ceil(scrollDifference/(reviewsCardsContainer.offsetHeight/(progressCardsLength-1)))+1,console.log(-1*(currentProgressCard-progressCardsLength))});