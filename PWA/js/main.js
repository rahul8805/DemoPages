window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('https://rahul8805.github.io/DemoPages/PWA/sw.js');
  }
}
