// DashboardFinanceiro.jsx
import React, { useState, useEffect } from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const DashboardFinanceiro = () => {
  const [periodo, setPeriodo] = useState('mensal');
  const [dados, setDados] = useState(null);

  // Dados simulados (você substituirá pela sua API)
  useEffect(() => {
    // Aqui você faria fetch dos dados reais
    setDados({
      receitas: [45000, 52000, 48000, 53000, 58000, 62000],
      despesas: [32000, 35000, 33000, 36000, 38000, 40000],
      lucro: [13000, 17000, 15000, 17000, 20000, 22000],
      meses: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun']
    });
  }, [periodo]);

  if (!dados) return <div>Carregando...</div>;

  // Gráfico de Linha - Evolução
  const linhaData = {
    labels: dados.meses,
    datasets: [
      {
        label: 'Receitas',
        data: dados.receitas,
        borderColor: '#FBBF24',
        backgroundColor: 'rgba(251, 191, 36, 0.1)',
        tension: 0.4
      },
      {
        label: 'Despesas',
        data: dados.despesas,
        borderColor: '#EF4444',
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        tension: 0.4
      },
      {
        label: 'Lucro',
        data: dados.lucro,
        borderColor: '#10B981',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        tension: 0.4
      }
    ]
  };

  // Gráfico de Barras - Comparativo
  const barraData = {
    labels: dados.meses,
    datasets: [
      {
        label: 'Receitas',
        data: dados.receitas,
        backgroundColor: '#FBBF24',
      },
      {
        label: 'Despesas',
        data: dados.despesas,
        backgroundColor: '#EF4444',
      }
    ]
  };

  // Gráfico de Pizza - Distribuição de Despesas
  const pizzaData = {
    labels: ['Pessoal', 'Operacional', 'Marketing', 'Tecnologia', 'Outros'],
    datasets: [{
      data: [35, 25, 20, 15, 5],
      backgroundColor: ['#FBBF24', '#F59E0B', '#10B981', '#3B82F6', '#8B5CF6']
    }]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: false }
    }
  };

  return (
    <div className="dashboard-financeiro">
      <div className="dashboard-header">
        <h2>Dashboard Financeiro</h2>
        <select value={periodo} onChange={(e) => setPeriodo(e.target.value)}>
          <option value="mensal">Mensal</option>
          <option value="trimestral">Trimestral</option>
          <option value="anual">Anual</option>
        </select>
      </div>

      {/* Cards de KPIs */}
      <div className="kpi-grid">
        <div className="kpi-card">
          <span className="kpi-label">Receita Total</span>
          <span className="kpi-value">R$ 318.000</span>
          <span className="kpi-trend positivo">+12.5%</span>
        </div>
        <div className="kpi-card">
          <span className="kpi-label">Despesas</span>
          <span className="kpi-value">R$ 214.000</span>
          <span className="kpi-trend negativo">-8.3%</span>
        </div>
        <div className="kpi-card">
          <span className="kpi-label">Lucro Líquido</span>
          <span className="kpi-value">R$ 104.000</span>
          <span className="kpi-trend positivo">+18.2%</span>
        </div>
        <div className="kpi-card">
          <span className="kpi-label">Margem</span>
          <span className="kpi-value">32.7%</span>
          <span className="kpi-trend positivo">+5.1%</span>
        </div>
      </div>

      {/* Gráficos */}
      <div className="graficos-grid">
        <div className="grafico-card">
          <h3>Evolução Financeira</h3>
          <Line data={linhaData} options={options} />
        </div>
        
        <div className="grafico-card">
          <h3>Receitas vs Despesas</h3>
          <Bar data={barraData} options={options} />
        </div>
        
        <div className="grafico-card">
          <h3>Distribuição de Despesas</h3>
          <Pie data={pizzaData} />
        </div>
      </div>
    </div>
  );
};

export default DashboardFinanceiro;