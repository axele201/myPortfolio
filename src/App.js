import MainLAyouts from "./layouts/MainLayouts.js";
import Home from "./pages/MainPage.js";
import Welcome from "./pages/Welcome.js";
import PortfolioPage from "./pages/PortfolioPage.js";
import ContactPage from "./pages/ContactPage.js";
import LoginPage from "./pages/LoginPage.js";
import AdminPage from "./pages/AdminPage.js";
import { initChatLogic } from "./logic/chat.js";
import { setupAuthEvents } from "./logic/login.js";
import { setupAdminChat } from "./logic/setupAdminChat.js";

const routes = {
  "/": Welcome,
  "/portfolio": Home,
  "/portfolio/project": PortfolioPage,
  "/forums": ContactPage,
  "/login": LoginPage,
  "/admin": AdminPage
};

export default function App() {
  const root = document.getElementById("app");
  const path = location.hash.slice(1) || "/";
  const page = routes[path] || (() => "<h1>404 Page Not Found!</h1>");

  const html = path === "/" ? page() : MainLAyouts(page());
  root.innerHTML = html;

  if (path === "/forums") {
    initChatLogic();
  }
  if (path === "/login") {
    setupAuthEvents();
  }

  if (path === "/admin") {
    setupAdminChat()
  }
}
