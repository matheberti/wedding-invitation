// Definir a data alvo para a contagem regressiva
const targetDate = new Date("2026-01-30T19:00:00").getTime();

// Atualizar a contagem regressiva a cada 1 segundo
const countdown = setInterval(function() {

    // Obter a data e hora atual
    const now = new Date().getTime();

    // Calcular a diferença entre a data alvo e a data atual
    const distance = targetDate - now;

    // Calcular dias, horas, minutos e segundos
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Exibir a contagem regressiva no HTML
    document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // Se a contagem regressiva terminar, mostrar uma mensagem
    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("timer").innerHTML = "A contagem regressiva terminou!";
    }

}, 1000);
