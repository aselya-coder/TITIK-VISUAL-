import "./dashboard.css";

export default function Dashboard() {
    const menu = [
      { title: "Kelola Homepage", desc: "Ubah judul, subtitle, dan gambar utama halaman depan.", icon: "🏠" },
      { title: "Kelola Features", desc: "Tambah, edit, atau hapus fitur-fitur unggulan website.", icon: "✨" },
      { title: "Kelola Masalah Homepage", desc: "Ubah daftar masalah yang sering terjadi.", icon: "⚠️" },
      { title: "Kelola Layanan Kami", desc: "Atur daftar layanan perusahaan.", icon: "🛠️" },
      { title: "Kelola Nilai Kami", desc: "Atur prinsip perusahaan (Profesional, Terpercaya).", icon: "💎" },
      { title: "Kelola Testimoni", desc: "Kelola apa kata klien.", icon: "💬" },
      { title: "Kelola Paket", desc: "Atur paket-paket layanan yang ditawarkan.", icon: "📦" },
      { title: "Kelola CTA", desc: "Ubah semua teks Call to Action.", icon: "📢" },
      { title: "Kelola Footer", desc: "Ubah informasi kontak dan footer.", icon: "🧩" },
    ];
  
    return (
      <div className="dashboard-wrapper">
        {/* NAVBAR */}
        <div className="dashboard-nav">
          <h1>Admin Panel</h1>
  
          <div className="nav-right">
            <span className="email">admin@gmail.com</span>
            <button className="logout-btn">Logout</button>
          </div>
        </div>
  
        {/* HEADER */}
        <div className="dashboard-header">
          <h2>Dashboard Admin</h2>
          <p>Selamat datang kembali! Pilih menu di bawah untuk mengelola konten website Anda.</p>
        </div>
  
        {/* MENU GRID */}
        <div className="dashboard-grid">
          {menu.map((item, i) => (
            <div key={i} className="dashboard-card">
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  