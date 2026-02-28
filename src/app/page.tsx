"use client";

import { useState } from "react";

export default function HomePage() 
{
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function handleClick() 
  {
    if (!name.trim()) 
    {
      setMessage("Please type something first.");
      return;
    }

    setMessage(`Hello, ${name}! Thanks for clicking the button.`);
  }

  return (
    <main className="container" style={{ display: "grid", gap: "0.75rem" }}>
      <h1>Base Web App</h1>
      <p>Type text and click the button to show a message.</p>

      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Type your name"
        style={{ padding: "0.5rem" }}
      />

      <button
        type="button"
        onClick={handleClick}
        style={{ width: "fit-content", padding: "0.5rem 0.75rem" }}
      >
        Show Message
      </button>

      {message && <p>{message}</p>}
    </main>
  );
}