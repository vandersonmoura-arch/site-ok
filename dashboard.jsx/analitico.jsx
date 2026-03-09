// DashboardAnalitico.jsx
import React, { useState } from 'react';
import { Line, Bar, Radar, Doughnut } from 'react-chartjs-2';

const DashboardAnalitico = () => {
  const [empresa, setEmpresa] = useState('empresa1');
  const [ano, setAno] = useState('2024');

  // Dados de exemplo para empresas
  const dadosEmpresas = {
    empresa1: {
      nome: 'Tech Solutions',
      metricas: {
        receita: [120, 135, 148, 162, 175, 190],
        clientes: [45, 52, 58, 63, 71, 82],
        nps: [72, 75, 78, 80, 82, 85],
        churn: [5.2, 4.8, 4.5, 4.1, 3.8, 3.5]
      }
    },
    empresa2: {
      nome: 'Data Analytics',
      metricas: {
        receita: [85, 92, 105, 118, 132, 150],
        clientes: [32, 38, 45, 52, 60, 70],
        nps: [68, 70, 73, 75, 78, 80],
        churn: [6.1, 5.7, 5.2, 4.8, 4.3, 4.0]
      }
    }
  };

  const dados = dadosEmpresas[empresa];
  const meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'];

  // Gráfico de Radar - Performance Multi-métrica
  const radarData = {
    labels: ['Receita', 'Clientes', 'NPS', 'Retenção', 'Eficiência', 'Crescimento'],
    datasets: [{
      label: dados.nome,
      data: [95, 82, 85, 78, 88, 92],
      backgroundColor: 'rgba(251, 191, 36, 0.2)',
      borderColor: '#FBBF24',
      pointBackgroundColor: '#FBBF24'
    }]
  };

  // Gráfico de Linha - Crescimento
  const linhaData = {
    labels: meses,
    datasets: [
      {
        label: 'Receita (R$ mil)',
        data: dados.metricas.receita,
        borderColor: '#FBBF24',
        backgroundColor: 'rgba(251, 191, 36, 0.1)',
      },
      {
        label: 'Clientes Ativos',
        data: dados.metricas.clientes,
        borderColor: '#10B981',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        yAxisID: 'y1'
      }
    ]
  };

  // Gráfico de Doughnut - Composição
  const doughnutData = {
    labels: ['Segmento A', 'Segmento B', 'Segmento C', 'Segmento D'],
    datasets: [{
      data: [45, 25, 20, 10],
      backgroundColor: ['#FBBF24', '#F59E0B', '#10B981', '#3B82F6']
    }]
  };

  return (
    <div className="dashboard-analitico">
      <div className="dashboard-header">
        <h2>Dashboard Analítico</h2>
        <div className="filtros">
          <select value={empresa} onChange={(e) => setEmpresa(e.target.value)}>
            <option value="empresa1">Tech Solutions</option>
            <option value="empresa2">Data Analytics</option>
          </select>
          <select value={ano} onChange={(e) => setAno(e.target.value)}>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
          </select>
        </div>
      </div>

      {/* Cards de Métricas */}
      <div className="metricas-grid">
        <div className="metrica-card">
          <h4>Receita</h4>
          <span className="metrica-valor">R$ 190k</span>
          <span className="metrica-trend">+8.6%</span>
        </div>
        <div className="metrica-card">
          <h4>Clientes</h4>
          <span className="metrica-valor">82</span>
          <span className="metrica-trend">+15.5%</span>
        </div>
        <div className="metrica-card">
          <h4>NPS</h4>
          <span className="metrica-valor">85</span>
          <span className="metrica-trend">+3</span>
        </div>
        <div className="metrica-card">
          <h4>Churn</h4>
          <span className="metrica-valor">3.5%</span>
          <span className="metrica-trend negativo">-0.3%</span>
        </div>
      </div>

      <div className="analitico-grid">
        <div className="grafico-card">
          <h3>Crescimento vs Clientes</h3>
          <Line data={linhaData} options={{
            scales: { y: { type: 'linear', position: 'left' }, y1: { type: 'linear', position: 'right' } }
          }} />
        </div>

        <div className="grafico-card">
          <h3>Performance Geral</h3>
          <Radar data={radarData} />
        </div>

        <div className="grafico-card">
          <h3>Distribuição por Segmento</h3>
          <Doughnut data={doughnutData} />
        </div>

        <div className="grafico-card">
          <h3>Insights Rápidos</h3>
          <div className="insights">
            <p>📈 Crescimento de 15.5% na base de clientes</p>
            <p>💰 Receita por cliente aumentou 12%</p>
            <p>🎯 Meta de NPS superada em 5 pontos</p>
            <p>⚠️ Segmento D com oportunidade de crescimento</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAnalitico;