"use strict";
async function fetchProduct() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    const data = await response.json();
    showProduct(data);
}
fetchProduct();
function showProduct(data) {
    const div = document.querySelector('.mydiv');
    div && data.nome ? div.innerHTML = `
    <h2>${data.nome}</h2>
    <p>${data.preco}</p>
  `
        :
            `
  <h2>Erro</h2>
  <p>Erro</p>
  `;
}
