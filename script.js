/**
 * PORTFOLIO DJEDJED ANGE - JAVASCRIPT
 * ULTIMATE ENHANCED VERSION - Maximum Animations & Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    initLoader();
    initCursor();
    initNavigation();
    initParticles();
    initScrollAnimations();
    initTypewriter();
    initServiceCards();
    initProjects();
    initPricingCalculator();
    initContact();
    initModal();
    initParallax();
    initMouseFollower();
    initEnhancedInteractions();
    // initRevealAnimations(); // Disabled - may conflict
    initStatsCounters();
    initWaves();
    initScrollProgressBar();
    initBackToTop();
    initStackedCards(); // This is the main one
    // initEnhancedScrollEffects(); // Disabled - may conflict
    // initSmoothScrollReveal(); // Disabled - may conflict
    // initAdvancedScrollAnimations(); // Disabled
    // initScrollTriggeredEffects(); // Disabled
});

/**
 * LOADER
 */
function initLoader() {
    const loader = document.querySelector('.loader');
    
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 2500);
    });
    
    // Fallback
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 3000);
}

/**
 * CUSTOM CURSOR
 */
function initCursor() {
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorTrail = document.querySelector('.cursor-trail');
    
    let mouseX = 0, mouseY = 0;
    let trailX = 0, trailY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        cursorDot.style.left = mouseX - 4 + 'px';
        cursorDot.style.top = mouseY - 4 + 'px';
    });
    
    // Smooth trail animation
    function animateTrail() {
        trailX += (mouseX - trailX) * 0.15;
        trailY += (mouseY - trailY) * 0.15;
        
        cursorTrail.style.left = trailX - 20 + 'px';
        cursorTrail.style.top = trailY - 20 + 'px';
        
        requestAnimationFrame(animateTrail);
    }
    animateTrail();
    
    // Hover effects
    const interactiveElements = document.querySelectorAll('a, button, .project-card, .service-card, .checkbox-item');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorTrail.classList.add('hovering');
        });
        el.addEventListener('mouseleave', () => {
            cursorTrail.classList.remove('hovering');
        });
    });
    
    // Hide cursor outside window
    document.addEventListener('mouseleave', () => {
        cursorDot.style.opacity = '0';
        cursorTrail.style.opacity = '0';
    });
    
    document.addEventListener('mouseenter', () => {
        cursorDot.style.opacity = '1';
        cursorTrail.style.opacity = '1';
    });
}

/**
 * NAVIGATION
 */
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    const links = document.querySelectorAll('.nav-link');
    
    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Update active link
        updateActiveLink(links);
    });
    
    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close menu on link click
    links.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Smooth scroll for nav links
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function updateActiveLink(links) {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 150;
    
    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
        
        if (scrollPos >= top && scrollPos < top + height) {
            links.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + id) {
                    link.classList.add('active');
                }
            });
        }
    });
}

/**
 * PARTICLES BACKGROUND
 */
function initParticles() {
    const canvas = document.getElementById('particlesCanvas');
    const ctx = canvas.getContext('2d');
    
    let particles = [];
    let animationId;
    
    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    function createParticles() {
        particles = [];
        const count = Math.floor((canvas.width * canvas.height) / 15000);
        
        for (let i = 0; i < count; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 2 + 0.5,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                alpha: Math.random() * 0.5 + 0.2
            });
        }
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            
            // Wrap around edges
            if (p.x < 0) p.x = canvas.width;
            if (p.x > canvas.width) p.x = 0;
            if (p.y < 0) p.y = canvas.height;
            if (p.y > canvas.height) p.y = 0;
            
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
            ctx.fill();
        });
        
        // Draw connections
        particles.forEach((p1, i) => {
            particles.slice(i + 1).forEach(p2 => {
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < 150) {
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - dist / 150)})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            });
        });
        
        animationId = requestAnimationFrame(animate);
    }
    
    resize();
    createParticles();
    animate();
    
    window.addEventListener('resize', () => {
        resize();
        createParticles();
    });
}

