import {Button, ButtonGroup} from "@nextui-org/react";
import {Icon} from "@iconify/react";
import FadeInImage from "@/components/commons/FadeInImage";
import {TbClick} from "react-icons/tb";
import React from "react";
import Link from "next/link";
import {useTranslation} from "next-export-i18n";

const DiamondGIF = ({className}) => {
    return (
        <img src={'/website/video/diamond.gif'} alt='Diamond' className={`w-[3.5rem] sm:w-[4.5rem] ${className}`}/>
    )
}

export const NewHero = () => {
    const {t} = useTranslation()
    return (
        <>
            <section
                className="z-20 relative my-14 flex flex-col items-center justify-center gap-[22px] sm:gap-[2.5rem] ">
                <Button
                    className="h-9 block overflow-hidden border-solid border-small border-white/20 bg-content1 px-[18px] py-2 text-small font-normal leading-5 text-default-500"
                    radius="full"
                    variant="bordered"
                >
                    {t("heroChip").split(/(Web 3.0)/).map((text, index) => {
                        if (text === 'Web 3.0') {
                            return <span key={index} className='font-bold text-primary'>Web 3.0</span>
                        } else {
                            return <span key={index}>{text}</span>
                        }
                    })}
                </Button>
                <div className='flex gap-3 items-center relative'>
                    <DiamondGIF className='absolute top-[6px] sm:top-[11px] right-[-24px] '/>
                    <div
                        className="text-center text-[clamp(40px,10vw,44px)] font-bold leading-[1.2] tracking-tighter sm:text-[64px]">
                        <div
                            className="bg-hero-section-title flex flex-col bg-clip-text text-transparent dark:from-[#FFFFFF] dark:to-[#FFFFFF66]">
                            {t("heroTitle").split(/(LUXOCHAIN)/).map((text, index) => {
                                if (text === 'LUXOCHAIN') {
                                    return <span key={index}
                                                 className='inline bg-gradient-to-br from-primary-300 to-primary-700 bg-clip-text text-transparent font-semibold tracking-tight'>{text}</span>
                                } else {
                                    return <span key={index}>{text}</span>
                                }
                            })}
                        </div>
                    </div>
                    <DiamondGIF className='absolute top-[6px] sm:top-[11px] left-[-20px] '/>
                </div>


                <p className="text-center font-normal leading-7 text-default-500 sm:w-[466px] sm:text-[18px]">
                    {t("heroDescription")}
                </p>
                <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6">
                    <Button
                        as={Link}
                        color='primary'
                        variant='shadow'
                        startContent={<TbClick size='22'/>}
                        className='max-w-sm font-bold text-sm '
                        size='sm'
                        href='https://explorer.luxochain.io'
                        target='_blank'
                        rel='noreferrer noopener'
                    >
                        {t("heroButton")}
                    </Button>
                </div>

                <div
                    className="pointer-events-none top-[50%] sm:top-[-20%] lg:top-[-70%] z-[-1]  select-none absolute scale-125 h-[100dvh]">
                    {/*inset-[187px]*/}
                    <FadeInImage
                        fill
                        priority
                        alt="Gradient background"
                        src="/website/bg-gradient.png"
                    />
                </div>
            </section>
            <div
                className="w-full overflow-x-hidden z-20 mt-auto  max-w-6xl overflow-hidden rounded-2xl  border-1  border-[#FFFFFF1A] bg-background bg-opacity-0 p-1 pb-0 top-[32rem] absolute scale-150 sm:relative sm:top-0 sm:scale-100">
                <img src="/website/Luxochain_Screen.svg" alt="Luxochain screen" className="w-full"/>
            </div>
        </>
    )
}