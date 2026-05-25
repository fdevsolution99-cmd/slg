import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function GallerySlider({ images }) {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      breakpoints={{
        768: {
          slidesPerView: 3,
        },
      }}
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <div className="overflow-hidden rounded-2xl">
            <img
              src={img}
              alt=""
              className="h-80 w-full object-cover hover:scale-110 transition duration-500"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default GallerySlider;