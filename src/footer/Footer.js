export default function Footer() {
  return `
    <footer class="bg-white border-t border-purple-600 py-12 px-6">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 text-gray-800">
        <div class="space-y-4">
          <div class="flex items-center space-x-2">
            <img src="/DIA.png" alt="Logo Perusahaan" class="h-8 w-8">
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
  `;
}
