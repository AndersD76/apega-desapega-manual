// App.js - Lógica do Manual Apega Desapega
document.addEventListener('DOMContentLoaded', function() {
    // Elementos do DOM
    const menuToggle = document.getElementById('menuToggle');
    const navList = document.getElementById('navList');
    const contentWrapper = document.getElementById('contentWrapper');

    // Estado da aplicação
    let currentSection = 'boas-vindas';

    // Inicializar aplicação
    init();

    function init() {
        generateNavigation();
        loadSection(currentSection);
        setupEventListeners();
        checkHash();
    }

    // Gerar navegação
    function generateNavigation() {
        manualContent.sections.forEach(section => {
            const li = document.createElement('li');
            const a = document.createElement('a');

            a.href = `#${section.id}`;
            a.textContent = section.title;
            a.dataset.sectionId = section.id;

            if (section.id === currentSection) {
                a.classList.add('active');
            }

            li.appendChild(a);
            navList.appendChild(li);
        });
    }

    // Configurar event listeners
    function setupEventListeners() {
        // Menu toggle para mobile
        menuToggle.addEventListener('click', toggleMenu);

        // Navegação
        navList.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                e.preventDefault();
                const sectionId = e.target.dataset.sectionId;
                navigateToSection(sectionId);

                // Fechar menu em mobile
                if (window.innerWidth < 768) {
                    toggleMenu();
                }
            }
        });

        // Fechar menu ao clicar fora (mobile)
        document.addEventListener('click', function(e) {
            if (window.innerWidth < 768) {
                if (!menuToggle.contains(e.target) && !navList.contains(e.target)) {
                    if (navList.classList.contains('active')) {
                        toggleMenu();
                    }
                }
            }
        });

        // Hash change
        window.addEventListener('hashchange', checkHash);

        // Scroll suave ao topo quando trocar de seção
        window.addEventListener('hashchange', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Toggle menu mobile
    function toggleMenu() {
        menuToggle.classList.toggle('active');
        navList.classList.toggle('active');
    }

    // Navegar para seção
    function navigateToSection(sectionId) {
        currentSection = sectionId;
        loadSection(sectionId);
        updateActiveNav(sectionId);
        window.location.hash = sectionId;
    }

    // Carregar seção
    function loadSection(sectionId) {
        const section = manualContent.sections.find(s => s.id === sectionId);

        if (section) {
            // Fade out
            contentWrapper.style.opacity = '0';

            setTimeout(() => {
                // Carregar conteúdo
                contentWrapper.innerHTML = `
                    <div class="section">
                        ${section.content}
                    </div>
                `;

                // Fade in
                contentWrapper.style.opacity = '1';
            }, 200);
        }
    }

    // Atualizar navegação ativa
    function updateActiveNav(sectionId) {
        const allLinks = navList.querySelectorAll('a');
        allLinks.forEach(link => {
            link.classList.remove('active');
            if (link.dataset.sectionId === sectionId) {
                link.classList.add('active');
            }
        });
    }

    // Verificar hash na URL
    function checkHash() {
        const hash = window.location.hash.substring(1);
        if (hash) {
            const section = manualContent.sections.find(s => s.id === hash);
            if (section) {
                navigateToSection(hash);
            }
        }
    }

    // Adicionar transição suave ao contentWrapper
    contentWrapper.style.transition = 'opacity 0.3s ease-in-out';

    // Service Worker para PWA (opcional)
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    console.log('SW registrado:', registration);
                })
                .catch(error => {
                    console.log('SW registro falhou:', error);
                });
        });
    }

    // Função de busca (pode ser implementada futuramente)
    function searchContent(query) {
        const results = [];
        manualContent.sections.forEach(section => {
            if (section.content.toLowerCase().includes(query.toLowerCase()) ||
                section.title.toLowerCase().includes(query.toLowerCase())) {
                results.push(section);
            }
        });
        return results;
    }

    // Expor funções globais se necessário
    window.manualApp = {
        navigateToSection,
        searchContent,
        currentSection: () => currentSection
    };

    // Detectar modo escuro do sistema (futuro)
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    prefersDark.addEventListener('change', (e) => {
        // Implementar modo escuro futuramente
        console.log('Modo escuro:', e.matches);
    });

    // Adicionar animação de scroll reveal
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observar elementos quando carregados
    function observeElements() {
        const elements = document.querySelectorAll('.section-subtitle, .info-box, table, .script-box');
        elements.forEach(el => observer.observe(el));
    }

    // Reobservar elementos quando conteúdo mudar
    const contentObserver = new MutationObserver(() => {
        observeElements();
    });

    contentObserver.observe(contentWrapper, {
        childList: true,
        subtree: true
    });

    // Botão voltar ao topo
    createBackToTopButton();

    function createBackToTopButton() {
        const button = document.createElement('button');
        button.innerHTML = '↑';
        button.className = 'back-to-top';
        button.style.cssText = `
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: var(--color-primary);
            color: white;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
            z-index: 1000;
        `;

        document.body.appendChild(button);

        // Mostrar/ocultar botão baseado no scroll
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                button.style.opacity = '1';
                button.style.visibility = 'visible';
            } else {
                button.style.opacity = '0';
                button.style.visibility = 'hidden';
            }
        });

        // Scroll suave ao topo
        button.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Função para imprimir seção atual
    window.printCurrentSection = function() {
        window.print();
    };

    // Atalhos de teclado
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + P para imprimir
        if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
            e.preventDefault();
            window.print();
        }

        // Setas para navegar entre seções
        if (e.key === 'ArrowRight') {
            navigateNext();
        } else if (e.key === 'ArrowLeft') {
            navigatePrevious();
        }
    });

    function navigateNext() {
        const currentIndex = manualContent.sections.findIndex(s => s.id === currentSection);
        if (currentIndex < manualContent.sections.length - 1) {
            navigateToSection(manualContent.sections[currentIndex + 1].id);
        }
    }

    function navigatePrevious() {
        const currentIndex = manualContent.sections.findIndex(s => s.id === currentSection);
        if (currentIndex > 0) {
            navigateToSection(manualContent.sections[currentIndex - 1].id);
        }
    }

    // Adicionar botões de navegação anterior/próxima
    function addNavigationButtons() {
        const navButtons = document.createElement('div');
        navButtons.className = 'section-navigation';
        navButtons.style.cssText = `
            display: flex;
            justify-content: space-between;
            margin-top: 3rem;
            padding-top: 2rem;
            border-top: 1px solid var(--color-gray-medium);
        `;

        contentWrapper.addEventListener('DOMSubtreeModified', function() {
            const existingNav = contentWrapper.querySelector('.section-navigation');
            if (existingNav) {
                existingNav.remove();
            }

            const currentIndex = manualContent.sections.findIndex(s => s.id === currentSection);

            const newNavButtons = navButtons.cloneNode(true);

            if (currentIndex > 0) {
                const prevButton = document.createElement('button');
                prevButton.textContent = `← ${manualContent.sections[currentIndex - 1].title}`;
                prevButton.className = 'nav-button nav-prev';
                prevButton.style.cssText = `
                    background: var(--color-primary);
                    color: white;
                    border: none;
                    padding: 0.8rem 1.5rem;
                    border-radius: 4px;
                    cursor: pointer;
                    font-size: 0.9rem;
                `;
                prevButton.onclick = navigatePrevious;
                newNavButtons.appendChild(prevButton);
            } else {
                newNavButtons.appendChild(document.createElement('div'));
            }

            if (currentIndex < manualContent.sections.length - 1) {
                const nextButton = document.createElement('button');
                nextButton.textContent = `${manualContent.sections[currentIndex + 1].title} →`;
                nextButton.className = 'nav-button nav-next';
                nextButton.style.cssText = `
                    background: var(--color-primary);
                    color: white;
                    border: none;
                    padding: 0.8rem 1.5rem;
                    border-radius: 4px;
                    cursor: pointer;
                    font-size: 0.9rem;
                `;
                nextButton.onclick = navigateNext;
                newNavButtons.appendChild(nextButton);
            }

            const section = contentWrapper.querySelector('.section');
            if (section && (currentIndex > 0 || currentIndex < manualContent.sections.length - 1)) {
                section.appendChild(newNavButtons);
            }
        });
    }

    addNavigationButtons();

    // Log para debug
    console.log('Manual Apega Desapega carregado com sucesso!');
    console.log(`Total de seções: ${manualContent.sections.length}`);
});
