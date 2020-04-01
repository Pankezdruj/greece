
    const burger = document.getElementsByClassName('hamburger')[0],
    menuOverlay = document.getElementsByClassName('menu')[0],
    menuItems = document.getElementsByClassName('menu__item');

    const prices = {
        santorini: 5,
        mykonos: 7,
        crete: 9,
        sparta: 15,
        athens: 20,
        southKastoria: 27
    }

    //packages
    const bookBtn = document.getElementsByClassName('packages__button'),
        customizeLink = document.getElementsByClassName('packages__customize'),
        strings = document.getElementsByClassName('packages__string');
    let choiceOpened = false;

    const calculatePriceFromObj = data => {
        return prices[data.city1]*data.time1 + prices[data.city2]*data.time2 + prices[data.city3]*data.time3;
    }
         
    const calculatePrice = (choiceTime, choiceCity) => {
        let price = 0;
        for (let i = 0; i < choiceTime.length; i++) {
            price += parseInt(choiceTime[i].value) * prices[choiceCity[i].value];
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
            const city = cities[i].textContent.toLowerCase() == "south kastoria" ? "southKastoria" : cities[i].textContent.toLowerCase();
            price += parseInt(times[i].textContent) * prices[city];
        }
        priceWrapper.textContent = price + " $";

        const choiceTime = strings[i].getElementsByClassName('packages__choice-time'),
            choiceCity = strings[i].getElementsByClassName('packages__choice-city');

        for (let i = 0; i < choiceTime.length; i++) {
            choiceTime[i].addEventListener('change', () => {
                priceWrapper.textContent = calculatePrice(choiceTime, choiceCity) + " $";
            });
            choiceCity[i].addEventListener('change', () => {
                priceWrapper.textContent = calculatePrice(choiceTime, choiceCity) + " $";
            });
        }

      }


    for (let i = 0; i < bookBtn.length; i++) {
        customizeLink[i].addEventListener('click', e => {
            choiceOpened = !choiceOpened;
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





    const destinationInput = document.querySelector('.select-destination'),
        citiesList = document.querySelector('.destination__cities'),
        cities = document.querySelectorAll('.destination__cities li');
    destinationInput.addEventListener('click', function(){
        
        citiesList.style.transform = 'scale(1)';
    });
    document.body.addEventListener('click', function(e){
        if (e.target != destinationInput ){
            citiesList.style.transform = 'scale(0)';
        }
    });
    cities.forEach(item => {
        item.addEventListener('click', function(){
            citiesList.classList.remove('destination__cities_active');
            destinationInput.value = item.textContent;
        });
    });

    // datepicker
    $( ".form__input-date" ).datepicker();
    const dateInputs = document.querySelectorAll('.form__input-date');
    const dateError = document.querySelector('.date-error');
    function dateCheck (i){
        dateInputs[i].onchange= function(){
            let firstDate = new Date(dateInputs[0].value),
            secondDate = new Date(dateInputs[1].value);
            if (firstDate >= secondDate){
                console.log('error');
                dateError.style.transform = 'scale(1)';
        }
        }
    }
    dateCheck(0);
    dateCheck(1);

  });


  //BOOKING
  const overlay = document.querySelector('.overlay'),
    bookingModal = document.querySelector('.overlay__modal-booking'),
    price = document.querySelector('.overlay__price');

  showBookingModal = data => {
    overlay.classList.add('overlay_active');
    bookingModal.classList.add('overlay_active');
    const cross = bookingModal.querySelector('.overlay__cross');
    cross.addEventListener('click', () => {
        overlay.classList.remove('overlay_active');
        bookingModal.classList.remove('overlay_active');
    });
    price.textContent = calculatePriceFromObj(data) + " $";

    data = {
        city1: data.city1.charAt(0).toUpperCase() + data.city1.slice(1),
        city2: data.city2.charAt(0).toUpperCase() + data.city2.slice(1),
        city3: data.city3.charAt(0).toUpperCase() + data.city3.slice(1),
        time1: data.time1,
        time2: data.time2,
        time3: data.time3
    }

    const overlayData = bookingModal.getElementsByClassName('overlay__data');
        overlayData[0].textContent = `${data.city1} - ${data.time1} min`
        overlayData[1].textContent = `${data.city2} - ${data.time2} min`
        overlayData[2].textContent = `${data.city3} - ${data.time3} min`
  };

  const btnBook = document.getElementsByClassName('button-book-now')[0];

    btnBook.addEventListener('click', () => {
        showBookingModal({
            city1: "mykonos",
            city2: "mykonos",
            city3: "mykonos",
            time1: "200",
            time2: "60",
            time3: "200",
        });
    });   

    const btnBookChoic = document.getElementsByClassName('packages__button');
    for (let i = 0; i < btnBookChoic.length; i++) {
        btnBookChoic[i].addEventListener('click', e => {
            const times = strings[i].getElementsByClassName('packages__time'),
                cities = strings[i].getElementsByClassName('packages__city'),
                choiceTime = strings[i].getElementsByClassName('packages__choice-time'),
                choiceCity = strings[i].getElementsByClassName('packages__choice-city');
            if (choiceOpened) {
                showBookingModal({
                    city1: choiceCity[0].value,
                    city2: choiceCity[1].value,
                    city3: choiceCity[2].value,
                    time1: parseInt(times[0].textContent),
                    time2: parseInt(times[1].textContent),
                    time3: parseInt(times[2].textContent),
                });
            } else {
                showBookingModal({
                    city1: cities[0].textContent.toLowerCase() == "south kastoria" ? "southKastoria" : cities[0].textContent.toLowerCase(),
                    city2: cities[1].textContent.toLowerCase() == "south kastoria" ? "southKastoria" : cities[1].textContent.toLowerCase(),
                    city3: cities[2].textContent.toLowerCase() == "south kastoria" ? "southKastoria" : cities[2].textContent.toLowerCase(),
                    time1: parseInt(times[0].textContent),
                    time2: parseInt(times[1].textContent),
                    time3: parseInt(times[2].textContent),
                });
            }
        });
    }
