// Textos por idioma
const texts = {
    pt: {
      title: "Sobre Mim",
      description: "Olá! Eu sou <strong>Seu Nome</strong>, um(a) Desenvolvedor(a) Criativo(a) apaixonado(a) por transformar ideias em experiências digitais incríveis. 🚀",
      profession: "Profissão: Desenvolvedor(a) Front-End",
      interests: "Interesses: Web Design, Animação, UX/UI",
      skills: "Habilidades: HTML, CSS, JavaScript, GSAP",
      download: "Baixar Currículo",
      contact: "Entrar em Contato"
    },
    en: {
      title: "About Me",
      description: "Hello! I'm <strong>Your Name</strong>, a passionate Creative Developer who loves turning ideas into amazing digital experiences. 🚀",
      profession: "Profession: Front-End Developer",
      interests: "Interests: Web Design, Animation, UX/UI",
      skills: "Skills: HTML, CSS, JavaScript, GSAP",
      download: "Download CV",
      contact: "Contact Me"
    },
    fr: {
      title: "À Propos de Moi",
      description: "Bonjour ! Je suis <strong>Votre Nom</strong>, un(e) Développeur(se) Créatif(ve) passionné(e) par la création d'expériences numériques uniques. 🚀",
      profession: "Profession : Développeur(se) Front-End",
      interests: "Centres d'intérêt : Web Design, Animation, UX/UI",
      skills: "Compétences : HTML, CSS, JavaScript, GSAP",
      download: "Télécharger le CV",
      contact: "Me Contacter"
    }
  };
  
  // Função para mudar idioma
  function setLanguage(lang) {
    const content = texts[lang];
    const aboutContent = document.getElementById('about-content');
  
    // Animação de saída
    gsap.to(aboutContent, {opacity: 0, duration: 0.3, onComplete: () => {
      aboutContent.innerHTML = `
        <h1>${content.title}</h1>
        <p>${content.description}</p>
        <ul class="info-list">
          <li><strong>${content.profession}</strong></li>
          <li><strong>${content.interests}</strong></li>
          <li><strong>${content.skills}</strong></li>
        </ul>
        <div class="buttons">
          <a href="seu-curriculo.pdf" download>${content.download}</a>
          <a href="mailto:seuemail@exemplo.com">${content.contact}</a>
        </div>
      `;
      // Animação de entrada
      gsap.to(aboutContent, {opacity: 1, duration: 0.5});
    }});
  }
  
  // Inicializa em português
  setLanguage('pt');
  
  // Lógica do botão de linguagens
  const langBtn = document.getElementById('lang-btn');
  const langMenu = document.getElementById('lang-menu');
  
  langBtn.addEventListener('click', () => {
    langMenu.classList.toggle('hidden');
  });
  
  // Escolher linguagem
  langMenu.querySelectorAll('li').forEach(item => {
    item.addEventListener('click', () => {
      const lang = item.getAttribute('data-lang');
      setLanguage(lang);
      langMenu.classList.add('hidden');
    });
  });