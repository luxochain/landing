"use client"

import React, {useState} from "react";
import {Tab, Tabs, Image} from "@nextui-org/react";
import {
    IoDiamondOutline,
    IoFolderOpenOutline,
    IoPodiumOutline,
    IoPricetagsOutline,
    IoTerminalOutline
} from "react-icons/io5";
import {useTranslation} from "next-export-i18n";


const teams = {
    founders: [
        {
            src: 'https://bees.luxochain.io/assets-website/teams/Baldi.jpg',
            name: 'Davide Baldi',
            job: 'founderCEO',
            linkedin: 'https://www.linkedin.com/in/davide-baldi-2b645023/'
        },
        {
            src: 'https://bees.luxochain.io/assets-website/teams/Consonni.jpg',
            name: 'Natale Consonni',
            job: 'founder',
            linkedin: 'https://www.linkedin.com/in/natale-consonni-2b40695/'
        },
        {
            src: 'https://bees.luxochain.io/assets-website/teams/Malgrati.jpg',
            name: 'Alfredo Malgrati',
            job: 'founder',
            linkedin: 'https://www.linkedin.com/in/alfredo-cesare-malgrati-52b5564b/?originalSubdomain=it'
        }
    ],
    management: [
        {
            src: 'https://bees.luxochain.io/assets-website/teams/Guarducci.jpg',
            name: 'Marco Guarducci',
            job: 'CTO',
            linkedin: 'https://www.linkedin.com/in/guarduccimarco/'
        },
        {
            src: 'https://bees.luxochain.io/assets-website/teams/Vigano.jpg',
            name: 'Federico Viganò',
            job: 'COO',
            linkedin: 'https://www.linkedin.com/in/federicovigano/'
        },
        {
            src: 'https://bees.luxochain.io/assets-website/teams/Caruso.jpg',
            name: 'Gianmarco Caruso',
            job: 'creativeDirector',
            linkedin: 'https://www.linkedin.com/in/giovanni-marco-caruso-13a967160/'
        },
        {
            src: 'https://bees.luxochain.io/assets-website/teams/Montini.jpg',
            name: 'Valeria Montini',
            job: 'administrationManager',
            linkedin: 'https://www.linkedin.com/in/valeria-montini-47973422b/?originalSubdomain=ch'
        },
        {
            src: 'https://bees.luxochain.io/assets-website/teams/Bazzini.jpg',
            name: 'Davide Bazzini',
            job: 'marketingSpecialist',
            linkedin: 'https://www.linkedin.com/in/davide-bazzini-699045252/'
        },
        {
            src: 'https://bees.luxochain.io/assets-website/teams/Zucchetti.jpg',
            name: 'Davide Zucchetti',
            job: 'marketingManager',
            linkedin: 'https://www.linkedin.com/in/davide-zucchetti-hiskill/'
        }],
    market: [
        {
            src: 'https://bees.luxochain.io/assets-website/teams/Ruffa.jpg',
            name: 'Marco Ruffa',
            job: 'headOfLuxuryMarket',
            linkedin: 'https://www.linkedin.com/in/marcoruffa/'
        },
        {
            src: 'https://bees.luxochain.io/assets-website/teams/Ferlin.jpg',
            name: 'Alberto Ferlin',
            job: 'strategicalPartnership',
            linkedin: 'https://www.linkedin.com/in/alberto-ferlin-963a3332/'
        },
        {
            src: 'https://bees.luxochain.io/assets-website/teams/Tosi.jpg',
            name: 'Leonardo Tosi',
            job: 'businessDeveloper',
            linkedin: 'https://www.linkedin.com/in/leonardo-tosi-612a01239/'
        },
        {
            src: 'https://bees.luxochain.io/assets-website/teams/Durbano.jpg',
            name: 'Alessandro Durbano',
            job: 'businessDeveloper',
            linkedin: 'https://www.linkedin.com/in/alessandro-durbano-85011b92/'
        }
    ],
    project: [
        // {
        //     src: '/teams/Iavarone.png',
        //     name: 'Luca Iavarone ',
        //     job: 'Project Manager'
        // },
        {
            src: 'https://bees.luxochain.io/assets-website/teams/Cavallini.jpg',
            name: 'Barbara Cavallini',
            job: 'projectManager',
            linkedin: 'https://www.linkedin.com/in/barbara-cavallini-7177b442/'
        }],
    dev: [
        {
            src: 'https://bees.luxochain.io/assets-website/teams/Bujor.jpg',
            name: 'Marcel Bujor',
            job: 'teamLeader',
            linkedin: 'https://www.linkedin.com/in/marcel-iulian-bujor-38b96a1b2/'
        },
        {
            src: 'https://bees.luxochain.io/assets-website/teams/Rovai.jpg',
            name: 'Lorenzo Rovai',
            job: 'seniorDeveloper',
            linkedin: 'https://www.linkedin.com/in/lorenzo-rovai-732554176/'
        },
        {
            src: 'https://bees.luxochain.io/assets-website/teams/Pacchioni.jpg',
            name: 'Fabio Pacchioni',
            job: 'seniorDeveloper',
            linkedin: 'https://www.linkedin.com/in/fabio-pacchioni-34a80670/'
        },
        {
            src: 'https://bees.luxochain.io/assets-website/teams/Innocenti.jpg',
            name: 'Stefano Innocenti',
            job: 'seniorDeveloper',
            linkedin: 'https://www.linkedin.com/in/stefano-innocenti-637a90228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'

        }

    ]
}


