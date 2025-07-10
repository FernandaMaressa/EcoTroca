export default function NavBar() {
  return (
    <header style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1rem 2rem",
      background: "#fff"
    }}>
      <h2 style={{ color: "#48a488" }}>EcoTroca</h2>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <button style={{
          background: "none",
          border: "none",
          color: "#000",
          cursor: "pointer"
        }}>Início</button>
        <button style={{
          background: "none",
          border: "none",
          color: "#000",
          cursor: "pointer"
        }}>Itens</button>
        <button style={{
          background: "none",
          border: "none",
          color: "#000",
          cursor: "pointer"
        }}>Sobre</button>
        <button style={{
          background: "none",
          border: "1px solid #48a488",
          color: "#48a488",
          borderRadius: "4px",
          padding: "0.3rem 0.6rem",
          cursor: "pointer"
        }}>+ Anunciar Item</button>
        <button style={{
          background: "none",
          border: "none",
          color: "#000",
          cursor: "pointer"
        }}>Entrar</button>
      </nav>
    </header>
  );
}
