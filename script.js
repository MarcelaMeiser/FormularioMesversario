function baixarRespostas() {
    const usuario = new URLSearchParams(window.location.search).get('usuario'); // Captura o nome do usuário a partir da URL
    const respostas = [];
    
    for (let i = 0; i < 10; i++) { // Total de 10 perguntas
        const resposta = document.getElementById(`resposta_${i}`).value || "Resposta não dada.";
        respostas.push(`Pergunta ${i + 1}: ${resposta}`);
    }

    // Cria um blob com as respostas
    const blob = new Blob([respostas.join("\n")], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${usuario}_respostas.txt`; // Nome do arquivo
    link.click(); // Aciona o download

    // Limpa o formulário após o download
    document.getElementById("formulario").reset();
}