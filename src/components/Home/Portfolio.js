"use client"

import React, {useState} from "react";
import {Button, Image} from "@nextui-org/react"
import {FiHeart} from "react-icons/fi";
import {GoHeartFill} from "react-icons/go";
import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {Navigation, Pagination} from "swiper/modules";
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai";
import {useTranslation} from "next-export-i18n";

const CustomNavigation = () => {
    const swiper = useSwiper();

    return (
        <>
            <Button
                onPress={() => swiper.slidePrev()}
                isIconOnly
                radius='lg'
                variant='faded'
                className='absolute left-0 top-[40%] z-10 border-1 bg-default-100 transform -translate-y-1/2'
                aria-label="Previous"
            >
                <AiOutlineArrowLeft size={24} className='text-primary'/>
            </Button>

            <Button
                onPress={() => swiper.slideNext()}
                isIconOnly
                radius='lg'
                variant='faded'
                className='absolute right-0 top-[40%] z-10 border-1 bg-default-100 transform -translate-y-1/2'
                aria-label="Next"
            >
                <AiOutlineArrowRight size={24} className='text-primary'/>
            </Button>

        </>
    );
};


export const Portfolio = () => {
    const {t} = useTranslation();

    const projects = [
        {
            id: 0,
            title: t("portfolio1Title"),
            description: t("digitalCertificate"),
            img: "https://bees.luxochain.io/assets-website/portfolio/phone_blue_note.png",
        },
        {
            id: 1,
            title: t("portfolio2Title"),
            description: t("digitalTwin"),
            img: "https://bees.luxochain.io/assets-website/portfolio/phone_pinko.png",
        },
        {
            id: 2,
            title: t("portfolio3Title"),
            description: t("web3Integration"),
            img: "https://bees.luxochain.io/assets-website/portfolio/phone_v33.png",
        },
        {
            id: 3,
            title: t("portfolio4Title"),
            description: t("luxuryCollectible"),
            img: "https://bees.luxochain.io/assets-website/portfolio/phone_bulgari.png",
        },
        {
            id: 4,
            title: t("portfolio5Title"),
            description: t("luxuryCollectible"),
            img: "https://bees.luxochain.io/assets-website/portfolio/phone_2_bulgari.png",
        },
        {
            id: 5,
            title: t("portfolio6Title"),
            description: t("luxuryCollectible"),
            img: "https://bees.luxochain.io/assets-website/portfolio/phone_3_bulgari.png",
        },
        {
            id: 6,
            title: t("portfolio7Title"),
            description:t("web3Integration"),
            img: "https://bees.luxochain.io/assets-website/portfolio/phone_mylugano.png",
        },
        {
            id: 7,
            title: t("portfolio8Title"),
            description:t("web3Integration"),
            img: "https://bees.luxochain.io/assets-website/portfolio/phone_olivetti.png",
        },
        {
            id: 8,
            title: t("portfolio9Title"),
            description:t("digitalTwin"),
            img: "https://bees.luxochain.io/assets-website/portfolio/phone_2_pinko.png",
        },
        {
            id: 9,
            title: t("portfolio10Title"),
            description: t("digitalCertificate"),
            img: "https://bees.luxochain.io/assets-website/portfolio/phone_inspire.png",
        }
    ];


    return (
        <section className="py-12 sm:py-16 lg:py-20 xl:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <h1 className="text-center text-foreground text-4xl w-full md:text-5xl">
                  <span
                      className="inline bg-gradient-to-br from-foreground-300 to-foreground-700 bg-clip-text font-semibold tracking-tight text-transparent dark:to-foreground-200">
                    {t("portfolioTitle")}
                  </span>
                    <p
                        className="text-default-400 text-[1.1rem] mt-2 bg-gradient-to-br from-foreground-300 to-foreground-700 bg-clip-text font-semibold tracking-tight text-transparent dark:to-foreground-200"
                        style={{lineHeight: "initial"}}
                    >
                        {t("portfolioDescription")}
                    </p>
                </h1>
                <div className='flex gap-2 items-center xl:hidden justify-center mt-4'>
                    <AiOutlineArrowLeft size={14} className='text-content1'/>
                    <p className='text-content1 text-xs '>
                        {t("portfolioSwipe")}
                    </p>
                    <AiOutlineArrowRight size={14} className='text-content1'/>
                </div>

                <Swiper
                    modules={[Pagination]}
                    navigation
                    spaceBetween={20}
                    slidesPerView={3}
                    loop={true}
                    pagination={{
                        dynamicBullets: true,
                        clickable: true
                    }}

                    className="mt-6  custom-swiper-navigation"
                >
                    {projects.map((project) => (
                        <SwiperSlide key={project.id}>
                            <div className="relative  group rounded-2xl ">
                                <img
                                    className="object-cover w-full transition-all duration-200 group-hover:scale-110 group-hover:-rotate-2 pb-[5rem] "
                                    src={project.img}
                                    alt={project.title}
                                />
                                <div
                                    className="absolute inset-0 pointer-events-none bg-gradient-to-t rounded-2xl from-content1 via-transparent to-transparent opacity-80"></div>
                                <div className="absolute bottom-0 left-0 w-full px-6 py-5">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-base inline bg-gradient-to-br from-primary-300 to-primary-700 bg-clip-text font-semibold tracking-tight text-transparent">
                                                {project.title}
                                            </p>
                                            <p className="mt-1 text-sm font-normal text-white/70">
                                                {project.description}
                                            </p>
                                        </div>

                                        <button
                                            type="button"
                                            className="inline-flex items-center justify-center text-white transition-all duration-200 border-2 border-white pointer-events-auto h-14 w-14 rounded-2xl bg-white/10 backdrop-blur-lg "
                                        >
                                            <GoHeartFill className="text-danger" size="28"/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    <CustomNavigation />
                </Swiper>
            </div>
        </section>
    );
};


