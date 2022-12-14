interface ReturnAPI {
  nome: string;
  horas: number;
  aulas: string;
  gratuito: boolean;
  tags: string[];
  idAulas: number[];
  nivel: "iniciante" | "avancado";
}

function showProduct(data: ReturnAPI[]) {
  const div = document.querySelector('.mydiv')
  div ? data.forEach(returnAPI => {
    const color = returnAPI.nivel === "iniciante" ? "tomato":"DodgerBlue";
    div.innerHTML += `
    <h2 style="background-color:${color};">${returnAPI.nome}</h2>
    <p>Horas: ${returnAPI.horas}</p>
    <p>Preco Aulas: ${returnAPI.aulas} R$</p>
    <p>De forma gratuita: ${returnAPI.gratuito}</p>
    <p>tags: ${returnAPI.tags.join(", ")}</p>
    <p>Aulas: ${returnAPI.idAulas.join(", ")}</p>
     `
  })
  : ""
}

async function fetchProduct() {
  const response = await fetch('https://api.origamid.dev/json/cursos.json');
  const data = await response.json();
  data.forEach(function (element: ReturnAPI) {
    element.idAulas.forEach(function (ele: number) {
      console.log(ele);
    })
  });
  showProduct(data);
}

fetchProduct();
