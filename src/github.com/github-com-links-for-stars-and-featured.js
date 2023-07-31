// ==UserScript==
// @name         github.com: Add nav items for /stars and /trending
// @namespace    http://github.com
// @version      0.2
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
        <li>
            <a href="/${link}" data-view-component="true" class="AppHeader-context-item">
                <span class="AppHeader-context-item-label  ">
                    ${buttonIconAndText}
                </span>
            </a>
        </li>`;

    document.querySelector('nav[aria-label="Page context"] ul li').innerHTML += `${navItem(`🔥 Trending`, 'trending')}${navItem(`⭐ Stars`, 'stars')}`;
})();


