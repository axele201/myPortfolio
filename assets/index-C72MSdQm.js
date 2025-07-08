import{initializeApp as j}from"https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";import{getAuth as L,onAuthStateChanged as M,signInWithEmailAndPassword as B,createUserWithEmailAndPassword as E}from"https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";import{getFirestore as A,doc as $,collection as p,query as b,orderBy as v,onSnapshot as g,setDoc as C,serverTimestamp as f,addDoc as y}from"https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}})();function I(){return setTimeout(()=>{const e=document.getElementById("mobile-menu-button"),s=document.getElementById("mobile-menu");e&&s&&e.addEventListener("click",()=>{s.classList.toggle("hidden")})},0),`
    <nav class="bg-white border-b border-purple-600">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16 items-center">
          <div class="flex items-center space-x-2">
            <a href="#/portfolio">
              <img src="/myPortfolio/DIA.png" alt="Logo Perusahaan" class="h-8 w-8">
              <span class="text-xl font-semibold text-gray-900">Portfolio</span>
            </a>
          </div>

          <div class="hidden md:flex space-x-6">
            <a href="#/portfolio" class="text-gray-700 hover:text-purple-600 font-medium">Home</a>
            <a href="#/portfolio/project" class="text-gray-700 hover:text-purple-600 font-medium">Project</a>
            <a href="#/forums" class="text-gray-700 hover:text-purple-600 font-medium">Contact</a>
          </div>

          <div class="md:hidden">
            <button id="mobile-menu-button" class="text-gray-700 hover:text-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500">
              <i class="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </div>

      <div id="mobile-menu" class="md:hidden hidden px-4 pb-4">
        <a href="#/portfolio" class="block py-2 text-gray-700 hover:text-purple-600">Home</a>
        <a href="#/portfolio/project" class="block py-2 text-gray-700 hover:text-purple-600">Project</a>
        <a href="#/forums" class="block py-2 text-gray-700 hover:text-purple-600">Contact</a>
      </div>
    </nav>
  `}function T(){return`
    <footer class="bg-white border-t border-purple-600 py-12 px-6">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 text-gray-800">
        <div class="space-y-4">
          <div class="flex items-center space-x-2">
            <img src="/myPortfolio/DIA.png" alt="Logo Perusahaan" class="h-8 w-8">
            <span class="text-xl font-semibold text-gray-900">Dimas Ismawan Abdullah</span>
          </div>
          <p class="text-sm leading-relaxed">
            Mahasiswa Teknik Informatika yang suka membangun solusi digital untuk kebutuhan nyata.
          </p>
          <div class="flex space-x-4 mt-4 text-gray-700">
            <a href="https://www.facebook.com/dimasismawan.dimasismawan.5" aria-label="Facebook" class="hover:text-purple-600">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/bananabyte17" aria-label="Instagram" class="hover:text-purple-600">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://github.com/axele201" aria-label="GitHub" class="hover:text-purple-600">
              <i class="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/dimas-ismawan-abdullah-11b574331/" aria-label="LinkedIn" class="hover:text-purple-600">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        <div class="hidden md:block">
          <h4 class="text-gray-900 font-semibold mb-2">Portofolio</h4>
          <ul class="space-y-1 text-sm">
            <li><a href="#/portfolio/project" class="hover:text-purple-600">UMKM Suplier System</a></li>
            <li><a href="#/portfolio/project" class="hover:text-purple-600">Retail Management</a></li>
            <li><a href="#/portfolio/project" class="hover:text-purple-600">Automation Bot</a></li>
          </ul>
        </div>

        <div class="hidden md:block">
          <h4 class="text-gray-900 font-semibold mb-2">Tools & Stack</h4>
          <ul class="space-y-1 text-sm">
            <li><a href="#" class="hover:text-purple-600">React</a></li>
            <li><a href="#" class="hover:text-purple-600">Laravel</a></li>
            <li><a href="#" class="hover:text-purple-600">Tailwind</a></li>
            <li><a href="#" class="hover:text-purple-600">Playwright</a></li>
          </ul>
        </div>

        <div class="hidden md:block">
          <h4 class="text-gray-900 font-semibold mb-2">Tentang Saya</h4>
          <ul class="space-y-1 text-sm">
            <li><a href="#/about" class="hover:text-purple-600">Profil Singkat</a></li>
            <li><a href="#/skills" class="hover:text-purple-600">Keahlian</a></li>
            <li><a href="#/contact" class="hover:text-purple-600">Kontak</a></li>
          </ul>
        </div>

        <div class="hidden md:block">
          <h4 class="text-gray-900 font-semibold mb-2">Lainnya</h4>
          <ul class="space-y-1 text-sm">
            <li><a href="#/cv" class="hover:text-purple-600">CV Saya</a></li>
            <li><a href="mailto:dimasismawan05@gmail.com" class="hover:text-purple-600">Email Saya</a></li>
          </ul>
        </div>
      </div>

      <div class="mt-12 border-t border-purple-200 pt-6 text-center text-sm text-gray-500">
        © 2024 Dimas Ismawan Abdullah, Inc. All rights reserved.
      </div>
    </footer>
  `}function H(e){return`
        <header>
            ${I()}
        </header>
        <main>
            ${e}
        </main>
        <footer>
            ${T()}
        </footer>
    `}function D(){return setTimeout(()=>{const e=document.getElementById("lottie-animation");e&&lottie.loadAnimation({container:e,renderer:"svg",loop:!0,autoplay:!0,path:"/myPortfolio/animation.json"})},0),`
    <section class="relative min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 text-gray-800 flex flex-col-reverse md:flex-row items-center justify-center px-6 py-12 overflow-hidden">

        <div class="relative z-10 w-full md:w-1/2 max-w-md text-center md:text-left space-y-6 md:pl-10">
            <h1 class="text-4xl md:text-5xl font-bold text-purple-700 flex items-center gap-2">
            Dimas Ismawan Abdullah <span class="animate-bounce text-purple-400"></span>
            </h1>
            <p class="text-lg text-purple-600 font-medium border-b border-purple-200 pb-2 inline-block">Fullstack Developer</p>

            <blockquote class="italic text-sm text-gray-500">"Building clean code and meaningful digital experiences."</blockquote>

            <div class="flex justify-center md:justify-start space-x-4 pt-4">
            <a href="https://github.com/axele201" target="_blank" class="text-gray-700 hover:text-purple-700 text-2xl">
                <i class="fab fa-github"></i>
            </a>
            <a href="https://www.instagram.com/bananabyte17" target="_blank" class="text-gray-700 hover:text-purple-700 text-2xl">
                <i class="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/dimas-ismawan-abdullah-11b574331/" target="_blank" class="text-gray-700 hover:text-purple-700 text-2xl">
                <i class="fab fa-linkedin"></i>
            </a>
            </div>
        </div>

        <div class="relative z-10 w-full md:w-1/2 mb-10 md:mb-0 flex justify-center">
            <div class="w-64 h-64">
            <div id="lottie-animation" class="w-full h-full"></div>
            </div>
        </div>
        </section>
  `}function R(){return`
