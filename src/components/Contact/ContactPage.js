"use client"

import React, {useEffect, useState} from "react";
import {useTranslation} from "next-export-i18n";
import {lendingData} from "@/https/actions";
import {toast} from "react-toastify";
import {NumberCard} from "@/components/Home/Numbers";
import {Button, CheckboxGroup, Divider, Input, RadioGroup, Textarea} from "@nextui-org/react";
import {CustomCheckbox} from "@/components/commons/CustomCheckbox";
import {CustomRadio} from "@/components/commons/CustomRadio";

const checkboxItems = [
    {value: 'Request Pitch Deck', label: 'checkBox1'},
    {value: 'Blockchain Consulting Information', label: 'checkBox2'},
    {value: 'Technical Consulting', label: 'checkBox3'},
    {value: 'Blockchain Solutions Development', label: 'checkBox4'},
    {value: 'Customer Technical Assistance Support', label: 'checkBox5'},
]
const radioItems = [
    {value: '2-4 weeks', label: 'radio1'},
    {value: '2 months', label: 'radio2'},
    {value: '4 months', label: 'radio3'},
    {value: '+4 months', label: 'radio4'},
]

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        needs: [],
        timeline: '',
        description: ''
    })
    const [loading, setLoading] = useState(false)
    const [errorEmail, setErrorEmail] = useState('')
    const {t} = useTranslation()


    const onSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        const body = {
            email: formData.email,
            formData
        }

        lendingData(body)
            .then(res => {
                toast.success(t('messageSuccess'))
            })
            .catch(err => {
                toast.error(t('messageError'))
            })
            .finally(() => setLoading(false))
    }

    useEffect(() => {
        if (formData.email && !formData.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
            setErrorEmail(t('invalidEmail'))
        } else {
            setErrorEmail('')
        }

    }, [formData]);

    return (
        <main className="relative flex flex-col items-center bg-background px-3 min-h-[100dvh] md:px-0 overflow-hidden">
            <section className="py-12 sm:py-16 lg:py-20 ">
                <div className="px-2 mx-auto sm:px-6 lg:px-10 max-w-7xl">
                    <h1 className="text-center text-foreground text-4xl w-full md:text-5xl">
                        <span
                            className="inline bg-gradient-to-br from-foreground-300 to-foreground-700 bg-clip-text font-semibold tracking-tight text-transparent dark:to-foreground-200">
                                {t('contactTitle')}
                        </span>
                        <p
                            className="text-default-400 text-[1.1rem] mt-2 bg-gradient-to-br from-foreground-300 to-foreground-700 bg-clip-text font-semibold tracking-tight text-transparent dark:to-foreground-200"
                            style={{lineHeight: "initial"}}
                        >
                            {t('contactDescription')}
                            {/*Please fill out the form below to explore investment options and initiate a strategic*/}
                            {/*partnership with Luxochain, a leader in the blockchain technology and Web 3.0 sectors,*/}
                            {/*shaping the future of technology together.*/}
                        </p>
                    </h1>

                    <div className="relative mt-8 lg:mt-16 lg:max-w-5xl lg:mx-auto">
                        <div className="absolute inset-0">
                            <div
                                className="w-full h-full mx-auto bg-gradient-to-tr from-primary-200 to-warning-500 opacity-30 blur-lg filter"/>
                        </div>

                        <div
                            className=" border-1  border-[#FFFFFF1A] relative grid grid-cols-1 px-16 py-12 overflow-hidden text-center bg-content1 sm:grid-cols-2 gap-y-12 lg:grid-cols-3 rounded-2xl gap-x-20">
                            <NumberCard title='info@luxochain.io' data={t('emailLabel')} small/>
                            <NumberCard title='Switzerland' data={t('location')} small/>
                            <NumberCard title='Via Gerso 1, Lugano' data={t('address')} small/>
                        </div>
                    </div>

                    <div
                        className="mt-4 lg:mx-auto lg:mt-12 lg:max-w-5xl border-1  border-[#FFFFFF1A] p-4 md:p-12 overflow-hidden text-center bg-content1  gap-y-12  rounded-2xl gap-x-20">
                        <h1 className='font-bold inline bg-gradient-to-br from-primary-300 to-primary-700 bg-clip-text tracking-tight text-transparent text-3xl'>
                            {t('formTitle')}
                            {/*Send us a message*/}
                        </h1>
                        <Divider className='my-4'/>
                        <form onSubmit={onSubmit}>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 items-center'>
                                <div className='flex flex-col gap-4'>
                                    <Input isRequired name='name' label={t('nameLabel')} value={formData.name}
                                           labelPlacement='outside'
                                           onValueChange={(e) => setFormData({...formData, name: e})}
                                           placeholder={t('namePlaceholder')}/>
                                    <Input isRequired name='email' label={t('emailLabel')} value={formData.email}
                                           labelPlacement='outside'
                                           onValueChange={(e) => setFormData({...formData, email: e})}
                                           placeholder={t('emailPlaceholder')} errorMessage={errorEmail}
                                           isInvalid={!!errorEmail}/>
                                    <Textarea isRequired name='message' label={t('messageLabel')}
                                              value={formData.description} labelPlacement='outside'
                                              classNames={{
                                                  label: 'w-full text-left'
                                              }}
                                              onValueChange={(e) => setFormData({...formData, description: e})}
                                              placeholder={t('messagePlaceholder')} minRows={11} maxRows={11}/>
                                </div>
                                <div className='flex flex-col gap-4'>
                                    <CheckboxGroup
                                        isRequired
                                        className="gap-1"
                                        label={t('checkBoxLabel')}
                                        orientation="horizontal"
                                        value={formData.needs}
                                        classNames={{
                                            label: 'text-foreground w-full text-left'
                                        }}
                                        onChange={(e) => setFormData({...formData, needs: e})}
                                    >
                                        {checkboxItems.map((item, index) => (
                                            <CustomCheckbox key={item.value}
                                                            value={item.value}>{t(item.label)}</CustomCheckbox>
                                        ))}
                                    </CheckboxGroup>
                                    <RadioGroup
                                        isRequired
                                        label={t('radioLabel')}
                                        value={formData.timeline}
                                        classNames={{
                                            label: 'text-foreground w-full text-left'
                                        }}
                                        onValueChange={(e) => setFormData({...formData, timeline: e})}
                                    >
                                        {radioItems.map((item, index) => (
                                            <CustomRadio key={item.value}
                                                         value={item.value}>{t(item.label)}</CustomRadio>
                                        ))}
                                    </RadioGroup>

                                </div>
                            </div>
                            <Button
                                color="primary"
                                fullWidth
                                type='submit'
                                className='mt-4 font-bold'
                                variant='shadow'
                                isLoading={loading}
                            >
                                {t('submit')}
                            </Button>
                        </form>

                    </div>
                </div>
            </section>
        </main>
    )
}

export default ContactPage