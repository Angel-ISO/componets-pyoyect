import { Servicio } from "../../db/servicios.js";
export class ServiceContent extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
      }
      connectedCallback() {
        this.shadowRoot.innerHTML = /* html */`
          <style rel="stylesheet">
              @import "./App/Components/servicios/serviceStyle.css";
              @import "./App/Components/mainPage/mainStyle.css";
          </style>

       <div class="first-message">
       <h1>servicios</h1>
       <a href="#">tienda virtual</a>
       </div>


          <div class="contenedor-tarjetas" id="tarjeta">
            
          </div> 
        `;
        this.mostrarTarjeta();
      }
    mostrarTarjeta(){
        Servicio.forEach(e => {
            console.log(e.nombre);
            let divTarjeta = this.shadowRoot.querySelector("#tarjeta");
            let content = document.createElement("div");
            content.className="tarjetas"
            content.innerHTML= /*html*/`
            <h3>${e.nombre}</h3>
            <img src="${e.img}">
            `
           divTarjeta.append(content);
           let verDatos =document.createElement("button");
           verDatos.innerText="ver datos";
          
           content.append(verDatos);
        });
    }
}     
customElements.define("service-content", ServiceContent);