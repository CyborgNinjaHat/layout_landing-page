'use strict';

import AOS from 'aos';
import 'aos/dist/aos.css';

document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 500,
    easing: 'ease-in-out',
    once: false
  });
});