/**
 * SCROLL ANIMATIONS
 */
function initScrollAnimations() {
    // Enhanced scroll reveal with more dramatic effects
    const revealElements = document.querySelectorAll('.reveal, .about-content, .service-card, .timeline-item, .project-card, .stat-item, .certification-card, .contact-item, .stacked-card, .hero-content, .hero-subtitle, .hero-title, .hero-typed, .hero-description, .hero-cta');
    
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        
        revealElements.forEach((el, index) => {
            const elementTop = el.getBoundingClientRect().top;
            const revealPoint = 100;
            
            if (elementTop < windowHeight - revealPoint) {
                const isHeroElement =
                    el.classList.contains('hero-content') ||
                    el.classList.contains('hero-subtitle') ||
                    el.classList.contains('hero-title') ||
                    el.classList.contains('hero-typed') ||
                    el.classList.contains('hero-description') ||
                    el.classList.contains('hero-cta');

                if (isHeroElement) {
                    el.style.opacity = '1';
                    el.style.transform = 'none';
                    el.classList.add('active');
                    return;
                }

                // Add staggered delay based on index
                setTimeout(() => {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0) scale(1)';
                    el.classList.add('active');
                }, index * 100);
            }
        });
    };
    
    // Initial state (do not hide hero content)
    revealElements.forEach(el => {
        const isHeroElement =
            el.classList.contains('hero-content') ||
            el.classList.contains('hero-subtitle') ||
            el.classList.contains('hero-title') ||
            el.classList.contains('hero-typed') ||
            el.classList.contains('hero-description') ||
            el.classList.contains('hero-cta');

        if (isHeroElement) {
            el.style.opacity = '1';
            el.style.transform = 'none';
            el.style.transition = 'none';
            return;
        }

        el.style.opacity = '0';
        el.style.transform = 'translateY(60px) scale(0.95)';
        el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    });
    
    // Initial check
    revealOnScroll();
    
    // Scroll listener
    window.addEventListener('scroll', revealOnScroll);
    
    // Skills animation
    const skillProgress = document.querySelectorAll('.skill-progress');
    
    const animateSkills = () => {
        skillProgress.forEach(skill => {
            const rect = skill.getBoundingClientRect();
            const percent = skill.dataset.percent;
            
            if (rect.top < window.innerHeight - 100) {
                skill.style.width = percent + '%';
            }
        });
    };
    
    window.addEventListener('scroll', animateSkills);
    setTimeout(animateSkills, 500);
}

/**
 * TYPEWRITER EFFECT
 */
function initTypewriter() {
    const typedText = document.querySelector('.typed-text');
    const phrases = [
        'Développeur Web',
        'Développeur Mobile',
        'Expert Sécurité Réseau',
        'Créateur d\'expériences digitales'
    ];
    
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function type() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            typedText.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typedText.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }
        
        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            typingSpeed = 2000;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 500;
        }
        
        setTimeout(type, typingSpeed);
    }
    
    // Start after loader
    setTimeout(type, 3000);
}

/**
 * SERVICE CARDS - 3D TILT EFFECT
 */
