// Aguarda o DOM carregar
document.addEventListener('DOMContentLoaded', function() {
    const chatMessages = document.getElementById('chatMessages');
    const userInput = document.getElementById('userInput');
    const sendButton = document.getElementById('sendButton');
    
    // Base de conhecimento do bot
    const knowledgeBase = {
        saudacoes: {
            triggers: ['oi', 'olá', 'hello', 'hi', 'boa tarde', 'bom dia', 'boa noite'],
            response: 'Olá! 😊 Como posso ajudar você hoje?'
        },
        servicos: {
            triggers: ['serviço', 'servicos', 'faz', 'cria', 'desenvolve', 'oferece', 'trabalho'],
            response: `📋 **Serviços que ofereço:**

• **Landing Pages** - Páginas otimizadas para conversão
• **Painéis Administrativos** - Sistemas com login e gestão
• **Dashboards Analíticos** - Visualização de dados e KPIs

Todos os projetos são responsivos e com design moderno!`
        },
        projetos: {
            triggers: ['projeto', 'projetos', 'portfolio', 'trabalhos', 'criou'],
            response: `🚀 **Meus principais projetos:**

• **Dashboard Financeiro** - Receitas, despesas e lucro em tempo real
• **Dashboard Analítico** - KPIs e métricas personalizáveis
• **Chatbot IA** - Assistente virtual (você está usando ele!)
• **Imobiliária Premium** - Site com filtro de imóveis
• **Dashboard Vendas** - Performance e métricas de vendas
• **Landing Painel** - Sistema com login e gestão
• **Pão & Cia** - Site institucional para padaria (cliente real)

Qual deles você gostaria de conhecer melhor?`
        },
        contato: {
            triggers: ['contato', 'falar', 'whatsapp', 'email', 'telefone', 'celular', 'ligar', 'zap'],
            response: `📱 **Meus contatos:**

• **WhatsApp:** (19) 99981-5263
• **Email:** vandersonmoura@icloud.com
• **LinkedIn:** /in/vanderson-alves
• **GitHub:** /vandersonmoura-arch

Fique à vontade para me chamar! 💬`
        },
        tecnologias: {
            triggers: ['tecnologia', 'tecnologias', 'stack', 'linguagem', 'framework', 'ferramenta', 'usa', 'utiliza'],
            response: `💻 **Tecnologias que utilizo:**

• **Frontend:** HTML5, CSS3, JavaScript, React
• **Estilização:** Tailwind CSS, Styled Components
• **Backend:** Node.js, Python
• **Banco de Dados:** MySQL, PostgreSQL
• **Ferramentas:** Git, Vercel, Figma
• **UI/UX:** Design responsivo e foco em experiência`
        },
        precos: {
            triggers: ['preço', 'precos', 'valor', 'custar', 'quanto', 'orçamento', 'orçamento', 'investimento'],
            response: `💰 **Sobre valores:**

Os preços variam conforme a complexidade e necessidades do projeto. 

📌 **Faixa estimada:**
• Landing Pages: R$ 800 - R$ 2.000
• Dashboards: R$ 2.000 - R$ 5.000  
• Painéis completos: R$ 3.000 - R$ 8.000

Para um orçamento preciso, me mande uma mensagem no WhatsApp com detalhes do seu projeto!`
        },
        prazo: {
            triggers: ['prazo', 'tempo', 'demora', 'entrega', 'pronto'],
            response: `⏱️ **Prazos médios:**

• Landing Page: 3-7 dias
• Dashboard simples: 7-15 dias
• Painel completo: 15-30 dias
• Projetos complexos: 30-60 dias

Os prazos podem variar conforme requisitos e disponibilidade.`
        },
        chatbot: {
            triggers: ['chatbot', 'bot', 'assistente', 'voce', 'você'],
            response: '🤖 Sim, eu sou o chatbot! Fui programado para tirar dúvidas sobre os serviços e projetos do Vanderson. Como posso ajudar?'
        },
        experiencia: {
            triggers: ['experiência', 'experiencia', 'tempo', 'anos', 'atua', 'mercado'],
            response: '👨‍💻 Vanderson é desenvolvedor web com foco em frontend, criando landing pages, painéis e dashboards. Com experiência em projetos para diversos clientes, sempre buscando as melhores soluções!'
        },
        pao: {
            triggers: ['pão', 'pao', 'padaria', 'cia', 'cliente real'],
            response: '🍞 **Pão & Cia** é um projeto real para uma padaria artesanal! O site inclui cardápio digital, integração com WhatsApp e design atrativo. Quer um site similar para seu negócio?'
        }
    };

    // Adiciona mensagem ao chat
    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
        
        if (sender === 'bot') {
            messageDiv.innerHTML = `
                <div class="avatar">
                    <i class="fas fa-robot"></i>
                </div>
                <div class="message-content">
                    ${text.replace(/\n/g, '<br>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}
                </div>
            `;
        } else {
            messageDiv.innerHTML = `
                <div class="message-content">
                    ${text}
                </div>
                <div class="avatar">
                    <i class="fas fa-user"></i>
                </div>
            `;
        }
        
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Mostrar indicador de digitação
    function showTypingIndicator() {
        const indicator = document.createElement('div');
        indicator.classList.add('message', 'bot-message');
        indicator.id = 'typingIndicator';
        indicator.innerHTML = `
            <div class="avatar">
                <i class="fas fa-robot"></i>
            </div>
            <div class="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
            </div>
        `;
        chatMessages.appendChild(indicator);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Remover indicador de digitação
    function removeTypingIndicator() {
        const indicator = document.getElementById('typingIndicator');
        if (indicator) indicator.remove();
    }

    // Processar mensagem do usuário
    function processMessage(userText) {
        const text = userText.toLowerCase().trim();
        
        // Verifica cada categoria
        for (let category in knowledgeBase) {
            const item = knowledgeBase[category];
            for (let trigger of item.triggers) {
                if (text.includes(trigger)) {
                    return item.response;
                }
            }
        }
        
        // Se não encontrou correspondência
        return `Desculpe, não entendi. 😕

Posso ajudar com:
• Serviços oferecidos
• Projetos do portfólio
• Contato e orçamentos
• Tecnologias utilizadas
• Prazos e valores

Digite uma palavra-chave ou escolha uma opção acima!`;
    }

    // Enviar mensagem
    function sendMessage() {
        const text = userInput.value.trim();
        if (text === '') return;
        
        // Adiciona mensagem do usuário
        addMessage(text, 'user');
        userInput.value = '';
        
        // Mostra indicador de digitação
        showTypingIndicator();
        
        // Simula tempo de resposta
        setTimeout(() => {
            removeTypingIndicator();
            const response = processMessage(text);
            addMessage(response, 'bot');
        }, 1500);
    }

    // Event listeners
    sendButton.addEventListener('click', sendMessage);
    
    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    // Opções rápidas
    document.querySelectorAll('.quick-option').forEach(button => {
        button.addEventListener('click', function() {
            const option = this.getAttribute('data-option');
            const optionText = this.textContent.trim();
            
            // Simula clique do usuário
            userInput.value = optionText;
            sendMessage();
        });
    });

    // Foco no input ao carregar
    userInput.focus();
});