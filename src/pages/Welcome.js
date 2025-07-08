export default function Welcome() {
  setTimeout(() => {
    document.body.addEventListener('click', () => {
      location.hash = '#/portfolio';
    }, { once: true });
    const target = document.getElementById('lottie-wave');
    if (target) {
      lottie.loadAnimation({
        container: target,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/animation.json',
      });
    }
  }, 0);

  return `
    <section class="min-h-screen flex flex-col justify-center items-center bg-purple-50 text-center px-4 cursor-pointer">
      <div id="lottie-wave" class="w-40 h-40 mb-4"></div>

      <div class="flex items-center justify-center space-x-2 mb-4">
        <h1 class="text-5xl font-bold text-purple-700">Hi, I’m Dimas</h1>
      </div>

      <p class="text-lg text-gray-700 max-w-xl">
        Klik di mana saja untuk masuk ke portfolio saya.
      </p>
    </section>
  `;
}
