'use strict'

async function Exten(){

    const Name = document.querySelector('.product-title-word-break.a-size-large').innerText;
   
    const Brand = document.querySelector('.po-brand.a-spacing-small > .a-span9 > .po-break-word.a-size-base').innerText;

    const Cat = document.querySelector('.nav-b.nav-a > .nav-a-content').innerText

    const Weight = document.querySelector('.po-item_weight.a-spacing-small > .a-span9 > .po-break-word.a-size-base').innerText;
    
    const BaseInner = document.querySelector('#centerCol > hr');

    setTimeout(()=>{
        BaseInner.insertAdjacentHTML(
            "beforebegin",
            `
            <ul class="AmazContainer">
            
            <li>Nome:<span>${Name}</span></li>

            </ul>
            `
        )
    },1000)


    //Nome, Marca, Categoria, Dimensões, EAN, Link das imagens
}

Exten()