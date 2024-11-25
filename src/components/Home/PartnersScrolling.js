import React from "react";
import {Spacer, Image} from "@nextui-org/react";
import ScrollingBanner from "@/components/commons/ScrollingBanner";
import {useTranslation} from "next-export-i18n";

const logosPartners = [
    {key: "logo-1",
        jsx: <Image removeWrapper className="rounded-none" src="https://bees.luxochain.io/assets-website/logos_partners/ibooster_logo.png"
                    alt="Partner logo"/>
    },
    {key: "logo-2",
        jsx: <Image removeWrapper className="rounded-none" src="https://bees.luxochain.io/assets-website/logos_partners/lsfze_logo.png"
                    alt="Partner logo"/>
    },
    {key: "logo-3",
        jsx: <Image removeWrapper className="rounded-none" src="https://bees.luxochain.io/assets-website/logos_partners/lvga_logo.png"
                    alt="Partner logo"/>
    },
    {key: "logo-4",
        jsx: <Image removeWrapper className="rounded-none" src="https://bees.luxochain.io/assets-website/logos_partners/polygon_logo.png"
                    alt="Partner logo"/>
    },
    {key: "logo-5",
        jsx: <Image removeWrapper className="rounded-none" src="https://bees.luxochain.io/assets-website/logos_partners/pwc_logo.png"
                    alt="Partner logo"/>
    },
    {key: "logo-6",
        jsx: <Image removeWrapper className="rounded-none" src="https://bees.luxochain.io/assets-website/logos_partners/temera_logo.png"
                    alt="Partner logo"/>
    },
    {key: "logo-7",
        jsx: <Image removeWrapper className="rounded-none" src="https://bees.luxochain.io/assets-website/logos_partners/vargroup_logo.png"
                    alt="Partner logo"/>
    },
];

const logosClients = [
    {key: "logo-8",
        jsx: <Image removeWrapper className="rounded-none h-full" src="https://bees.luxochain.io/assets-website/logos_clients/blue_note.png"
                    alt="Client logo"/>
    },
    {key: "logo-9",
        jsx: <Image removeWrapper className="rounded-none h-full" src="https://bees.luxochain.io/assets-website/logos_clients/bulgari.png"
                    alt="Client logo"/>
    },
    {key: "logo-10",
        jsx: <Image removeWrapper className="rounded-none h-full" src="https://bees.luxochain.io/assets-website/logos_clients/lugano.png"
                    alt="Client logo"/>
    },
    {key: "logo-11",
        jsx: <Image removeWrapper className="rounded-none h-full" src="https://bees.luxochain.io/assets-website/logos_clients/pinko.png"
                    alt="Client logo"/>
    },
    {key: "logo-12",
        jsx: <Image removeWrapper className="rounded-none h-full" src="https://bees.luxochain.io/assets-website/logos_clients/v33.png"
                    alt="Client logo"/>
    },
];

export const PartnersTitle = () => {
    const {t} = useTranslation();
    return (
        <h1 className="text-center text-foreground flex flex-col gap-2 text-4xl w-full md:text-5xl pt-12">
            {t('partnerTitle').split(/(&)/).map((item, index) => {
                if (item === '&') {
                    return (
                        <span
                            key={index}
                            className="ml-3 inline bg-gradient-to-br from-primary-300 to-primary-700 bg-clip-text font-semibold tracking-tight text-transparent dark:to-foreground-200">
                                & </span>
                    );
                } else {
                    return (
                        <span
                            key={index}
                            className="inline bg-gradient-to-br from-foreground-300 to-foreground-700 bg-clip-text font-semibold tracking-tight text-transparent dark:to-foreground-200">
                                {item}
                            </span>
                    );
                }
            })}
            <p
                className="text-default-400 text-[1.1rem] mt-2 bg-gradient-to-br from-foreground-300 to-foreground-700 bg-clip-text font-semibold tracking-tight text-transparent dark:to-foreground-200"
                style={{lineHeight: "initial"}}
            >
                {t('partnerDescription')}
            </p>
        </h1>
    )
}

export default function PartnersScrolling() {
    const {t} = useTranslation();
    return (
        <section className="mx-auto w-full max-w-6xl px-6 pt-4 pb-12 sm:pb-16 lg:px-8 lg:pb-20">

            <Spacer y={12}/>
            <ScrollingBanner shouldPauseOnHover gap="40px" duration={50}>
                {Array.from({length: 3}, () => logosPartners).flat().map(({key, jsx}, index) => (
                    <div key={key + index} className="flex items-center justify-center text-foreground min-w-[80px]">
                        {jsx}
                    </div>
                ))}
            </ScrollingBanner>
            <Spacer y={12}/>
            <ScrollingBanner isReverse shouldPauseOnHover duration={50} gap="40px">
                {Array.from({length: 3}, () => logosClients).flat().map(({key, jsx}, index) => (
                    <div key={key + index}
                         className="flex items-center justify-center text-foreground min-w-fit h-[30px]">
                        {jsx}
                    </div>
                ))}
            </ScrollingBanner>
        </section>
    );
}
