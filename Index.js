'use strict';

async function Exten(){

    const Name = document.querySelector('.product-title-word-break.a-size-large')?.innerText || 'Não Informado';
   
    const Brand = document.querySelector('.po-brand.a-spacing-small > .a-span9 > .po-break-word.a-size-base')?.innerText || 'Não Informado';

    const Cat = document.querySelector('.nav-b.nav-a > .nav-a-content')?.innerText || 'Não Informado';

    const Weight = document.querySelector('.po-item_weight.a-spacing-small > .a-span9 > .po-break-word.a-size-base')?.innerText || 'Não Informado';
    
    const BaseInner = document.querySelector('.priceToPay.reinventPricePriceToPayMargin.aok-align-center.a-price > span');

    const Dim = document.querySelector('.po-item_dimensions.a-spacing-small > .a-span9 > .po-break-word.a-size-base')?.innerText || 'Não Informado'

    const EAN = document.querySelector('tr:nth-of-type(16) > .prodDetAttrValue.a-size-base')?.innerText || 'Não Informado';

    setTimeout(()=>{
        BaseInner.insertAdjacentHTML(
            "beforebegin",
            `
            <ul class="AmazContainer">
            
            <li>Nome: <span>${Name}</span></li>
            <li>Marca: <span>${Brand}</span></li>
            <li>Categoria: <span>${Cat}</span></li>
            <li>Peso: <span>${Weight}</span></li>
            <li>Dimensões C x L x A: <span>${Dim}</span></li>
            <li>EAN: <span>${EAN}</span></li>
            </ul>

            `
        )
        
    },0)

    //Nome, Marca, Categoria, Dimensões, EAN, Link das imagens
}

Exten()


// finding content by inner

var headings = document.evaluate("//tr[contains(., 'EAN')]", document, null, XPathResult.ANY_TYPE, null );
var thisHeading = headings.iterateNext();

console.log(thisHeading); // Prints the html element in console
console.log(thisHeading.textContent); // prints the text content in console

thisHeading.innerHTML += "<br />Modified contents";  