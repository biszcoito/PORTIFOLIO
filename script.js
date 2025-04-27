// Inicializar Barba.js para transições
barba.init({
    transitions: [{
      name: 'fade',
      leave(data) {
        return gsap.to(data.current.container, {
          opacity: 0,
          duration: 0.5
        });
      },
      enter(data) {
        return gsap.from(data.next.container, {
          opacity: 0,
          duration: 0.5
        });
      }
    }]
  });
  
  // Função para animar elementos ao carregar a página
  function animateContent() {
    const elements = document.querySelectorAll('.intro h1, .intro p, .intro a');
    elements.forEach((el, index) => {
      gsap.from(el, {
        opacity: 0,
        y: 50,
        delay: index * 0.2,
        duration: 1,
        ease: "power2.out"
      });
    });
  }
  
  // Rodar animação quando a página carrega
  document.addEventListener('DOMContentLoaded', animateContent);
  
  // Rodar animação quando Barba carregar uma nova página
  barba.hooks.afterEnter(() => {
    animateContent();
  });

  