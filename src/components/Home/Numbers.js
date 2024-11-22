import React from 'react'
import {Card, CardBody, CardFooter} from "@nextui-org/react";
import {cn} from "@/utils/cn";
import {IoMdCheckmark} from "react-icons/io";
import {useTranslation} from "next-export-i18n";


const Numbers = () => {
    const {t} = useTranslation()
    return (
        <section className="py-12  sm:py-16 lg:py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center xl:max-w-4xl">
                    <h1 className=" text-center text-foreground flex flex-col gap-2 text-4xl w-full md:text-5xl">
                        {t('numbersTitle').split(/(LUXOCHAIN)/).map((item, index) => {
                            if (item === 'LUXOCHAIN') {
                                return (
                                    <span
                                        key={index}
                                        className="inline bg-gradient-to-br from-primary-300 to-primary-700 bg-clip-text font-semibold tracking-tight text-transparent dark:to-foreground-200">
                                            LUXOCHAIN
                                        </span>
                                )
                            } else {
                                return (
                                    <span
                                        key={index}
                                        className="inline bg-gradient-to-br from-foreground-300 to-foreground-700 bg-clip-text font-semibold tracking-tight text-transparent dark:to-foreground-200">
                                            {item}
                                        </span>
                                )
                            }
                        })}
                        <p
                            className="text-default-400 text-[1.1rem] mt-2 bg-gradient-to-br from-foreground-300 to-foreground-700 bg-clip-text font-semibold tracking-tight text-transparent dark:to-foreground-200"
                            style={{lineHeight: "initial"}}
                        >
                            {t('numbersDescription')}
                        </p>
                    </h1>
                </div>

                <div className="relative mt-12 lg:mt-20 lg:max-w-5xl lg:mx-auto">
                    <div className="absolute inset-0">
                        <div
                            className="w-full h-full mx-auto bg-gradient-to-tr from-primary-200 to-warning-500 opacity-30 blur-lg filter"/>
                    </div>

                    <div
                        className=" border-1  border-[#FFFFFF1A] relative grid grid-cols-1 px-16 py-12 overflow-hidden text-center bg-content1 sm:grid-cols-2 gap-y-12 lg:grid-cols-4 rounded-2xl gap-x-20">
                        <NumberCard title='+1M' data={t('numbers1Title')}/>
                        <NumberCard title='+10K' data={t('numbers2Title')}/>
                        <NumberCard title='+1.5M' data={t('numbers3Title')}/>
                        <NumberCard title='+20' data={t('numbers4Title')}/>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Numbers

export const NumberCard = ({title, data, small = false}) => {
    return (
        <div className="flex flex-col items-center">
            <p className={cn(" font-bold inline bg-gradient-to-br from-primary-300 to-primary-700 bg-clip-text tracking-tight text-transparent",
                {
                    'text-5xl lg:order-2 lg:mt-3 ': !small,
                    'text-2xl order-2': small
                }
            )}>{title}</p>
            {/*<h3 className={cn("text-sm font-bold tracking-widest uppercase inline bg-gradient-to-br from-foreground-300 to-foreground-700 bg-clip-text text-transparent",*/}
            {/*    {*/}
            {/*        'lg:mt-0 mt-5 lg:order-1': !small,*/}
            {/*        'mt-0': small*/}
            {/*    })}>{data}</h3>*/}
            <h3
                className={cn(
                    "text-sm font-bold tracking-widest uppercase inline bg-gradient-to-br from-foreground-300 to-foreground-700 bg-clip-text text-transparent",
                    {
                        'lg:mt-0 mt-5 lg:order-1': !small,
                        'mt-0': small
                    }
                )}
            >
                {data.split(' ').map((word, index) => (
                    <span key={index} className="block">{word}</span>
                ))}
            </h3>
        </div>

    )
}