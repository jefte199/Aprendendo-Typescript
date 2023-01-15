export interface ReturnAPI {
  "Cliente Novo": number;
  Data: string;
  Email: string;
  "Forma de Pagamento": string;
  ID: number;
  Nome: string
  Status: string
  "Valor (R$)": string
}

export interface Returnfunction {
  cont: number;
  numCard: number;
  numBoleto: number;
  pay: number;
}
