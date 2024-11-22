"use client"

import {LanguageSwitcher, useTranslation} from "next-export-i18n";
import React, {Suspense} from "react";
import {MdTranslate} from "react-icons/md";
import {Button, Popover, PopoverTrigger, PopoverContent} from "@nextui-org/react";

export const TransSwitch = ({className}) => {

    return (
        <Suspense fallback={null}>
            <Popover placement="bottom"
                     backdrop='blur'
                     className={className}
                     classNames={{content: `luxo bg-content1/40 backdrop-blur-[5px] border border-gray-500 border-solid text-foreground p-5 gap-[10px]`}}>
                <PopoverTrigger>
                    <Button
                        isIconOnly
                        variant='ghost'
                        color='default'
                        className={`flex justify-center border-none items-center  aspect-square h-[100%]`}
                    >
                        <MdTranslate size={20}/>
                    </Button>
                </PopoverTrigger>
                <PopoverContent classname='p-2'>
                    <TranslatedContent/>
                </PopoverContent>
            </Popover>
        </Suspense>
    )
}

const TranslatedContent = () => {
    const { t } = useTranslation();

    return (
        <>
            <h1 className="text-center text-foreground/90 font-bold">{t("selectLang")}</h1>
            <div className="flex flex-col w-full">
                <LanguageSwitcher lang="it">{t("itLang")}</LanguageSwitcher>
                <LanguageSwitcher lang="en">{t("enLang")}</LanguageSwitcher>
                <LanguageSwitcher lang="cn">{t("cnLang")}</LanguageSwitcher>
            </div>
        </>
    );
};
