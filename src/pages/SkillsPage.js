export default function SkillsPage() {
  const tailwindSvg = `
  <div class="text-purple-600">
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 48 48" fill="currentColor">
      <path d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 
        c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24
        c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6
        c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604z
        M12,24c-6.4,0-10.4,3.199-12,9.598
        c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246
        c2.353,2.388,5.077,5.152,11.025,5.152c6.4,0,10.4-3.199,12-9.598
        c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246
        C20.672,26.764,17.949,24,12,24z"/>
    </svg>
  </div>`;

  return `
    <section class="bg-white text-gray-800 py-20 px-6">
      <div class="max-w-7xl mx-auto text-center mb-12">
        <h2 class="text-4xl font-bold text-purple-700 mb-4">Keahlian Saya</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Berikut adalah teknologi dan tools yang saya gunakan secara aktif dalam pengembangan web dan perangkat lunak.
        </p>
      </div>

      <div class="grid md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
        ${renderSkill("fab fa-html5", "HTML")}
        ${renderSkill("fab fa-css3-alt", "CSS")}
        ${renderSkill("fab fa-js", "JavaScript")}
        ${renderSkill(tailwindSvg, "Tailwind", true)}
        ${renderSkill("fab fa-bootstrap", "Bootstrap")}
        ${renderSkill("fab fa-php", "PHP")}
        ${renderSkill("fab fa-laravel", "Laravel")}
        ${renderSkill("fab fa-react", "React JS")}
        ${renderSkill("fab fa-python", "Python")}
        ${renderSkill("fas fa-database", "MySQL")}
        ${renderSkill("fas fa-database", "PostgreSQL")}
        ${renderSkill("fab fa-figma", "Figma")}
      </div>
    </section>
  `;
}


function renderSkill(icon, label, isSvg = false) {
  return `
    <div class="flex items-center space-x-4 md:flex-col md:space-x-0 md:space-y-2 bg-transparent md:bg-purple-50 md:p-4 rounded-xl shadow-none md:shadow hover:md:shadow-lg transition duration-300">
        ${isSvg 
          ? icon 
          : `<i class="${icon} text-2xl md:text-4xl text-purple-600"></i>`}
        <span class="text-base md:text-sm font-medium text-gray-800">${label}</span>
    </div>
  `;
}
