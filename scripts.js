// Scroll Suave para seções ao clicar no menu de navegação
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 50,  // Ajuste o deslocamento do topo se necessário
            behavior: 'smooth'
        });
    });
});

// Destacar link de navegação conforme a seção ativa
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 60;  // Ajuste para o cabeçalho
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Efeito de fade-in nas seções ao rolar a página
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
        }
    });
});

document.querySelectorAll('.content-section').forEach(section => {
    observer.observe(section);
});

// Adiciona animação de fade-in quando o elemento aparece na tela
document.querySelectorAll('.content-section').forEach(section => {
    section.classList.add('fade-in');
});

const images = document.querySelectorAll('.slide-in-left, .slide-in-right');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('slide-in-visible');
        }
    });
});

images.forEach(image => {
    observer.observe(image);
});
