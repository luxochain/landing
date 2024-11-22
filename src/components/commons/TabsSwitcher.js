"use client"

import React, {useState} from "react";
import {Tabs, Tab, Card, CardBody, CardHeader, Divider, CardFooter, Button} from "@nextui-org/react";

const tabs = [
    {
        key: "digital_passports",
        title: "Digital Passports",
        content: [
            {type: 'title', data: 'DIGITAL PASSPORTS (DPP)'},
            {
                type: 'plain',
                data: "Luxochain SA offers advanced solutions for the creation and management of Digital Passports, ensuring the authenticity and traceability of products across all sectors. With our platform, users can easily access certified information through intuitive scanning, enhancing trust and transparency. "
            }, {
                type: 'plain',
                data: 'Our blockchain-based digital passports integrate comprehensive product data, including sustainability credentials and full traceability, accessible through a secure digital platform. Get the advantage of Luxochain’s Advanced Digital Passport: sophisticated solutions for flawless management of your products in any industry'
            }],
        buttons: [{
            label: 'Download Legislation', onAction: () => {
                console.log('download')
            }
        }]
    },
    {
        key: "digital_twins",
        title: "Digital Twins",
        content: [
            {type: 'title', data: 'DIGITAL TWINS (DT)'},
            {
                type: 'plain',
                data: "Luxochain SA offers advanced services for the development and management of Digital Twins, improving understanding and interaction with products in various industries. These virtual replicas offer a detailed and engaging experience, ensuring compliance and protection from counterfeiting. "
            }, {
                type: 'plain',
                data: ' We create Digital Twins for a wide range of items, each with a unique digital identity on the blockchain, making each product traceable, verifiable, and secure against counterfeiting.'
            },
            {
                type: 'list',
                data: "Main features of Digital Twins Services: Advanced Development,Digital Certificates on Blockchain, Protecting from Counterfeiting"
            }],
        buttons: [{
            label: 'Download Digital Twins Details', onAction: () => {
                console.log('detail')
            }
        }]
    },
    {
        key: "collectibles",
        title: "Collectibles",
        content: [
            {type: 'title', data: 'COLLECTIBLES'},
            {
                type: 'plain',
                data: "Luxochain offers solutions for managing and certifying collectibles, enabling users to authenticate their provenance and rarity. This service creates unique engagement opportunities and adds value to consumers."
            },
            {
                type: 'list',
                data: "Key Service Features: Authentication and Rarity. Distinctive Involvement, Consumer Enhancement"
            },
            {
                type: 'plain',
                data: 'Our collectibles management and certification services are designed to meet the needs of collectors and to provide a high-quality experience that enhances and protects their prized possessions'
            }],
        buttons: [{
            label: 'Download Collectibles Details', onAction: () => {
                console.log('detail')
            }
        }]
    },
    {
        key: "loyalty_program",
        title: "Loyalty Program",
        content: [
            {type: 'title', data: 'LOYALTY PROGRAM'},
            {
                type: 'plain',
                data: "Luxochain innovates loyalty programs through the use of blockchain, creating interactive and personalized customer collection management systems to improve engagement and brand loyalty. One tangible example is the My Lugano app, developed by Luxochain, which offers automatic cashback of up to 10 percent on every purchase at more than 400 partner businesses, including stores, restaurants, and museums. "
            }, {
                type: 'plain',
                data: 'Users accumulate LVGA, a digital currency, which can be used for payments in the city and for automatic cashback. This system, open to all, residents, visitors and tourists, promotes interaction and brand loyalty, providing an engaging and rewarding experience for customers.'
            }, {
                type: 'list',
                data: 'Features of Loyalty Services: Automatic Cashback,Universal Access, Digital Currency, Wide Variety of Partners'
            }],
        buttons: [{
            label: 'Download Loyalty Program Details', onAction: () => {
                console.log('detail')
            }
        }]
    },
];

export default function TabsSwitcher() {
    const [selected, setSelected] = useState("digital_passports");

    return (
        <div className="flex w-full flex-col">
            <Tabs
                aria-label="Options"
                selectedKey={selected}
                onSelectionChange={setSelected}
                items={tabs}
            >
                {(item) => {
                    return (
                        <Tab key={item.key} title={item.title}>
                            <Card>
                                <CardBody>
                                    {item.content.map((content, index) => {
                                        if (content.type === 'title') {
                                            return <h1 key={index} className="text-2xl my-1">{content.data}</h1>
                                        } else if (content.type === 'plain') {
                                            return <p key={index} className='my-1'>{content.data}</p>
                                        } else if (content.type === 'list') {
                                            return <ul key={index} className='my-1'>
                                                <DataList text={content.data}/>
                                            </ul>
                                        }
                                    })}
                                </CardBody>
                                <Divider/>
                                <CardFooter>
                                    {item.buttons.map((button, index) => {
                                        return (
                                            <Button
                                                key={index}
                                                onPress={button.onAction()}
                                                color='primary'
                                                size='sm'
                                                className='font-bold text-[0.85rem]'
                                            >
                                                {button.label}
                                            </Button>)
                                    })}
                                </CardFooter>
                            </Card>
                        </Tab>
                    )
                }}
            </Tabs>
        </div>
    );
}

const DataList = ({text}) => {
    const [title, features] = text.split(':');

    return (
        <div>
            <span className="text-white font-bold">
                {title}:
             </span>
            <span className="text-primary">
                {features}
            </span>
        </div>
    );
}
