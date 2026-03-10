// Dados simulados
const meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'];
const clientes = [850, 920, 1050, 1150, 1250, 1350];
const segmentos = ['Segmento A', 'Segmento B', 'Segmento C', 'Segmento D'];
const segmentosDados = [45, 25, 20, 10];
const conversao = [18, 21, 23, 24, 25, 26];

document.addEventListener('DOMContentLoaded', function() {
    criarGraficos();
});

function criarGraficos() {
    // Gráfico de Linha - Crescimento
    const ctxLinha = document.getElementById('graficoLinha');
    if (ctxLinha) {
        new Chart(ctxLinha, {
            type: 'line',
            data: {
                labels: meses,
                datasets: [{
                    label: 'Número de Clientes',
                    data: clientes,
                    borderColor: '#FBBF24',
                    backgroundColor: 'rgba(251, 191, 36, 0.1)',
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: { color: 'rgba(255, 255, 255, 0.1)' },
                        ticks: { color: '#FCD34D' }
                    },
                    x: {
                        ticks: { color: '#FCD34D' }
                    }
                }
            }
        });
    }

    // Gráfico de Pizza - Segmentos
    const ctxPizza = document.getElementById('graficoPizza');
    if (ctxPizza) {
        new Chart(ctxPizza, {
            type: 'pie',
            data: {
                labels: segmentos,
                datasets: [{
                    data: segmentosDados,
                    backgroundColor: ['#FBBF24', '#F59E0B', '#10B981', '#3B82F6'],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: { color: '#FCD34D' }
                    },
                    tooltip: {
                        callbacks: {
                            label: (ctx) => `${ctx.label}: ${ctx.raw}%`
                        }
                    }
                }
            }
        });
    }

    // Gráfico de Barras - Conversão
    const ctxBarras = document.getElementById('graficoBarras');
    if (ctxBarras) {
        new Chart(ctxBarras, {
            type: 'bar',
            data: {
                labels: meses,
                datasets: [{
                    label: 'Taxa de Conversão (%)',
                    data: conversao,
                    backgroundColor: '#FBBF24',
                    borderRadius: 5
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: { color: 'rgba(255, 255, 255, 0.1)' },
                        ticks: {
                            callback: (value) => value + '%',
                            color: '#FCD34D'
                        }
                    },
                    x: {
                        ticks: { color: '#FCD34D' }
                    }
                }
            }
        });
    }
}