<section class="bg-white text-gray-800">
  <div class="max-w-7xl mx-auto px-6 py-20 flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-center">
    <div class="space-y-4 md:pr-10 text-center md:text-left">
      <h1 class="text-4xl md:text-5xl font-extrabold text-purple-700 leading-tight">Perkenalkan!</h1>
      <h2 class="text-3xl md:text-4xl font-semibold text-gray-800">
        Saya <span class="text-purple-600">Dimas Ismawan Abdullah</span>
      </h2>
      <p class="text-gray-600 text-lg leading-relaxed">
        Seorang Web Developer dengan minat mendalam dalam pengembangan perangkat lunak dan teknologi sejak kelas 3 SMA. 
        Saya ahli dalam <strong>PHP</strong>, <strong>JavaScript</strong>, dan <strong>Python</strong>, dengan pengalaman menggunakan framework <strong>Laravel</strong> dan <strong>React JS</strong>.
        Saya juga terbiasa bekerja dengan <strong>MySQL</strong> dan <strong>PostgreSQL</strong>, serta fokus pada efisiensi dan skalabilitas dalam solusi yang saya bangun.
      </p>
    </div>

    <div class="flex justify-center md:justify-end">
      <div class="relative w-72 h-85 rounded-3xl overflow-hidden shadow-2xl border-4 border-purple-300 hover:scale-105 transition-transform duration-300">
        <img src="/myPortfolio/dimas.png" alt="Foto Dimas" class="object-cover w-full h-full">  
        <div class="absolute -inset-1 rounded-3xl bg-gradient-to-br from-purple-300 to-pink-300 blur-2xl opacity-30 -z-10"></div>
      </div>
    </div>
  </div>

  <div class="bg-purple-50 py-20 px-6">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
      <div>
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Misi Saya</h2>
        <p class="text-gray-700 text-lg mb-6">
          Membangun sistem yang efisien, skalabel, dan berdampak untuk pengguna maupun developer. Saya percaya teknologi bukan hanya alat, tapi juga jembatan inovasi.
        </p>
        <p class="text-gray-600">
          Saya terus belajar dan mengeksplorasi solusi yang tidak hanya berfungsi, tapi juga memiliki nilai estetika dan kinerja tinggi.
        </p>
      </div>

      <div class="space-y-6 text-center md:text-left">
        <div>
          <div class="text-3xl font-bold text-purple-700">21+</div>
          <div class="text-sm text-gray-600">Proyek Diselesaikan</div>
        </div>
        <div>
          <div class="text-3xl font-bold text-purple-700">3 Bahasa</div>
          <div class="text-sm text-gray-600">JavaScript, PHP, Python</div>
        </div>
        <div>
          <div class="text-3xl font-bold text-purple-700">2 Framework</div>
          <div class="text-sm text-gray-600">React JS dan Laravel</div>
        </div>
        <div>
          <div class="text-3xl font-bold text-purple-700">∞</div>
          <div class="text-sm text-gray-600">Semangat belajar dan berkembang</div>
        </div>
      </div>
    </div>
  </div>
