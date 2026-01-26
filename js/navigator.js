document.addEventListener('DOMContentLoaded', () => {
    // --- 1. LÓGICA DE AUTO-SCALE (NOVO) ---
    function scaleSlide() {
        const container = document.querySelector('.slide-container');
        if (!container) return;

        // Dimensões originais do seu slide
        const baseWidth = 1280;
        const baseHeight = 720;
        
        // Dimensões da janela atual
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        // Calcula a proporção necessária para largura e altura
        const scaleX = windowWidth / baseWidth;
        const scaleY = windowHeight / baseHeight;

        // Escolhe o menor valor para garantir que o slide caiba inteiro na tela (contain)
        // Se quiser que preencha tudo cortando bordas (cover), use Math.max (não recomendado para slides)
        const scale = Math.min(scaleX, scaleY);

        // Aplica o zoom
        container.style.transform = `scale(${scale})`;
        
        // Opcional: Se a tela for muito maior que o slide, isso ajuda a garantir a nitidez
        // mas o padrão do navegador já é bom.
    }

    // Executa ao carregar e sempre que redimensionar a janela
    scaleSlide();
    window.addEventListener('resize', scaleSlide);


    // --- 2. LÓGICA DE NAVEGAÇÃO (JÁ EXISTENTE) ---
    const path = window.location.pathname;
    let currentPage = 1; 

    // Ajuste para pegar o número corretamente mesmo se houver pastas na URL
    const filename = path.split('/').pop() || '1.html';
    const match = filename.match(/(\d+)\.html/);
    
    if (match) {
        currentPage = parseInt(match[1]);
    }

    const totalSlides = 13; 

    function goToSlide(direction) {
        let nextPage = currentPage + direction;

        if (nextPage < 1) return;
        if (nextPage > totalSlides) return;

        window.location.href = `${nextPage}.html`;
    }

    document.addEventListener('keydown', (e) => {
        // Suporte para setas, espaço (avançar) e backspace (voltar)
        if (e.key === 'ArrowRight' || e.key === ' ') goToSlide(1);
        if (e.key === 'ArrowLeft' || e.key === 'Backspace') goToSlide(-1);
    });

    if (currentPage > 1) {
        const leftZone = document.createElement('div');
        leftZone.className = 'nav-zone nav-left';
        leftZone.onclick = () => goToSlide(-1);
        leftZone.innerHTML = '<i class="fas fa-chevron-left"></i>';
        document.body.appendChild(leftZone);
    }

    if (currentPage < totalSlides) {
        const rightZone = document.createElement('div');
        rightZone.className = 'nav-zone nav-right';
        rightZone.onclick = () => goToSlide(1);
        rightZone.innerHTML = '<i class="fas fa-chevron-right"></i>';
        document.body.appendChild(rightZone);
    }
});