function initServiceCards() {
    const cards = document.querySelectorAll('.service-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
}

/**
 * PROJECTS FILTER & MANAGEMENT
 */
function initProjects() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    // Filter functionality
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;
            
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Filter projects
            projectCards.forEach(card => {
                const category = card.dataset.category;
                
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // Add project button
    const addProjectBtn = document.getElementById('addProjectBtn');
    const modal = document.getElementById('projectModal');
    const modalClose = document.getElementById('modalClose');
    const addProjectForm = document.getElementById('addProjectForm');
    
    addProjectBtn.addEventListener('click', () => {
        modal.classList.add('active');
    });
    
    modalClose.addEventListener('click', () => {
        modal.classList.remove('active');
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
    
    // Add new project
    addProjectForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('newProjectName').value;
        const desc = document.getElementById('newProjectDesc').value;
        const category = document.getElementById('newProjectCategory').value;
        const link = document.getElementById('newProjectLink').value;
        
        // Create new project card
        const projectsGrid = document.querySelector('.projects-grid');
        
        const newCard = document.createElement('div');
        newCard.className = 'project-card';
        newCard.dataset.category = category;
        
        newCard.innerHTML = `
            <div class="project-image">
                <div class="project-placeholder">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
                        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/>
                    </svg>
                </div>
            </div>
            <div class="project-info">
                <h3>${name}</h3>
                <p>${desc || 'Nouveau projet'}</p>
                ${link ? `<a href="${link}" target="_blank" class="project-link">Voir le site</a>` : '<span class="project-soon">Bientôt en ligne</span>'}
            </div>
        `;
        
        projectsGrid.appendChild(newCard);
        
        // Show success message
        showToast('Projet ajouté avec succès !');
        
        // Reset and close modal
        addProjectForm.reset();
        modal.classList.remove('active');
    });
}

/**
 * PRICING CALCULATOR
 */
function initPricingCalculator() {
    const form = document.getElementById('pricingForm');
    const projectType = document.getElementById('projectType');
    const pages = document.getElementById('pages');
    const pagesRange = document.getElementById('pagesRange');
    const clientOffer = document.getElementById('clientOffer');
    
    const totalPriceEl = document.getElementById('totalPrice');
    const breakdownItems = {
        base: document.querySelector('.breakdown-item.base .breakdown-value'),
        pages: document.querySelector('.breakdown-item.pages .breakdown-value'),
        options: document.querySelector('.breakdown-item.options .breakdown-value')
    };
    const clientMessage = document.getElementById('clientMessage');
    const clientOfferDisplay = document.getElementById('clientOfferDisplay');
    const messageComparison = document.getElementById('messageComparison');
    
    // Base prices (in XOF)
    const basePrices = {
        vitrine: 150000,
        ecommerce: 350000,
        webapp: 500000,
        mobile: 700000
    };
    
    const extraPagePrice = 25000;
    
    // Sync number and range inputs
    pagesRange.addEventListener('input', () => {
        pages.value = pagesRange.value;
        calculatePrice();
    });
    
    pages.addEventListener('input', () => {
        pagesRange.value = pages.value;
        calculatePrice();
    });
    
    // Calculate on any change
    projectType.addEventListener('change', calculatePrice);
    document.querySelectorAll('input[name="options"]').forEach(checkbox => {
        checkbox.addEventListener('change', calculatePrice);
    });
    
    clientOffer.addEventListener('input', () => {
        updateClientMessage();
    });
    
    function calculatePrice() {
        let total = 0;
        let base = 0;
        let pagesCost = 0;
        let optionsCost = 0;
        
        // Base price
        const selectedType = projectType.value;
        if (selectedType && basePrices[selectedType]) {
            base = basePrices[selectedType];
            total += base;
        }
        
        // Extra pages (first page is included in base)
        const extraPages = Math.max(0, parseInt(pages.value) - 1);
        pagesCost = extraPages * extraPagePrice;
        total += pagesCost;
        
        // Options
        const checkedOptions = document.querySelectorAll('input[name="options"]:checked');
        checkedOptions.forEach(checkbox => {
            optionsCost += parseInt(checkbox.dataset.price);
        });
        total += optionsCost;
        
        // Update display
        animateNumber(totalPriceEl, total);
        breakdownItems.base.textContent = formatPrice(base) + ' XOF';
        breakdownItems.pages.textContent = formatPrice(pagesCost) + ' XOF';
        breakdownItems.options.textContent = formatPrice(optionsCost) + ' XOF';
        
        // Update client message
        updateClientMessage();
    }
    
    function updateClientMessage() {
        const offer = parseInt(clientOffer.value) || 0;
        const total = parseInt(totalPriceEl.dataset.value) || 0;
        
        if (offer > 0) {
            clientMessage.style.display = 'block';
            clientOfferDisplay.textContent = formatPrice(offer) + ' XOF';
            
            const diff = offer - total;
            
            if (diff >= 0) {
                messageComparison.textContent = `Votre budget est supérieur de ${formatPrice(diff)} XOF`;
                messageComparison.className = 'message-comparison higher';
            } else {
                messageComparison.textContent = `Votre proposition est inférieure de ${formatPrice(Math.abs(diff))} XOF`;
                messageComparison.className = 'message-comparison lower';
            }
        } else {
            clientMessage.style.display = 'none';
        }
    }
    
    function animateNumber(element, target) {
        const current = parseInt(element.dataset.value) || 0;
        const duration = 500;
        const start = performance.now();
        
        function update(currentTime) {
            const elapsed = currentTime - start;
            const progress = Math.min(elapsed / duration, 1);
            
            // Ease out
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const value = Math.round(current + (target - current) * easeProgress);
            
            element.textContent = formatPrice(value);
            element.dataset.value = value;
            
            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }
        
        requestAnimationFrame(update);
    }
    
    function formatPrice(price) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    }
    
    // Form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Collect form data
        const formData = new FormData(form);
        const data = {
            projectType: formData.get('projectType'),
            pages: formData.get('pages'),
            options: formData.getAll('options'),
            clientOffer: formData.get('clientOffer'),
            estimatedPrice: totalPriceEl.dataset.value
        };
        
        if (!data.projectType) {
            showToast('Veuillez sélectionner un type de projet');
            return;
        }
        
        // Simulate form submission
        showToast('Demande de devis envoyée avec succès ! Je vous contacterai bientôt.');
        
        // Reset form
        form.reset();
        calculatePrice();
    });
}

