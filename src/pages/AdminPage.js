export default function AdminPage() {
  return `
    <section class="min-h-screen bg-white p-6">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-2xl font-bold text-purple-700 mb-4">💼 Admin Chat Panel</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          
          <div class="bg-gray-50 p-4 border rounded" id="user-list">
            <h3 class="text-lg font-semibold mb-2">Pengguna</h3>
            <div id="users" class="space-y-2"></div>
          </div>

          <div class="md:col-span-3">
            <div class="border rounded p-4 h-[400px] overflow-y-auto bg-gray-100 mb-4" id="chat-box-admin"></div>
            <form id="admin-chat-form" class="flex gap-2">
              <input type="text" id="admin-message" class="flex-1 border rounded p-2" placeholder="Ketik pesan..." required />
              <button class="bg-purple-600 text-white px-4 py-2 rounded" type="submit">Kirim</button>
            </form>
          </div>

        </div>
      </div>
    </section>
  `;
}
