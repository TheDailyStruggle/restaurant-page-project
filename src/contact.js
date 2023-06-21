import Location from './images/location.png';
const content = document.getElementById('content');

const dayHours = function (day, open, close) {
    const eachDay = document.createElement('p');
    eachDay.innerText = `${day} ${open} - ${close}`
    eachDay.classList.add('hours');
    return eachDay;
};


export function contactComponent() {
    const locationImg = document.createElement('img');
    locationImg.src = Location;
    locationImg.classList.add('locationImg');

    //Create Title
    const contactTitle = document.createElement('h1');
    contactTitle.classList.add('contactTitle');
    contactTitle.innerText = 'We Would Love To See You!';

    //Create hours section

    const hoursHeader = document.createElement('h2');
    hoursHeader.innerText = 'Hours';
    hoursHeader.classList.add('hoursHeader');

    const monday = dayHours('Monday', '17:00', '22:00');
    const tuesday = dayHours('Tuesday', '17:00', '22:00');
    const wednesday = dayHours('Wednesday', '17:00', '22:00');
    const thursday = dayHours('Thursday', '17:00', '22:00');
    const friday = dayHours('Friday', '17:00', '22:00');
    const saturday = dayHours('Saturday', '17:00', '22:00');
    const sunday = dayHours('Sunday', '17:00', '22:00');

    const hoursWrapper = document.createElement('div');
    hoursWrapper.classList.add('hoursWrapper');
    hoursWrapper.appendChild(hoursHeader);
    hoursWrapper.appendChild(monday);
    hoursWrapper.appendChild(tuesday);
    hoursWrapper.appendChild(wednesday);
    hoursWrapper.appendChild(thursday);
    hoursWrapper.appendChild(friday);
    hoursWrapper.appendChild(saturday);
    hoursWrapper.appendChild(sunday);

    //Create Address Section

    const addressHeader = document.createElement('h2');
    addressHeader.classList.add('addressHeader');
    addressHeader.innerText = 'Address';

    const address = document.createElement('p');
    address.classList.add('address');
    address.innerText = '800 Griffiths Way, Vancouver, B.C.';

    const addressWrapper = document.createElement('div');
    addressWrapper.classList.add('addressWrapper');
    addressWrapper.appendChild(addressHeader);
    addressWrapper.appendChild(address);

    //Create Hours and Address Wrapper and Append Them
    const hoursAddress = document.createElement('div');
    hoursAddress.classList.add('hoursAddress')
    hoursAddress.appendChild(hoursWrapper);
    hoursAddress.appendChild(addressWrapper);

    const contactWrapper = document.createElement('div');
    contactWrapper.classList.add('contactWrapper');
    contactWrapper.appendChild(locationImg);
    contactWrapper.appendChild(hoursAddress);

    content.appendChild(contactTitle);
    content.appendChild(contactWrapper);
};