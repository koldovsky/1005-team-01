let prevValue = 10069.853515625;
let addressMarginBottom = 200;
const address = document.querySelector(".mounting__container");
const marginBottomPlusPx = (scrVelue) => {
    address.style.marginBottom = (addressMarginBottom += 3) + "px";  
    prevValue = scrVelue;
}
const marginBottomMinusPx = (scrVelue) => {
    address.style.marginBottom = ( addressMarginBottom -= 3) + "px";
    prevValue = scrVelue;
}

document.addEventListener("scroll", () => {
    let scrollValue = window.scrollY;
  if(scrollValue >= 10069.853515625 ){
     prevValue <= scrollValue ? marginBottomMinusPx(scrollValue) : marginBottomPlusPx(scrollValue)  ;
}
})
