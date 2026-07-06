const inputSearch = document.querySelector('.search-input');
const itemBox = document.querySelector('.container-item');
const itemOverCont = document.querySelector('#item-overall')


function onSearch() {
    itemBox.style.display = "block"
    console.log('oi')
}

function offSearch(){
    itemBox.style.display = "none"
}

function addItemInOverall(indice){
    console.log('active')
    const newItem = itemOverCont.cloneNode(true)

}