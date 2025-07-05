export default function Home() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>
        Willkommen bei Kimi Sushi
      </h1>
      <p style={{ marginBottom: "2rem" }}>
        Sorgfalt in jedem Schnitt – Genuss in jedem Biss
      </p>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" }}>
        <div>
          <img src="/images/nigiri_lachs.jpg" alt="Nigiri Lachs" style={{ width: "100%", borderRadius: "12px" }} />
          <h3>Nigiri Lachs</h3>
          <p>Cá hồi tươi, mềm mịn như tan chảy trên lưỡi.</p>
        </div>
        <div>
          <img src="/images/insideout_avocado.jpg" alt="Inside Out Roll – Avocado" style={{ width: "100%", borderRadius: "12px" }} />
          <h3>Inside Out Roll – Avocado</h3>
          <p>Cuộn sushi thanh mát với lớp Avocado phủ ngoài.</p>
        </div>
        <div>
          <img src="/images/crunchy_roll.jpg" alt="Crunchy Roll" style={{ width: "100%", borderRadius: "12px" }} />
          <h3>Crunchy Roll</h3>
          <p>Chiên giòn tan – Hương vị bùng nổ.</p>
        </div>
        <div>
          <img src="/images/dessert_mochi.jpg" alt="Mochi Ice" style={{ width: "100%", borderRadius: "12px" }} />
          <h3>Mochi Ice</h3>
          <p>Tráng miệng lạnh mềm – Ba viên mochi tuyệt hảo.</p>
        </div>
      </section>
    </main>
  );
}
