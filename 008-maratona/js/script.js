// Exercício 4 - Confeitaria
function filtrarSaboresDisponiveis(sabores, letra) {
  return sabores.filter((sabor) => 
    sabor.toLowerCase().startsWith(letra.toLowerCase())
  );
}

const meusSabores = [
  "Brigadeiro", 
  "Beijinho", 
  "Cajuzinho",
  "Morango",
  "Prestígio",
  "Maracujá",
  "Nutella", 
  "Doce de Leite", 
  "Bicho de Pé", 
  "Churros"
];

console.log("Exercício 4 - Confeitaria");

const resultadoB = filtrarSaboresDisponiveis(meusSabores, "B");
console.log("Sabores com a letra 'B':", resultadoB);

const resultadoC = filtrarSaboresDisponiveis(meusSabores, "C");
console.log("Sabores com a letra 'C':", resultadoC);

const resultadoZ = filtrarSaboresDisponiveis(meusSabores, "Z");
console.log("Todos os Sabores:", meusSabores);
console.log("\n");

// Exercício 6 - Ateliê de Costura
const pedidosAtelie = [
  {
    "cliente": {
      "nome": "Mariana Souza",
      "telefone": "(11) 98888-7777"
    },
    "peca": "Vestido",
    "medidas_cm": {
      "busto": 92,
      "cintura": 74,
      "quadril": 102
    },
    "tecido": "Algodão",
    "prazo_dias": 15,
    "status": "em produção"
  },
  {
    "cliente": {
      "nome": "Tom",
      "telefone": "(21) 97777-6666"
    },
    "peca": "Camisa Social",
    "medidas_cm": {
      "busto": 105,
      "cintura": 98,
      "quadril": 108
    },
    "tecido": "Poliester",
    "prazo_dias": 10,
    "status": "recebido"
  }
]

console.log("Exercício 6 - Ateliê de Costura");

console.log("--- Lista de Pedidos ---");
console.log(pedidosAtelie);

console.log(JSON.stringify(pedidosAtelie, null, 2));

console.log(`Medidas de ${pedidosAtelie[1].cliente.nome}:`, pedidosAtelie[1].medidas_cm);
console.log("\n");

// Exercício 7 - Bolo de Pote
const pedidoBolo = {
  promocaoativa: true,
  descontopercentual: 10,
  catalogo: [
    {
      nome: "Ninho com Nutella",
      preco: "15.00 R$",
      contemlactose: true,
      ingredientes: ["Leite Ninho", "Nutella", "Creme de leite", "Bolo de chocolate"]
    },
    {
      nome: "Morango com Chantilly",
      preco: "12.50 R$",
      contemlactose: true,
      ingredientes: ["Morangos frescos", "Chantilly", "Pão de ló de baunilha"]
    },
    {
      nome: "Prestígio",
      preco: "14,00 R$",
      contemlactose: false,
      ingredientes: ["Leite de coco", "Coco ralado", "Brigadeiro"]
    }
  ]
};
console.log("Exercício 7 - Bolo de Pote");
console.log("--- Catálogo Completo ---");
console.log(pedidoBolo);

console.table(pedidoBolo.catalogo);
console.log("\n");