// Main JavaScript File - إدارة التطبيق الأساسية

// ===== DARK MODE =====
document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const htmlElement = document.documentElement;
    
    // استرجاع الوضع المحفوظ من localStorage
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'enabled') {
        htmlElement.classList.add('dark-mode');
        if (darkModeToggle) darkModeToggle.textContent = '☀️';
    }
    
    // تفعيل زر Dark Mode
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            htmlElement.classList.toggle('dark-mode');
            const isDarkMode = htmlElement.classList.contains('dark-mode');
            localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
            this.textContent = isDarkMode ? '☀️' : '🌙';
        });
    }
});

// ===== DROPDOWN MENU =====
document.addEventListener('DOMContentLoaded', function() {
    const dropdownButtons = document.querySelectorAll('.dropdown-btn');
    
    dropdownButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const menu = this.nextElementSibling;
            
            // إغلاق القوائم الأخرى
            document.querySelectorAll('.dropdown-menu').forEach(m => {
                if (m !== menu) m.classList.remove('active');
            });
            
            menu.classList.toggle('active');
        });
    });
    
    // إغلاق القائمة عند النقر خارجها
    document.addEventListener('click', function() {
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            menu.classList.remove('active');
        });
    });
});

// ===== VIDEO PLAYER =====
document.addEventListener('DOMContentLoaded', function() {
    const playButtons = document.querySelectorAll('.play-button');
    
    playButtons.forEach(button => {
        button.addEventListener('click', function() {
            const container = this.closest('.video-container');
            const videoId = container.getAttribute('data-video');
            const start = container.getAttribute('data-start');
            
            let url = `https://www.youtube.com/watch?v=${videoId}`;
            if (start) {
                url += `&t=${start}s`;
            }
            
            window.open(url, '_blank');
        });
    });
});

// ===== LAZY LOADING FOR IMAGES =====
document.addEventListener('DOMContentLoaded', function() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const bgImage = img.getAttribute('data-bg');
                    if (bgImage) {
                        img.style.backgroundImage = `url('${bgImage}')`;
                        img.classList.add('loaded');
                    }
                    observer.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('.thumbnail').forEach(img => {
            imageObserver.observe(img);
        });
    }
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// ===== PERFORMANCE OPTIMIZATION =====
window.addEventListener('load', function() {
    console.log('✅ Page fully loaded and ready');
});