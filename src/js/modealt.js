const body = document.querySelector('body');
const acessBtn = document.querySelector('.acess-btn');
let isActive = false

acessBtn.addEventListener('click', () => {
    isActive = !isActive

    if(isActive === true){
        body.classList.add('high-contrast');
    }else{
        body.classList.remove('high-contrast');
    }
    
})

