import Navbar from "../header/Navbar.js"
import Footer from "../footer/Footer.js"

export default function MainLAyouts(content) {
    return `
        <header>
            ${Navbar()}
        </header>
        <main>
            ${content}
        </main>
        <footer>
            ${Footer()}
        </footer>
    `
}