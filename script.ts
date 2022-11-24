async function fetchProduct() {
  const response = await fetch('https://api.origamid.dev/json/notebook.json');
  const data = await response.json();
  showProduct(data);
}

fetchProduct();

interface Fabricante {
  nome: string;
  fundacao: number;
  pais: String
}

interface ReturnAPI {
  nome: string;
  preco: number;
  descricao: string;
  garantia: number;
  seguroAcidentes: boolean;
  empresaFabricante: Fabricante; 
  empresaMontadora: Fabricante;
}

function showProduct(data: ReturnAPI) {
  const div = document.querySelector('.mydiv')
  div && data.nome ? div.innerHTML = `
    <h2>${data.nome}</h2>
    <p>${data.preco}</p>
  `
  : 
  `
  <h2>Erro</h2>
  <p>Erro</p>
  `
}
