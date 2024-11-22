"use client"

import {Button} from "@nextui-org/react";
import {ServicesCards} from "@/components/commons/ServicesCards";
import {useRouter} from "next/navigation";
import {useTranslation} from "next-export-i18n";


export const NewServices = () => {

    const router = useRouter()
    const {t} = useTranslation()

    const handleGetInTouch = () => {
        router.prefetch('/contacts')
        router.push('/contacts')
    }

    return (
        <section className="relative py-12 pt-24 sm:pt-32 lg:pt-40  sm:py-16 lg:py-20  mt-[90%] sm:mt-0" id='services'>
            <div className="absolute bottom-0 transform -translate-x-1/2 translate-y-96 lg:translate-y-80 left-1/2">
                <div className='absolute inset-x-0  transform-gpu blur-3xl top-[calc(100%-35rem)]'>
                    <div
                        className='relative aspect-[1155/300] sm:aspect-[1155/400] w-[35rem] -translate-x-1/2 bg-gradient-to-tr from-primary-200 to-warning-500 opacity-30'/>
                </div>
            </div>

            <div className="relative px-4 mx-auto  sm:px-6 lg:px-8">
                <div className=" mx-auto text-center">
                    <h1 className="text-center  text-foreground text-4xl w-full md:text-5xl">
                        <span
                            className='inline bg-gradient-to-br from-foreground-300 to-foreground-700 bg-clip-text font-semibold tracking-tight text-transparent dark:to-foreground-200'>
                            {t("servicesTitle")}

                        </span>
                        <p className="text-default-400 text-[1.1rem] mt-2 bg-gradient-to-br from-foreground-300 to-foreground-700 bg-clip-text font-semibold tracking-tight text-transparent dark:to-foreground-200"
                           style={{lineHeight: 'initial'}}>
                            {t("servicesDescription")}
                        </p>
                    </h1>

                    <ServicesCards/>

                    <div className="w-full h-px mt-8 bg-gradient-to-r from-primary-300 to-primary-700 sm:mt-12"></div>

                    <div className="max-w-3xl mx-auto mt-8 sm:mt-12">
                        <p className="max-w-xl mx-auto text-sm font-normal text-white sm:text-md lg:text-lg lg:max-w-none">
                            {t("servicesCta")}
                        </p>

                        <Button
                            color='primary'
                            radius='full'
                            size='lg'
                            className='mt-6 sm:mt-8 font-bold bg-gradient-to-r from-primary-500 to-primary-700 shadow-lg'
                            onPress={handleGetInTouch}
                        >
                            {t("servicesButton")}
                        </Button>

                    </div>
                </div>
            </div>
        </section>
    );
};

