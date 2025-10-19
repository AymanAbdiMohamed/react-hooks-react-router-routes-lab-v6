import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import db from "../../db.json";

function Directors() {
  const [directors, setDirectors] = useState(db.directors || []);

  return (
    <>
      <header>
        <NavBar />
        <h1>Directors Page</h1>
      </header>
      <main>
        {directors.map((d) => (
          <section key={d.id}>
            <h2>{d.name}</h2>
            <ul>
              {d.movies.map((m, idx) => (
                <li key={idx}>{m}</li>
              ))}
            </ul>
          </section>
        ))}
      </main>
    </>
  );
}

export default Directors;
