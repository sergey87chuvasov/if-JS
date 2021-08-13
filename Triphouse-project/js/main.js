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
    <p class="homes__item-text">${el.city}, <span class="homes__item-text2">${el.country}</span></p></div>
    `));

// конкотенация строк при переносе на новую строку
// синтаксис js stringTemplate

const btnNext = document.getElementById('btn-next');
const btnPrev = document.getElementById('btn-prev');

let slideIndex = 0;
const itemHotel = document.querySelectorAll('.homes__item'); // каждый блок

function showNext() {
  slideIndex += 1;

  for (let i = 0; i < itemHotel.length; i++) {
    if (i >= slideIndex && i <= slideIndex + 3) {
      itemHotel[i].style.display = 'block';
    } else {
      itemHotel[i].style.display = 'none';
    }
    if (slideIndex + 3 === itemHotel.length) {
      slideIndex = 0;
      break;
    }
  }
}

function showPrev() {
  slideIndex -= 1;

  for (let i = 0; i < itemHotel.length; i++) {
    if (i >= slideIndex && i <= slideIndex + 3) {
      itemHotel[i].style.display = 'block';
    } else {
      itemHotel[i].style.display = 'none';
    }
    if (slideIndex - 3 === 0) {
      slideIndex = 0;
      break;
    }
  }
}

btnNext.addEventListener('click', () => {
  showNext();
});

btnPrev.addEventListener('click', () => {
  showPrev();
});
