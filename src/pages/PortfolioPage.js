export default function PortfolioPage() {
  const sliderStates = {};

  function nextSlide(id) {
    const slider = document.getElementById(id);
    const total = slider.children.length;
    sliderStates[id] = (sliderStates[id] || 0) + 1;
    if (sliderStates[id] >= total) sliderStates[id] = 0;
    slider.style.transform = `translateX(-${sliderStates[id] * 100}%)`;
  }

  function prevSlide(id) {
    const slider = document.getElementById(id);
    const total = slider.children.length;
    sliderStates[id] = (sliderStates[id] || 0) - 1;
    if (sliderStates[id] < 0) sliderStates[id] = total - 1;
    slider.style.transform = `translateX(-${sliderStates[id] * 100}%)`;
  }

  window.nextSlide = nextSlide;
  window.prevSlide = prevSlide;

  setTimeout(() => {
    document.querySelectorAll('.see-more-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const desc = btn.previousElementSibling;
        const isOpen = desc.classList.contains('max-h-[140px]');

        if (isOpen) {
          desc.classList.remove('max-h-[140px]');
          desc.classList.add('max-h-[1000px]');
          btn.textContent = 'Tampilkan lebih sedikit';
        } else {
          desc.classList.remove('max-h-[1000px]');
          desc.classList.add('max-h-[140px]');
          btn.textContent = 'Lihat selengkapnya';
        }
      });
    });
  }, 0);

  return `
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
              <img src="/project/suplierProject1.png" class="w-full h-full flex-shrink-0 object-cover" alt="Project 1">
              <img src="/project/suplierProject2.png" class="w-full h-full flex-shrink-0 object-cover" alt="Project 2">
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
              <img src="/project/rekapProject1.png" class="w-full h-full flex-shrink-0 object-cover" alt="Project 1">
              <img src="/project/rekapProject2.png" class="w-full h-full flex-shrink-0 object-cover" alt="Project 2">
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
          <img src="/project/retailManagemetSystem.png" alt="Project 2" class="w-full aspect-[16/9] object-cover">
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
              <img src="/project/ecommerce1.png" class="w-full h-full flex-shrink-0 object-cover" alt="Project 1">
              <img src="/project/ecommerce2.png" class="w-full h-full flex-shrink-0 object-cover" alt="Project 2">
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
          <img src="/project/scraping.png" alt="Project 3" class="w-full aspect-[16/9] object-cover">
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
          <img src="/project/ramadan.png" alt="Project 3" class="w-full aspect-[16/9] object-cover">
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
  `;
}
