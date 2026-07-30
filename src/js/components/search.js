const inputSearch = document.querySelector('.search-input');
const itemBox = document.querySelector('.container-itens-seached');
const itemOverCont = document.querySelector('#item-overall')


function onSearch() {
    itemBox.style.display = "flex"
}

function offSearch(){
    setTimeout(() => {
        itemBox.style.display = "none"
    },5000)
    
}