/**
 * CONTACT
 */
function initContact() {
    // Copy email to clipboard
    const copyBtns = document.querySelectorAll('.copy-btn');
    
    copyBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const textToCopy = btn.dataset.copy;
            
            navigator.clipboard.writeText(textToCopy).then(() => {
                showToast('Email copié dans le presse-papiers !');
            });
        });
    });
}

/**
 * MODAL
 */
function initModal() {
    const modal = document.getElementById('projectModal');
    const modalClose = document.getElementById('modalClose');
    
    modalClose.addEventListener('click', () => {
        modal.classList.remove('active');
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
    
    // Escape key to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modal.classList.remove('active');
        }
    });
}

/**
 * TOAST NOTIFICATION
 */
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = toast.querySelector('.toast-message');
    
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Add toast styles dynamically
const toastStyle = document.createElement('style');
toastStyle.textContent = `
    .toast {
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%) translateY(100px);
        background: var(--bg-card);
        border: 1px solid var(--accent);
        border-radius: 8px;
        padding: 15px 30px;
        z-index: 10001;
        opacity: 0;
        transition: all 0.4s ease;
    }
    
    .toast.show {
        transform: translateX(-50%) translateY(0);
        opacity: 1;
    }
    
    .toast-message {
        color: var(--text-primary);
    }
`;
document.head.appendChild(toastStyle);

/**
 * PARALLAX EFFECT
 */
function initParallax() {
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const speed = 0.3;
            
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const yPos = (rect.top * speed);
                section.style.backgroundPositionY = yPos + 'px';
            }
        });
    });
    
    // Add parallax to hero content
    const heroContent = document.querySelector('.hero-content');
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        if (scrollY < window.innerHeight) {
            heroContent.style.transform = `translateY(${scrollY * 0.3}px)`;
            heroContent.style.opacity = 1 - (scrollY / window.innerHeight);
        }
    });
}

/**
 * MOUSE FOLLOWER GLOW
 */
