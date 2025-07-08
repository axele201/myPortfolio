export default function HomePage() {
  setTimeout(() => {
    const target = document.getElementById("lottie-animation");
    if (target) {
      lottie.loadAnimation({
        container: target,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "/animation.json",
      });
    }
  }, 0);

  return `
    <section class="relative min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 text-gray-800 flex flex-col-reverse md:flex-row items-center justify-center px-6 py-12 overflow-hidden">
        <div class="absolute -top-20 -left-20 w-[500px] h-[500px] opacity-10 z-0 pointer-events-none">
            <img src="/bg-blur.svg" alt="Decorative Blur" class="w-full h-full object-cover">
        </div>

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
  `;
}
