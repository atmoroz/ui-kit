(function(){"use strict";const t=`
  :host {
    --button-bg: royalblue;
    --button-color: white;
    --button-border-radius: 6px;
    --button-padding: 10px 20px;
    --button-hover: darkblue;
  }

  .btn-general {
    padding: var(--button-padding);
    background-color: var(--button-bg);
    color: var(--button-color);
    border: none;
    border-radius: var(--button-border-radius);
    cursor: pointer;
  }

  .btn-general:hover {
    background-color: var(--button-hover);;
  }
`;class o extends HTMLElement{constructor(){super();const n=this.attachShadow({mode:"open"});n.innerHTML=`
      <style>${t}</style>
      <button class="btn-general"><slot></slot></button>
    `}}customElements.define("m-button",o)})();
