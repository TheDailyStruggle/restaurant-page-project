import _ from 'lodash';
import './styles.css';
import { homeComponent } from './home';
import { menuComponent } from './menu';
import { contactComponent } from './contact';

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

export const menu = function () {
    clearContent();
    homeTab.classList.remove('activePage');
    menuTab.classList.add('activePage');
    contactTab.classList.remove('activePage');
    menuComponent();
};

export const contact = function () {
    clearContent();
    homeTab.classList.remove('activePage');
    menuTab.classList.remove('activePage');
    contactTab.classList.add('activePage');
    contactComponent();
};



