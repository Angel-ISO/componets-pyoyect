export class SupportContent extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
      }
      connectedCallback() {
        this.shadowRoot.innerHTML = /* html */`
          <style rel="stylesheet">
              @import "./App/Components/support/supportStyle.css";
          </style>
          <h1>Pagina Shop</h1>
        `;
      }
}     
customElements.define("support-content", SupportContent);