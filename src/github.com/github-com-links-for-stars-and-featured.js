// ==UserScript==
// @name         github.com: Add nav items for /stars and /trending
// @namespace    http://github.com
// @version      0.1
// @description  Add nav items for /stars and /trending to GitHub
// @author       Michael Haeuslmann <michael.haeuslmann@gmail.com>
// @match        https://github.com/*
// @icon         https://github.githubassets.com/favicons/favicon.svg
// @downloadURL  https://raw.githubusercontent.com/mihaeu/userscripts/main/src/github.com/github-com-links-for-stars-and-featured.js
// @updateURL    https://raw.githubusercontent.com/mihaeu/userscripts/main/src/github.com/github-com-links-for-stars-and-featured.js
// @grant        none
// ==/UserScript==

(function() {
    const navItem = (buttonIconAndText, link) => `
        <div class="d-flex position-relative">
            <a class="js-selected-navigation-item Header-link flex-auto mt-md-n3 mb-md-n3 py-2 py-md-3 mr-0 mr-md-3 border-top border-md-top-0 border-white-fade-15" href="https://github.com/${link}">
              ${buttonIconAndText}
            </a>
        </div>`;

    document.querySelector('nav[aria-label="Global"]').innerHTML += `${navItem(`🔥 Trending`, 'trending')}${navItem(`⭐ Stars`, 'stars')}`;
})();

