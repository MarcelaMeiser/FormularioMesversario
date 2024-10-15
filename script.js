document.getElementById("salvarRespostas").addEventListener("click", function() {
    const respostas = {
        pergunta1: document.getElementById("pergunta1").value,
        pergunta2: document.getElementById("pergunta2").value,
        pergunta3: document.getElementById("pergunta3").value,
        pergunta4: document.getElementById("pergunta4").value,
        pergunta5: document.getElementById("pergunta5").value,
        pergunta6: document.getElementById("pergunta6").value,
        pergunta7: document.getElementById("pergunta7").value,
        pergunta8: document.getElementById("pergunta8").value,
        pergunta9: document.getElementById("pergunta9").value,
        pergunta10: document.getElementById("pergunta10").value
    };

    const usuario = new URLSearchParams(window.location.search).get('usuario');
    const respostasStr = JSON.stringify(respostas);

    localStorage.setItem(`respostas_${usuario}`, respostasStr);
    
    // Redireciona para a página de respostas
    window.location.href = `respostas.html?usuario=${usuario}`;
});
