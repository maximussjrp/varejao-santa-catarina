/* ================================================
   VAREJÃO SANTA CATARINA - JAVASCRIPT PRINCIPAL
   Funcionalidades e Interatividade
   ================================================ */

document.addEventListener('DOMContentLoaded', function() {
    
    // ===== Inicialização =====
    initPreloader();
    initNavbar();
    initMobileMenu();
    initSmoothScroll();
    initCounterAnimation();
    loadOfertasFromAdmin(); // Carrega ofertas do admin ANTES do swiper
    loadCategoriasFromAdmin(); // Carrega categorias/imagens do admin
    initCountdownTimer();
    initSwipers();
    initBackToTop();
    initNewsletterForm();
    initAOS();
    
});

// ===== Preloader =====
function initPreloader() {
    const preloader = document.getElementById('preloader');
    
    window.addEventListener('load', function() {
        setTimeout(function() {
            preloader.classList.add('loaded');
            
            // Remove preloader from DOM after animation
            setTimeout(function() {
                preloader.style.display = 'none';
            }, 500);
        }, 800);
    });
}

// ===== Navbar Scroll Effect =====
function initNavbar() {
    const header = document.getElementById('header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        // Add scrolled class when scrolling down
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
}

// ===== Mobile Menu =====
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
        
        // Close menu when clicking a link
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
}

// ===== Smooth Scroll =====
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href !== '#' && href !== '#!' && href !== '') {
                e.preventDefault();
                
                const target = document.querySelector(href);
                if (target) {
                    const headerHeight = document.getElementById('header').offsetHeight;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// ===== Counter Animation =====
function initCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number');
    let animated = false;
    
    function animateCounters() {
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count'));
            const duration = 2000; // 2 seconds
            const increment = target / (duration / 16); // 60fps
            let current = 0;
            
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };
            
            updateCounter();
        });
    }
    
    // Trigger animation when hero stats are in view
    const heroStats = document.querySelector('.hero-stats');
    
    if (heroStats) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !animated) {
                    animated = true;
                    animateCounters();
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(heroStats);
    }
}

// ===== Carregar Ofertas do Painel Admin =====
function loadOfertasFromAdmin() {
    const ofertasSection = document.getElementById('ofertas');
    const ofertasContainer = document.getElementById('ofertas-container');
    const navOfertasLink = document.getElementById('nav-ofertas-link');
    const footerOfertasLink = document.getElementById('footer-ofertas-link');
    
    if (!ofertasSection || !ofertasContainer) return;
    
    // Função para ocultar tudo relacionado a ofertas
    function hideOfertas() {
        ofertasSection.style.display = 'none';
        if (navOfertasLink) navOfertasLink.style.display = 'none';
        if (footerOfertasLink) footerOfertasLink.style.display = 'none';
    }
    
    // Função para exibir tudo relacionado a ofertas
    function showOfertas() {
        ofertasSection.style.display = 'block';
        if (navOfertasLink) navOfertasLink.style.display = 'list-item';
        if (footerOfertasLink) footerOfertasLink.style.display = 'list-item';
    }
    
    // Buscar ofertas do localStorage (salvas pelo admin)
    const ofertasSalvas = localStorage.getItem('varejao_ofertas');
    
    if (!ofertasSalvas) {
        // Não há ofertas cadastradas - ocultar seção e links
        hideOfertas();
        return;
    }
    
    try {
        const ofertas = JSON.parse(ofertasSalvas);
        
        // Filtrar apenas ofertas ativas
        const ofertasAtivas = ofertas.filter(oferta => oferta.ativa !== false);
        
        if (ofertasAtivas.length === 0) {
            // Nenhuma oferta ativa - ocultar seção e links
            hideOfertas();
            return;
        }
        
        // Exibir a seção de ofertas e links
        showOfertas();
        
        // Limpar container
        ofertasContainer.innerHTML = '';
        
        // Número do WhatsApp para os links
        const whatsappNumero = '5517991447419';
        
        // Gerar HTML para cada oferta
        ofertasAtivas.forEach(oferta => {
            const desconto = oferta.precoAntigo && oferta.precoNovo 
                ? Math.round(((oferta.precoAntigo - oferta.precoNovo) / oferta.precoAntigo) * 100)
                : null;
            
            const badgeText = desconto ? `-${desconto}%` : 'OFERTA';
            
            const slide = document.createElement('div');
            slide.className = 'swiper-slide';
            slide.innerHTML = `
                <div class="oferta-card">
                    <div class="oferta-badge">${badgeText}</div>
                    <div class="oferta-image">
                        <img src="${oferta.imagem || 'https://via.placeholder.com/300x300?text=Produto'}" alt="${oferta.nome}">
                    </div>
                    <div class="oferta-content">
                        <h4>${oferta.nome}</h4>
                        <p>${oferta.unidade || 'Unidade'}</p>
                        <div class="oferta-price">
                            ${oferta.precoAntigo ? `<span class="old-price">R$ ${oferta.precoAntigo.toFixed(2).replace('.', ',')}</span>` : ''}
                            <span class="new-price">R$ ${oferta.precoNovo.toFixed(2).replace('.', ',')}</span>
                        </div>
                        <a href="https://wa.me/${whatsappNumero}?text=Olá!%20Quero%20aproveitar%20a%20oferta%20de%20${encodeURIComponent(oferta.nome)}!" class="btn btn-primary btn-sm">Eu Quero!</a>
                    </div>
                </div>
            `;
            
            ofertasContainer.appendChild(slide);
        });
        
    } catch (e) {
        console.error('Erro ao carregar ofertas:', e);
        hideOfertas();
    }
}

// ===== Carregar Categorias do Painel Admin =====
function loadCategoriasFromAdmin() {
    const categoriasSalvas = localStorage.getItem('varejao_categorias');
    
    if (!categoriasSalvas) return;
    
    try {
        const categorias = JSON.parse(categoriasSalvas);
        
        // Lista de categorias
        const cats = ['frutas', 'verduras', 'legumes', 'temperos', 'ovos', 'mercearia'];
        
        cats.forEach(cat => {
            const catData = categorias[cat];
            if (catData) {
                // Atualizar imagem
                const imgElement = document.getElementById('img-cat-' + cat);
                if (imgElement && catData.imagem) {
                    imgElement.src = catData.imagem;
                }
                
                // Atualizar descrição
                const descElement = document.getElementById('desc-cat-' + cat);
                if (descElement && catData.descricao) {
                    descElement.textContent = catData.descricao;
                }
                
                // Atualizar quantidade
                const qtdElement = document.getElementById('qtd-cat-' + cat);
                if (qtdElement && catData.quantidade) {
                    qtdElement.textContent = catData.quantidade;
                }
            }
        });
        
    } catch (e) {
        console.error('Erro ao carregar categorias:', e);
    }
}

// ===== Countdown Timer =====
function initCountdownTimer() {
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    
    if (!daysEl) return;
    
    // Set end date to next Sunday at 23:59:59
    function getNextSunday() {
        const now = new Date();
        const dayOfWeek = now.getDay();
        const daysUntilSunday = dayOfWeek === 0 ? 7 : 7 - dayOfWeek;
        const nextSunday = new Date(now);
        nextSunday.setDate(now.getDate() + daysUntilSunday);
        nextSunday.setHours(23, 59, 59, 999);
        return nextSunday;
    }
    
    let endDate = getNextSunday();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = endDate.getTime() - now;
        
        if (distance < 0) {
            // Reset to next week
            endDate = getNextSunday();
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        daysEl.textContent = days.toString().padStart(2, '0');
        hoursEl.textContent = hours.toString().padStart(2, '0');
        minutesEl.textContent = minutes.toString().padStart(2, '0');
        secondsEl.textContent = seconds.toString().padStart(2, '0');
    }
    
    // Update immediately and then every second
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// ===== Swiper Initialization =====
function initSwipers() {
    // Ofertas Swiper
    const ofertasSwiper = document.querySelector('.ofertas-swiper');
    if (ofertasSwiper) {
        new Swiper('.ofertas-swiper', {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                576: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3,
                },
                1200: {
                    slidesPerView: 4,
                },
            },
        });
    }
    
    // Depoimentos Swiper
    const depoimentosSwiper = document.querySelector('.depoimentos-swiper');
    if (depoimentosSwiper) {
        new Swiper('.depoimentos-swiper', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            },
        });
    }
}

// ===== Back to Top Button =====
function initBackToTop() {
    const backToTop = document.getElementById('backToTop');
    
    if (backToTop) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 500) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });
        
        // Scroll to top on click
        backToTop.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// ===== Newsletter Form =====
