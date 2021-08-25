const data = [
  {
    name: 'Hotel Leopold',
    city: 'Saint Petersburg',
    country: 'Russia',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-leopold_mflelk.jpg',
  },
  {
    name: 'Apartment Sunshine',
    city: 'Santa  Cruz de Tenerife',
    country: 'Spain',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/apartment-sunshine_vhdlel.jpg',
  },
  {
    name: 'Villa Kunerad',
    city: 'Vysokie Tatry',
    country: 'Slowakia',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/villa-kunerad_gdbqgv.jpg',
  },
  {
    name: 'Hostel Friendship',
    city: 'Berlin',
    country: 'Germany',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/hostel-friendship_aw6tn7.jpg',
  },
  {
    name: 'Radisson Blu Hotel',
    city: 'Kyiv',
    country: 'Ukraine',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/radisson-blu-hotel_jwtowg.jpg',
  },
  {
    name: 'Paradise Hotel',
    city: 'Guadalupe',
    country: 'Mexico',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/paradise-hotel_i6whae.jpg',
  },
  {
    name: 'Hotel Grindewald',
    city: 'Interlaken',
    country: 'Switzerland',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-grindewald_zsjsmy.jpg',
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/the-andaman-resort_d2xksj.jpg',
  },
];

const itemsHotel = document.querySelector('.homes__items'); // общая обертка, вставим все объекты
let count = 0; // делаем счетчик

data.forEach((el) => (
  itemsHotel.innerHTML += `
    <div style="display: ${count++ < 4 ? 'block' : 'none'}" class="homes__item">
    <img class="homes__item-img" src="${el.imageUrl}" alt="slider pic">
    <a class="slider__title-link" href="#"><h4 class="homes__item-title">${el.name}</h4></a>
    <p class="homes__item-text">${el.city}, ${el.country}</p></div>
    `));

// конкотенация строк при переносе на новую строку
// синтаксис js stringTemplate

const btnNext = document.getElementById('btn-next');
const btnPrev = document.getElementById('btn-prev');

const itemHotel = document.querySelectorAll('.homes__item');

let slideIndex = 0;
const slidesPerPage = 4;

function toggleSlider(event) {
  if (event.target === btnPrev && slideIndex >= 1) {
    slideIndex -= 1;
  } else if (event.target === btnNext && (slideIndex + slidesPerPage) < itemHotel.length) {
    slideIndex += 1;
  }

  for (let i = 0; i < itemHotel.length; i++) {
    if (i >= slideIndex && i <= slideIndex + 3) {
      itemHotel[i].style.display = 'block';
    } else {
      itemHotel[i].style.display = 'none';
    }
  }

  if (slideIndex === 0 || (slideIndex + slidesPerPage) === itemHotel.length) {
    return;
  }
}

btnNext.addEventListener('click', (event) => {
  toggleSlider(event);
});

btnPrev.addEventListener('click', (event) => {
  toggleSlider(event);
});

const mainInput = document.querySelector('.input__count');
const filterForm = document.querySelector('.filter');

const minusAdult = document.querySelector('#adults__minus');
const plusAdult = document.querySelector('#adults__plus');
const inputAdult = document.querySelector('#adults');

const minusRooms = document.querySelector('#rooms__minus');
const plusRooms = document.querySelector('#rooms__plus');
const inputRooms = document.querySelector('#rooms');

const minusChildren = document.querySelector('#children__minus');
const plusChildren = document.querySelector('#children__plus');
const inputChildren = document.querySelector('#children');

const filterInfo = document.querySelector('.filter__info');
const infoAges = document.querySelector('#info__ages');

const inputCount = document.querySelector('.input__count');

const borderDis = '1px solid #CECECE';
const colorDis = '#CECECE';
const borderEn = '1px solid #3077c6';
const colorEn = '#3077c6';

const setFilterForm = () => {
  filterForm.classList.toggle('visible__on');

  minusAdult.disabled = true;
  minusAdult.style.border = borderDis;
  minusAdult.style.color = colorDis;

  minusChildren.disabled = true;
  minusChildren.style.border = borderDis;
  minusChildren.style.color = colorDis;

  minusRooms.disabled = true;
  minusRooms.style.border = borderDis;
  minusRooms.style.color = colorDis;
};
mainInput.addEventListener('click', setFilterForm);

