export default function ViewPort() {
  return `
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

          <img src="/project/view.png" alt="Cuplikan Project" class="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0" width="2432" height="1442" />
        </div>

        <div class="text-center mt-12">
          <a href="#/portfolio/project" class="text-indigo-600 hover:underline text-lg font-medium">Lihat Portofolio Lengkap →</a>
        </div>
      </div>
    </div>
  `;
}
