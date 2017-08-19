// ==UserScript==
// @name         Terra Mystica Extensions
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Adapts visuals for smaller screens and adds shortcuts to Snellmans Terra Mystica Online.
// @author       Michael Haeuslmann <haeuslmann@gmail.com>
// @require      https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.6.15/browser-polyfill.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.6.15/browser.min.js
// @match        http://terra.snellman.net/*
// ==/UserScript==

/* jshint ignore:start */
var inline_src = (<><![CDATA[
/* jshint ignore:end */
/* jshint esnext: true */

  let removeHeader = () => {
    document.getElementById('header').style.display = 'none';
  };

  let moveFactionsToTheRight = () => {
    document.querySelectorAll('.faction-board, .pool').forEach((element) => {
      element.style.width = '250px';
    });
    document.getElementById('factions').style = "position:absolute;top:10px;left:1075px;";
  };

  let removeColorBlindSwitcher = () => {
    let mainTable = document.querySelector('#main-data tbody');
    mainTable.removeChild(mainTable.childNodes[1]);
  };

  let refresh = () => {
    loadGame(document.location.host, document.location.pathname);
  };

  let save = () => {
    document.getElementById('move_entry_action').click();
  };

  let undo = () => {
    document.getElementById('move_picker_undo').childNodes[0].click();
  };

  let toggleVisibility = (element) => {
    element.style.visibility = element.style.visibility === 'hidden' ? 'visible' : 'hidden';
  };

  let toggleFactions = () => {
    const LEFT_ALIGN_PX = '5px';
    const RIGHT_ALIGN_PX = '1075px';

    toggleVisibility(document.getElementById('map'));
    toggleVisibility(document.getElementById('cults'));

    let factions = document.getElementById('factions');
    factions.style.left = factions.style.left === RIGHT_ALIGN_PX ? LEFT_ALIGN_PX : RIGHT_ALIGN_PX;
  };

  let addKeyboardShortcuts = () => {
    const KEY_REFRESH           = 82;
    const KEY_SAVE              = 83;
    const KEY_UNDO              = 85;
    const KEY_TOGGLE_FACTIONS   = 76;

    document.addEventListener('keydown', (event) => {
      switch (event.keyCode) {
        case KEY_REFRESH:
          refresh();
          break;
        case KEY_SAVE:
          save();
          break;
        case KEY_UNDO:
          undo();
          break;
        case KEY_TOGGLE_FACTIONS:
          toggleFactions();
          break;
      }
    });
  };

  moveFactionsToTheRight();
  removeColorBlindSwitcher();
  removeHeader();
  addKeyboardShortcuts();

/* jshint ignore:start */
]]></>).toString();
var c = babel.transform(inline_src);
eval(c.code);
/* jshint ignore:end */