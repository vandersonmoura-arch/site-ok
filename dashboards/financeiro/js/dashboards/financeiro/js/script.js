// Dados simulados para o dashboard financeiro
const meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
const receitas = [45000, 52000, 48000, 53000, 58000, 62000, 65000, 68000, 72000, 75000, 78000, 82000];
const despesas = [32000, 35000, 33000, 36000, 38000, 40000, 42000, 43000, 45000, 47000, 49000, 51000];

// Calcular totais
const receitaTotal = receitas.reduce((a, b) => a + b, 0);
const despesasTotal = despesas.reduce((a, b) => a + b, 0);
const lucroTotal = receitaTotal - despesasTotal;
const margem = ((lucroTotal / receitaTotal) * 100).toFixed(1);

// Atualizar valores na tela quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    // Atualizar cards se eles existirem (opcional)
    const receitaEl = document.getElementById('receita-total');
    if (receitaEl) receitaEl.textContent = `R$ ${receitaTotal.toLocaleString()}`;
    
    // Criar gráficos
    criarGraficos();
});

function criarGraficos() {
    // Gráfico de Linha
    const ctxLinha = document.getElementById('graficoLinha');
    if (ctxLinha) {
        new Chart(ctxLinha, {
            type: 'line',
            data: {
                labels: meses.slice(0, 6),
                datasets: [
                    {
                        label: 'Receitas',
                        data: receitas.slice(0, 6),
                        borderColor: '#FBBF24',
                        backgroundColor: 'rgba(251, 191, 36, 0.1)',
                        tension: 0.4
                    },
                    {
                        label: 'Despesas',
                        data: despesas.slice(0, 6),
                        borderColor: '#EF4444',
                        backgroundColor: 'rgba(239, 68, 68, 0.1)',
                        tension: 0.4
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: { legend: { position: 'top' } }
            }
        });
    }

    // Gráfico de Barras
    const ctxBarras = document.getElementById('graficoBarras');
    if (ctxBarras) {
        new Chart(ctxBarras, {
            type: 'bar',
            data: {
                labels: meses.slice(0, 6),
                datasets: [
                    {
                        label: 'Receitas',
                        data: receitas.slice(0, 6),
                        backgroundColor: '#FBBF24',
                    },
                    {
                        label: 'Despesas',
                        data: despesas.slice(0, 6),
                        backgroundColor: '#EF4444',
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: { legend: { position: 'top' } }
            }
        });
    }
}