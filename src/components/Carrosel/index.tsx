import React, { ReactNode } from "react";
import { A11y, Navigation, Pagination } from "swiper";
import { Swiper, SwiperProps } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/navigation/navigation.min.css";
import "./carossel.css";

interface SliderProps {
  settings: SwiperProps;
  children: ReactNode;
}

function Carossel({ settings, children }: SliderProps) {
  return (
    <div>
      <Swiper modules={[Navigation, Pagination, A11y]} {...settings}>
        {children}
      </Swiper>
    </div>
  );
}

export default Carossel;
