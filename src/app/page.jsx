import CTA from "./cta";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "flex-start", gap: "9vh", backgroundColor: "#0a0a0a" }}>

      {/* HEADER */}
      <div style={{ borderBottom: "1px solid #222", padding: "3vh 3vw", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: "#0a0a0a" }}>
        <h1 style={{ fontSize: "44px", color: "#65a30d", fontWeight: "500" }}>Toice</h1>
        <div style={{ display: "flex", flexDirection: "row", gap: "5vw", alignItems: "center" }}>
          <p style={{ fontSize: "18px", color: "#888" }}>protege a los tuyos</p>
          <button style={{ border: "2px solid #65a30d", fontSize: "16px", backgroundColor: "transparent", color: "#65a30d", padding: "10px 20px", borderRadius: "10px" }}>
            Early Access
          </button>
        </div>
      </div>

      {/* AFTER HEADER */}
      <div style={{ display: "flex", gap: "2vh", flexDirection: "column", padding: "0 5vw" }}>
        <h1 style={{ textAlign: "center", fontWeight: "500", fontSize: "clamp(32px, 5vw, 60px)", color: "#f0f0f0" }}>
          Tu familia merece una llamada segura
        </h1>
        <p style={{ textAlign: "center", color: "#888", fontSize: "clamp(16px, 2vw, 22px)", lineHeight: "1.6" }}>
          Toice escucha en tiempo real y filtra llamadas fraudulentas antes de que lleguen a tus seres queridos. Protección silenciosa, siempre activa.
        </p>
      </div>

      {/* CTA */}
      <CTA />

      {/* CARDS */}
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", padding: "0 3vw 4vh", gap: "2vw" }}>
        <div style={{ border: "1px solid #222", padding: "20px", borderRadius: "12px", backgroundColor: "#111", flex: 1 }}>
          <h2 style={{ fontSize: "30px", color: "#65a30d", fontWeight: "500" }}>81 años</h2>
          <p style={{ color: "#888", marginTop: "6px", lineHeight: "1.5" }}>tiene la víctima promedio de estafas telefónicas</p>
        </div>
        <div style={{ border: "1px solid #222", padding: "20px", borderRadius: "12px", backgroundColor: "#111", flex: 1 }}>
          <h2 style={{ fontSize: "30px", color: "#65a30d", fontWeight: "500" }}>48 millones</h2>
          <p style={{ color: "#888", marginTop: "6px", lineHeight: "1.5" }}>de llamadas bloqueadas en España en 2024</p>
        </div>
        <div style={{ border: "1px solid #222", padding: "20px", borderRadius: "12px", backgroundColor: "#111", flex: 1 }}>
          <h2 style={{ fontSize: "30px", color: "#65a30d", fontWeight: "500" }}>28%</h2>
          <p style={{ color: "#888", marginTop: "6px", lineHeight: "1.5" }}>de la población española ha recibido intentos de vishing</p>
        </div>
      </div>

    </div>
  );
}