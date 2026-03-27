//Exercício 1 – Psicólogo
 
function avaliarSessao(nomePaciente, quantidadeSessoes){
 console.log("Paciente",nomePaciente);
 if(quantidadeSessoes >= 10){
    return true
 }else{
    return false
 }
}
 
let resultado1 = avaliarSessao("Maria", 12);
console.log("Pode receber alta", resultado1);
 
let resultado2 = avaliarSessao("Maria", 5);
console.log("Não pode receber alta", resultado2);

//Exercicio 2 - Bolo de pote
 
const calcularValorPedido = (quantidadeBolos, valorUnitario) => {
    let total = quantidadeBolos * valorUnitario;
 
    if (quantidadeBolos >= 10) {
        total = total * 0.9;
    }
 
    return total;
};

//exercicio 3- Atelie
function listarMateriais(materiais){
    console.log(materiais.length);
    let novoMaterial = materiais.map(material => material.toUpperCase());
    return novoMaterial;
}
let materiais = ["tinta" , "pinceis", "tecidos"];
let resultado = listarMateriais(materiais);
console.log("Materiais em maiúsculas:", resultado);

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
const resultadoC = filtrarSaboresDisponiveis(meusSabores, "C");
const resultadoZ = filtrarSaboresDisponiveis(meusSabores, "Z");
console.log("\n");

//Exercício 5 – Psicólogo JSON - INVALIDO
 
 
const cadastroPaciente = `{
 
"nomeCompleto": "Ana Silva",
  "idade": 28,
  "planoDeSaude": true,
  "queixasPrincipais": ["dor nas costas", "insônia", "estresse"],
  "ultimaSessao": {
   data: new Date().toISOString(),
    "escalaHumor": 7,
    "prescricaoAtividade": true
   
}`;

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

// Exercício 8 - Confeitaria
const pedido = {
  "identificadorPedido": "00001",
  "dataPedido": "2026-03-23 11:45:14",
  "cliente": {
    "nome": "Mariana Silva",
    "email": "mariana.silva@email.com"
  },
  "itens": [
    {
      "produto": "Bolo Brigadeiro",
      "quantidade": 1,
      "observacoes": "Escrever 'Parabéns'"
    },
    {
      "produto": "Bolo Maracujá",
      "quantidade": 12,
      "observacoes": "Embalar para presente."
    }
  ],
  "enderecoEntrega": {
    "rua": "Avenida das Tulipas",
    "numero": "1540",
    "bairro": "Jardim das Flores",
    "cidade": "São Paulo",
    "cep": "04578-000"
  },
  "formaPagamento": "pix",
  "totalCalculado": 185.50
};

console.log("Exercício 8 - Confeitaria");
console.log("Pedido Recebido:", pedido);

console.log(JSON.stringify(pedido, null, 2));