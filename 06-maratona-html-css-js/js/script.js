for (let i = 1; i <= 10; i++) {

    console.log("Bolo de pote número " + i + " produzido");

}
const botaoReset = document.getElementById('btn-reset');
const botao = document.getElementById('btnCalcular');
const container = document.getElementById('lista-producao');
const statusTexto = document.getElementById('status');

// Botão de resetar o relatório
botaoReset.addEventListener('click', function() {
    
    container.innerHTML = ''; 

    statusTexto.innerText = "Aguardando produção...";
    statusTexto.style.color = "#5d3a3a";
    
    console.log("Processo resetado!");
});

// Botão de Calcular
botao.addEventListener('click', function() {
    
    container.innerHTML = "";

    for (let i = 1; i <= 10; i++) {
        
        const item = document.createElement('div');
        item.className = 'item-bolo';
        
        item.innerHTML = `<strong>🍰 Bolo nº ${i}</strong><br>Status: Finalizado`;
        
        container.appendChild(item);
    }

    statusTexto.innerText = "Produção Finalizada! ✅";
    statusTexto.style.color = "#2e7d32";
});