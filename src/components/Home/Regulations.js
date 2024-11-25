"use client"

import React from "react";
import VideoPlayer from "@/components/commons/VideoPlayer";
import {useTranslation} from "next-export-i18n";

export const Regulations = () => {

    const {t} = useTranslation()

    return (
        <section className="py-12 sm:py-16 lg:py-20 ">
            <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
                <h1 className="text-center text-foreground text-4xl w-full md:text-5xl">
                  <span
                      className="inline bg-gradient-to-br from-foreground-300 to-foreground-700 bg-clip-text font-semibold tracking-tight text-transparent dark:to-foreground-200">
                      {t("regulationsTitle")}
                  </span>
                    <p
                        className="text-default-400 text-[1.1rem] mt-2 bg-gradient-to-br from-foreground-300 to-foreground-700 bg-clip-text font-semibold tracking-tight text-transparent dark:to-foreground-200"
                        style={{lineHeight: "initial"}}
                    >
                        {t("regulationsDescription")}
                    </p>
                </h1>

                <div
                    className="max-w-4xl mx-auto mt-16 overflow-hidden  rounded-2xl group border-1  border-white/20 ">
                    <VideoPlayer src={`https://bees.luxochain.io/assets-website/video/DPPs_EU_Regulations_${t('slang')}.mp4`} poster={"https://bees.luxochain.io/assets-website/video/frame1_video_eu.png"} withShadow/>

                    <div
                        className="px-6 py-8 transition-all duration-200 sm:px-8 sm:py-12 lg:px-16 lg:py-20 bg-content1 hover:bg-content1/80">
                        <h3 className="inline bg-gradient-to-br from-primary-300 to-primary-700 bg-clip-text font-semibold tracking-tight text-transparent text-4xl  md:text-5xl ">
                            {t("regulations1Title")}
                        </h3>
                        <p className="mt-5 font-sans text-lg font-normal text-opacity-70 text-white">
                            {t("regulations1Description")}
                        </p>
                    </div>

                    <div
                        className="grid grid-cols-1 divide-y lg:grid-cols-3 lg:divide-x   divide-[#FFFFFF1A]">
                        <div
                            className="px-6 py-8 transition-all duration-200 sm:px-8 sm:py-10 bg-content1 hover:bg-content1/80 border-t border-[#FFFFFF1A]">
                            <h4 className="font-sans text-sm font-semibold uppercase text-white/35">
                                {t("regulations2Title")}

                            </h4>
                            <p className="mt-2  text-2xl inline bg-gradient-to-br from-primary-300 to-primary-700 bg-clip-text font-semibold tracking-tight text-transparent">
                                {t("regulations2Subtitle")}
                            </p>
                            <p className="mt-4 font-sans text-base font-normal text-opacity-70 text-white">
                                {t("regulations2Description")}
                            </p>
                        </div>

                        <div className="px-6 py-8 transition-all duration-200 sm:px-8 sm:py-10 bg-content1 hover:bg-content1/80">
                            <h4 className="font-sans text-sm font-semibold uppercase text-white/35">
                                {t("regulations3Title")}
                            </h4>
                            <p className="mt-2  text-2xl inline bg-gradient-to-br from-primary-300 to-primary-700 bg-clip-text font-semibold tracking-tight text-transparent">
                                {t("regulations3Subtitle")}
                                {/*Second*/}
                            </p>
                            <p className="mt-4 font-sans text-base font-normal text-opacity-70 text-white">
                                {t("regulations3Description")}
                            </p>
                        </div>

                        <div className="px-6 py-8 transition-all duration-200 sm:px-8 sm:py-10 bg-content1 hover:bg-content1/80">
                            <h4 className="font-sans text-sm font-semibold uppercase text-white/35">
                                {t("regulations4Title")}
                            </h4>
                            <p className="mt-2  text-2xl inline bg-gradient-to-br from-primary-300 to-primary-700 bg-clip-text font-semibold tracking-tight text-transparent">
                                {t("regulations4Subtitle")}
                            </p>
                            <p className="mt-4 font-sans text-base font-normal text-opacity-70 text-white">
                                {t("regulations4Description")}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}