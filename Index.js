'use strict';

async function Exten(){
    
    //Pega Nome, Marca, Categoria, Dimensões, EAN, Link das imagens e passa para o mini Dashboard de modo a mais facil analise

    const
    Name = document.querySelector('.product-title-word-break.a-size-large')?.innerText || 'Não Disponivel',
    Brand = document.querySelector('.po-brand.a-spacing-small > .a-span9 > .po-break-word.a-size-base')?.innerText || 'Não Disponivel',
    Cat = document.querySelector('.nav-b.nav-a > .nav-a-content')?.innerText || 'Não Disponivel',
    Weight = document.querySelector('.po-item_weight.a-spacing-small > .a-span9 > .po-break-word.a-size-base')?.innerText || 'Não Disponivel',
    Dim = document.querySelector('.po-item_dimensions.a-spacing-small > .a-span9 > .po-break-word.a-size-base')?.innerText || 'Não Disponivel',
    Img = document.querySelector('.selected.maintain-height.itemNo0.item.image > .a-list-item > .a-declarative > .imgTagWrapper > img'),
    Src = Img.getAttribute('src');
    let EanContent = Array.from(document.querySelectorAll('td')).find(td => td.textContent.trim().startsWith('789'));
    let Ean = EanContent.textContent;

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
            <li>Ean: <span id="EanCopy">${Ean}</span></li>
            </ul>

            `
        )

        //Função para que copie para o clipboard ao clicar no span
        //Encurtar Isso em uma função só

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

          const EanCopy = document.querySelector("#EanCopy");
          EanCopy.addEventListener("click", function() {
            const originalText = EanCopy.textContent;
            EanCopy.textContent = "Copiado";
            copyText(originalText);
            setTimeout(function() {
              EanCopy.textContent = originalText;
            }, 1000);
          });

}

Exten()