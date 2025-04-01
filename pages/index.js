import { useState } from "react";

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [role, setRole] = useState("");

  return (
    <main style={{ padding: 20 }}>
      <h1>Eltern-Kind-Turnen</h1>
      {!loggedIn ? (
        <div>
          <p>Bitte logge dich ein.</p>
          <button onClick={() => { setLoggedIn(true); setRole("admin"); }}>Login als Admin</button>
          <button onClick={() => { setLoggedIn(true); setRole("eltern"); }}>Login als Eltern</button>
        </div>
      ) : (
        <div>
          <p>Willkommen {role === "admin" ? "Admin" : "liebe Eltern"}!</p>
          {role === "admin" ? (
            <ul>
              <li>Stationen verwalten</li>
              <li>Geräte zuordnen</li>
              <li>Aufbaupläne hochladen</li>
              <li>Benachrichtigungen aktivieren</li>
            </ul>
          ) : (
            <ul>
              <li>Kommentare schreiben</li>
              <li>Nachricht an Admin</li>
              <li>Stationen ansehen</li>
            </ul>
          )}
        </div>
      )}
    </main>
  );
}
