import { Swiper, SwiperSlide } from "swiper/react";
//@ts-ignore
import "swiper/css";
//@ts-ignore
import "swiper/css/effect-coverflow";
//@ts-ignore
import "swiper/css/pagination";

import "../styles.css";
import { useTranslation } from "react-i18next";

import { Autoplay,EffectCoverflow } from "swiper/modules";


const SliderComponent = () => {
  const { t } = useTranslation();

  const whyChooseUs = [
    {
      title: t("locationBasedT"),
      des: t("locationBasedD"),
    },
    {
      title: t("personRecommendationT"),
      des: t("personRecommendationD"),
    },
    {
      title: t("neverMissDiscountT"),
      des: t("neverMissDiscountD"),
    },
    {
      title: t("saveMoneyT"),
      des: t("saveMoneyD"),
    },
    {
      title: t("sustainableShoppingT"),
      des: t("sustainableShoppingD"),
    },
    {
      title: t("reduceFoodWasteT"),
      des: t("reduceFoodWasteD"),
    },
  ];
  return (
    <div>
      <>
        <Swiper
          loop
          effect={"coverflow"}
          grabCursor={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          spaceBetween={50}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[
            Autoplay,
             EffectCoverflow
          ]}
        >
          {whyChooseUs.map(({ title, des }, index) => (
            <SwiperSlide
              className="!flex bg-gradient-to-t from-[#fe9545] via-white to-white p-4 md:p-8 lg:px-12 md:!w-[400px] lg:!w-[450px] !h-[400px] rounded-3xl !items-center !justify-center"
              key={index}
            >
              <div className="w-full">
                <h1 className="font-syne text-black font-bold text-center text-2xl md:text-3xl text-wrap overflow-hidden">
                  {title}
                </h1>
                <p className="mt-4 text-lg text-black text-wrap overflow-hidden">{des}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
};

export default SliderComponent;