function initNewsletterForm() {
    const form = document.querySelector('.newsletter-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nameInput = form.querySelector('input[type="text"]');
            const emailInput = form.querySelector('input[type="email"]');
            const button = form.querySelector('button');
            
            const name = nameInput ? nameInput.value.trim() : '';
            const email = emailInput ? emailInput.value.trim() : '';
            
            // Basic validation
            if (name === '' || email === '') {
                showToast('Por favor, preencha todos os campos.', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showToast('Por favor, insira um e-mail válido.', 'error');
                return;
            }
            
            // Simulate form submission
            button.disabled = true;
            button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
            
            setTimeout(function() {
                // Success
                showToast('Inscrição realizada com sucesso! 🎉', 'success');
                
                // Reset form
                form.reset();
                button.disabled = false;
                button.innerHTML = 'Inscrever <i class="fas fa-arrow-right"></i>';
            }, 1500);
        });
    }
}

// ===== Email Validation =====
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ===== Toast Notification =====
function showToast(message, type = 'info') {
    // Remove existing toasts
    const existingToasts = document.querySelectorAll('.toast-notification');
    existingToasts.forEach(toast => toast.remove());
    
    // Create toast
    const toast = document.createElement('div');
    toast.className = `toast-notification toast-${type}`;
    toast.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Add styles
    toast.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#E53935' : '#2196F3'};
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: 500;
        box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        z-index: 9999;
        animation: slideIn 0.3s ease;
    `;
    
    // Add animation keyframes if not exists
    if (!document.querySelector('#toast-styles')) {
        const style = document.createElement('style');
        style.id = 'toast-styles';
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes slideOut {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(toast);
    
    // Remove toast after 4 seconds
    setTimeout(function() {
        toast.style.animation = 'slideOut 0.3s ease';
        setTimeout(function() {
            toast.remove();
        }, 300);
    }, 4000);
}

// ===== AOS Initialization =====
function initAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100,
            delay: 100,
        });
    }
}

// ===== Active Navigation Link =====
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', function() {
        let current = '';
        const scrollPosition = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Initialize active nav link tracking
updateActiveNavLink();

// ===== Lazy Loading Images =====
function initLazyLoading() {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // Fallback for older browsers
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        });
    }
}

initLazyLoading();

// ===== Parallax Effect for Hero =====
function initParallax() {
    const hero = document.querySelector('.hero');
    const floatingFruits = document.querySelector('.floating-fruits');
    
    if (hero && floatingFruits) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.3;
            
            if (scrolled < hero.offsetHeight) {
                floatingFruits.style.transform = `translateY(${rate}px)`;
            }
        });
    }
}

initParallax();

// ===== Form Validation Helpers =====
function validateForm(form) {
    let isValid = true;
    const requiredInputs = form.querySelectorAll('[required]');
    
    requiredInputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
    
    return isValid;
}

// ===== Accessibility Improvements =====
function initAccessibility() {
    // Skip to main content link
    const skipLink = document.querySelector('.skip-link');
    if (skipLink) {
        skipLink.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.focus();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
    
    // Focus trap for mobile menu
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu) {
        const focusableElements = navMenu.querySelectorAll('a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])');
        const firstFocusable = focusableElements[0];
        const lastFocusable = focusableElements[focusableElements.length - 1];
        
        navMenu.addEventListener('keydown', function(e) {
            if (e.key === 'Tab') {
                if (e.shiftKey) {
                    if (document.activeElement === firstFocusable) {
                        e.preventDefault();
                        lastFocusable.focus();
                    }
                } else {
                    if (document.activeElement === lastFocusable) {
                        e.preventDefault();
                        firstFocusable.focus();
                    }
                }
            }
            
            if (e.key === 'Escape') {
                const hamburger = document.querySelector('.hamburger');
                hamburger.click();
            }
        });
    }
}

initAccessibility();

// ===== Performance Optimization =====
function debounce(func, wait = 20) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll events
const debouncedScroll = debounce(function() {
    // Scroll-dependent functions can be called here
}, 16);

window.addEventListener('scroll', debouncedScroll, { passive: true });

// ===== WhatsApp Click Tracking (Optional Analytics) =====
function trackWhatsAppClick() {
    const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
    
    whatsappLinks.forEach(link => {
        link.addEventListener('click', function() {
            // You can integrate with analytics here
            console.log('WhatsApp click tracked');
            
            // Example: Google Analytics event
            if (typeof gtag !== 'undefined') {
                gtag('event', 'whatsapp_click', {
                    'event_category': 'contact',
                    'event_label': 'WhatsApp Button'
                });
            }
        });
    });
}

trackWhatsAppClick();

// ===== Console Branding =====
console.log('%c Varejão Santa Catarina ', 'background: #2E7D32; color: white; font-size: 20px; padding: 10px; border-radius: 5px;');
console.log('%c Site desenvolvido com ❤️ ', 'color: #4CAF50; font-size: 14px;');
