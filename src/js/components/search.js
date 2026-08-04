const inputSearch = document.querySelector('.search-input');
const itemBox = document.querySelector('.container-itens-seached');
const itemOverCont = document.querySelector('#item-overall')

inputSearch.addEventListener('input', (event) => {
    const value = formString(event.target.value);
    const items = document.querySelectorAll('.container-itens-seached .item-seached');
    const noResult = document.querySelector('.no-result');
    let hasResult = false

    items.forEach(item => {
        if(formString(item.textContent).indexOf(value) !== -1){
            item.style.display = 'flex';
            hasResult = true
        }else{
            item.style.display = 'none'
            console.log('cheguei')
        }
    })
    
    if(hasResult){
        noResult.style.display = 'none';
    }else{
        noResult.style.display = 'block';
    }
});

function formString(value){
    return value
    .toLowerCase()
    .trim()
    .normalize('NFD')
}

function onSearch() {
    itemBox.style.display = "flex"
}

function offSearch(){
    setTimeout(() => {
        itemBox.style.display = "none"
    },5000)
    
}
