const languageColors = {
  javascript: '#f1e05a',
  typescript: '#3178c6',
  python: '#3572A5',
  java: '#b07219',
  html: '#e34c26',
  css: '#563d7c',
  react: '#61dafb',
  node: '#6cc24a',
  php: '#4F5D95',
  go: '#00ADD8',
  ruby: '#701516',
  c: '#555555',
  'c++': '#f34b7d',
  'c#': '#178600',
  shell: '#89e051',
  vue: '#41b883',
  default: '#8257e5'
};

const username = "keydnss";

fetch(`https://api.github.com/users/${username}/repos`)
  .then(response => response.json())
  .then(repos => {
    const container = document.getElementById("repos");

    repos.forEach(repo => {
      const card = document.createElement("div");
      card.className = "repo-card";
      const language = repo.language || 'Default';
      const languageColor = languageColors[language.toLowerCase()] || languageColors.default;

      card.innerHTML = `
      <a href="${repo.html_url}" target="_blank">
        <div class="desc">
          <h3>${repo.name}</h3>
          <p>${repo.description || "Sem descrição."}</p>
        </div>  
        <img src="assets/Line 1.svg" alt="Linha divisória" id="linhadivisoria">
        <div class="propriedades">
          <span class="repo-language-indicator" style="background-color: ${languageColor}"></span>
          ${language}
        </div>
      </a>
      `;

      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Erro ao buscar repositórios:", error);
  });

  document.querySelectorAll('.scroll-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const section = document.getElementById(targetId);

            if (section) {
                section.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center' 
                });
            }
        });
    });

window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
         header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});