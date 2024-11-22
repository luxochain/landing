import React from 'react';
import VideoPlayer from "@/components/commons/VideoPlayer";
import {Button, ButtonGroup} from "@nextui-org/react";
import {TbClick} from "react-icons/tb";
import {TypewriterEffectSmooth} from "@/components/commons/TypewriterEffect";

const words = [
    {
        text: "WE",
    },
    {
        text: "ARE",
    },
    {
        text: "LUXOCHAIN",
        className: "text-primary-500",
    }
];

const Hero = () => {
    return (
        <div className='realtive w-full flex flex-col items-center h-full max-h-[30rem]'>
            <VideoPlayer src="/hero_video.mp4" withInnerShadow
                         className="w-full absolute translate-y-[-10%] opacity-40"/>
            <div className="flex flex-col items-center justify-center h-[50vw] max-h-[18rem] absolute">
                <p className="text-foreground text-xs md:text-[1rem]">
                    Connecting Industries with Web3 Technologies
                </p>
                <TypewriterEffectSmooth words={words}/>
                <div className="flex flex-col items-center gap-3">
                    <ButtonGroup>
                        <Button
                            color='primary'
                            variant='shadow'
                            startContent={<TbClick size='22'/>}
                            className='max-w-sm font-bold text-md '
                            size='sm'
                        >
                            EXPLORE OUR NETWORK
                        </Button>
                    </ButtonGroup>
                </div>
            </div>
        </div>
    )
}

export default Hero;