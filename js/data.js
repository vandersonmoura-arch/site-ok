const defaultData = {
    nome: "Vanderson Alves",
    frase: "Sua frase aqui",
    sobre: "Seu texto sobre você aqui.",
    foto: "/profile.jpg" // imagem padrão
};

export function getProjectData() {
    const saved = localStorage.getItem("projectData");
    return saved ? JSON.parse(saved) : defaultData;
}

export function saveProjectData(data) {
    localStorage.setItem("projectData", JSON.stringify(data));
}