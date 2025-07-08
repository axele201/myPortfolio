import { db } from '../firebase.js';
import {
  collection,
  onSnapshot,
  query,
  orderBy,
  addDoc,
  serverTimestamp,
  doc
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

export function setupAdminChat() {
  const usersContainer = document.getElementById("users");
  const chatBox = document.getElementById("chat-box-admin");
  const form = document.getElementById("admin-chat-form");
  const input = document.getElementById("admin-message");

  let currentUserId = null;

  const userChatsRef = collection(db, "chats");

  onSnapshot(userChatsRef, (snapshot) => {
    usersContainer.innerHTML = '';
    snapshot.forEach(docu => {
      const data = docu.data();
      const div = document.createElement("div");
      div.className = "p-2 bg-white border rounded hover:bg-purple-100 cursor-pointer";
      div.textContent = data.userEmail;
      div.onclick = () => loadMessages(docu.id);
      usersContainer.appendChild(div);
    });
  });

  function loadMessages(userId) {
    currentUserId = userId;
    const chatRef = collection(db, `chats/${userId}/messages`);
    const q = query(chatRef, orderBy("timestamp", "asc"));

    onSnapshot(q, (snapshot) => {
      chatBox.innerHTML = '';
      snapshot.forEach(doc => {
        const data = doc.data();
        const who = data.sender === "admin" ? "👨‍💼 Admin" : "👤 User";
        chatBox.innerHTML += `<div class="mb-2"><strong>${who}:</strong> ${data.text}</div>`;
      });
      chatBox.scrollTop = chatBox.scrollHeight;
    });
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!currentUserId || !input.value.trim()) return;

    const chatRef = collection(db, `chats/${currentUserId}/messages`);
    await addDoc(chatRef, {
      text: input.value.trim(),
      sender: "admin",
      timestamp: serverTimestamp()
    });

    input.value = '';
  });
}
