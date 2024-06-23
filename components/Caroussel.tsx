import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const Carousel = ({ nextEvents, currentDJ, currentEvents, activeDJs, announcement }: any) => {
    const [currentText, setCurrentText] = useState(0);
    const slides = [
        {
            body: (
                <div className="flex-1">
                    <p className="font-bold mr-5 text-xl text-red-500"> <i className="ml-1 fa-solid fa-triangle-exclamation mr-2"></i> No events found!</p>
                    <p className="font-bold text-md flex-1 text-white">Furality umbra has ended! We are family and we&apos;ll be the there on our next adventure!</p>
                </div>
            )
        },
        {
            body: (
                <div className="flex-1">
                    <p className="font-bold mr-5 text-xl text-red-500"> <i className="ml-1 fa-solid fa-triangle-exclamation mr-2"></i> No events found!</p>
                    <p className="font-bold text-md flex-1 text-white">Furality umbra has ended! We are family and we&apos;ll be the there on our next adventure!</p>
                </div>
            )
        },
        {
            body: (
                <div className="flex-1">
                    <p className="font-bold mr-5 text-xl text-red-500"> <i className="ml-1 fa-solid fa-triangle-exclamation mr-2"></i> No events found!</p>
                    <p className="font-bold text-md flex-1 text-white">Furality umbra has ended! We are family and we&apos;ll be the there on our next adventure!</p>
                </div>
            )
        },
    ];

    useEffect(() => {
        let intervalTime = 6000;

        const interval = setInterval(() => {
            // Increment currentText until it reaches the end of the slides then return to 0
            setCurrentText((prevText) => (prevText === slides.length - 1 ? 0 : prevText + 1));
        }, intervalTime); // Change text every 1.5 seconds for first and last slide, and every 3 seconds for other slides

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-[55px] overflow-hidden flex-1">
            <div className={`absolute w-full ${currentText >= 1 && currentText < slides.length ? 'transition-transform duration-1000' : ''}`} style={{ transform: `translateY(-${currentText * 100 / slides.length}%)` }}>
                {slides.map((slide, index) => (
                    <div key={index} className="h-[55px]">
                        {slide.body}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
