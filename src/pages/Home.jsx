import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";
import db from "../../db.json";

function Home() {
  const [movies, setMovies] = useState(db.movies || []);

  return (
    <>
      <header>
        <NavBar />
        <h1>Home Page</h1>
      </header>
      <main>
        {movies.map((m) => (
          <MovieCard key={m.id} id={m.id} title={m.title} />
        ))}
      </main>
    </>
  );
}

export default Home;
