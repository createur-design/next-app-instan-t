import Image from "next/image";
import Styles from "../../styles/components/filtre.event.module.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
export default function events() {
  return (
    <>
      <div className={Styles.boxEvents}>
        <div className="grid-x grid-padding-x">
          <div className="cell">
            <div className={Styles.filtreEvent}>
              <button className={Styles.active}>in progress</button>
              <button>upcomming</button>
              <button>passed</button>
            </div>
          </div>
        </div>
        <div className={Styles.boxSwiper}>
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={30}
            className={Styles.swiperEvents}
          >
            <SwiperSlide className={Styles.swiperSlide}>
              <Image
                src="/assets/images/confetti-cannon-party.jpeg"
                alt="Picture of the author"
                layout="fill"
                className={Styles.img}
              />
            </SwiperSlide>
            <SwiperSlide className={Styles.swiperSlide}>
              <Image
                src="/assets/images/confetti-cannon-party.jpeg"
                alt="Picture of the author"
                layout="fill"
                className={Styles.img}
              />
            </SwiperSlide>
            <SwiperSlide className={Styles.swiperSlide}>
              <Image
                src="/assets/images/confetti-cannon-party.jpeg"
                alt="Picture of the author"
                layout="fill"
                className={Styles.img}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
