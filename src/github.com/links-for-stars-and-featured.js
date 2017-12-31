// ==UserScript==
// @name         github-stars-trending
// @namespace    http://github.com
// @version      0.1
// @description  Add links for trending and stars to GitHub
// @author       Michael Haeuslmann <haeuslmann@gmail.com>
// @match        https://github.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.querySelector('.d-flex ul').innerHTML += `
      <li>
        <a class="js-selected-navigation-item HeaderNavlink px-2" href="https://github.com/trending">
          <svg aria-hidden="true" class="octicon octicon-flame" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"></path></svg>
          Trending
        </a>
      </li>

      <li>
        <a class="js-selected-navigation-item HeaderNavlink px-2" href="https://github.com/stars">
          <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"></path></svg>
          Stars
        </a>
      </li>`;
})();
