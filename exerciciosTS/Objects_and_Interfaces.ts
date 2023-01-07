// 1 - Crie uma interface UserData para o formulário abaixo
// 2 - Crie uma variável global UserData no window, ela será um objeto qualquer
// 3 - Adicione um evento de keyup ao formulário
// 4 - Quando o evento ocorrer adicione a {[id]: value} ao UserData
// 5 - Salve UserData no localStorage
// 6 - Crie uma User Type Guard, para verificar se o valor de localStorage é compatível com UserData
// 7 - Ao refresh da página, preencha os valores de localStorage (caso seja UserData) no formulário e em window.UserData

interface UserData {
  nome?: string,
  email?: string,
  cpf?: string,
}

interface Window {
  UserData: any;
}

window.UserData = {};

function isUserData(obj: unknown): obj is UserData {
  if (
    obj &&
    typeof obj === "object" &&
    ("nome" in obj || "email" in obj || "cpf" in obj)
    ) {
      return true;
    } else {
      return false;
    }
}

function isJSON (userData: string) {
  try {
    JSON.parse(userData)
  } catch (e) {
    return false
  }
  return true
}

function loadLocal () {
  let userData = localStorage.getItem('userData');
  if (userData && isJSON(userData)) {
    let objData = JSON.parse(userData).length
    if (isUserData(objData)) {
      let objData = JSON.parse(userData).length
      for (let i = 0; i < objData.length; i++) {
        const input = document.querySelector(`${i}`);
        if (input instanceof HTMLInputElement){
          input.value = objData[i];
        }
      }
    }
  }
}

function handleInput ({ target } : KeyboardEvent) {
  if (target instanceof HTMLInputElement) {
    window.UserData[target.id] = target.value;
    localStorage.setItem('userData', JSON.stringify(window.UserData));
  }
}

loadLocal()

const formElement = document.querySelector<HTMLElement>("#form");
formElement?.addEventListener("keyup", handleInput);