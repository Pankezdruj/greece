
    const burger = document.getElementsByClassName('hamburger')[0],
    menuOverlay = document.getElementsByClassName('menu')[0],
    menuItems = document.getElementsByClassName('menu__item');

    const prices = {
        santorini: 5,
        mykonos: 7,
        crete: 9,
        sparta: 15,
        athens: 20,
        south_kastoria: 27
    }

    //packages
    const bookBtn = document.getElementsByClassName('packages__button'),
        customizeLink = document.getElementsByClassName('packages__customize'),
        strings = document.getElementsByClassName('packages__string');
         
    const calculatePrice = (choiceTime, choiceCity) => {
        let price = 0;
        for (let i = 0; i < choiceTime.length; i++) {
            const city = choiceCity[i].value.toLowerCase() == "south kastoria" ? "south_kastoria" : choiceCity[i].textContent.toLowerCase();
            price += parseInt(choiceTime[i].value) * prices[city];
            console.log(choiceTime.value);
        }
        return price;
    }

  window.addEventListener('DOMContentLoaded', () => {
      //packages
      for ( let i = 0; i < strings.length; i++) {
        const times = strings[i].getElementsByClassName('packages__time'),
            cities = strings[i].getElementsByClassName('packages__city'),
            priceWrapper = strings[i].getElementsByClassName('packages__price')[0];
        let price = 0;
        for (let i =0; i < times.length; i++) {
            const city = cities[i].textContent.toLowerCase() == "south kastoria" ? "south_kastoria" : cities[i].textContent.toLowerCase();
            price += parseInt(times[i].textContent) * prices[city];
        }
        priceWrapper.textContent = price;

        const choiceTime = strings[i].getElementsByClassName('packages__choice-time'),
            choiceCity = strings[i].getElementsByClassName('packages__choice-city');

        for (let i = 0; i < choiceTime.length; i++) {
            choiceTime[i].addEventListener('change', () => {
                priceWrapper.textContent = calculatePrice(choiceTime, choiceCity);
            });
            choiceCity[i].addEventListener('change', () => {
                priceWrapper.textContent = calculatePrice(choiceTime, choiceCity);
            });
        }

      }


    for (let i = 0; i < bookBtn.length; i++) {
        bookBtn[i].addEventListener('click', e => {
        });
        customizeLink[i].addEventListener('click', e => {
            e.preventDefault();
            const times = strings[i].getElementsByClassName('packages__time'),
                cities = strings[i].getElementsByClassName('packages__city'),
                choiceTime = strings[i].getElementsByClassName('packages__choice-time'),
                choiceCity = strings[i].getElementsByClassName('packages__choice-city');
            for ( let i = 0; i < times.length; i++) {
                times[i].classList.toggle('packages_active');
                cities[i].classList.toggle('packages_active');
                choiceCity[i].classList.toggle('packages_active');
                choiceTime[i].classList.toggle('packages_active');
            }
        });
    }

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
  });