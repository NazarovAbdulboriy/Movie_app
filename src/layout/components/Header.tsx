import { memo } from "react";
import { NavLink } from "react-router-dom";
import { Search, ChevronDown} from "lucide-react";

import logaImage from "../../shared/assets/images/LOGOTYPE – BILETICK.png";
import poster from "../../shared/assets/images/Vector.png";
import session from "../../shared/assets/images/tablet-line.png";
import ticket from "../../shared/assets/images/coupon-3-line.png";

const Header = () => {
  return (
    <div className="text-white container flex ">
      <div className="pl-[90px] pt-[22px]">
        <NavLink to={"/"}>
          <img src={logaImage} alt="" />
        </NavLink>
      </div>
      <div className="flex gap-[37px]  ml-[338px] items-center pt-[22px]">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `transition  cursor-pointer hover:text-[#C61F1F] ${
              isActive ? "text-[#C61F1F] font-semibold" : ""
            }`
          }
        >
          <img className="flex ml-[30%] text-white" src={poster} alt="" />
          Афиша
        </NavLink>
        <NavLink
          to="/movies"
          className="flex flex-col items-center cursor-pointer"
        >
          {({ isActive }) => (
            <>
              <img src={session} alt="session icon" />
              <span
                className={`transition ${
                  isActive ? "text-[#C61F1F] font-semibold" : "text-gray-700"
                }`}
              >
                Сеансы
              </span>
            </>
          )}
        </NavLink>
        <NavLink
          to="/bookmark"
          className="flex flex-col items-center cursor-pointer"
        >
          {({ isActive }) => (
            <>
              <img src={ticket} alt="session icon" />
              <span
                className={`transition ${
                  isActive ? "text-[#C61F1F] font-semibold" : "text-gray-700"
                }`}
              >
                Билеты
              </span>
            </>
          )}
        </NavLink>
               <NavLink
          to="/search"
          className="flex flex-col items-center cursor-pointer"
        >
          {({ isActive }) => (
            <>
              <Search color="#A1A1A1" />
              <span
                className={`transition ${
                  isActive ? "text-[#C61F1F] font-semibold" : "text-gray-700"
                }`}
              >
                Поиск
              </span>
            </>
          )}
        </NavLink>
        <button className="flex bg-[#1D1D1D80] w-[92px] h-[48px] rounded-[16px] items-center justify-center ml-[138px] gap-2">🇷🇺<ChevronDown /></button>
        <button className="w-[180px] h-[56px] border-[#C61F1F] bg-[#C61F1F] text-white rounded-xl hover:bg-white hover:text-[#C61F1F] hover:border-[2px] hover:border-[#C61F1F]">Войти</button>
      </div>
    </div>
  );
};

export default memo(Header);
