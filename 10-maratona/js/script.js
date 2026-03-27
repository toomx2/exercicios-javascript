//Exercício 1 - Classe (Psicólogo)
class Psicologo {
    constructor(nome, valorSessao) {
        this.nome = nome;
        this.valorSessao = valorSessao;
    }

    //método
    calcularFaturamento(qtdSessoes) {
        return this.valorSessao * qtdSessoes;
    }
}

//instância
const drpsicologo = new Psicologo ("Thomas", 150);

//cálculo
const sessoes = 30;
const total = drpsicologo.calcularFaturamento(sessoes);

console.log(`Doutor: ${drpsicologo.nome}`);
console.log(`Valor por sessão: ${drpsicologo.valorSessao}`);
console.log(`Faturamento para ${sessoes} sessões: R$ ${total.toFixed(2)}`);
console.log(`\n`);

//Exercício 2 - Herança (Ateliê de Costura)
// Classe Pai
class Servico {
    constructor(tipo, valor) {
        this.tipo = tipo;
        this.valor = valor;
    }
 
    descricao() {
        return `Serviço: ${this.tipo} | Valor: R$ ${this.valor}`;
    }
}
 
// Classe Filha que herda de Servico
class Costura extends Servico {
    constructor(tipo, valor, prazoDias) {
        super(tipo, valor); // Chama o construtor da classe pai
        this.prazoDias = prazoDias;
    }
 
    // Método para exibir todas as informações
    exibirInformacoes() {
        console.log(this.descricao());
        console.log(`Prazo de entrega: ${this.prazoDias} dias`);
    }
}
 
// Criando o objeto e mostrando as informações
const meuServico = new Costura("Ajuste de Barra", 40, 3);
meuServico.exibirInformacoes();