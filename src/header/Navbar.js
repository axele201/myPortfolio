export default function Navbar() {
    setTimeout(() => {
        const toggleBtn = document.getElementById('mobile-menu-button');
        const menu = document.getElementById('mobile-menu');
        if (toggleBtn && menu) {
        toggleBtn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
        }
    }, 0);

    return `
        <nav class="bg-white border-b border-purple-600">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16 items-center">
                    <div class="flex items-center space-x-2">
                        <img src="/DIA.png" alt="Logo Perusahaan" class="h-8 w-8">
                        <span class="text-xl font-semibold text-gray-900">Portfolio</span>
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
    `;
}