export const Team = () => {
    const [selected, setSelected] = useState("founders");
    const {t} = useTranslation()

    return (
        <section className="py-10  sm:py-16 lg:py-24 w-full">
            <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl flex flex-col items-center gap-4 w-full">
                <h1 className="text-center text-foreground flex flex-col gap-2 text-4xl w-full md:text-5xl">
                    <span
                        className="inline bg-gradient-to-br from-foreground-300 to-foreground-700 bg-clip-text font-semibold tracking-tight text-transparent dark:to-foreground-200">
                        {t('teamTitle')}
                        {/*TEAM*/}
                    </span>
                    <p
                        className="text-default-400 text-[1.1rem] mt-2 bg-gradient-to-br from-foreground-300 to-foreground-700 bg-clip-text font-semibold tracking-tight text-transparent dark:to-foreground-200"
                        style={{lineHeight: "initial"}}
                    >
                        {t('teamDescription')}
                        {/*Meet the team behind the success of our business*/}
                    </p>
                </h1>

                <Tabs variant='underlined' selectedKey={selected} onSelectionChange={setSelected}
                      classNames={{
                          cursor: 'bg-gradient-to-r from-primary-300 to-primary-700',
                          tabContent: 'group-data-[selected=true]:inline group-data-[selected=true]:bg-gradient-to-br group-data-[selected=true]:from-primary-300 group-data-[selected=true]:to-primary-700 group-data-[selected=true]:bg-clip-text group-data-[selected=true]:text-transparent',
                          tabList: 'flex-wrap justify-center',
                          tab: 'w-auto'
                      }}
                >
                    < Tab
                        key='founders'
                        title={
                            <div className="flex items-center space-x-2">
                                <IoDiamondOutline className='text-[#A1A1AA] group-data-[selected=true]:text-primary-400'
                                                  size='20'/>
                                <span>{t('founders')}</span>
                            </div>
                        }/>
                    <Tab key='management' title={
                        <div className="flex items-center space-x-2">
                            <IoPodiumOutline className='text-[#A1A1AA] group-data-[selected=true]:text-primary-400'
                                             size='20'/>
                            <span>{t('managementTeam')}</span>
                        </div>
                    }/>
                    <Tab key='market' title={
                        <div className="flex items-center space-x-2">
                            <IoPricetagsOutline className='text-[#A1A1AA] group-data-[selected=true]:text-primary-400'
                                                size='20'/>
                            <span>{t('marketStrategy')}</span>
                        </div>
                    }/>
                    <Tab key='project' title={
                        <div className="flex items-center space-x-2">
                            <IoFolderOpenOutline className='text-[#A1A1AA] group-data-[selected=true]:text-primary-400'
                                                 size='20'/>
                            <span>{t('projectManagement')}</span>
                        </div>
                    }/>
                    <Tab key='dev' title={
                        <div className="flex items-center space-x-2">
                            <IoTerminalOutline className='text-[#A1A1AA] group-data-[selected=true]:text-primary-400'
                                               size='20'/>
                            <span>{t('developmentTeam')}</span>
                        </div>
                    }/>
                </Tabs>

                <div
                    className="grid w-full grid-cols-1 max-w-md mx-auto lg:max-w-none mt-4 lg:mt-6 lg:grid-cols-3 gap-5">
                    {teams[selected].map((team, index) => (

                        <div key={index}
                             className="group relative rounded-2xl overflow-hidden border-1 w-full border-[#FFFFFF5e]  max-h-[380px]">
                            <div className="aspect-w-3 aspect-h-4 h-full ">
                                <Image removeWrapper
                                       className="z-0 rounded-none w-full h-full object-cover transition-all duration-200 transform group-hover:scale-110 "
                                       src={team.src}
                                       alt=""/>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-default-100 to-transparent"></div>
                            <div className="absolute inset-x-0 bottom-0">
                                <div className="px-8 flex flex-col items-center">
                                    <p className="text-2xl inline bg-gradient-to-br from-primary-300 to-primary-700 bg-clip-text font-semibold tracking-tight text-transparent">
                                        {team.name}
                                    </p>
                                    <p className="text-sm text-white/60">{t(team.job)}</p>
                                </div>
                                <div className="border-t mt-6  border-[#FFFFFF5e] divide-x divide-[#FFFFFF5e] flex">
                                    <button type="button"
                                            onClick={() => window.open(team.linkedin, '_blank')}
                                            className="text-white flex items-center justify-center w-full px-4 py-3 hover:bg-white hover:bg-opacity-20 transition-all duration-200">
                                        <span className="sr-only"> LinkedIn </span>
                                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                             fill="currentColor">
                                            <circle cx="4.983" cy="5.009" r="2.188"></circle>
                                            <path
                                                d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    )
}