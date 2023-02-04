'use strict';

async function Exten(){

    const Name = document.querySelector('.product-title-word-break.a-size-large')?.innerText || '0';
   
    const Brand = document.querySelector('.po-brand.a-spacing-small > .a-span9 > .po-break-word.a-size-base')?.innerText || '0';

    const Cat = document.querySelector('.nav-b.nav-a > .nav-a-content')?.innerText || '0';

    const Weight = document.querySelector('.po-item_weight.a-spacing-small > .a-span9 > .po-break-word.a-size-base')?.innerText || '0';
    
    const BaseInner = document.querySelector('.priceToPay.reinventPricePriceToPayMargin.aok-align-center.a-price > span')

    const EAN = document.querySelector('tr:nth-of-type(16) > .prodDetAttrValue.a-size-base')?.innerText || '0'

    setTimeout(()=>{
        BaseInner.insertAdjacentHTML(
            "beforebegin",
            `
            <ul class="AmazContainer">
            
            <li>Nome: <span>${Name}</span></li>
            <li>Marca: <span>${Brand}</span></li>
            <li>Categoria: <span>${Cat}</span></li>
            <li>Peso: <span>${Weight}</span></li>
            <li>EAN: <span>${EAN}</span></li>
            <li>Link Imagem: <span></span></li>
            </ul>

            `
        )
        
    },0)

    //Nome, Marca, Categoria, Dimensões, EAN, Link das imagens
}

Exten()
