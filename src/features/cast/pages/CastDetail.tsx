import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useCast } from '../../cast/service/useCast';
import { IMAGE_URL } from '../../../shared/const';
import MovieView from '../../movies/components/movie-view/MovieView';

const CastDetail = () => {
  const { id } = useParams();
  const { getCastById, getCastItems } = useCast();
  const { data } = getCastById(Number(id));
  const { data: moviesData } = getCastItems(Number(id), "movie_credits");

  return (
    <div className="CastDetail">
      <div className='container flex '>
        
        <img
          src={`${IMAGE_URL}${data?.profile_path}`}
          width={300}
          alt=""
        />
        <div className='ml-[150px] mt-[30px]'>
        <h2 className='text-white'>{data?.name}</h2><br />
        <p className='text-white line-clamp-15'>{data?.biography}</p>
        </div>
      </div><br /><br /><br />
      <div>
        <MovieView data={moviesData?.cast} />
      </div>
    </div>
  );
};

export default memo(CastDetail);
