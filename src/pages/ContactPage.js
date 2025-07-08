export default function ContactPage() {
  return `
    <section class="min-h-screen bg-white p-4">
      <div class="max-w-xl mx-auto shadow rounded-lg p-4 border">
        <h2 class="text-xl font-bold text-purple-600 mb-4">💬 Chat with Dimas</h2>
        <div id="chat-box" class="h-64 overflow-y-auto border p-2 rounded bg-gray-50 mb-4"></div>
        <form id="chat-form" class="flex gap-2">
          <input type="text" id="message" placeholder="Ketik pesan..." class="flex-1 p-2 border rounded" required />
          <button type="submit" class="bg-purple-600 text-white px-4 py-2 rounded">Kirim</button>
        </form>
      </div>
    </section>
  `;
}
