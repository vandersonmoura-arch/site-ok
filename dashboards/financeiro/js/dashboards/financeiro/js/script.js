// Dados simulados
const meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'];
const receitas = [45000, 52000, 48000, 53000, 58000, 62000];
const despesas = [32000, 35000, 33000, 36000, 38000, 40000];

// Gráfico de Linha
new Chart(document.getElementById('graficoLinha'), {
    type: 'line',
    data: {
        labels: meses,
        datasets: [
            {
                label: 'Receitas',
                data: receitas,
                borderColor: '#FBBF24',
                backgroundColor: 'rgba(251, 191, 36, 0.1)',
            },
            {
                label: 'Despesas',
                data: despesas,
                borderColor: '#EF4444',
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
            }
        ]
    }
});

// Gráfico de Barras
new Chart(document.getElementById('graficoBarras'), {
    type: 'bar',
    data: {
        labels: meses,
        datasets: [
            {
                label: 'Receitas',
                data: receitas,
                backgroundColor: '#FBBF24',
            },
            {
                label: 'Despesas',
                data: despesas,
                backgroundColor: '#EF4444',
            }
        ]
    }
});