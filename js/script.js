// ===== TEMA CLARO/ESCURO =====
document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  
  // Verificar preferência salva
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    body.classList.add('light-theme');
  }
  
  // Alternar tema ao clicar no botão
  themeToggle.addEventListener('click', function() {
    body.classList.toggle('light-theme');
    
    // Salvar preferência
    if (body.classList.contains('light-theme')) {
      localStorage.setItem('theme', 'light');
    } else {
      localStorage.setItem('theme', 'dark');
    }
  });
  
  // Smooth scroll para links internos (seu código existente)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});