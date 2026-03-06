// Exercício 01
// Produção de 10 bolos de pote
 
for (let i = 1; i <= 10; i++) {
    console.log("Bolo de pote número " + i + " produzido");
}
console.log("\n");
 
// Exercício 02
// Lista de sabores
 
let sabores = ["Chocolate", "Morango", "Baunilha", "Red Velvet"];
 
sabores.forEach(function(sabor) {
    console.log("Sabor disponível: " + sabor);
});
console.log("\n");

// Exercício 3 - Ateliê de Costura (for - Cálculo de Faturamento)

let faturamentoTotal = 0;
const valorPorServico = 200;

for (let i = 1; i <= 5; i++) {
  faturamentoTotal += valorPorServico;
  console.log(`Serviço nº ${i} processado. Faturamento parcial: R$ ${faturamentoTotal}`);
}

console.log("----------------------------");
console.log(`Faturamento total do dia: R$ ${faturamentoTotal}`);
console.log("\n");


// Exercício 4 - Psicólogo (forEach e Array - Lista de Pacientes)

const pacientes = ["Ana", "Carlos", "Juliana", "Pedro"];

console.log("Relatório de Atendimentos do Dia:");
console.log("---------------------------------");

pacientes.forEach(function(nome) {
  
  console.log("Paciente atendido(a): " + nome);
});