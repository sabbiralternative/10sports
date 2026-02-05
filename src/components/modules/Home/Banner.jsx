import useBannerImage from "../../../hooks/banner.hook";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Banner = () => {
  const { data } = useBannerImage();

  return (
    <div className="w-full">
      {data?.banner?.length > 0 && (
        <Swiper
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <div
            className="w-full px-[6px]"
            style={{
              aspectRatio: "2.00561 / 1",
              maxHeight: "350px",
            }}
          >
            <div className="w-full  h-full z-10  flex flex-row">
              {data?.banner?.map((image, i) => {
                return (
                  <SwiperSlide
                    style={{
                      height: "auto",
                      width: "auto",
                      borderRadius: "10px",
                    }}
                    key={i}
                  >
                    <div className="w-full h-full swiper-slide rounded-[10px]">
                      <img className="rounded-[10px]" src={image} alt="" />
                    </div>
                  </SwiperSlide>
                );
              })}
            </div>
          </div>
        </Swiper>
      )}
    </div>
  );
};

export default Banner;
