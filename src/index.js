import _ from 'lodash';
import './styles.css';
import { homeComponent } from './home';
import { home } from './tabs';
import { menu } from './tabs';

const content = document.getElementById('content');

// homeComponent();

// Tab Switch Event Listeners
const homeTab = document.getElementById('home');
const menuTab = document.getElementById('menu');
const contactTab = document.getElementById('contact');

homeTab.addEventListener('click', () => {
    home();
});

menuTab.addEventListener('click', () => {
    menu();
});