"use client"

import React, {useRef, useState, useEffect} from 'react';
import {motion} from "framer-motion";
import {FaPause, FaPlay} from "react-icons/fa";

const VideoPlayer = ({src, poster, withShadow = false, className, ...props}) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);

    const handleVideoClick = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleVideoEnd = () => {
        setIsPlaying(false);
        setProgress(0);
        if (videoRef.current) {
            videoRef.current.load();
        }
    };

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
            setProgress(currentProgress);
        }
    };

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.addEventListener('timeupdate', handleTimeUpdate);
        }
        return () => {
            if (video) {
                video.removeEventListener('timeupdate', handleTimeUpdate);
            }
        };
    }, []);

    return (
        <div className="relative">
            <div className="relative aspect-w-16 aspect-h-9">
                <video
                    className={"object-cover w-full h-full transition-all duration-300 opacity-70 group-hover:opacity-60 " + className}
                    src={src}
                    alt="video"
                    preload="metadata"
                    ref={videoRef}
                    onEnded={handleVideoEnd}
                    onClick={handleVideoClick}
                    poster={poster}
                />
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center z-10"
                    animate={isPlaying ? {top: "30px",left:'50%', width: '7%'} : {}}
                    transition={{duration: 0.5, ease: "easeInOut"}}
                >
                    <motion.button
                        type="button"
                        className="flex flex-col items-center relative"
                        onClick={handleVideoClick}
                        whileHover={{scale: isPlaying ? 0.6 : 1.2}}
                        animate={{scale: isPlaying ? 0.5 : 1}}
                    >
                        {isPlaying && (
                            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 36 36">
                                <circle
                                    className="text-gray-500"
                                    strokeWidth="3"
                                    stroke="currentColor"
                                    fill="transparent"
                                    r="16"
                                    cx="18"
                                    cy="18"
                                />
                                <circle
                                    className="text-primary-500"
                                    strokeWidth="3"
                                    strokeDasharray="100"
                                    strokeDashoffset={100 - progress}
                                    strokeLinecap="round"
                                    stroke="currentColor"
                                    fill="transparent"
                                    r="16"
                                    cx="18"
                                    cy="18"
                                    style={{transition: 'stroke-dashoffset 0.2s ease-in-out',}}
                                />
                            </svg>
                        )}
                        <span
                            className="inline-flex items-center justify-center w-16 h-16 transition-all duration-200 border-2 rounded-full text-white border-primary bg-white/20 hover:bg-white/30">
                        {!isPlaying ? <FaPlay size={17} className='text-white'/> :
                            <FaPause size={17} className='text-white'/>}
                    </span>
                    </motion.button>
                </motion.div>
            </div>
            {withShadow && <div onClick={() => isPlaying && handleVideoClick()}
                                className="absolute inset-0 bg-gradient-to-t from-content1 via-transparent to-transparent self-end h-[100%]"/>}


        </div>
    );
};

export default VideoPlayer;
