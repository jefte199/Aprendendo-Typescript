/*
3 - Calcule:
*3.1 - Soma total dos valores
3.2 - Transações por meio de pagamento.
3.3 - Transações por status.
3.4 - Total de vendas por dia da semana.
3.5 - Dia da semana com mais vendas.
4 - Mostre as estatísticas na tela.
5 - Organize o código em pequenos módulos.
6 - Normalize os dados da API se achar necessário.
*/
import './style.css';
import { api } from './api';
import { ReturnAPI, Returnfunction } from './types';
import sum from './data';
const res = await api("https://api.origamid.dev/json/transacoes.json")
//console.log(res)
const returnFunction: Returnfunction = await sum(res);

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h2>Estatisticas</h2>
    <p>Total: ${returnFunction.cont}</p>
    <br />    
    <p>Cartão de credito: ${returnFunction.numCard}</p>
    <p>Boleto: ${returnFunction.numBoleto}</p>
    <br />    

    <h2>Dados</h2>

    <table>
      <tr>
        <th>Nome</th>
        <th>Email</th>
        <th>Compra</th>
        <th>Pagamento</th>
        <th>Status</th>
      </tr>

      ${res.map((item: ReturnAPI) => {
        return `
        <tr>
        <td>${item.Nome}</td>
        <td>${item.Email}</td>
        <td>${item['Valor (R$)']}</td>
        <td>${item['Forma de Pagamento']}</td>
        <td>${item.Status}</td>
        </tr>
          `
      })}
    </table>
  </div>
`