function initMouseFollower() {
    const hero = document.querySelector('.hero');
    const glow = document.createElement('div');
    glow.className = 'mouse-glow';
    glow.style.cssText = `
        position: fixed;
        width: 300px;
        height: 300px;
        background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
        pointer-events: none;
        z-index: 1;
        transform: translate(-50%, -50%);
        transition: transform 0.1s ease;
    `;
    document.body.appendChild(glow);
    
    document.addEventListener('mousemove', (e) => {
        glow.style.left = e.clientX + 'px';
        glow.style.top = e.clientY + 'px';
        
        // Update spotlight effect
        const heroEffects = document.querySelector('.hero-background-effects');
        if (heroEffects) {
            const x = (e.clientX / window.innerWidth) * 100;
            const y = (e.clientY / window.innerHeight) * 100;
            heroEffects.style.setProperty('--mouse-x', x + '%');
            heroEffects.style.setProperty('--mouse-y', y + '%');
        }
    });
    
    // Hide glow when leaving window
    document.addEventListener('mouseleave', () => {
        glow.style.opacity = '0';
    });
    
    document.addEventListener('mouseenter', () => {
        glow.style.opacity = '1';
    });
}

/**
 * ENHANCED INTERACTIONS
 */
function initEnhancedInteractions() {
    // Magnetic effect on buttons
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px) scale(1.05)`;
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0, 0) scale(1)';
        });
    });
    
    // Ripple effect on click
    buttons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: translate(-50%, -50%) scale(0);
                animation: rippleEffect 0.6s ease-out;
                left: ${e.clientX - rect.left}px;
                top: ${e.clientY - rect.top}px;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
    
    // Add ripple animation
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        @keyframes rippleEffect {
            to {
                transform: translate(-50%, -50%) scale(2);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyle);
    
    // Tilt effect on cards
    const cards = document.querySelectorAll('.service-card, .project-card, .timeline-content');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 15;
            const rotateY = (centerX - x) / 15;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        });
    });
}

/**
 * REVEAL ANIMATIONS ON SCROLL
 */
function initRevealAnimations() {
    const elements = document.querySelectorAll('.service-card, .project-card, .timeline-item, .contact-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('revealed');
                }, index * 100);
            }
        });
    }, { threshold: 0.1 });
    
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px) scale(0.9)';
        el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(el);
    });
    
    // Add revealed class styles
    document.addEventListener('scroll', () => {
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0) scale(1)';
            }
        });
    });
}

/**
 * COUNTER ANIMATION
 */
function initStatsCounters() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumber = entry.target;
                const target = parseInt(statNumber.dataset.target);
                const duration = 2000;
                const start = performance.now();
                
                const update = (currentTime) => {
                    const elapsed = currentTime - start;
                    const progress = Math.min(elapsed / duration, 1);
                    
                    const easeOut = 1 - Math.pow(1 - progress, 3);
                    const current = Math.round(target * easeOut);
                    
                    statNumber.textContent = current;
                    
                    if (progress < 1) {
                        requestAnimationFrame(update);
                    }
                };
                
                requestAnimationFrame(update);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    statNumbers.forEach(stat => observer.observe(stat));
    
    // Skills fallback
    const skillProgress = document.querySelectorAll('.skill-progress');
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skill = entry.target;
                const percent = skill.dataset.percent;
                skill.style.width = percent + '%';
                skillObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    skillProgress.forEach(skill => skillObserver.observe(skill));
}

/**
 * WAVES EFFECT
 */
function initWaves() {
    const hero = document.querySelector('.hero');
    
    // Create wave container
    const waveContainer = document.createElement('div');
    waveContainer.className = 'wave-container';
    waveContainer.style.cssText = `
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100px;
        overflow: hidden;
    `;
    
    // Create multiple waves
    for (let i = 0; i < 3; i++) {
        const wave = document.createElement('div');
        wave.style.cssText = `
            position: absolute;
            bottom: 0;
            left: 0;
            width: 200%;
            height: 100px;
            background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath d='M0,0V46.29c47,22.22,103,22.22,150,0,47-22.22,103-22.22,150,0s103,22.22,150,0,103,22.22,150,0,103,22.22,150,0,103,22.22,150,0,103,22.22,150,0V0Z' fill='%23141414' opacity='${0.3 + i * 0.2}'%3E%3C/path%3E%3C/svg%3E");
            background-size: 50% 100%;
            animation: waveMove ${10 + i * 5}s linear infinite;
            animation-delay: ${i * -2}s;
        `;
        waveContainer.appendChild(wave);
    }
    
    hero.appendChild(waveContainer);
    
    // Add wave animation
    const waveStyle = document.createElement('style');
    waveStyle.textContent = `
        @keyframes waveMove {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
    `;
    document.head.appendChild(waveStyle);
}

/**
 * SMOOTH SCROLL ENHANCEMENT
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

/**
 * KEYBOARD NAVIGATION
 */
document.addEventListener('keydown', (e) => {
    // Arrow key navigation
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        const sections = Array.from(document.querySelectorAll('section[id]'));
        const currentSection = sections.find(s => {
            const rect = s.getBoundingClientRect();
            return rect.top <= 150 && rect.bottom > 150;
        });
        
        const currentIndex = sections.indexOf(currentSection);
        if (currentIndex < sections.length - 1) {
            const nextSection = sections[currentIndex + 1];
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
    
    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        const sections = Array.from(document.querySelectorAll('section[id]'));
        const currentSection = sections.find(s => {
            const rect = s.getBoundingClientRect();
            return rect.top <= 150 && rect.bottom > 150;
        });
        
        const currentIndex = sections.indexOf(currentSection);
        if (currentIndex > 0) {
            const prevSection = sections[currentIndex - 1];
            prevSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

/**
 * PERFORMANCE OPTIMIZATION
 */
let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            // Scroll-based animations here
            ticking = false;
        });
        ticking = true;
    }
});

/**
 * PRELOAD IMAGES
 */
const images = document.querySelectorAll('img');
images.forEach(img => {
    img.loading = 'lazy';
});

/**
 * ACCESSIBILITY - REDUCE MOTION
 */
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    document.documentElement.style.setProperty('--transition-fast', '0s');
    document.documentElement.style.setProperty('--transition-medium', '0s');
    document.documentElement.style.setProperty('--transition-slow', '0s');
    
    // Disable JS animations
    const style = document.createElement('style');
    style.textContent = `
        *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
        }
    `;
    document.head.appendChild(style);
}

/**
 * SCROLL PROGRESS BAR
 */
function initScrollProgressBar() {
    const progressBar = document.getElementById('scrollProgressBar');
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        progressBar.style.width = scrollPercent + '%';
    });
}

/**
 * BACK TO TOP BUTTON
 */
function initBackToTop() {
    const backToTop = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/**
 * STACKED CARDS - Click to show, with navigation buttons
 */
function initStackedCards() {
    const stackedCards = document.querySelectorAll('.stacked-card');
    if (stackedCards.length === 0) return;
    
    let activeIndex = -1;
    
    // Set initial stacked positions (centered)
    stackedCards.forEach((card, index) => {
        card.style.position = 'absolute';
        card.style.top = (index * 20) + 'px';
        card.style.left = '50%';
        card.style.transform = 'translateX(-50%)';
        card.style.zIndex = (5 - index).toString();
        card.style.transition = 'all 0.4s ease';
        card.style.cursor = 'pointer';
    });
    
    // Create navigation buttons
    const section = document.querySelector('.stacked-section .container');
    if (section) {
        // Remove old nav if exists
        const oldNav = section.querySelector('.stacked-nav');
        if (oldNav) oldNav.remove();
        
        const navDiv = document.createElement('div');
        navDiv.className = 'stacked-nav';
        navDiv.style.cssText = 'display:flex;gap:20px;justify-content:center;margin-top:20px;position:relative;z-index:1000;';
        navDiv.innerHTML = `
            <button class="stacked-nav-btn" style="padding:12px 25px;background:#0a0a0a;color:#fff;border:none;border-radius:25px;cursor:pointer;font-size:14px;font-weight:bold;">
                ← Précédent
            </button>
            <button class="stacked-nav-btn" style="padding:12px 25px;background:#0a0a0a;color:#fff;border:none;border-radius:25px;cursor:pointer;font-size:14px;font-weight:bold;">
                Suivant →
            </button>
        `;
        section.appendChild(navDiv);
        
        // Navigation button events
        const prevBtn = navDiv.querySelector('button:first-child');
        const nextBtn = navDiv.querySelector('button:last-child');
        
        prevBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            if (activeIndex > 0) {
                activeIndex--;
                updateCards();
            }
        });
        
        nextBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            if (activeIndex < stackedCards.length - 1) {
                activeIndex++;
                updateCards();
            }
        });
    }
    
    // Function to update card positions
    function updateCards() {
        stackedCards.forEach((card, index) => {
            if (index === activeIndex) {
                card.style.zIndex = '100';
                card.style.transform = 'translateX(-50%) scale(1.15)';
                card.style.boxShadow = '0 30px 60px rgba(0,0,0,0.3)';
            } else if (index < activeIndex) {
                card.style.zIndex = (5 - index).toString();
                card.style.transform = 'translateX(-50%) translateY(-20px) scale(0.9)';
                card.style.boxShadow = '';
            } else {
                card.style.zIndex = (5 - index).toString();
                card.style.transform = 'translateX(-50%) translateY(' + ((index - activeIndex) * 20) + 'px) scale(0.95)';
                card.style.boxShadow = '';
            }
        });
    }
    
    // Click on card to show it
    stackedCards.forEach((card, index) => {
        card.addEventListener('click', function(e) {
            e.stopPropagation();
            if (activeIndex === index) {
                activeIndex = -1; // deselect
            } else {
                activeIndex = index;
            }
            updateCards();
        });
    });
    
    // Click outside to deselect
    document.addEventListener('click', function() {
        activeIndex = -1;
        updateCards();
    });
    
    // Initialize
    updateCards();
}

/**
 * ENHANCED SCROLL EFFECTS
 */
function initEnhancedScrollEffects() {
    // Parallax for all sections
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const speed = 0.1;
            
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const yPos = (rect.top * speed);
                if (section.style) {
                    section.style.transform = `translateY(${yPos * 0.05}px)`;
                }
            }
        });
    });
    
    // Add smooth parallax to elements
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    parallaxElements.forEach(el => {
        const speed = parseFloat(el.dataset.parallax) || 0.5;
        
        window.addEventListener('scroll', () => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const offset = (window.innerHeight - rect.top) * speed;
                el.style.transform = `translateY(${offset * 0.1}px)`;
            }
        });
    });
}

/**
 * SMOOTH SCROLL REVEAL
 */
function initSmoothScrollReveal() {
    const revealElements = document.querySelectorAll('.section-title, .about-content, .service-card, .timeline-item, .project-card, .contact-item, .stacked-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) scale(1)';
                    entry.target.classList.add('revealed');
                }, index * 100);
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Set initial state
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(80px) scale(0.95)';
        el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(el);
    });
}

/**
 * SMOOTH SCROLL FOR ANCHORS
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/**
 * KEYBOARD NAVIGATION
 */
document.addEventListener('keydown', (e) => {
    // Arrow key navigation
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        const sections = Array.from(document.querySelectorAll('section[id]'));
        const currentSection = sections.find(s => {
            const rect = s.getBoundingClientRect();
            return rect.top <= 150 && rect.bottom > 150;
        });
        
        const currentIndex = sections.indexOf(currentSection);
        if (currentIndex < sections.length - 1) {
            const nextSection = sections[currentIndex + 1];
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
    
    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        const sections = Array.from(document.querySelectorAll('section[id]'));
        const currentSection = sections.find(s => {
            const rect = s.getBoundingClientRect();
            return rect.top <= 150 && rect.bottom > 150;
        });
        
        const currentIndex = sections.indexOf(currentSection);
        if (currentIndex > 0) {
            const prevSection = sections[currentIndex - 1];
            prevSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

/**
 * PERFORMANCE OPTIMIZATION
 */

if (prefersReducedMotion.matches) {
    document.documentElement.style.setProperty('--transition-fast', '0s');
    document.documentElement.style.setProperty('--transition-medium', '0s');
    document.documentElement.style.setProperty('--transition-slow', '0s');
    
    // Disable JS animations
    const style = document.createElement('style');
    style.textContent = `
        *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
        }
    `;
    document.head.appendChild(style);
}

/**
 * ADVANCED SCROLL ANIMATIONS
 * More dramatic scroll-triggered effects
 */
function initAdvancedScrollAnimations() {
    const animatedElements = document.querySelectorAll('.service-card, .project-card, .timeline-item, .contact-item, .certification-card, .stat-item, .stacked-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                const delay = index * 100;
                setTimeout(() => {
                    entry.target.classList.add('scroll-animated');
                }, delay);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(100px) scale(0.8) rotateX(10deg)';
        el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(el);
    });
    
    const style = document.createElement('style');
    style.textContent = `
        .scroll-animated { opacity: 1 !important; transform: translateY(0) scale(1) rotateX(0) !important; }
        .service-card:nth-child(1).scroll-animated { transition-delay: 0s; }
        .service-card:nth-child(2).scroll-animated { transition-delay: 0.1s; }
        .service-card:nth-child(3).scroll-animated { transition-delay: 0.2s; }
        .project-card:nth-child(1).scroll-animated { transition-delay: 0s; }
        .project-card:nth-child(2).scroll-animated { transition-delay: 0.1s; }
        .project-card:nth-child(3).scroll-animated { transition-delay: 0.2s; }
        .stacked-card:nth-child(1).scroll-animated { transition-delay: 0s; }
        .stacked-card:nth-child(2).scroll-animated { transition-delay: 0.1s; }
        .stacked-card:nth-child(3).scroll-animated { transition-delay: 0.2s; }
        .stacked-card:nth-child(4).scroll-animated { transition-delay: 0.3s; }
        .stacked-card:nth-child(5).scroll-animated { transition-delay: 0.4s; }
    `;
    document.head.appendChild(style);
}

/**
 * SCROLL TRIGGERED EFFECTS
 */
function initScrollTriggeredEffects() {
    // Parallax for stacked card images
    const decorativeElements = document.querySelectorAll('.stacked-card-image');
    window.addEventListener('scroll', () => {
        decorativeElements.forEach((el, index) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const speed = (index + 1) * 0.05;
                const yPos = (window.innerHeight - rect.top) * speed;
                el.style.transform = `translateY(${yPos}px) scale(1.1)`;
            }
        });
    });
    
    // Section titles animation
    const sectionTitles = document.querySelectorAll('.section-title');
    const titleObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('title-animated');
        });
    }, { threshold: 0.5 });
    
    sectionTitles.forEach(title => {
        title.style.opacity = '0';
        title.style.transform = 'translateY(50px)';
        title.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        titleObserver.observe(title);
    });
    
    const titleStyle = document.createElement('style');
    titleStyle.textContent = `
        .title-animated { opacity: 1 !important; transform: translateY(0) !important; }
        .section-title::after { content: ''; position: absolute; bottom: -15px; left: 0; width: 0; height: 3px; background: linear-gradient(90deg, var(--accent), transparent); transition: width 1s ease 0.5s; }
        .title-animated::after { width: 150px; }
    `;
    document.head.appendChild(titleStyle);
    
    // Stats scale animation
    const statItems = document.querySelectorAll('.stat-item');
    statItems.forEach((stat, index) => {
        stat.style.opacity = '0';
        stat.style.transform = 'scale(0.5)';
        stat.style.transition = `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`;
    });
    
    window.addEventListener('scroll', () => {
        statItems.forEach(stat => {
            const rect = stat.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                stat.style.opacity = '1';
                stat.style.transform = 'scale(1)';
            }
        });
    });
}