inputAdult.value = 0;
inputRooms.value = 0;
inputChildren.value = 0;

const setValue = () => {
  inputCount.setAttribute('placeholder', 
  `${inputAdult.value} Adults — ${inputChildren.value} Children — ${inputRooms.value} Room`);
}
setValue();

const clickAdults = (e) => {
  e.preventDefault();
  // console.log(e);
  if (e.target.classList.contains('num__plus')) {
    inputAdult.value++;
  } else if (e.target.classList.contains('num__minus')) {
    inputAdult.value--;
  }

  if (inputAdult.value <= 0) {
    minusAdult.disabled = true;
    minusAdult.style.border = borderDis;
    minusAdult.style.color = colorDis;
  } else {
    minusAdult.disabled = false;
    minusAdult.style.border = borderEn;
    minusAdult.style.color = colorEn;
  }

  if (inputAdult.value >= 30) {
    plusAdult.disabled = true;
    plusAdult.style.border = borderDis;
    plusAdult.style.color = colorDis;
  } else {
    plusAdult.disabled = false;
    plusAdult.style.border = borderEn;
    plusAdult.style.color = colorEn;
  }
  setValue();
};

minusAdult.addEventListener('click', clickAdults);
plusAdult.addEventListener('click', clickAdults);

const clickRooms = (e) => {
  e.preventDefault();
  // console.log(e);
  if (e.target.classList.contains('num__plus')) {
    inputRooms.value++;
  } else if (e.target.classList.contains('num__minus')) {
    inputRooms.value--;
  }

  if (inputRooms.value <= 0) {
    minusRooms.disabled = true;
    minusRooms.style.border = borderDis;
    minusRooms.style.color = colorDis;
  } else {
    minusRooms.disabled = false;
    minusRooms.style.border = borderEn;
    minusRooms.style.color = colorEn;
  }

  if (inputRooms.value >= 30) {
    plusRooms.disabled = true;
    plusRooms.style.border = borderDis;
    plusRooms.style.color = colorDis;
  } else {
    plusRooms.disabled = false;
    plusRooms.style.border = borderEn;
    plusRooms.style.color = colorEn;
  }
  setValue();
};

minusRooms.addEventListener('click', clickRooms);
plusRooms.addEventListener('click', clickRooms);

const clickChildren = (e) => {
  e.preventDefault();
  if (e.target.classList.contains('num__plus')) {
    inputChildren.value++;
  } else if (e.target.classList.contains('num__minus')) {
    inputChildren.value--;
  }

  if (inputChildren.value <= 0) {
    minusChildren.disabled = true;
    minusChildren.style.border = borderDis;
    minusChildren.style.color = colorDis;
  } else {
    minusChildren.disabled = false;
    minusChildren.style.border = borderEn;
    minusChildren.style.color = colorEn;
  }

  if (inputChildren.value >= 10) {
    plusChildren.disabled = true;
    plusChildren.style.border = borderDis;
    plusChildren.style.color = colorDis;
  } else {
    plusChildren.disabled = false;
    plusChildren.style.border = borderEn;
    plusChildren.style.color = colorEn;
  }
  setValue();
};

minusChildren.addEventListener('click', clickChildren);
plusChildren.addEventListener('click', clickChildren);

const ageSelectInc = (e) => {
  if (inputChildren.value >= 1) {
    filterInfo.style.display = 'block';
    for (let i = inputChildren.value; i >= 2 && i < 11; i += 1) {
      if (i < 11) {
        const cloneSelect = infoAges.cloneNode(true);
        cloneSelect.id = '';
        cloneSelect.classList = 'remoteSelect';
        infoAges.parentNode.insertBefore(cloneSelect, infoAges.nextSibling);
        // console.log(cloneSelect);
      }
    }
  }
};

plusChildren.addEventListener('click', ageSelectInc);

const ageSelectDec = (e) => {
  const lastSelect = document.querySelector('select.remoteSelect:last-child');
  if (inputChildren.value < 1) {
    filterInfo.style.display = 'none';
  } else if (inputChildren.value >= 1) {
    lastSelect.remove();
  }
};

minusChildren.addEventListener('click', ageSelectDec);


