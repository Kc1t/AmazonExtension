'use strict';

async function Exten(){
    
    //Nome, Marca, Categoria, Dimensões, EAN, Link das imagens

    const
    Name = document.querySelector('.product-title-word-break.a-size-large')?.innerText || 'Não Informado',
    Brand = document.querySelector('.po-brand.a-spacing-small > .a-span9 > .po-break-word.a-size-base')?.innerText || 'Não Informado',
    Cat = document.querySelector('.nav-b.nav-a > .nav-a-content')?.innerText || 'Não Informado',
    Weight = document.querySelector('.po-item_weight.a-spacing-small > .a-span9 > .po-break-word.a-size-base')?.innerText || 'Não Informado',
    BaseInner = document.querySelector('.priceToPay.reinventPricePriceToPayMargin.aok-align-center.a-price > span'),
    Dim = document.querySelector('.po-item_dimensions.a-spacing-small > .a-span9 > .po-break-word.a-size-base')?.innerText || 'Não Informado',
    EAN = document.querySelector('tr:nth-of-type(16) > .prodDetAttrValue.a-size-base')?.innerText || 'Não Informado';

    // setTimeout(()=>{
        BaseInner.insertAdjacentHTML(
            "beforebegin",
            `
            <ul class="AmazContainer">
            
            <li>Nome: <span id="NameCopy">${Name}</span></li>
            <li>Marca: <span id="BrandCopy">${Brand}</span></li>
            <li>Categoria: <span id="CatCopy">${Cat}</span></li>
            <li>Peso: <span id="WeightCopy">${Weight}</span></li>
            <li>Dimensões C x L x A: <span id="DimCopy">${Dim}</span></li>
            <li>EAN: <span id="EANCopy">${EAN}</span></li>
            </ul>

            `
        )

    
        //Copiar Texto da ${}, irei encurtar isso

        const nameCopy = document.querySelector("#NameCopy");
        nameCopy.addEventListener("click", function() {
            copyText(nameCopy.textContent);
          });

        const brandCopy = document.querySelector("#BrandCopy")
        brandCopy.addEventListener("click", function() {
            copyText(brandCopy.textContent);
          });

        const catCopy = document.querySelector("#CatCopy")
        catCopy.addEventListener("click", function() {
            copyText(catCopy.textContent);
          });

        const weightCopy = document.querySelector("#WeightCopy")
        weightCopy.addEventListener("click", function() {
            copyText(weightCopy.textContent);
          });
          
        const dimCopy = document.querySelector("#DimCopy")
        dimCopy.addEventListener("click", function() {
            copyText(dimCopy.textContent);
          });

        const eanCopy = document.querySelector("#EANCopy")
        eanCopy.addEventListener("click", function() {
            copyText(eanCopy.textContent);
          });
        
        function copyText(textToCopy) {
            const textarea = document.createElement("textarea");
            textarea.value = textToCopy;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand("copy");
            textarea.remove();
            console.log("COPIADO")
          }

    // },1000)

}

Exten()


// finding content by inner

// var headings = document.evaluate("//tr[contains(., 'EAN')]", document, null, XPathResult.ANY_TYPE, null );
// var thisHeading = headings.iterateNext();

// console.log(thisHea ding); // Prints the html element in console
// console.log(thisHeading.textContent); // prints the text content in console

// thisHeading.innerHTML += "<br />Modified contents";  