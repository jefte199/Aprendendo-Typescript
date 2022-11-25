class Produto {
  price: number;
  constructor (price: number) {
    this.price = price;
  }

  newPrice () {
    return `My book ${this.price}`
  }
}

class Autor extends Produto {
  name: string;
  constructor(name: string, price: number) {
    super(price)
    this.name = name
  }

  extra () {
    return `${this.name} ${this.price}`
  }
}

const livro = new Autor("Hobit", 300);

console.log(livro.newPrice())
console.log(livro.extra())

const link = document.getElementById('origamid');
if(link instanceof HTMLAnchorElement) {
  link.href = link.href.replace("http://", "https://")
}