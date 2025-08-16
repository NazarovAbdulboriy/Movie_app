import { memo } from "react";
import { Play } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Movie_1 from "../../assets/images/movie_1.jpg";
import Movie_2 from "../../assets/images/movie_2.jpg";
import Movie_3 from "../../assets/images/movie_3.jpg";
import Movie_4 from "../../assets/images/movie_4.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Carousel = () => {
  return (
    <div className="container">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="relative rounded-3xl">
          <div className="relative">
            <img
              className="rounded-3xl w-full h-[400px] object-cover"
              src={Movie_1}
              alt=""
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-white  rounded-3xl mt-[400px]">
              <h2 className="text-2xl font-bold mb-4">War of the Worlds</h2>
              <p>2024 • Adventure • 1ч 34м • EN • 12+</p>
              <br />
              <button className="w-[380px] h-[52px] px-6 py-2 bg-white text-[#C61F1F] hover:bg-[#C61F1F] hover:scale-110 duration-300 hover:text-white rounded-lg text-[20px] flex items-center gap-1.5 justify-center">
                <Play />
                Смотреть
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="rounded-3xl">
          <div className="relative">
            <img className="rounded-3xl" src={Movie_2} alt="" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white  rounded-3xl mt-[400px]">
              <h2 className="text-2xl font-bold mb-4">
                Jurassic World Rebirth
              </h2>
              <p>2024 • War • 1ч 56м • EN • 18+</p>
              <br />
              <button className="w-[380px] h-[52px] px-6 py-2 bg-white text-[#C61F1F] hover:bg-[#C61F1F] hover:scale-110 duration-300 hover:text-white rounded-lg text-[20px] flex items-center gap-1.5 justify-center">
                <Play />
                Смотреть
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="rounded-3xl">
          <div className="relative">
            <img className="rounded-3xl" src={Movie_3} alt="" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white  rounded-3xl mt-[400px]">
              <h2 className="text-2xl font-bold mb-4">
                William Tell
              </h2>
              <p>2023 • War • 1ч 47м • EN • 16+</p>
              <br />
              <button className="w-[380px] h-[52px] px-6 py-2 bg-white text-[#C61F1F] hover:bg-[#C61F1F] hover:scale-110 duration-300 hover:text-white rounded-lg text-[20px] flex items-center gap-1.5 justify-center">
                <Play />
                Смотреть
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="rounded-3xl">
          <div className="relative">

          <img className="rounded-3xl" src={Movie_4} alt="" />
                     <div className="absolute inset-0 flex flex-col items-center justify-center text-white  rounded-3xl mt-[400px]">
              <h2 className="text-2xl font-bold mb-4">
                Osiris
              </h2>
              <p>2025 • Fantasy • 1ч 57м • EN • 18+</p>
              <br />
              <button className="w-[380px] h-[52px] px-6 py-2 bg-white text-[#C61F1F] hover:bg-[#C61F1F] hover:scale-110 duration-300 hover:text-white rounded-lg text-[20px] flex items-center gap-1.5 justify-center">
                <Play />
                Смотреть
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default memo(Carousel);
