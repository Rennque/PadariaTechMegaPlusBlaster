class Padaria {
  constructor() {}
  addEstoque(newEstoque, produto) {
    localStorage.setItem(newEstoque, produto);
  }
  Compra(item, nome) {
    if (item == localStorage.getItem(nome)) {
      localStorage.removeItem(nome);
    } else {
      return console.log(`Nome do item não existe`);
    }
  }
}

const Surf = new Padaria();

console.log(Surf.addEstoque("Pão", "Salgadinho"));
console.log(Surf.addEstoque("Bolo", "Doce"));
console.log(Surf.Compra("Salgadinho", "Doce"));
