const dropdownBtn = document.querySelector('.dropdown-btn'); 

const dropdownItems = document.querySelectorAll('.dropdown-menu li');
const dropdownMenu = document.querySelector('.dropdown-menu'); 

dropdownItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        dropdownBtn.textContent = item.textContent;  
        const currActive = document.getElementsByClassName('active'); 

        if(currActive.length > 0){
            currActive[0].classList.remove('active'); 
        }

        dropdownMenu.style.height = '0'; 
        dropdownBtn.setAttribute('data-visible', 'false'); 
        dropdownItems[index].classList.add('active'); 
    })
});

dropdownBtn.addEventListener('click', () => {
    const currState = dropdownBtn.getAttribute('data-visible'); 
    if(currState === 'false'){
        dropdownBtn.setAttribute('data-visible', 'true'); 
        dropdownMenu.style.height = 'auto'; 
    }else if(currState === 'true'){
        dropdownBtn.setAttribute('data-visible', 'false'); 
        dropdownMenu.style.height = '0';
    }
});