'use client'
import { useState } from "react";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function handleClick() {
    if (!email.includes("@")) return;
    setSent(true);
  }

  if (sent) {
    return (
      <p style={{ textAlign: "center", color: "#65a30d", fontSize: "18px" }}>
        ¡Apuntado! Te avisamos cuando lancemos.
      </p>
    );
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "12px", padding: "0 5vw", flexWrap: "wrap" }}>
      <input
        style={{
          border: "1px solid #333",
          borderRadius: "10px",
          padding: "12px 16px",
          fontSize: "16px",
          backgroundColor: "#111",
          color: "#f0f0f0",
          outline: "none",
          width: "clamp(200px, 30vw, 340px)",
        }}
        value={email}
        placeholder="tu@email.com"
        onChange={e => setEmail(e.target.value)}
        onKeyDown={e => e.key === "Enter" && handleClick()}
        type="email"
      />
      <button
        onClick={handleClick}
        style={{
          border: "none",
          padding: "12px 24px",
          borderRadius: "10px",
          fontSize: "16px",
          fontWeight: "500",
          backgroundColor: "#65a30d",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        Unirme a la lista
      </button>
    </div>
  );
}