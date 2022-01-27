const hamburguer = document.querySelector('.menuMobile i');
const menuMobileInfo = document.querySelector('.menuMobile .ulOfList');

hamburguer.addEventListener('click', ()=>{
    //console.log('click in menuMobile');
    let menuMobile = document.querySelector('.ulOfList');
    if (menuMobile.classList.contains('showMenu')){
       menuMobile.classList.remove('showMenu')    
    } else {
        menuMobile.classList.add('showMenu')
    }

    const allMenu = document.querySelectorAll('.liOfList a')

    allMenu.forEach(element => {
        element.addEventListener('click', (e) => {
            //console.log(e.target)

            if(menuMobileInfo.classList.contains('showMenu')){
                menuMobileInfo.classList.remove('showMenu')
            } else {
                //console.log("erro")
            }
        })
    })

})