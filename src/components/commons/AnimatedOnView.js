"use client"

import {motion, useInView} from "framer-motion";
import {useRef} from "react";

const AnimatedOnView = ({
                            children,
                            initial = {opacity: 0, y: 50},
                            animate = {opacity: 1, y: 0},
                            transition = {duration: 1.2, ease: "easeOut"}
                        }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    return (
        <motion.div
            ref={ref}
            initial={initial}
            animate={isInView ? animate : {}}
            transition={transition}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedOnView;
