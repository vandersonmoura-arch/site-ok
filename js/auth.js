const userFix = "admin";
const passFix = "admin123";

export function checkAuth() {
    // Verifica se existe o "token" de logado no LocalStorage
    return localStorage.getItem('isLogged') === 'true';
}

document.getElementById('btn-login')?.addEventListener('click', () => {
    const u = document.getElementById('user').value;
    const p = document.getElementById('pass').value;

    if(u === userFix && p === passFix) {
        localStorage.setItem('isLogged', 'true');
        location.reload(); // Recarrega para mostrar o painel
    } else {
        alert("Dados incorretos!");
    }
});