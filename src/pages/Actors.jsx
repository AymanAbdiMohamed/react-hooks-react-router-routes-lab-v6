import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import db from "../../db.json";

function Actors() {
  const [actors, setActors] = useState(db.actors || []);

  return (
    <>
      <header>
        <NavBar />
        <h1>Actors Page</h1>
      </header>
      <main>
        {actors.map((a) => (
          <section key={a.id}>
            <h2>{a.name}</h2>
            <ul>
              {a.movies.map((m, idx) => (
                <li key={idx}>{m}</li>
              ))}
            </ul>
          </section>
        ))}
      </main>
    </>
  );
}

export default Actors;
