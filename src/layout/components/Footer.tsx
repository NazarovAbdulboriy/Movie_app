import { memo } from 'react';
import { Instagram, Facebook, Youtube, Film, Ticket, Music, Phone, ShieldQuestionMark, TvMinimalPlay,  } from "lucide-react";
import GooglePlay from '../../shared/assets/images/image 8.png';
import AppStore from '../../shared/assets/images/image 7.png';
import Logo from '../../shared/assets/images/LOGOTYPE – BILETICK (1).png';

const Footer = () => {
  return (
     <footer className="bg-[#111111] text-white px-8 py-10 mt-[30px]">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">

        <div className="flex flex-col space-y-4">
          <img src={Logo} alt="Logo" className="w-24 ml-[20px]" />
          <div className="flex flex-col space-y-2">
            <img src={GooglePlay} alt="Google Play" className="w-36 cursor-pointer" />
            <img src={AppStore} alt="App Store" className="w-36 cursor-pointer" />
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold mb-2">О нас</h3>
          <a href="#" className="flex items-center gap-2 hover:text-red-600"><Film size={16} /> Публичная оферта</a>
          <a href="#" className="flex items-center gap-2 hover:text-red-600"><Ticket size={16} /> Реклама</a>
          <a href="#" className="flex items-center gap-2 hover:text-red-600"><ShieldQuestionMark size={16} /> F.A.Q</a>
          <a href="#" className="flex items-center gap-2 hover:text-red-600"><Phone size={16} /> Контакты</a>
        </div>

        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold mb-2">Категории</h3>
          <a href="#" className="flex items-center gap-2 hover:text-red-600"><TvMinimalPlay size={16} /> Кино</a>
          <a href="#" className="flex items-center gap-2 hover:text-red-600"><Ticket size={16} /> Театр</a>
          <a href="#" className="flex items-center gap-2 hover:text-red-600"><Music size={16} /> Концерты</a>
          <a href="#" className="flex items-center gap-2 hover:text-red-600"> Спорт</a>
        </div>

        <div className="flex flex-col space-y-4">
          <h3 className="font-semibold mb-2">Связаться с нами</h3>
          <span className="text-red-600 font-semibold">+998 (95) 897-33-38</span>
          <div className="flex items-center gap-4 mt-2">
            <Instagram className="w-6 h-6 cursor-pointer hover:text-red-600" />
            <Facebook className="w-6 h-6 cursor-pointer hover:text-red-600" />
            <Youtube className="w-6 h-6 cursor-pointer hover:text-red-600" />
          </div>
        </div>

      </div>
    </footer>
  );
};

export default memo(Footer);