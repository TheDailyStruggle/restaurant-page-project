import _ from 'lodash';
import './styles.css';
import { homeComponent } from './home';

const content = document.getElementById('content');
const homeTab = document.getElementById('home');
const menuTab = document.getElementById('menu');
const contactTab = document.getElementById('contact');

const clearContent = function () {
    content.innerHTML = "";
};

export const home = function () {
    clearContent();
    homeTab.classList.add('activePage');
    menuTab.classList.remove('activePage');
    contactTab.classList.remove('activePage');
    homeComponent();
};


