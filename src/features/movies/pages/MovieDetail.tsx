import { memo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMovie } from "../service/useMovie";
import Image from "../../../shared/components/image/Image";
import MovieView from "../components/movie-view/MovieView";
import { IMAGE_URL } from "../../../shared/const";

const MovieDetail = () => {
  const { id } = useParams();
  const { getMovieById, getMovieItems } = useMovie();
  const { data, isLoading } = getMovieById(Number(id));
  const { data: images, isLoading: isLoadingImages } = getMovieItems(
    Number(id),
    "images"
  );
  const { data: similarData } = getMovieItems(Number(id), "similar");
  const { data: creditsData } = getMovieItems(Number(id), "credits");

  console.log(creditsData);
  const navigate = useNavigate()

  if (isLoading) {
    return <div className="text-white text-center">...Loading</div>;
  }
  return (
    <div className="MovieDetail">
      <br />
      <div>
        <Image height={400} src={`${IMAGE_URL}${data.backdrop_path}`} />
      </div>
      <br />
      <div className="container">
        <b>
          <h1 className="text-white text-[30px]">{data?.title} </h1>
        </b>
      </div>
      <br />

      <div className="container flex ">
        <div>
          <img
            className="w-[300px] "
            src={`${IMAGE_URL}${data.poster_path}`}
            alt=""
          />
        </div>
        <div className="ml-[100px]">
          <div className="text-white flex flex-wrap w-[900px]">
            <div>
              <h2 className="text-xl">
                <b>Briefly about the film</b>
              </h2>
              <br />
              <p>{data?.overview}</p>
              <br />
            </div>
          </div>
          <h3 className="text-red-500 pb-[10px]">
            <b className="text-white">Genre: </b>
            {data?.genres?.map((genre: any) => genre.name).join(", ")}
          </h3>

          <h3 className="text-red-500 pb-[10px]">
            <b className="text-white">Budget: </b> {data?.budget}$
          </h3>
          <h3 className=" text-red-500 pb-[10px]">
            <b className="text-white">State: </b>
            {data?.origin_country}
          </h3>
          <h3 className="text-red-500 pb-[10px]">
            <b className="text-white">Year: </b>
            {data?.release_date}
          </h3>
          <p className="text-red-500 pb-[10px]">
            <b className="text-white">Runtime:</b>{" "}
            {Math.floor(data?.runtime / 60)}h {data?.runtime % 60}m
          </p>
          <h3 className="text-red-500 ">
            <b className="text-white">Popularity: </b>
            {data?.popularity}
          </h3>
        </div>
      </div><br />
      
      <h2 className="text-white text-center text-2xl">Clips from the movie</h2><br />
      
      <div className="container flex flex-wrap gap-[30px] justify-center">
        {images?.backdrops?.slice(0, 8)?.map((item: any, index: number) => (
          <img
            key={index}
            src={`${IMAGE_URL}${item.file_path}`}
            width={250}
            alt=""
          />
        ))}
      </div>
      <br />
      <br />
      <h2 className="text-white text-2xl text-center">Cast</h2>
      <div className="flex flex-wrap gap-[30px] container justify-center">
        
        {creditsData?.cast?.map((cast: any) => {
          const image = cast.profile_path
            ? `${IMAGE_URL}${cast.profile_path}`
            : "https://t4.ftcdn.net/jpg/11/61/33/41/360_F_1161334154_yt08WdwqBunhXMBKQxm0G8sj2iih7Vh8.jpg";
          return (
            <div
              className="text-white w-[150px]  h-[230px] rounded-xl border-2 border-gray-400  px-[25px]"
              key={cast.id}
            >
              <img
                onClick={()=> navigate(`/cast/${cast.id}`)}
                loading="lazy"
                className="w-[100px] pt-[10px] "
                src={image}
                width={60}
                alt=""
              />
              <h3>{cast.name}</h3>
              <p className="text-gray-500 line-clamp-1 cursor-pointer">
                {cast.character}
              </p>
            </div>
          );
        })}
      </div>
      <br />
      <div>
        <MovieView data={similarData?.results?.slice(0, 8)} />
      </div>
    </div>
  );
};

export default memo(MovieDetail);
