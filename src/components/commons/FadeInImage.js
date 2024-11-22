"use client";

/* eslint-disable jsx-a11y/alt-text */

import {LazyMotion, domAnimation, m, useAnimation} from "framer-motion";
import {Image} from "@nextui-org/react";
import {useEffect, useState} from "react";

const animationVariants = {
    hidden: {opacity: 0},
    visible: {opacity: 1},
};

export const FadeInImage = (props) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const animationControls = useAnimation();

    useEffect(() => {
        if (isLoaded) {
            animationControls.start("visible");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoaded]);

    return (
        <LazyMotion features={domAnimation}>
            <m.div
                animate={animationControls}
                initial="hidden"
                transition={{duration: 0.5, ease: "easeOut"}}
                variants={animationVariants}
            >
                <Image {...props} removeWrapper className='rounded-none w-full' onLoad={() => setIsLoaded(true)} />
            </m.div>
        </LazyMotion>
    );
};

export default FadeInImage;
