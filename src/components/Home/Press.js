"use client"

import React, {useState} from "react";
import {Chip, Divider, Link, Pagination, Image} from "@nextui-org/react";
import {FaArrowRight} from "react-icons/fa6";
import {press} from "@/config/press";
import {useTranslation} from "next-export-i18n";


export const Press = () => {
    const {t} = useTranslation()
    const [currentPage, setCurrentPage] = useState(1)

    const itemsPerPage = 3;

    const sortedPress = [...press].sort((a, b) => b.priority - a.priority); // Ordina per priorità decrescente
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = sortedPress.slice(startIndex, endIndex);

    console.log(currentItems)

    return (
        <section className="py-12  sm:py-16 lg:py-20 flex flex-col items-center" id='press'>
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <h1 className="text-center text-foreground flex flex-col gap-2 text-4xl w-full md:text-5xl">
                    <span
                        className="inline bg-gradient-to-br from-foreground-300 to-foreground-700 bg-clip-text font-semibold tracking-tight text-transparent dark:to-foreground-200">
                        {t('pressTitle')}
                    </span>
                    <p
                        className="text-default-400 text-[1.1rem] mt-2 bg-gradient-to-br from-foreground-300 to-foreground-700 bg-clip-text font-semibold tracking-tight text-transparent dark:to-foreground-200"
                        style={{lineHeight: "initial"}}
                    >
                        {t('pressDescription')}

                    </p>
                </h1>

                <div className="relative max-w-md mx-auto mt-8 md:max-w-none sm:mt-12">
                    <div className="absolute inset-y-0 inset-x-0">
                        <div
                            className="w-full h-full mx-auto bg-gradient-to-tr from-primary-200 to-warning-500 opacity-30 blur-lg filter"/>
                    </div>

                    <div
                        className="relative grid grid-cols-1 overflow-hidden  border-1  border-[#FFFFFF1A] bg-content1 divide-y divide-[#FFFFFF1A] shadow-xl lg:grid-cols-3 md:divide-y-0 md:divide-x rounded-2xl">
                        {currentItems.map((press, index) => (
                            <div key={index} className="relative px-5 py-6 group sm:p-8 xl:p-10 flex flex-col gap-4 ">
                                <div className="overflow-hidden h-[8rem] w-full p-4 rounded-2xl bg-default-100">
                                    <Image
                                        removeWrapper
                                        className="object-contain w-full h-full transition-all duration-200 group-hover:opacity-70 rounded-none"
                                        src={press.image}
                                        alt=""/>
                                </div>
                                <div className='w-full flex justify-between items-center'>
                                    <p className=" text-sm font-normal text-default-400 ">
                                        {t('date' + press.priority)}
                                    </p>
                                    <Chip variant='faded'
                                          className='border border-solid border-foreground-500 text-xs uppercase tracking-widest'
                                          color='primary' radius='sm'>
                                        <span
                                            className='inline bg-gradient-to-br from-primary-300 to-primary-700 bg-clip-text font-semibold uppercase tracking-widest text-transparent'>
                                            {t('category' + press.priority)}
                                        </span>
                                    </Chip>
                                </div>
                                <p className="text-xl  inline bg-gradient-to-br from-primary-300 to-primary-700 bg-clip-text font-semibold tracking-tight text-transparent  ">
                                    {t('press' + press.priority)}
                                </p>
                                <div className='w-max'>
                                    <Link href={press.link} size='sm'
                                          className='mb-1 text-xs text-background  bg-gradient-to-br from-foreground-300 to-foreground-700 bg-clip-text font-semibold uppercase tracking-widest text-transparent'
                                          showAnchorIcon isExternal
                                          anchorIcon={
                                              <FaArrowRight size='14' className='ml-2 text-foreground-400 mb-0.5'/>
                                          }>
                                        {t('continueReading')}
                                    </Link>
                                    <Divider/>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Pagination color='primary' className='mt-4' isCompact showControls
                        total={Math.ceil(press.length / itemsPerPage)}
                        page={currentPage}
                        onChange={setCurrentPage}/>
        </section>

    )
}