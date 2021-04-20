import initHeader from './modules/header.js';
import initScrollInterno from './modules/scroll-interno.js';
import initscrollSuave from './modules/scroll-suave.js';
import initborder from './modules/border-menu.js';
import initList from './modules/historia.js';
import Slide from './modules/catalogo.js';
import initMenu from './modules/menu-mobile.js';

const slide = new Slide('.slide', '.catalogo');
slide.init();


slide.changeSlide(0);
slide.activePrevSlide();

initHeader();
initScrollInterno();
initscrollSuave();
initborder();
initList();
initMenu();

