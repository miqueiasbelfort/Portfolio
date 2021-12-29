const hamburguer = document.querySelector('.menuMobile i');

hamburguer.addEventListener('click', ()=>{
    //console.log('click in menuMobile');
    let menuMobile = document.querySelector('.ulOfList');
    if (menuMobile.classList.contains('showMenu')){
       menuMobile.classList.remove('showMenu')    
    } else {
        menuMobile.classList.add('showMenu')
    }

    const allMenu = document.querySelector('.liOfList a')

    allMenu.addEventListener('click', () => {
        menuMobile.classList.remove('showMenu')
    })

})