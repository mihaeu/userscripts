// ==UserScript==
// @name         Warmshowers.org - Add links for navigation UX
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Michael Haeuslmann <michael.haeuslmann@gmail.com>
// @match        https://www.warmshowers.org/*
// @icon         https://www.warmshowers.org/sites/all/themes/warmshowers_up/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    const menu = document.querySelector('ul.menu');
    const menuItems = document.querySelectorAll('header .menu__item');
    menuItems[0].innerText = "🔍 Search"
    console.log(menuItems[1]) || menu.removeChild(menuItems[1]);
    menuItems[2].innerText = "✍️ Forums"
    console.log(menuItems[3]) || menu.removeChild(menuItems[3]);

    const languageLink = document.querySelector('.block-delta--language');
    languageLink.parentNode.removeChild(languageLink);

    const child = document.createElement('li');
    child.innerHTML = `<a href="https://www.warmshowers.org/user/10304/messages" title="" class="menu__link">🗨️ Messages</a>`;
    child.className = 'menu__item is-leaf leaf'
    menu.appendChild(child);
})();