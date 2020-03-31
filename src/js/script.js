
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
            burger.classList.remove('burger_active');
            menuOverlay.classList.remove('menu_active'); 
            menuOverlay.classList.remove('window_active'); 
        });
    }
    const destinationInput = document.querySelector('.select-destination'),
        citiesList = document.querySelector('.destination__cities'),
        cities = document.querySelectorAll('.destination__cities li');
    destinationInput.addEventListener('click', function(){
        citiesList.classList.toggle('destination__cities_active');
    });
    cities.forEach(item => {
        console.log(item);
        item.addEventListener('click', function(){
            citiesList.classList.remove('destination__cities_active');
            destinationInput.value = item.textContent;
        });
    });