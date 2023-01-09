import { ReturnAPI } from '../types';

export async function sum(data: ReturnAPI[]) {
  let contF = 0.0;
  data.map((item: ReturnAPI) => {
    const value = item['Valor (R$)'].split(','); 
    if (value[0] !== '-') {
      contF = contF + parseFloat(item['Valor (R$)'])
    }
  })
  return contF
}
