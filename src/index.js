import _ from 'lodash';
import './styles.css';
import Logo from './images/logo.png';

const content = document.getElementById('content');

const heading = document.createElement('h2');
heading.innerText = "Vancouver's Best Steaks";

const paragraph = document.createElement('p');
paragraph.textContent = "3-Michelin Stars!";

const sloganDiv = document.createElement('div');
sloganDiv.setAttribute('id', 'slogan');
sloganDiv.appendChild(heading);
sloganDiv.appendChild(paragraph);

const image = document.createElement('img');
image.setAttribute('id', 'heroImage');
image.src = Logo;
image.alt = "Timber Logo";

const contentWrapper = document.createElement('div')
contentWrapper.setAttribute('id', 'contentWrapper');
contentWrapper.appendChild(image);
contentWrapper.appendChild(sloganDiv);

content.appendChild(contentWrapper);
