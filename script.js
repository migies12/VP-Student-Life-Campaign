// JavaScript for VP Student Life Campaign Website

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active navigation link highlighting
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
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

    // Navbar background change on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(0, 33, 69, 0.98)';
        } else {
            navbar.style.background = 'rgba(0, 33, 69, 0.95)';
        }
    });

    // Back to top button
    const backToTopButton = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Animated counter for stats
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-number');
        const speed = 200; // The lower the slower

        counters.forEach(counter => {
            const animate = () => {
                const value = +counter.getAttribute('data-target') || 0;
                const data = +counter.innerText;
                const time = value / speed;
                
                if (data < value) {
                    counter.innerText = Math.ceil(data + time);
                    setTimeout(animate, 1);
                } else {
                    counter.innerText = value;
                }
            };
            animate();
        });
    }

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // Trigger counter animation for stats section
                if (entry.target.classList.contains('about-stats')) {
                    animateCounters();
                }
            }
        });
    }, observerOptions);

    // Elements to observe for animations
    const elementsToAnimate = document.querySelectorAll(
        '.life-card, .platform-item, .contact-item, .about-stats, .hero-text, .hero-image'
    );
    
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });

    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Basic validation
        if (!name || !email || !subject || !message) {
            showNotification('Please fill in all fields!', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address!', 'error');
            return;
        }
        
        // Simulate form submission (replace with actual form handling)
        showNotification('Thank you for your message! I\'ll get back to you soon.', 'success');
        contactForm.reset();
    });

    // Email validation function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Notification system
    function showNotification(message, type) {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(notification => notification.remove());
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
                <span>${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            padding: 20px;
            border-radius: 10px;
            color: white;
            font-weight: 600;
            z-index: 10000;
            max-width: 400px;
            opacity: 0;
            transform: translateX(100%);
            transition: all 0.3s ease;
            ${type === 'success' ? 'background: linear-gradient(135deg, #2E8B57 0%, #32CD32 100%);' : 'background: linear-gradient(135deg, #E53E3E 0%, #FF6B35 100%);'}
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateX(0)';
        }, 10);
        
        // Close button functionality
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        });
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.opacity = '0';
                notification.style.transform = 'translateX(100%)';
                setTimeout(() => notification.remove(), 300);
            }
        }, 5000);
    }

    // Image upload handling for candidate photos
    function setupImageHandling() {
        const candidatePhotoPlaceholder = document.querySelector('.candidate-photo .photo-placeholder');
        const aboutPhotoPlaceholder = document.querySelector('.about-photo .photo-placeholder');
        
        if (candidatePhotoPlaceholder) {
            candidatePhotoPlaceholder.addEventListener('click', function() {
                const input = document.createElement('input');
                input.type = 'file';
                input.accept = 'image/*';
                input.addEventListener('change', function(e) {
                    const file = e.target.files[0];
                    if (file) {
                        const reader = new FileReader();
                        reader.onload = function(e) {
                            const img = document.getElementById('candidate-image');
                            img.src = e.target.result;
                            img.style.display = 'block';
                            candidatePhotoPlaceholder.style.display = 'none';
                        };
                        reader.readAsDataURL(file);
                    }
                });
                input.click();
            });
        }
        
        if (aboutPhotoPlaceholder) {
            aboutPhotoPlaceholder.addEventListener('click', function() {
                const input = document.createElement('input');
                input.type = 'file';
                input.accept = 'image/*';
                input.addEventListener('change', function(e) {
                    const file = e.target.files[0];
                    if (file) {
                        const reader = new FileReader();
                        reader.onload = function(e) {
                            const img = document.getElementById('about-image');
                            img.src = e.target.result;
                            img.style.display = 'block';
                            aboutPhotoPlaceholder.style.display = 'none';
                        };
                        reader.readAsDataURL(file);
                    }
                });
                input.click();
            });
        }
    }

    setupImageHandling();

    // Typing effect for hero title
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    // Add some visual flair on page load
    setTimeout(() => {
        const candidateName = document.querySelector('.candidate-name');
        if (candidateName && candidateName.textContent === '[CANDIDATE NAME]') {
            typeWriter(candidateName, '[CANDIDATE NAME]', 150);
        }
    }, 1000);

    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero-background');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Add hover effects to cards
    const cards = document.querySelectorAll('.life-card, .platform-item');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Social media link handlers
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') {
                e.preventDefault();
                showNotification('Please update this link with your social media profile!', 'error');
            }
        });
    });

    // Load candidate data from localStorage (for demo purposes)
    function loadCandidateData() {
        const savedData = localStorage.getItem('candidateData');
        if (savedData) {
            const data = JSON.parse(savedData);
            updateCandidateInfo(data);
        }
    }

    // Save candidate data to localStorage
    function saveCandidateData(data) {
        localStorage.setItem('candidateData', JSON.stringify(data));
    }

    // Update candidate information
    function updateCandidateInfo(data) {
        if (data.name) {
            document.querySelectorAll('.candidate-name').forEach(el => {
                el.textContent = data.name;
            });
            document.title = `${data.name} for VP Student Life - UBC AMS`;
        }
        
        if (data.email) {
            document.querySelector('.contact-details p').textContent = data.email;
        }
        
        // Add more data updating logic as needed
    }

    // Initialize candidate data loading
    loadCandidateData();

    // Add a simple admin panel for updating candidate info (hidden by default)
    function createAdminPanel() {
        const adminButton = document.createElement('button');
        adminButton.innerHTML = '⚙️';
        adminButton.style.cssText = `
            position: fixed;
            bottom: 30px;
            left: 30px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            border: none;
            background: linear-gradient(135deg, #002145 0%, #0f4c8c 100%);
            color: white;
            font-size: 20px;
            cursor: pointer;
            z-index: 1000;
            opacity: 0.7;
            transition: all 0.3s ease;
        `;
        
        adminButton.addEventListener('click', function() {
            showNotification('Admin panel coming soon! For now, edit the HTML directly to customize your information.', 'info');
        });
        
        document.body.appendChild(adminButton);
    }

    createAdminPanel();

    console.log('VP Student Life Campaign Website loaded successfully! 🚀');
    console.log('To customize this website, edit the placeholder text in the HTML file.');
});