"use client";
import Link from "next/link";
import React from "react";
import { EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";
import { RightArrow } from "../svg";
import HeroSection from "@/components/slider/Heroslider";

const heroSliderData = [
  {
    id: 1,
    subtitle: "Be a part of our journey",
    title: "Precision-Crafted Engineering Solutions and Services",
    video: "/assets/videos/erith-video.mp4",
  },
  {
    id: 2,
    subtitle: "Be a part of our history",
    title: "Education to Create the Future.",
    video: "/assets/videos/hero-video2.mp4",
  },
  {
    id: 3,
    subtitle: "Be a part of our history",
    title: "Discipline to Create the Future.",
    video: "/assets/videos/hero-video3.mp4",
  },
];

const slider_options: SwiperOptions = {
  slidesPerView: 1,
  effect: "fade",
  autoplay: {
    delay: 3500,
  },
  pagination: {
    el: ".tp-program-dot",
    clickable: true,
  },
};

export default function HeroAreaOne() {
  return (
    <section className="tp-hero-area">
      <Swiper
        {...slider_options}
        modules={[EffectFade]}
        className="swiper tp-slider-active"
      >
        {heroSliderData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="tp-hero-item">
              {/* Background Video */}
              <video
                className="tp-hero-bg-video"
                src={item.video}
                autoPlay
                loop
                muted
                playsInline
              />

              {/* Centered Text */}
              <div className="tp-hero-content">
                <span className="tp-hero-subtitle">{item.subtitle}</span>
                <h2 className="tp-hero-title">{item.title}</h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>{`
        .tp-hero-item {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .tp-hero-bg-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: -1;
        }

        .tp-hero-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          color: #ffffff;
          padding: 0 20px;
          z-index: 2;
        }

        .tp-hero-subtitle {
          font-family: "Poppins", sans-serif;
          font-weight: 700;
          font-style: normal; /* Ensures no italics */
          font-size: 16px;
          display: block;
          margin-bottom: 10px;
        }

        .tp-hero-title {
          font-family: "Poppins", sans-serif;
          font-weight: 700;
          font-style: normal; /* Ensures no italics */
          font-size: 48px;
          line-height: 1.2;
          margin: 0;
        }

        /* Responsive typography */
        @media (max-width: 992px) {
          .tp-hero-title {
            font-size: 36px;
          }
          .tp-hero-subtitle {
            font-size: 22px;
          }
        }

        @media (max-width: 576px) {
          .tp-hero-title {
            font-size: 28px;
          }
          .tp-hero-subtitle {
            font-size: 18px;
          }
        }
      `}</style>
      {/* <HeroSection/> */}
    </section>
  );
}
