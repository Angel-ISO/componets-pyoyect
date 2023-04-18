export class ShopContent extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
      }
      connectedCallback() {
        this.shadowRoot.innerHTML = /* html */`
          <style rel="stylesheet">
              @import "./App/Components/shop/shopStyle.css";
          </style>
          <h1>Pagina Shop</h1>
        `;
      }
}  
customElements.define("shop-content", ShopContent);