</section>
  `}function K(){return`
    <section class="bg-white text-gray-800 py-20 px-6">
      <div class="max-w-7xl mx-auto text-center mb-12">
        <h2 class="text-4xl font-bold text-purple-700 mb-4">Keahlian Saya</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Berikut adalah teknologi dan tools yang saya gunakan secara aktif dalam pengembangan web dan perangkat lunak.
        </p>
      </div>

      <div class="grid md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
        ${r("fab fa-html5","HTML")}
        ${r("fab fa-css3-alt","CSS")}
        ${r("fab fa-js","JavaScript")}
        ${r(`
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
  </div>`,"Tailwind",!0)}
        ${r("fab fa-bootstrap","Bootstrap")}
        ${r("fab fa-php","PHP")}
        ${r("fab fa-laravel","Laravel")}
        ${r("fab fa-react","React JS")}
        ${r("fab fa-python","Python")}
        ${r("fas fa-database","MySQL")}
        ${r("fas fa-database","PostgreSQL")}
        ${r("fab fa-figma","Figma")}
      </div>
    </section>
  `}function r(e,s,n=!1){return`
    <div class="flex items-center space-x-4 md:flex-col md:space-x-0 md:space-y-2 bg-transparent md:bg-purple-50 md:p-4 rounded-xl shadow-none md:shadow hover:md:shadow-lg transition duration-300">
        ${n?e:`<i class="${e} text-2xl md:text-4xl text-purple-600"></i>`}
        <span class="text-base md:text-sm font-medium text-gray-800">${s}</span>
    </div>
  `}function q(){return`
    <div class="overflow-hidden bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div class="lg:pt-4 lg:pr-8">
            <div class="lg:max-w-lg">
              <h2 class="text-base font-semibold text-indigo-600">Tentang Saya</h2>
              <p class="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                Bangun Solusi Digital Sederhana & Efektif
              </p>
              <p class="mt-6 text-lg text-gray-700">
                Saya adalah seorang mahasiswa Teknik Informatika yang memiliki minat tinggi dalam membangun aplikasi web ringan namun fungsional. Fokus saya adalah menciptakan solusi yang mudah digunakan, hemat biaya, dan bisa langsung dijalankan di browser tanpa infrastruktur berat.
              </p>
              <dl class="mt-10 max-w-xl space-y-6 text-base text-gray-600 lg:max-w-none">
                <div class="relative pl-9">
                  <dt class="inline font-semibold text-gray-900">
                    <svg class="absolute top-1 left-1 size-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M5.5 17a4.5 4.5 0 0 1-1.44-8.765 4.5 4.5 0 0 1 8.302-3.046 3.5 3.5 0 0 1 4.504 4.272A4 4 0 0 1 15 17H5.5Zm3.75-2.75a.75.75 0 0 0 1.5 0V9.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0l-3.25 3.5a.75.75 0 1 0 1.1 1.02l1.95-2.1v4.59Z" clip-rule="evenodd" />
                    </svg>
                    Fokus UMKM & Solusi Ringan
                  </dt>
                  <dd class="inline">
                    Saya membangun sistem berbasis HTML, JS, dan Tailwind CSS yang bisa dihosting gratis, cocok untuk UMKM dan individu.
                  </dd>
                </div>

                <div class="relative pl-9">
                  <dt class="inline font-semibold text-gray-900">
                    <svg class="absolute top-1 left-1 size-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z" clip-rule="evenodd" />
                    </svg>
                    Praktis dan Otomatis
                  </dt>
                  <dd class="inline">
                    Saya juga mengembangkan bot otomatisasi seperti scraping soal dari Moodle untuk mempermudah pekerjaan rutin.
                  </dd>
                </div>

                <div class="relative pl-9">
                  <dt class="inline font-semibold text-gray-900">
                    <svg class="absolute top-1 left-1 size-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M4.632 3.533A2 2 0 0 1 6.577 2h6.846a2 2 0 0 1 1.945 1.533l1.976 8.234A3.489 3.489 0 0 0 16 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234Z" />
                      <path fill-rule="evenodd" d="M4 13a2 2 0 1 0 0 4h12a2 2 0 1 0 0-4H4Zm11.24 2a.75.75 0 0 1 .75-.75H16a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75h-.01a.75.75 0 0 1-.75-.75V15Zm-2.25-.75a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75h-.01Z" clip-rule="evenodd" />
                    </svg>
                    Berdasarkan Kebutuhan Nyata
                  </dt>
                  <dd class="inline">
                    Banyak project saya berasal dari masalah langsung yang dihadapi oleh pelaku usaha, staf, atau dosen — dan langsung bisa digunakan.
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <img src="/myPortfolio/project/view.png" alt="Cuplikan Project" class="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0" width="2432" height="1442" />
        </div>

        <div class="text-center mt-12">
          <a href="#/portfolio/project" class="text-indigo-600 hover:underline text-lg font-medium">Lihat Portofolio Lengkap →</a>
        </div>
      </div>
    </div>
  `}function F(){return`
        ${D()}
        ${R()}
        ${K()}
        ${q()}
    `}function J(){return setTimeout(()=>{document.body.addEventListener("click",()=>{location.hash="#/portfolio"},{once:!0});const e=document.getElementById("lottie-wave");e&&lottie.loadAnimation({container:e,renderer:"svg",loop:!0,autoplay:!0,path:"/myPortfolio/animation.json"})},0),`
    <section class="min-h-screen flex flex-col justify-center items-center bg-purple-50 text-center px-4 cursor-pointer">
      <div id="lottie-wave" class="w-40 h-40 mb-4"></div>

      <div class="flex items-center justify-center space-x-2 mb-4">
        <h1 class="text-5xl font-bold text-purple-700">Hi, I’m Dimas</h1>
      </div>

      <p class="text-lg text-gray-700 max-w-xl">
        Klik di mana saja untuk masuk ke portfolio saya.
      </p>
    </section>
  `}function O(){const e={};function s(a){const t=document.getElementById(a),i=t.children.length;e[a]=(e[a]||0)+1,e[a]>=i&&(e[a]=0),t.style.transform=`translateX(-${e[a]*100}%)`}function n(a){const t=document.getElementById(a),i=t.children.length;e[a]=(e[a]||0)-1,e[a]<0&&(e[a]=i-1),t.style.transform=`translateX(-${e[a]*100}%)`}return window.nextSlide=s,window.prevSlide=n,setTimeout(()=>{document.querySelectorAll(".see-more-btn").forEach(a=>{a.addEventListener("click",()=>{const t=a.previousElementSibling;t.classList.contains("max-h-[140px]")?(t.classList.remove("max-h-[140px]"),t.classList.add("max-h-[1000px]"),a.textContent="Tampilkan lebih sedikit"):(t.classList.remove("max-h-[1000px]"),t.classList.add("max-h-[140px]"),a.textContent="Lihat selengkapnya")})})},0),`
    <section class="bg-white text-gray-800 py-20 px-6">
      <div class="max-w-7xl mx-auto text-center mb-12">
        <h2 class="text-4xl font-bold text-purple-700 mb-4">myProject</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Beberapa proyek yang saya kerjakan.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div class="bg-purple-50 rounded-xl shadow hover:shadow-lg transition duration-300 overflow-hidden">
          <div class="relative w-full aspect-[16/9] overflow-hidden">
            <div class="flex transition-transform duration-500 ease-in-out w-full h-full" id="slider-1">
              <img src="/myPortfolio/project/suplierProject1.png" class="w-full h-full flex-shrink-0 object-cover" alt="Project 1">
              <img src="/myPortfolio/project/suplierProject2.png" class="w-full h-full flex-shrink-0 object-cover" alt="Project 2">
            </div>
            <button onclick="prevSlide('slider-1')" class="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 p-1 rounded-full hover:bg-opacity-100">◀</button>
            <button onclick="nextSlide('slider-1')" class="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 p-1 rounded-full hover:bg-opacity-100">▶</button>
          </div>
          <div class="p-6">
            <h3 class="text-lg font-semibold text-purple-800 mb-2">UMKM Suplier System</h3>
            <div class="relative">
              <p class="desc text-sm text-gray-600 overflow-hidden max-h-[140px] transition-all duration-300">
                Sistem ini dibangun khusus untuk membantu UMKM dalam mengelola data suplier dan transaksi secara efisien dan terintegrasi. Menggunakan teknologi Firebase untuk penyimpanan data real-time, Google App Script sebagai backend otomatisasi, imgBB untuk manajemen gambar, serta integrasi WhatsApp Blast untuk komunikasi langsung dengan suplier. Karena dibangun dengan stack ringan berbasis HTML, JavaScript, dan Tailwind CSS, sistem ini dapat dihosting secara online dengan biaya yang MURAH dan TERJANGKAU. Diharapkan dengan adanya Suplier Management System ini, UMKM dapat meningkatkan efisiensi operasional, mempercepat proses komunikasi, serta memiliki sistem pencatatan yang lebih rapi dan profesional tanpa perlu infrastruktur server yang mahal.
              </p>
              <button class="see-more-btn text-purple-600 text-sm mt-2 hover:underline">Lihat selengkapnya</button>
            </div>
          </div>
        </div>

        <div class="bg-purple-50 rounded-xl shadow hover:shadow-lg transition duration-300 overflow-hidden">
          <div class="relative w-full aspect-[16/9] overflow-hidden">
            <div class="flex transition-transform duration-500 ease-in-out w-full h-full" id="slider-2">
              <img src="/myPortfolio/project/rekapProject1.png" class="w-full h-full flex-shrink-0 object-cover" alt="Project 1">
              <img src="/myPortfolio/project/rekapProject2.png" class="w-full h-full flex-shrink-0 object-cover" alt="Project 2">
            </div>
            <button onclick="prevSlide('slider-2')" class="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 p-1 rounded-full hover:bg-opacity-100">◀</button>
            <button onclick="nextSlide('slider-2')" class="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 p-1 rounded-full hover:bg-opacity-100">▶</button>
          </div>
          <div class="p-6">
            <h3 class="text-lg font-semibold text-purple-800 mb-2">Rekap Lembur Request</h3>
            <div class="relative">
              <p class="desc text-sm text-gray-600 overflow-hidden max-h-[140px] transition-all duration-300">
                Proyek ini dibuat berdasarkan permintaan dari seorang admin yang membutuhkan sistem rekap lembur karyawan yang praktis, efisien, dan selalu dapat diakses secara online. Sistem ini dibangun dengan HTML, JavaScript, dan Tailwind CSS serta dihosting gratis melalui GitHub Pages. Dengan pendekatan ini, sistem tetap dapat online 24/7 tanpa biaya server tambahan dan cocok untuk organisasi skala kecil hingga menengah.
              </p>
              <button class="see-more-btn text-purple-600 text-sm mt-2 hover:underline">Lihat selengkapnya</button>
            </div>
          </div>
        </div>

        <div class="bg-purple-50 rounded-xl shadow hover:shadow-lg transition duration-300 overflow-hidden">
          <img src="/myPortfolio/project/retailManagemetSystem.png" alt="Project 2" class="w-full aspect-[16/9] object-cover">
          <div class="p-6">
            <h3 class="text-lg font-semibold text-purple-800 mb-2">Sistem Retail Management</h3>
            <div class="relative">
              <p class="desc text-sm text-gray-600 overflow-hidden max-h-[140px] transition-all duration-300">
                Sistem ini dirancang untuk mengelola operasional berbagai outlet dan warehouse secara efisien. Menggunakan Laravel sebagai backend dan ReactJS sebagai frontend. Mendukung manajemen stok, distribusi, penjualan, absensi, dan penggajian otomatis. Cocok untuk perusahaan retail yang ingin efisien dan punya kontrol penuh atas operasionalnya.
              </p>
              <button class="see-more-btn text-purple-600 text-sm mt-2 hover:underline">Lihat selengkapnya</button>
            </div>
          </div>
        </div>

        <div class="bg-purple-50 rounded-xl shadow hover:shadow-lg transition duration-300 overflow-hidden">
          <div class="relative w-full aspect-[16/9] overflow-hidden">
            <div class="flex transition-transform duration-500 ease-in-out w-full h-full" id="slider-3">
              <img src="/myPortfolio/project/ecommerce1.png" class="w-full h-full flex-shrink-0 object-cover" alt="Project 1">
              <img src="/myPortfolio/project/ecommerce2.png" class="w-full h-full flex-shrink-0 object-cover" alt="Project 2">
            </div>
            <button onclick="prevSlide('slider-3')" class="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 p-1 rounded-full hover:bg-opacity-100">◀</button>
            <button onclick="nextSlide('slider-3')" class="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 p-1 rounded-full hover:bg-opacity-100">▶</button>
          </div>
          <div class="p-6">
            <h3 class="text-lg font-semibold text-purple-800 mb-2">Ecommerce Request</h3>
            <div class="relative">
              <p class="desc text-sm text-gray-600 overflow-hidden max-h-[140px] transition-all duration-300">
                Proyek ini merupakan solusi e-commerce berbasis web yang dirancang untuk salah satu toko dengan keterbatasan anggaran, sehingga tidak memungkinkan untuk menggunakan hosting berbayar. Sebagai alternatif, aplikasi ini dihosting melalui <strong>GitHub Pages</strong> demi menghemat biaya, namun tetap menjaga performa dan keamanan sistem.
                <br><br>
                Untuk menangani operasional dan kebutuhan teknis, digunakan beberapa teknologi ringan dan efisien: <strong>Firebase</strong> digunakan untuk proses checkout dan pengelolaan data transaksi; <strong>Google App Script</strong> mengelola automasi teks deskripsi produk dan alur pemesanan; <strong>imgBB</strong> dimanfaatkan sebagai tempat penyimpanan gambar produk; serta <strong>WA Blast</strong> untuk mengirimkan invoice dan notifikasi pembelian langsung ke pelanggan.
                <br><br>
                Dengan pendekatan ini, sistem e-commerce tetap dapat berjalan online 24/7 tanpa memerlukan server fisik, dan dapat dioperasikan dengan <strong>biaya yang sangat terjangkau</strong> namun tetap profesional.
            </p>

              <button class="see-more-btn text-purple-600 text-sm mt-2 hover:underline">Lihat selengkapnya</button>
            </div>
          </div>
        </div>

        <div class="bg-purple-50 rounded-xl shadow hover:shadow-lg transition duration-300 overflow-hidden">
          <img src="/myPortfolio/project/scraping.png" alt="Project 3" class="w-full aspect-[16/9] object-cover">
          <div class="p-6">
            <h3 class="text-lg font-semibold text-purple-800 mb-2">Scraping & Automation Bot</h3>
            <div class="relative">
              <p class="text-sm text-gray-600 mb-4">
                Otomatisasi kuis Moodle berbasis Python & Playwright dengan kemampuan bypass Cloudflare menggunakan Chrome DevTools Protocol (CDP). Sistem ini melakukan re-attempt kuis berulang untuk mengumpulkan soal dan kunci jawaban ke dalam format HTML & JSON, sangat cocok untuk dokumentasi atau analisis bank soal. 
            </p>
            </div>
          </div>
        </div>

        <div class="bg-purple-50 rounded-xl shadow hover:shadow-lg transition duration-300 overflow-hidden">
          <img src="/myPortfolio/project/ramadan.png" alt="Project 3" class="w-full aspect-[16/9] object-cover">
          <div class="p-6">
            <h3 class="text-lg font-semibold text-purple-800 mb-2">Countdown Waktu Salat & Quest Ramadan</h3>
            <div class="relative">
              <p class="desc text-sm text-gray-600 overflow-hidden max-h-[140px] transition-all duration-300">
                Aplikasi sederhana ini dirancang untuk memeriahkan bulan Ramadan dengan menampilkan countdown waktu salat (Imsak, Subuh, Maghrib, dst) secara real-time. Selain itu, aplikasi ini dilengkapi fitur <strong>Quest Harian Ramadan</strong> untuk mendorong aktivitas ibadah dan produktivitas selama bulan suci.
                <br><br>
                Seluruh data quest disimpan secara lokal menggunakan <code>localStorage</code>, sehingga pengguna dapat menandai tugas yang telah diselesaikan tanpa memerlukan akun atau koneksi server. Aplikasi dibangun dengan HTML, JavaScript, dan Tailwind CSS sehingga ringan dan bisa dijalankan langsung di browser.
            </p>
            <button class="see-more-btn text-purple-600 text-sm mt-2 hover:underline">Lihat selengkapnya</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `}function N(){return`
    <section class="min-h-screen bg-white p-4">
      <div class="max-w-xl mx-auto shadow rounded-lg p-4 border">
        <h2 class="text-xl font-bold text-purple-600 mb-4">💬 Chat with Dimas</h2>
        <div id="chat-box" class="h-64 overflow-y-auto border p-2 rounded bg-gray-50 mb-4"></div>
        <form id="chat-form" class="flex gap-2">
          <input type="text" id="message" placeholder="Ketik pesan..." class="flex-1 p-2 border rounded" required />
          <button type="submit" class="bg-purple-600 text-white px-4 py-2 rounded">Kirim</button>
        </form>
      </div>
    </section>
  `}function U(){return setTimeout(()=>{const e=document.getElementById("toggle-register"),s=document.getElementById("register-container");let n=!1;e?.addEventListener("click",()=>{n=!n,s.classList.toggle("max-h-0",!n),s.classList.toggle("max-h-screen",n)})},0),`
    <section class="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-purple-200 p-4">
      <div class="bg-white shadow-2xl rounded-2xl overflow-hidden w-full max-w-md">
        <div class="p-8">
          <h2 class="text-3xl font-bold text-purple-700 mb-2 text-center">Selamat Datang</h2>
          <p class="text-sm text-gray-500 mb-6 text-center">Silakan login terlebih dahulu</p>

          <form id="login-form" class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" name="email" placeholder="you@example.com"
                class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none" required />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input type="password" name="password" placeholder="******"
                class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none" required />
            </div>
            <button type="submit"
              class="w-full py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-300">
              Login
            </button>
            <p id="login-error" class="text-sm text-red-600 mt-2 hidden">Login gagal, coba lagi.</p>
          </form>

          <div class="text-center mt-6">
            <button id="toggle-register"
              class="text-sm text-purple-600 hover:underline focus:outline-none transition duration-300">
              Belum punya akun? Daftar
            </button>
          </div>

          <div id="register-container" class="max-h-0 overflow-hidden transition-all duration-500 ease-in-out mt-4">
            <form id="register-form" class="space-y-4 pt-4 border-t border-gray-200 mt-4">
              <h3 class="text-lg font-semibold text-purple-600 text-center">Buat Akun Baru</h3>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" name="email" placeholder="you@example.com"
                  class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none" required />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input type="password" name="password" placeholder="******"
                  class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none" required />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Konfirmasi Password</label>
                <input type="password" name="confirm" placeholder="******"
                  class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none" required />
              </div>
              <button type="submit"
                class="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300">
                Register
              </button>
              <p id="register-error" class="text-sm text-red-600 mt-2 hidden">Registrasi gagal, coba lagi.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  `}function z(){return`
    <section class="min-h-screen bg-white p-6">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-2xl font-bold text-purple-700 mb-4">💼 Admin Chat Panel</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          
          <div class="bg-gray-50 p-4 border rounded" id="user-list">
            <h3 class="text-lg font-semibold mb-2">Pengguna</h3>
            <div id="users" class="space-y-2"></div>
          </div>

          <div class="md:col-span-3">
            <div class="border rounded p-4 h-[400px] overflow-y-auto bg-gray-100 mb-4" id="chat-box-admin"></div>
            <form id="admin-chat-form" class="flex gap-2">
              <input type="text" id="admin-message" class="flex-1 border rounded p-2" placeholder="Ketik pesan..." required />
              <button class="bg-purple-600 text-white px-4 py-2 rounded" type="submit">Kirim</button>
            </form>
          </div>

        </div>
      </div>
    </section>
  `}const V={apiKey:"AIzaSyA2NgjgwjBogA5Capz7d5_PPsT3tkj9oTk",authDomain:"portfoliodimasforum.firebaseapp.com",projectId:"portfoliodimasforum",storageBucket:"portfoliodimasforum.appspot.com",messagingSenderId:"365108246554",appId:"1:365108246554:web:16f36847aaf7d0610eb9a3",measurementId:"G-NWM4FNMMK4"},k=j(V),h=L(k),m=A(k);function G(){const e=document.getElementById("chat-box"),s=document.getElementById("chat-form"),n=document.getElementById("message");M(h,a=>{if(!a)return window.location.hash="#/login";const t=$(m,"chats",a.uid),i=p(m,`chats/${a.uid}/messages`),l=b(i,v("timestamp","asc"));g(l,o=>{e.innerHTML="",o.forEach(d=>{const c=d.data();e.innerHTML+=`<div><strong>${c.sender==="admin"?"👨‍💼 Admin":"👤 You"}</strong>: ${c.text}</div>`,e.scrollTop=e.scrollHeight})}),s.addEventListener("submit",async o=>{o.preventDefault(),n.value.trim()&&(await C(t,{userEmail:a.email,createdAt:f()},{merge:!0}),await y(i,{text:n.value.trim(),sender:"user",timestamp:f()}),n.value="")})})}function W(){const e=document.getElementById("login-form"),s=document.getElementById("register-form"),n=document.getElementById("login-error"),a=document.getElementById("register-error");e&&e.addEventListener("submit",async t=>{t.preventDefault();const i=e.email.value.trim(),l=e.password.value.trim();try{await B(h,i,l),window.location.hash="#/forums"}catch{n.classList.remove("hidden")}}),s&&s.addEventListener("submit",async t=>{t.preventDefault();const i=s.email.value.trim(),l=s.password.value.trim(),o=s.confirm.value.trim();if(l.length<6){a.textContent="Password minimal 6 karakter",a.classList.remove("hidden");return}if(l!==o){a.textContent="Password tidak cocok",a.classList.remove("hidden");return}try{await E(h,i,l),window.location.hash="#/forums"}catch{a.textContent="Registrasi gagal. Gunakan email yang valid.",a.classList.remove("hidden")}})}function Z(){const e=document.getElementById("users"),s=document.getElementById("chat-box-admin"),n=document.getElementById("admin-chat-form"),a=document.getElementById("admin-message");let t=null;const i=p(m,"chats");g(i,o=>{e.innerHTML="",o.forEach(d=>{const c=d.data(),u=document.createElement("div");u.className="p-2 bg-white border rounded hover:bg-purple-100 cursor-pointer",u.textContent=c.userEmail,u.onclick=()=>l(d.id),e.appendChild(u)})});function l(o){t=o;const d=p(m,`chats/${o}/messages`),c=b(d,v("timestamp","asc"));g(c,u=>{s.innerHTML="",u.forEach(S=>{const x=S.data(),P=x.sender==="admin"?"👨‍💼 Admin":"👤 User";s.innerHTML+=`<div class="mb-2"><strong>${P}:</strong> ${x.text}</div>`}),s.scrollTop=s.scrollHeight})}n.addEventListener("submit",async o=>{if(o.preventDefault(),!t||!a.value.trim())return;const d=p(m,`chats/${t}/messages`);await y(d,{text:a.value.trim(),sender:"admin",timestamp:f()}),a.value=""})}const Q={"/":J,"/portfolio":F,"/portfolio/project":O,"/forums":N,"/login":U,"/admin":z};function w(){const e=document.getElementById("app"),s=location.hash.slice(1)||"/",n=Q[s]||(()=>"<h1>404 Page Not Found!</h1>"),a=s==="/"?n():H(n());e.innerHTML=a,s==="/forums"&&G(),s==="/login"&&W(),s==="/admin"&&Z()}window.addEventListener("DOMContentLoaded",w);window.addEventListener("hashchange",w);
