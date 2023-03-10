'use strict';

async function Exten(){
    
    //Nome, Marca, Categoria, Dimensões, EAN, Link das imagens

    const
    Name = document.querySelector('.product-title-word-break.a-size-large')?.innerText || 'Não Disponivel',
    Brand = document.querySelector('.po-brand.a-spacing-small > .a-span9 > .po-break-word.a-size-base')?.innerText || 'Não Disponivel',
    Cat = document.querySelector('.nav-b.nav-a > .nav-a-content')?.innerText || 'Não Disponivel',
    Weight = document.querySelector('.po-item_weight.a-spacing-small > .a-span9 > .po-break-word.a-size-base')?.innerText || 'Não Disponivel',
    Dim = document.querySelector('.po-item_dimensions.a-spacing-small > .a-span9 > .po-break-word.a-size-base')?.innerText || 'Não Disponivel',
    Img = document.querySelector('.selected.maintain-height.itemNo0.item.image > .a-list-item > .a-declarative > .imgTagWrapper > img'),
    Src = Img.getAttribute('src');

    let BaseInner = document.querySelector('.priceToPay.reinventPricePriceToPayMargin.aok-align-center.a-price > span');

        BaseInner.insertAdjacentHTML(
            "beforebegin",
            `
            <ul class="AmazContainer">
            <li>Nome: <span id="NameCopy" class="limited-text" data-text="o texto exibido aqui sera limitado"+>${Name}</span></li>
            <li>Marca: <span id="BrandCopy">${Brand}</span></li>
            <li>Categoria: <span id="CatCopy">${Cat}</span></li>
            <li>Peso: <span id="WeightCopy">${Weight}</span></li>
            <li>Dimensões C x L x A: <span id="DimCopy">${Dim}</span></li>
            <li>Imagem Principal: <span id="SrcCopy" class="limited-text" data-text="o texto exibido aqui sera limitado">${Src}</span></li>
            </ul>

            `
        )

        //Copiar Texto da ${}, irei encurtar isso

        function copyText(textToCopy) {
            const textarea = document.createElement("textarea");
            textarea.value = textToCopy;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand("copy");
            textarea.remove();
            console.log("COPIADO")
        }
        
        const nameCopy = document.querySelector("#NameCopy");
        nameCopy.addEventListener("click", function() {
            const originalText = nameCopy.textContent;
            nameCopy.textContent = "Copiado";
            copyText(originalText);
            setTimeout(function() {
              nameCopy.textContent = originalText;
            }, 1000);
          });

        const brandCopy = document.querySelector("#BrandCopy")
        brandCopy.addEventListener("click", function() {
            const originalText = brandCopy.textContent;
            brandCopy.textContent = "Copiado";
            copyText(originalText);
            setTimeout(function() {
              brandCopy.textContent = originalText;
            }, 1000);
          });

        const catCopy = document.querySelector("#CatCopy")
        catCopy.addEventListener("click", function() {
            const originalText = catCopy.textContent;
            catCopy.textContent = "Copiado";
            copyText(originalText);
            setTimeout(function() {
              catCopy.textContent = originalText;
            }, 1000);
          });

        const weightCopy = document.querySelector("#WeightCopy")
        weightCopy.addEventListener("click", function() {
            const originalText = weightCopy.textContent;
            weightCopy.textContent = "Copiado";
            copyText(originalText);
            setTimeout(function() {
              weightCopy.textContent = originalText;
            }, 1000);
          });
          
        const dimCopy = document.querySelector("#DimCopy")
        dimCopy.addEventListener("click", function() {
            const originalText = dimCopy.textContent;
            dimCopy.textContent = "Copiado";
            copyText(originalText);
            setTimeout(function() {
              dimCopy.textContent = originalText;
            }, 1000);
          });

          const imgCopy = document.querySelector("#SrcCopy");
          imgCopy.addEventListener("click", function() {
            const originalText = imgCopy.textContent;
            imgCopy.textContent = "Copiado";
            copyText(originalText);
            setTimeout(function() {
              imgCopy.textContent = originalText;
            }, 1000);
          });

}

Exten()


// finding content by inner

// var headings = document.evaluate("//tr[contains(.,img')]", document, null, XPathResult.ANY_TYPE, null );
// var thisHeading = headings.iterateNext();

// console.log(thisHea ding); // Prints the html element in console
// console.log(thisHeading.textContent); // prints the text content in console

// thisHeading.innerHTML += "<br />Modified contents";  