"use client";
import {Image, ScrollShadow} from "@nextui-org/react";
import React, {useEffect, useId, useRef, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {useClickAway} from 'react-use';
import NextImage from "next/image";
import {useTranslation} from "next-export-i18n";


export function ServicesCards() {
    const {t} = useTranslation();
    const cards = [

        {
            description: t('services1Content'),
            title: t('services1Title'),
            src: "https://bees.luxochain.io/assets-website/services/DPP.png",
            ctaText: t('servicesCtaDetails'),
            ctaLink: `https://bees.luxochain.io/assets-website/pdf/DPP_Loyalty_Regulations_${t('slang')}.pdf`,
            content: () => {
                return (
                    (
                        <ScrollShadow>
                            <p>
                                {t("services1Description")}
                                {/*Luxochain SA offers advanced solutions for the creation and management of Digital Passports,*/}
                                {/*ensuring the authenticity and traceability of products across all sectors. With our*/}
                                {/*platform, users*/}
                                {/*can seamlessly access certified information through intuitive scanning, enhancing trust and*/}
                                {/*transparency. Our blockchain-based digital passports integrate comprehensive product data,*/}
                                {/*including*/}
                                {/*sustainability credentials and full traceability, accessible through a secure digital*/}
                                {/*platform. Take*/}
                                {/*advantage of Luxochain’s Advanced Digital Passport: sophisticated solutions for flawless*/}
                                {/*management*/}
                                {/*of your products in any industry*/}
                            </p>
                        </ScrollShadow>
                    )
                );
            },
        },

        {
            description: t('services2Content'),
            title: t('services2Title'),
            src: "https://bees.luxochain.io/assets-website/services/Digital_Twin.png",
            ctaText: t('servicesCtaDetails'),
            ctaLink: `https://bees.luxochain.io/assets-website/pdf/Digital_Twin_2024_final_${t('slang')}.pdf`,
            content: () => {
                return (
                    (<ScrollShadow>
                        <p className='mb-1'>
                            {t("services2Description")}
                            {/*Luxochain SA offers advanced services for the development and management of*/}
                            {/*Digital Twins, enhancing*/}
                            {/*understanding and interaction with products across various industries. These virtual replicas*/}
                            {/*provide a detailed and engaging experience, ensuring compliance and protection against*/}
                            {/*counterfeiting. We create Digital Twins for a wide range of items, each with a unique digital*/}
                            {/*identity on the blockchain, making every product traceable, verifiable, and secure from*/}
                            {/*counterfeiting.*/}
                        </p>
                        <div>
                        <span className="text-white font-bold">
                            {t("services2Features")}
                            {/*Main features of Digital Twins Services:*/}
                        </span>
                            <span className="text-primary">
                            {t("services2FeaturesContent")}
                                {/*Advanced Development, Digital Certificates on Blockchain, Protection against Counterfeiting*/}
                        </span>
                        </div>
                    </ScrollShadow>)
                );
            },
        },
        {
            description: t('services3Content'),
            title: t('services3Title'),
            src: "https://bees.luxochain.io/assets-website/services/Collectible.png",
            ctaText: t('servicesCtaDetails'),
            ctaLink: `https://bees.luxochain.io/assets-website/pdf/Collectibles_2024_final_${t('slang')}.pdf`,
            content: () => {
                return (
                    (<ScrollShadow>
                        <p>
                            {t("services3Description")}
                            {/*Luxochain offers solutions for managing and certifying collectibles, enabling users to*/}
                            {/*authenticate their provenance and rarity. This service creates unique engagement opportunities*/}
                            {/*and adds value for consumers.*/}
                        </p>
                        <div className='my-1'>
                        <span className="text-white font-bold">
                            {t("services3Features")}
                            {/*Key Service Features:*/}
                        </span>
                            <span className="text-primary">
                            {t("services3FeaturesContent")}
                                {/*Authentication and Rarity, Unique Engagement, Consumer Value Enhancement*/}
                        </span>
                        </div>
                        <p>
                            {t("services3Description2")}
                            {/*Our collectibles management and certification services are designed to meet the needs of*/}
                            {/*collectors and provide a high-quality experience that enhances and protects their prized*/}
                            {/*possessions.*/}
                        </p>

                    </ScrollShadow>)
                );
            },
        }, {
            description: t('services4Content'),
            title: t('services4Title'),
            src: "https://bees.luxochain.io/assets-website/services/Loyalty.png",
            ctaText: t('servicesCtaDetails'),
            ctaLink: `https://bees.luxochain.io/assets-website/pdf/Loyalty_Program_2024_final_${t('slang')}.pdf`,
            content: () => {
                return (
                    (<ScrollShadow>
                        <p>
                            {t("services4Description")}
                            {/*Luxochain innovates loyalty programs through the use of blockchain, creating interactive and*/}
                            {/*personalized customer collection management systems to improve engagement and brand loyalty. One*/}
                            {/*tangible example is the My Lugano app, developed by Luxochain, which offers automatic cashback*/}
                            {/*of up to 10 percent on every purchase at more than 400 partner businesses, including stores,*/}
                            {/*restaurants, and museums. Users accumulate LVGA, a digital currency, which can be used for payments in the city*/}
                            {/*and for automatic cashback. This system, open to all – residents, visitors, and tourists – promotes*/}
                            {/*interaction and brand loyalty, providing an engaging and rewarding experience for customers.*/}
                        </p>
                        <div className='mt-1'>
                        <span className="text-white font-bold">
                            {t("services4Features")}
                            {/*Features of Loyalty Services: */}
                        </span>
                            <span className="text-primary">
                            {t("services4FeaturesContent")}
                                {/*Automatic Cashback, Universal Access, Digital Currency, Wide Variety of Partners*/}
                        </span>
                        </div>
                    </ScrollShadow>)
                );
            },
        },
    ]

    const [active, setActive] = useState(null);
    const id = useId();
    const ref = useRef(null);

    useEffect(() => {
        function onKeyDown(event) {
            if (event.key === "Escape") {
                setActive(false);
            }
        }

        if (active && typeof active === "object") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    useClickAway(ref, () => setActive(null));

    return (<>
        <AnimatePresence>
            {active && typeof active === "object" && (
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    className="fixed inset-0 bg-black/20 h-full w-full z-10"/>
            )}
        </AnimatePresence>
        <AnimatePresence>
            {active && typeof active === "object" ? (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0  grid place-items-center z-[100] sm:backdrop-blur-lg">
                    <motion.button
                        key={`button-${active.title}-${id}`}
                        layout
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        exit={{
                            opacity: 0,
                            transition: {
                                duration: 0.05,
                            },
                        }}
                        className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-content1 rounded-full h-6 w-6 z-[110]"
                        onClick={() => setActive(null)}>
                        <CloseIcon/>
                    </motion.button>
                    <motion.div
                        layoutId={`card-${active.title}-${id}`}
                        ref={ref}
                        className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-content1 sm:rounded-2xl overflow-hidden">
                        <motion.div layoutId={`image-${active.title}-${id}`}>
                            <Image
                                priority={'si'}
                                src={active.src}
                                alt={active.title}
                                radius='none'
                                removeWrapper
                                className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-center"/>
                        </motion.div>

                        <div>
                            <div className="flex justify-between items-center p-4">
                                <div className="">
                                    <motion.h3
                                        layoutId={`title-${active.title}-${id}`}
                                        className="font-bold text-primary  text-left  bg-gradient-to-br from-primary-300 to-primary-700 bg-clip-text  tracking-tight text-transparent  ">
                                        {active.title}
                                    </motion.h3>
                                    <motion.p
                                        layoutId={`description-${active.description}-${id}`}
                                        className="text-neutral-500 text-left">
                                        {active.description}
                                    </motion.p>
                                </div>

                                <motion.a
                                    layout
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    exit={{opacity: 0}}
                                    href={active.ctaLink}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className="px-4 py-2.5 text-sm rounded-full  bg-primary text-background font-bold">
                                    {active.ctaText}
                                </motion.a>
                            </div>
                            <div className="pt-4 relative px-4">
                                <motion.div
                                    layout
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    exit={{opacity: 0}}
                                    className="text-sm sm:text-md h-[15rem] pb-10 flex flex-col items-start gap-2 text-justify text-foreground ">
                                        {typeof active.content === "function"
                                            ? active.content()
                                            : active.content}
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            ) : null}
        </AnimatePresence>
        <ul className=" mx-auto w-full flex flex-wrap justify-center  gap-4 mt-8">
            {cards.map((card, index) => (
                <motion.div
                    layoutId={`card-${card.title}-${id}`}
                    key={card.title}
                    onClick={() => setActive(card)}
                    className="p-4 flex flex-col hover:bg-content1/80 rounded-2xl cursor-pointer outline outline-1 outline-white/20 hover:outline-none">
                    <div className="flex gap-4 flex-col items-center w-full">
                        <motion.div layoutId={`image-${card.title}-${id}`}>
                            <Image
                                src={card.src}
                                alt={card.title}
                                isBlurred
                                className="h-60 w-[32rem] sm:w-full user-select-none rounded-lg object-cover object-center"/>
                        </motion.div>
                        <div className="flex justify-center items-center flex-col">
                            <motion.h3
                                layoutId={`title-${card.title}-${id}`}
                                className=" inline bg-gradient-to-br from-primary-300 to-primary-700 bg-clip-text font-semibold tracking-tight text-transparent  text-center md:text-left text-base">
                                {card.title}
                            </motion.h3>
                            <motion.p
                                layoutId={`description-${card.description}-${id}`}
                                className="text-neutral-500 text-center md:text-left text-base">
                                {card.description}
                            </motion.p>
                        </div>
                    </div>
                </motion.div>
            ))}
        </ul>
    </>);
}

export const CloseIcon = () => {
    return (
        (<motion.svg
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            exit={{
                opacity: 0,
                transition: {
                    duration: 0.05,
                },
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-white">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M18 6l-12 12"/>
            <path d="M6 6l12 12"/>
        </motion.svg>)
    );
};


