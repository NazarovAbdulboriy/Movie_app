import { memo, type FC } from "react";
import { Link } from "react-router-dom";

interface Props {
  data: any[] | undefined;
}

const MovieView: FC<Props> = ({ data }) => {
  return (
    <div className="container">
      <h3 className="text-white mt-[118px] pl-[20px] text-[20px]">На неделе</h3>
      <br />
      <div className="container grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3 text-white">
        {data?.map((movie: any) => (
          <Link key={movie.id} to={`/movie/${movie.id}`}>
            <div className="cursor-pointer hover:scale-105 transition-transform">
              <div>
                <img
                  className="rounded-2xl w-full"
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt={movie.title}
                />
              </div>
              <div className="p-2">
                <h3
                  className="font-bold line-clamp-1"
                  title={movie.title}
                >
                  {movie.title}
                </h3>
                <p className="text-yellow-500 font-bold">
                  ⭐ {movie.vote_average}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default memo(MovieView);
