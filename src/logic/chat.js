import { auth, db } from '../firebase.js';
import {
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import {
  addDoc,
  collection,
  onSnapshot,
  serverTimestamp,
  query,
  orderBy,
  setDoc,
  doc
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

export function initChatLogic() {
  const chatBox = document.getElementById('chat-box');
  const form = document.getElementById('chat-form');
  const input = document.getElementById('message');

  onAuthStateChanged(auth, user => {
    if (!user) return window.location.hash = "#/login";

    const userChatDocRef = doc(db, "chats", user.uid);
    const chatRef = collection(db, `chats/${user.uid}/messages`);
    const q = query(chatRef, orderBy("timestamp", "asc"));

    onSnapshot(q, (snapshot) => {
      chatBox.innerHTML = '';
      snapshot.forEach(doc => {
        const data = doc.data();
        chatBox.innerHTML += `<div><strong>${data.sender === "admin" ? "👨‍💼 Admin" : "👤 You"}</strong>: ${data.text}</div>`;
        chatBox.scrollTop = chatBox.scrollHeight;
      });
    });

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!input.value.trim()) return;

      await setDoc(userChatDocRef, {
        userEmail: user.email,
        createdAt: serverTimestamp()
      }, { merge: true });

      await addDoc(chatRef, {
        text: input.value.trim(),
        sender: "user",
        timestamp: serverTimestamp()
      });

      input.value = '';
    });
  });
}
