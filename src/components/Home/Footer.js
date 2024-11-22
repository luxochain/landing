"use client"

import {Button, Input} from "@nextui-org/react";
import {useState} from "react";
import {MdEmail} from "react-icons/md";
import {lendingData} from "@/https/actions";
import {toast} from "react-toastify";
import Link from "next/link";
import {useTranslation} from "next-export-i18n";

export const Footer = () => {
    const [value, setValue] = useState('')
    const [loading, setLoading] = useState(false)
    const {t} = useTranslation()

    const onSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        const body = {
            email: value,
            type: 'newsletter'
        }

        lendingData(body)
            .then(res => {
                toast.success(t('subscribedSuccess'))
            })
            .catch(err => {
                toast.error(t('subscribedError'))
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <footer className="flex relative z-[10] w-full flex-col bg-content2 border border-solid border-default-100">
            <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-18 lg:px-8 lg:24 w-full">
                <div
                    className="mb-10 gap-2 rounded-medium bg-default-200/20 p-4 sm:mb-12 sm:p-8 lg:mb-14 lg:flex lg:items-center lg:justify-between lg:gap-4">
                    <div><h3 className="text-small font-semibold text-default-600">
                        {t('newsletterTitle')}
                        {/*Subscribe to our newsletter*/}
                    </h3><p
                        className="mt-2 text-small text-default-400">
                        {t('newsletterDescription')}
                        {/*Receive weekly updates with the latest insights, trends, and tools, straight to your email.*/}
                    </p></div>
                    <form className="mt-6  sm:flex sm:max-w-md lg:mt-0" onSubmit={onSubmit}>
                        <Input placeholder='johndoe@gmail.com' value={value} onValueChange={setValue}
                               startContent={<MdEmail size={20} className='text-foreground-500 mt-0.5'/>}/>
                        <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                            <Button
                                color='primary'
                                className="font-bold"
                                isLoading={loading}
                                type="submit">
                                {t('subscribe')}
                                {/*Subscribe*/}
                            </Button>
                        </div>
                    </form>
                </div>
                <div className="xl:grid xl:grid-cols-3 xl:gap-8 mb-10">
                    <div className="space-y-8 md:pr-8">
                        <div className="flex items-center justify-start">
                            <div className="relative shadow-black/5 shadow-none rounded-none"
                                 style={{maxWidth: "fit-content"}}>
                                <img src="/website/logo_luxo.png"
                                     className="relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-none w-[55px]"
                                     data-loaded="true"/>
                            </div>
                        </div>
                        <p className="text-small text-default-500">
                            INNOVATION MEETS TRADITION
                        </p>
                        <div className="flex space-x-6"><a
                            className="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium no-underline hover:opacity-80 active:opacity-disabled transition-opacity text-default-400"
                            tabIndex="0" role="link" href="https://www.instagram.com/luxochainofficial/p/"
                            rel="noopener noreferrer" target="_blank"><span className="sr-only">Instagram</span>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512"
                                 height="25" width="25" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                            </svg>
                        </a><a
                            className="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium no-underline hover:opacity-80 active:opacity-disabled transition-opacity text-default-400"
                            tabIndex="0" role="link" href="https://t.me/luxo_offcial" rel="noopener noreferrer"
                            target="_blank"><span className="sr-only">Telegram</span>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512"
                                 height="25" width="25" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"></path>
                            </svg>
                        </a><a
                            className="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium no-underline hover:opacity-80 active:opacity-disabled transition-opacity text-default-400"
                            tabIndex="0" role="link" href="https://www.linkedin.com/company/luxochainofficial/"
                            rel="noopener noreferrer" target="_blank"><span className="sr-only">LinkedIn</span>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512"
                                 height="25" width="25" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                            </svg>
                        </a><a
                            className="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium no-underline hover:opacity-80 active:opacity-disabled transition-opacity text-default-400"
                            tabIndex="0" role="link" href="https://twitter.com/luxochain?lang=en"
                            rel="noopener noreferrer" target="_blank"><span className="sr-only">X</span>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512"
                                 height="25" width="25" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                            </svg>
                        </a></div>
                    </div>
                    <div className="mt-16 grid grid-cols-1 xl:grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <div><h3 className="text-small font-semibold text-default-600">{t('aboutUs')}</h3>
                                    <ul className="mt-6 space-y-4">
                                        <li><Link
                                            className="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-small no-underline hover:opacity-80 active:opacity-disabled transition-opacity text-default-400"
                                            tabIndex="0" role="link" href="/#services">{t('services')}</Link></li>

                                        <li><Link
                                            className="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-small no-underline hover:opacity-80 active:opacity-disabled transition-opacity text-default-400"
                                            tabIndex="0" role="link" href="/#about-us">{t('aboutUs')}</Link></li>
                                        <li><Link
                                            className="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-small no-underline hover:opacity-80 active:opacity-disabled transition-opacity text-default-400"
                                            tabIndex="0" role="link" href="/#press">{t('press')}</Link></li>
                                        <li><Link
                                            className="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-small no-underline hover:opacity-80 active:opacity-disabled transition-opacity text-default-400"
                                            tabIndex="0" role="link" href="/contacts">{t('contacts')}</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <div><h3 className="text-small font-semibold text-default-600">{t('legal')}</h3>
                                    <ul className="mt-6 space-y-4">
                                        <li><a
                                            className="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-small no-underline hover:opacity-80 active:opacity-disabled transition-opacity text-default-400"
                                            tabIndex="0" role="link" href="/website/terms">{t('termsConditions')}</a>
                                        </li>
                                        <li><a
                                            className="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-small no-underline hover:opacity-80 active:opacity-disabled transition-opacity text-default-400"
                                            tabIndex="0" role="link" href="/website/terms">{t('privacyPolicy')}</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-3 md:justify-start flex-wrap">
                    <div className="flex items-center"><p className="text-small text-default-400">© 2024 Luxochain SA.
                        All rights reserved.</p></div>
                    <div className="shrink-0 bg-divider border-none w-divider h-4" role="separator"
                         data-orientation="vertical" aria-orientation="vertical"></div>
                    <div
                        className="relative max-w-fit min-w-min inline-flex items-center justify-between box-border whitespace-nowrap border-medium border-default bg-transparent h-7 text-small rounded-full border-none px-0 text-default-500">
                        <span className="w-2 h-2 ml-1 rounded-full bg-success"></span><span
                        className="flex-1 text-inherit font-normal px-2">{t('allSystemOperational')}</span></div>
                </div>
            </div>
        </footer>
    )
}