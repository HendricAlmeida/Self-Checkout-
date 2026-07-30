const containerPay = document.querySelector(".payment-section");
const priceValueContent = document.querySelector('#price-value')
const containerMain = document.querySelector('.container-main')
let proceedActive = null

//efeito do butão
function btnActive(escolhido) {
    const btn = document.querySelectorAll(".btn");
    //remove the posibilite they have the "active"
    btn.forEach( btn =>{
        console.log('active') 
        btn.classList.remove("active");
    })

    //add active in the selct button
    btn[escolhido].classList.add("active");
}

function removeDisplayPay(){
    containerPay.style.display = "none"
    containerMain.classList.remove("disable")
    document.querySelector(".search-input").disabled = false;
}

function addDisplayPay() {
    priceValueContent.innerHTML = `R$${priceValueOver.toFixed(2)}`
    document.querySelector(".search-input").disabled = true;
    containerPay.style.display = "flex"
}