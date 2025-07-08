import { auth } from "../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

export function setupAuthEvents() {
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');
  const loginError = document.getElementById('login-error');
  const registerError = document.getElementById('register-error');

  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = loginForm.email.value.trim();
      const password = loginForm.password.value.trim();

      try {
        await signInWithEmailAndPassword(auth, email, password);
        window.location.hash = "#/forums";
      } catch (err) {
        loginError.classList.remove('hidden');
      }
    });
  }

  if (registerForm) {
    registerForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = registerForm.email.value.trim();
      const password = registerForm.password.value.trim();
      const confirm = registerForm.confirm.value.trim();

      if (password.length < 6) {
        registerError.textContent = "Password minimal 6 karakter";
        registerError.classList.remove('hidden');
        return;
      }

      if (password !== confirm) {
        registerError.textContent = "Password tidak cocok";
        registerError.classList.remove('hidden');
        return;
      }

      try {
        await createUserWithEmailAndPassword(auth, email, password);
        window.location.hash = "#/forums";
      } catch (err) {
        registerError.textContent = "Registrasi gagal. Gunakan email yang valid.";
        registerError.classList.remove('hidden');
      }
    });
  }
}
