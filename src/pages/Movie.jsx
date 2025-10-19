import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import db from "../../db.json";

function Movie() {
  const { id } = useParams();
  const movie = db.movies.find((m) => String(m.id) === String(id));

  if (!movie) return (
    <>
      <header>
        <NavBar />
      </header>
      <main />
    </>
  );

  return (
    <>
      <header>
        <NavBar />
        <h1>{movie.title}</h1>
      </header>
      <main>
        <p>{movie.time}</p>
        <div>
          {movie.genres.map((g, idx) => (
            <span key={idx}>{g}</span>
          ))}
        </div>
      </main>
    </>
  );
}

export default Movie;
