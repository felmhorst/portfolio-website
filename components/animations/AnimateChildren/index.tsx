"use client";

import React from "react";
import {type HTMLMotionProps, motion } from "motion/react";
import {stagger, Variants} from "motion";

const getVariants = (delay: number = 0, staggerDuration: number = .1): Variants => {
    const offscreen = {};
    console.log(delay);

    return {
        initial: { ...offscreen },
        animate: { transition: { delayChildren: stagger(staggerDuration, {startDelay: delay}) } },
        exit: { ...offscreen, transition: { delayChildren: stagger(staggerDuration, {startDelay: delay}) }}
    };
};

interface RevealProps extends HTMLMotionProps<"div"> {
    tag?: keyof typeof motion;
    staggerDuration?: number;
    delay?: number;
}

export const AnimateChildren: React.FC<RevealProps> = ({
    children,
    tag = "div",
                                                           staggerDuration,
    delay,
    ...rest
}) => {

    const MotionTag = motion[tag] as typeof motion.div; // workaround for TS2589
    return (
        <MotionTag
            variants={getVariants(delay, staggerDuration)}
            initial={"initial"}
            animate={"animate"}
            exit={"exit"}
            {...rest}>
            {children}
        </MotionTag>
    );
};