// Espera o DOM ser carregado
document.addEventListener("DOMContentLoaded", function () {
    // Elementos do quiz
    const form = document.getElementById("quiz-form");
    const resultado = document.getElementById("resultado");

    // Função para processar as respostas
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita o envio do formulário

        // Respostas corretas
        const respostasCorretas = {
            q1: "Miles Morales",
            q2: "invisibilidade",
            q3: "Spider-Ham"
        };

        // Pegando as respostas do usuário
        const respostaQ1 = document.getElementById("q1").value.trim();
        const respostaQ2 = document.getElementById("q2").value.trim();
        const respostaQ3 = document.getElementById("q3").value.trim();

        // Variável para armazenar o número de respostas corretas
        let acertos = 0;

        // Checando as respostas
        if (respostaQ1.toLowerCase() === respostasCorretas.q1.toLowerCase()) acertos++;
        if (respostaQ2.toLowerCase().includes(respostasCorretas.q2.toLowerCase())) acertos++;
        if (respostaQ3.toLowerCase() === respostasCorretas.q3.toLowerCase()) acertos++;

        // Exibindo o resultado
        resultado.innerHTML = <p>Você acertou ${acertos} de 3 perguntas!</p>;
        
        // Feedback das respostas
        if (acertos === 3) {
            resultado.style.color = "green";
        } else if (acertos === 0) {
            resultado.style.color = "red";
        } else {
            resultado.style.color = "orange";
        }
    });
});