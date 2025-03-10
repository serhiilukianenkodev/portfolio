document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const closeBtn = document.querySelector('.close-btn');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    menuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        
        if (window.innerWidth < 768) {
            document.body.style.overflow = 'hidden';
        }
    });
    
    closeBtn.addEventListener('click', function() {
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                navMenu.classList.remove('active');
                
                if (window.innerWidth < 768) {
                    document.body.style.overflow = '';
                }
                
                targetSection.scrollIntoView({ 
                    behavior: 'smooth' 
                });
            }
        });
    });
    
    const orderBtn = document.querySelector('.order-btn');
    orderBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({ 
                behavior: 'smooth' 
            });
        }
    });
    
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 768) {
            document.body.style.overflow = '';
        } else if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        }
    });
});