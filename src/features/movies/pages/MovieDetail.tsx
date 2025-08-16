import { memo, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface Movie {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  release_date: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  vote_count: number;
  genre_ids: number[];
}

interface Props {
  movies?: Movie[];
}

const genresMap: Record<number, string> = {
  12: "Adventure",
  14: "Fantasy",
  16: "Animation",
  18: "Drama",
  28: "Action",
  35: "Comedy",
  36: "History",
  53: "Thriller",
  80: "Crime",
  878: "Science Fiction",
  10751: "Family",
  10752: "War",
  9648: "Mystery",
  27: "Horror",
};

const MovieDetail = ({ movies }: Props) => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    if (!movies || !id) return;
    const found = movies.find((m) => m.id === Number(id));
    if (found) setMovie(found);
  }, [id, movies]);

  if (!movie) return <div className="text-white p-4">Loading...</div>;

  return (
    <div className="MovieDetail text-white min-h-screen bg-gray-900 p-6 flex flex-col md:flex-row gap-6">
      <img
        className="w-full md:w-1/3 rounded-lg shadow-lg"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
        <p className="text-gray-400 mb-4">{movie.original_title}</p>
        <p className="mb-4">{movie.overview}</p>
        <p className="mb-2">
          <strong>Release Date:</strong> {movie.release_date}
        </p>
        <p className="mb-2">
          <strong>Genres:</strong>{" "}
          {movie.genre_ids.map((id) => genresMap[id] || "Unknown").join(", ")}
        </p>
        <p className="mb-2">
          <strong>Rating:</strong> {movie.vote_average} ({movie.vote_count} votes)
        </p>
      </div>
    </div>
  );
};

export default memo(MovieDetail);
