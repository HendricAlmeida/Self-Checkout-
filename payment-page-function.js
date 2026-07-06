const containerPay = document.querySelector(".payment-section");
let proceedActive = null
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
}

function addDisplayPay() {
    containerPay.style.display = "flex"
}