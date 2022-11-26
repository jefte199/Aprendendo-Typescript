const tagLink = document.querySelectorAll('.tagLink');

const AtivarElement = (element: HTMLElement) => {
  element.style.background = "DodgerBlue";
  element.style.color = '2px solid DodgerBlue';
}


tagLink.forEach(element => {
  if(element instanceof HTMLElement) {
    AtivarElement(element)
  }
})