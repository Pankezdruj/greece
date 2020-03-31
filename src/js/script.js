
    const burger = document.getElementsByClassName('hamburger')[0],
    menuOverlay = document.getElementsByClassName('menu')[0],
    menuItems = document.getElementsByClassName('menu__item');

    burger.addEventListener('click', () => {
        burger.classList.toggle('hamburger_active');
        menuOverlay.classList.toggle('menu_active');
        menuOverlay.classList.toggle('window_active');
    });

    for (let i = 0; i < menuItems.length; i++){
        menuItems[i].addEventListener('click', () => {
            burger.classList.remove('hamburger_active');
            menuOverlay.classList.remove('menu_active'); 
            menuOverlay.classList.remove('window_active'); 
        });
    }