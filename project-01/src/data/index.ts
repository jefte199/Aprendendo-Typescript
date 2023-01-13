import { ReturnAPI } from '../types';

export default async function sum(data: ReturnAPI[]) {
  let contFloat = 0;
  let numCard = 0;
  let numBoleto = 0;
  data.map((item: ReturnAPI) => {
    const value = item['Valor (R$)'].split(',');
    if (value[0] !== '-') {
      contFloat = contFloat + parseFloat(item['Valor (R$)'])
    }
    if (item['Forma de Pagamento'] === "Cartão de Crédito") {
      numCard = numCard + 1;
    } else if (item['Forma de Pagamento'] === "Boleto") { 
      numBoleto = numBoleto + 1;
     }
  })
  return { 
    contFloat: contFloat,
    numCard: numCard,
    numBoleto: numBoleto
  }
}

/*
  "Cliente Novo": number;
  Data: string;
  Email: string;
  "Forma de Pagamento": string;
  ID: number;
  Nome: string
  Status: string
  "Valor (R$)": string

export async function Tpay(data: ReturnAPI[]) {
  let contF = 0.0;
  data.map((item: ReturnAPI) => {
    const value = item['Valor (R$)'].split(','); 
    if (value[0] !== '-') {
      contF = contF + parseFloat(item['Valor (R$)'])
    }
  })
  return contF
}
*/