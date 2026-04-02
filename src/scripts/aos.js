'use strict';

import AOS from 'aos';
import 'aos/dist/aos.css';

const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

AOS.init({
  duration: 600,
  easing: 'ease-in-out',
  once: false,
  disable: reducedMotionQuery.matches,
});

reducedMotionQuery.addEventListener('change', () => {
  window.location.reload();
});
