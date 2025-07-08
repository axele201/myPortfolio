export default function LoginPage() {
  setTimeout(() => {
    const toggleBtn = document.getElementById("toggle-register");
    const registerContainer = document.getElementById("register-container");
    let isOpen = false;

    toggleBtn?.addEventListener("click", () => {
      isOpen = !isOpen;
      registerContainer.classList.toggle("max-h-0", !isOpen);
      registerContainer.classList.toggle("max-h-screen", isOpen);
    });
  }, 0);

  return `
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
  `;
}
