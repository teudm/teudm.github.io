const getElement = (element) => document.getElementsByClassName(element);

const openMenu = () => {
  getElement('menu-button')[0].classList.add('open');
  getElement('navigation-list-container')[0].classList.add('open');
  getElement('social-list')[0].classList.add('open');
};

const closeMenu = () => {
  const open = getElement('open');
  console.log(open);
  for (let i = open.length - 1; i >= 0; i -= 1) {
    console.log(i);
    open[i].classList.remove('open');
  }
};

const addMenuClickEvent = () => {
  const el = getElement('menu-button');
  el[0].addEventListener('click', function menuClickEvent({ target }) {
    const classe = target.parentNode.className;
    classe === 'menu-button open' ?  closeMenu() : openMenu();
  });
};

const addAllEvents = () => {
  addMenuClickEvent();
};

window.onload = addMenuClickEvent;