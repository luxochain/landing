"use client"

import './globals.css'

import FadeInImage from "@/components/commons/FadeInImage";
import {NewHero} from "@/components/Home/NewHero";
import React, {Suspense} from "react";
import {NewServices} from "@/components/Home/NewServices";
import AnimatedOnView from "@/components/commons/AnimatedOnView";
import {Portfolio} from "@/components/Home/Portfolio";
import {Regulations} from "@/components/Home/Regulations";
import Company from "@/components/Home/Company";
import Numbers from "@/components/Home/Numbers";
import PartnersScrolling, {PartnersTitle, partnersTitle} from "@/components/Home/PartnersScrolling";
import {Team} from "@/components/Home/Team";
import {Press} from "@/components/Home/Press";
import {Footer} from "@/components/Home/Footer";


export default function Home() {
    return (
        <>
            <main className="relative flex flex-col items-center bg-background md:px-0 overflow-hidden" id='home'>
                <AnimatedOnView>
                    <NewHero/>
                </AnimatedOnView>
                <AnimatedOnView>
                    <NewServices/>
                </AnimatedOnView>
                <AnimatedOnView>
                    <Portfolio/>
                </AnimatedOnView>
                <AnimatedOnView>
                    <Regulations/>
                </AnimatedOnView>
                <AnimatedOnView>
                    <Company/>
                </AnimatedOnView>
                <AnimatedOnView>
                    <Numbers/>
                </AnimatedOnView>
                <AnimatedOnView>
                    <PartnersTitle/>
                </AnimatedOnView>
                <AnimatedOnView>
                    <PartnersScrolling/>
                </AnimatedOnView>
                <AnimatedOnView>
                    <Team/>
                </AnimatedOnView>
                <AnimatedOnView>
                    <Press/>
                </AnimatedOnView>
                <Footer/>
            </main>
        </>
    )
}

