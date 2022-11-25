"use strict";
function showProduct(data) {
    const div = document.querySelector('.mydiv');
    div ? data.forEach(returnAPI => {
        const color = returnAPI.nivel === "iniciante" ? "tomato" : "DodgerBlue";
        div.innerHTML += `
    <h2 style="background-color:${color};">${returnAPI.nome}</h2>
    <p>Horas: ${returnAPI.horas}</p>
    <p>Preco Aulas: ${returnAPI.aulas} R$</p>
    <p>De forma gratuita: ${returnAPI.gratuito}</p>
    <p>tags: ${returnAPI.tags.join(", ")}</p>
    <p>Aulas: ${returnAPI.idAulas.join(", ")}</p>
     `;
    })
        : "";
}
async function fetchProduct() {
    const response = await fetch('https://api.origamid.dev/json/cursos.json');
    const data = await response.json();
    data.forEach(function (element) {
        element.idAulas.forEach(function (ele) {
            console.log(ele);
        });
    });
    showProduct(data);
}
fetchProduct();
