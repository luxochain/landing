"use client"

import React, {useEffect, useState} from 'react'
import {
    Accordion,
    AccordionItem,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Divider, Input, Link, Modal, ModalBody, ModalContent, ModalHeader,
    Spacer, Textarea, useDisclosure
} from "@nextui-org/react";
import VideoPlayer from "@/components/commons/VideoPlayer";
import {FaArrowRight} from "react-icons/fa6";
import {lendingData} from "@/https/actions";
import {toast} from "react-toastify";
import {useTranslation} from "next-export-i18n";

const textItems = [
    'companyDescription2',
    'companyDescription3',
]

const Company = () => {
    const {t} = useTranslation()
    const [selectedKeys, setSelectedKeys] = useState(new Set(["1"]));
    const {isOpen, onOpen, onOpenChange} = useDisclosure()

    return (
        <section className="py-12 sm:py-16 lg:py-20 " id='about-us'>
            <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-24 gap-y-8 xl:gap-x-36 items-center relative">

                    <div
                        className='flex flex-col justify-center gap-6 z-1 border-1  border-[#FFFFFF1A] p-8 rounded-2xl'>
                        <h1 className=" text-center flex-wrap justify-center lg:text-left text-foreground flex flex-col gap-2 text-4xl w-full md:text-5xl">
                           <span className='text-center'>
                               {t('companyTitle').split(/(LUXOCHAIN)/).map((item, index) => {
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
                           </span>

                            <p
                                className="text-default-400 text-[1.1rem] mt-2 bg-gradient-to-br from-foreground-300 to-foreground-700 bg-clip-text font-semibold tracking-tight text-transparent dark:to-foreground-200"
                                style={{lineHeight: "initial"}}
                            >
                                {t('companyDescription')}
                            </p>
                        </h1>
                        <div className='flex flex-col gap-2'>
                            <Link color='primary' size='sm' className='self-center text-xs cursor-pointer'
                                  href={`https://bees.luxochain.io/Luxochain_Overview_${t("slang")}.pdf`}
                                  target='_blank'
                                  rel='noopener noreferrer'
                            >
                                {t("downloadGeneral")}
                            </Link>
                            <Button
                                color='primary'
                                radius='full'
                                size='md'
                                onPress={onOpen}
                                className=' font-bold bg-gradient-to-r from-primary-500 to-primary-700 shadow-lg'
                                endContent={<FaArrowRight size='20' className='text-background'/>}
                            >
                                {t("requestAdditionalInfo")}

                            </Button>
                        </div>

                        <div className='relative'>
                            <div
                                className="absolute bottom-0 transform -translate-x-1/2 translate-y-[22rem] left-1/2  z-[0]">
                                <div className='absolute inset-x-0  transform-gpu blur-3xl top-[calc(100%-33rem)]'>
                                    <div
                                        className='relative aspect-[1155/300] sm:aspect-[1155/400] w-[35rem] -translate-x-1/2 bg-gradient-to-tr from-primary-200 to-warning-500 opacity-30'/>
                                </div>
                            </div>

                            <Card>

                                <CardHeader>
                                    <h3 className="font-sans text-2xl w-full text-center inline bg-gradient-to-br from-primary-300 to-primary-700 bg-clip-text font-semibold tracking-tight text-transparent">
                                        {t("companyMobile")}

                                    </h3>

                                </CardHeader>
                                <Divider/>
                                <CardBody className='gap-3 flex flex-row justify-center flex-wrap'>
                                    <a href="https://apps.apple.com/es/app/luxo/id1626074244"
                                       rel='noopener noreferrer'
                                       target='_blank'
                                       title="" className="" role="button">
                                        <img className="w-auto h-12"
                                             src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/features/3/appstore.png"
                                             alt=""/>
                                    </a>

                                    <a href="https://play.google.com/store/apps/details?id=io.luxochain.luxo"
                                       rel='noopener noreferrer'
                                       target='_blank'
                                       title="" className="" role="button">
                                        <img className="w-auto h-12"
                                             src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/features/3/googlestore.png"
                                             alt=""/>
                                    </a>
                                </CardBody>
                            </Card>
                        </div>

                    </div>
                    <Accordion selectedKeys={selectedKeys}
                               onSelectionChange={setSelectedKeys}
                               variant='shadow'
                               className='px-10 py-6 rounded-2xl !z-[1]'
                               itemClasses={{trigger: 'pb-4'}}>

                        <AccordionItem key="1" aria-label="Accordion 1" title={<h3
                            className="font-sans text-3xl inline bg-gradient-to-br from-primary-300 to-primary-700 bg-clip-text font-semibold tracking-tight text-transparent ">
                            {t("companySubtitle2")}
                        </h3>}>
                            <p className="font-sans text-base font-normal text-opacity-70 text-white">{t(textItems[0])}</p>
                        </AccordionItem>
                        <AccordionItem key="2" aria-label="Accordion 2" title={<h3
                            className="font-sans text-3xl inline bg-gradient-to-br from-primary-300 to-primary-700 bg-clip-text font-semibold tracking-tight text-transparent">
                            {t("companySubtitle3")}
                        </h3>}>
                            <p className="font-sans text-base font-normal text-opacity-70 text-white">{t(textItems[1])}</p>
                        </AccordionItem>
                    </Accordion>

                </div>
                <Spacer y={6}/>
                <VideoPlayer src={`https://bees.luxochain.io/assets-website/video/company_video_ENG.mp4`} poster='https://bees.luxochain.io/assets-website/video/frame2_company.png'
                             className='rounded-2xl border border-white/20'/>
            </div>
            <ModalRequestInfo isOpen={isOpen} onOpenChange={onOpenChange}/>
        </section>

    )
}

const ModalRequestInfo = ({isOpen, onOpenChange}) => {
    const [form, setForm] = useState({
        company_name: "",
        company_role: "",
        company_sector: "",
        description: "",
        email: ""
    })
    const [errorEmail, setErrorEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const {t} = useTranslation()

    const onSubmit = (e, onClose) => {
        e.preventDefault()
        setLoading(true)
        onClose()
        const body = {
            email: form.email,
            formData: form
        }

        lendingData(body)
            .then(() => {
                toast.success(t('requestSuccess'))
            })
            .catch(() => {
                toast.error(t('requestError'))
            })
            .finally(() => {
                setLoading(false)
            })

    }

    useEffect(() => {
        if (form.email && !form.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
            setErrorEmail(t('invalidEmail'))
        } else {
            setErrorEmail('')
        }

    }, [form]);

    return (
        <Modal backdrop='opaque' isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent className='p-4 py-6'>
                {onClose => (
                    <>
                        <ModalHeader className="flex-col items-center gap-1 px-0 text-center">
                            <h1 className="text-2xl inline bg-gradient-to-br from-primary-300 to-primary-700 bg-clip-text font-semibold tracking-tight text-transparent">
                                {t("requestAdditionalInfo")}
                            </h1>
                            <p className="text-small font-normal text-default-500">
                                {t("requestDescription")}

                            </p>
                        </ModalHeader>
                        <ModalBody>
                            <form
                                onSubmit={e => onSubmit(e, onClose)}
                            >
                                <div className="grid grid-cols-1 gap-4">
                                    <Input isRequired name='company_name' label={t('companyNameLabel')} value={form.company_name}
                                           onValueChange={(e) => setForm({...form, company_name: e})}
                                           placeholder={t('companyNamePlaceholder')}/>
                                    <Input isRequired name='company_role' label={t('companyRoleLabel')} value={form.company_role}
                                           onValueChange={(e) => setForm({...form, company_role: e})}
                                           placeholder={t('companyRolePlaceholder')}/>
                                    <Input name='company_sector' label={t('companySectorLabel')} value={form.company_sector}
                                           onValueChange={(e) => setForm({...form, company_sector: e})}
                                           placeholder={t('companySectorPlaceholder')}/>
                                    <Input isRequired name='email' label={t('emailLabel')} value={form.email}
                                           onValueChange={(e) => setForm({...form, email: e})}
                                           placeholder={t('emailPlaceholder')} errorMessage={errorEmail}
                                           isInvalid={!!errorEmail}/>
                                    <Textarea isRequired minRows={8} name='description' label={t('descriptionLabel')}
                                              value={form.description}
                                              onValueChange={(e) => setForm({...form, description: e})}
                                              placeholder={t('descriptionPlaceholder')}/>
                                    <Button color='primary'
                                            radius='full'
                                            size='md'
                                            type='submit'
                                            isLoading={loading}
                                            className='font-bold bg-gradient-to-r from-primary-500 to-primary-700 shadow-lg'
                                            endContent={<FaArrowRight size='20' className='text-background'/>}
                                    >
                                        {t("submit")}
                                    </Button>
                                </div>
                            </form>
                        </ModalBody>
                    </>)}
            </ModalContent>

        </Modal>

    )
}

export default Company