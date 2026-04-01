'use strict';

import { createFocusTrap } from 'focus-trap';

const elements = {
  pageContent: document.body,
  overlayMenu: document.getElementById('menu'),
  openButton: document.getElementById('menu-open'),
  closeButton: document.getElementById('menu-close'),
};

const focusMenu = createFocusTrap(elements.overlayMenu);

function setMenuState(isOpen) {
  elements.pageContent.classList.toggle('page__content--overlap', isOpen);
  elements.overlayMenu.classList.toggle('page__menu--open', isOpen);
  elements.overlayMenu.toggleAttribute('inert', !isOpen);
};

function openOverlayMenu() {
  setMenuState(true);
  focusMenu.activate();
}

function closeOverlayMenu() {
  setMenuState(false);
  focusMenu.deactivate();
}

elements.openButton.addEventListener('click', openOverlayMenu);
elements.closeButton.addEventListener('click', closeOverlayMenu);

function handleHashChange() {
  closeOverlayMenu();
}

window.addEventListener('hashchange', handleHashChange);
