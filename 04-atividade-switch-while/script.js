//Exercício 1
/*Uma empreendedora vende bolos de pote nos sabores:
-Chocolate
-Morango
-Leite Ninho
 
Crie um programa que receba o número do sabor e mostre o sabor
escolhido utilizando switch, considere que o cliente escolheu a opção 2*/

let sabores = "morango";

switch (sabores) {
    case "morango":
        console.log("Temos do sabor morango, vamos separar para você!");
        break;
    case "chocolate":
        console.log("Não temos de morango, mas temos de chocolate, se quiser");
        break;
    default:
        console.log("Não temos desses sabores, mas temos um bolo de leite ninho, muito bom")
}
console.log("\n");

//Exercício 02
/*Uma confeitaria precisa produzir 5 bolos para uma encomenda.
 
Crie um programa que utilize while para mostrar no console a
produção de bolo até completar os 5. */

let b = 1;

while (b <= 5) {
    console.log(b)
    b = b + 1;
}
console.log("\n");

//Exercício 3 - Ateliê de Costura (Switch - Tipo de Serviço)
/* Um ateliê oferece os seguintes serviços:

1 - Ajuste de barra
2 - Reforma de vestido
3 - Confecção sob medida

Utilize switch para exibir o serviço escolhido.
Considere que o cliente escolheu a opção 3. */

let opcao = 3; // Escolha do cliente

switch (opcao) {
    case 1:
        console.log("Serviço escolhido: Ajuste de barra");
        break;
    case 2:
        console.log("Serviço escolhido: Reforma de vestido");
        break;
    case 3:
        console.log("Serviço escolhido: Confecção sob medida");
        break;
    default:
        console.log("Opção inválida. Por favor, escolha de 1 a 3.");
}
console.log("\n");

// Exercício 4 - Psicólogo (While - Sessões Realizadas)
/* Um psicólogo realizou 4 sessões no dia.

Crie um programa utilizando while para exibir cada sessão realizada até completar as 4 sessões. */

let sessao = 1; // Inicialização: Começamos na primeira sessão

while (sessao <= 4) { // Condição: Enquanto a sessão for menor ou igual a 4
    console.log(`Sessão nº ${sessao} realizada com sucesso.`);

    sessao++;
}
console.log("Dia de trabalho finalizado.");