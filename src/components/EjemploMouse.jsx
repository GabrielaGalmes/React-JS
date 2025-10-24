
import { useState } from "react";

export default function EjemploMouse2() {
  const [mostrarDescripcion, setMostrarDescripcion] = useState(false);

  return (
    <div
      onMouseOver={() => setMostrarDescripcion(true)}
      onMouseOut={() => setMostrarDescripcion(false)}
      style={{
        width: "300px",
        padding: "1rem",
        border: "1px solid #ccc",
        borderRadius: "8px",
        textAlign: "center",
        fontSize: "2rem",
      }}
    >
      <p style={{ margin: "0" }}></p>

      {mostrarDescripcion && (
        <p style={{ marginTop: "0.5rem", color: "#555" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ratione corrupti, facilis, natus at laudantium perspiciatis praesentium unde error quod amet odit et, asperiores voluptatibus quam facere? Eos, reprehenderit sapiente.
        </p>
      )}
    </div>
  );
}