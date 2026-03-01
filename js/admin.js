import { checkAuth } from './auth.js';
import { getProjectData, saveProjectData } from './data.js';

const loginSection = document.getElementById('login-section');
const adminPanel = document.getElementById('admin-panel');

// Se estiver logado, esconde o login e mostra o painel
if (checkAuth()) {
    loginSection.style.display = 'none';
    adminPanel.style.display = 'block';

    // Preenche o formulário com os dados atuais
    const data = getProjectData();
    document.getElementById('edit-nome').value = data.nome;
    document.getElementById('edit-frase').value = data.frase;
    document.getElementById('edit-sobre').value = data.sobre;

    // Lógica para Salvar
    document.getElementById('btn-save').addEventListener('click', () => {
        const updatedData = {
            nome: document.getElementById('edit-nome').value,
            frase: document.getElementById('edit-frase').value,
            sobre: document.getElementById('edit-sobre').value,
            foto: data.foto // Mantém a foto atual por enquanto
        };

        // Lógica simples para upload de imagem em Base64
        const fileInput = document.getElementById('edit-foto');
        if (fileInput.files[0]) {
            const reader = new FileReader();
            reader.onload = function(e) {
                updatedData.foto = e.target.result;
                saveProjectData(updatedData);
                alert("Salvo com sucesso!");
            };
            reader.readAsDataURL(fileInput.files[0]);
        } else {
            saveProjectData(updatedData);
            alert("Texto salvo!");
        }
    });
}

document.getElementById('btn-logout')?.addEventListener('click', () => {
    localStorage.removeItem('isLogged');
    location.reload();
});