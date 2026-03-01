/**
 * js/data.js
 * Este arquivo funciona como o nosso "Banco de Dados".
 * Ele decide o que mostrar na tela e salva as alterações.
 */

// 1. Dados Iniciais: Se o usuário nunca entrou no site, ele verá isso aqui:
const defaultData = {
    nome: "Vanderson Alves",
    frase: "Transformando ideias em soluções com IA e tecnologia.",
    sobre: "Vanderson Alves é um entusiasta da tecnologia que utiliza ferramentas modernas, incluindo Inteligência Artificial, para transformar ideias em soluções simples e eficientes.",
    foto: "assets/profile.jpg" // Caminho para a imagem padrão
};

// 2. Função para BUSCAR os dados:
// Ela olha no LocalStorage. Se estiver vazio, usa o defaultData acima.
export function getProjectData() {
    const data = localStorage.getItem('siteData');
    return data ? JSON.parse(data) : defaultData;
}

// 3. Função para SALVAR os dados:
// Ela pega os novos textos/fotos e guarda no navegador como uma String.
export function saveProjectData(newData) {
    localStorage.setItem('siteData', JSON.stringify(newData));
}