import { memo, useState } from "react";
import { useMovie } from "../service/useMovie";
import MovieView from "../components/movie-view/MovieView";
import { Pagination, Select } from "antd";
import { useSearchParams } from "react-router-dom";
import { useGenre } from "../service/useGenre";

const Movies = () => {
  const { getMovies } = useMovie();
  const { getGenres } = useGenre();
  const [params, setParams] = useSearchParams();

  const page = params.get("page") || "1";
  const with_genres = params.get("laylo") || "";
  const year = params.get("year") || "";
  const language = params.get("language") || "";
  const vote_average = params.get("vote_average") || "";

  const { data } = getMovies({
    page,
    with_genres,
    sort_by: "popularity.desc",
    ...(year
      ? year === "before2000"
        ? { "release_date.lte": "1999-12-31" }
        : {
            "primary_release_date.gte": `${year}-01-01`,
            "primary_release_date.lte": `${year}-12-31`,
          }
      : {}),
    ...(language ? { with_original_language: language } : {}),
    ...(vote_average ? { "vote_average.gte": vote_average } : {}),
  });

  const { data: genreData } = getGenres();
  const options = genreData?.genres?.map(({ id, name }: any) => ({
    value: id.toString(),
    label: name,
  }));

  const yearOptions = [
    ...Array.from({ length: 26 }, (_, i) => {
      const y = 2025 - i;
      return { value: y.toString(), label: y.toString() };
    }),
    { value: "before2000", label: "1999..." },
  ];

  const languageOptions = [
    { value: "en", label: "English" },
    { value: "fr", label: "French" },
    { value: "ja", label: "Japanese" },
    { value: "ko", label: "Korean" },
    { value: "hi", label: "Hind" },
  ];

  const ratingOptions = [
    { value: "5", label: "5+" },
    { value: "6", label: "6+" },
    { value: "7", label: "7+" },
    { value: "8", label: "8+" },
  ];

  const handleChange = (value: number) => {
    params.set("page", value.toString());
    setParams(params);
  };

  const handleChangeGenre = (value: string) => {
    params.set("laylo", value);
    setParams(params);
  };

  const handleChangeYear = (value: string) => {
    params.set("year", value);
    setParams(params);
  };

  const handleChangeLanguage = (value: string) => {
    params.set("language", value);
    setParams(params);
  };

  const handleChangeRating = (value: string) => {
    params.set("vote_average", value);
    setParams(params);
  };

  return (
    <div className="Movies">
      <h2>Movies</h2>
      <div className="container flex gap-4 flex-wrap justify-center">
        <Select
          onChange={handleChangeGenre}
          className="w-40"
          placeholder="Select genre"
          options={options}
        />
        <Select
          onChange={handleChangeYear}
          className="w-40"
          placeholder="Select year"
          options={yearOptions}
        />
        <Select
          onChange={handleChangeLanguage}
          className="w-40"
          placeholder="Select language"
          options={languageOptions}
        />
        <Select
          onChange={handleChangeRating}
          className="w-40"
          placeholder="Select rating"
          options={ratingOptions}
        />
      </div><br />
      <MovieView data={data?.results} /><br />
      <div className="flex justify-center text-white">
        <Pagination
        className="text-white"
          current={Number(page)}
          showSizeChanger={false}
          onChange={handleChange}
          total={data?.total_pages}
          defaultPageSize={1}
        />
      </div>
    </div>
  );
};

export default memo(Movies);
