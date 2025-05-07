import { brands } from "./brands";
import "./brand.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export const BrandCarousel = () => {
    return (
        <section className="w-full border rounded-[8px] border-[#D0D0D0] px-4 py-2">
            <Swiper
                spaceBetween={16}
                slidesPerView={"auto"}
                autoplay={{ delay: 2000 }}
                modules={[Autoplay]}
            >
                {brands.map((brand, index) => (
                    <SwiperSlide key={index} style={{ width: "8.8rem" }}>
                        <div className="w-[8.8rem] h-[8.8rem] flex-shrink-0">
                            <a
                                href={brand.link}
                                target="_blank"
                                rel="noreferrer"
                                data-tracking={`gm_sec3_${index + 1}`}
                                id={`gm_sec3_${index + 1}`}
                            >
                                <img
                                    className="w-full h-full object-contain"
                                    src={brand.img}
                                    alt="brand"
                                />
                            </a>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};
