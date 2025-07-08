export default function AboutPage() {
  return `
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
        <img src="/dimas.png" alt="Foto Dimas" class="object-cover w-full h-full">  
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
  `;
}
