"use client"
import { useEffect, useState, useRef } from 'react';
import moment from 'moment-timezone';
import io from 'socket.io-client';
import Carousel from '@/components/Caroussel'
const socket = io('https://api-redwoods.lynix.ca', { // Use Redwoods Emergency API for now.
    path: "/furality-umbra/",
    auth: {
        apiKey: '78f4c824-48d0-4049-a31a-d94c400b0de5'
    }
});

const FuralityStreamBar = ({ nextEvents, currentDJ, hideStuff, activeEvents, activeDJs }: any) => {
    const [weather, setWeather] = useState("sunny");
    const [time, setTime] = useState("Loading...");
    const [data, setData]: any = useState({});
    const [countdown, setCountdown] = useState("");
    const reconnectAttempts = useRef(0);
    const maxReconnectAttempts = 489289198;

    const weatherIcon = (weather: string) => {
        switch (weather) {
            case 'sunny':
                return <i className="fa-solid fa-sun"></i>;
            case 'rainy':
            case 'heavyRain':
            case 'lightRain':
                return <i className="fa-solid fa-cloud-rain"></i>;
            default:
                return <i className="fa-solid fa-cloud"></i>; // Default icon for unknown weather conditions
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(moment().format("MMMM DD, hh:mm:ss a"));
        }, 1000);

        console.log('Registering furality-stream');
        socket.emit('register', { name: 'furality-stream' });

        const handleSocketMessage = (msg: string) => {
            console.log('Received message from api:', msg);
            setData(msg);
        };

        const handleSocketDisconnect = () => {
            console.log('Disconnected from API, attempting to reconnect...');
            if (reconnectAttempts.current < maxReconnectAttempts) {
                setTimeout(() => {
                    socket.connect();
                    console.log('Registering furality-stream');
                    socket.emit('register', { name: 'furality-stream' });
                    reconnectAttempts.current += 1;
                }, 2000 * reconnectAttempts.current);
            } else {
                console.log('Max reconnection attempts reached.');
            }
        };

        socket.on('message', handleSocketMessage);
        socket.on('disconnect', handleSocketDisconnect);

        return () => {
            clearInterval(interval);
            socket.off('message', handleSocketMessage);
            socket.off('disconnect', handleSocketDisconnect);
        };
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            if (data.sun_time) {
                const now = moment();
                const sunTime = moment(data.sun_time);
                const diff: string = `${sunTime.diff(now, 'hours')}h ${sunTime.diff(now, 'minutes') % 60}m ${sunTime.diff(now, 'seconds') % 60}s`;
                setCountdown(diff);
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [data.sun_time]);

    return (
        <div className="fixed bottom-0 left-0 w-full z-20" style={{ background: "url(https://media.cdn.furality.online/files/web/bg/furality-umbra-cover.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}>
            <div className="bg-neutral-950 border-b-2 border-t-2 border-orange-700 text-white p-3 bg-opacity-60">
                <div className="flex items-center space-x-3">
                    <img src="https://media.cdn.furality.online/files/web/logo/furality-umbra-logo.svg" className="h-16" />
                    <div className="flex-1 hidden">
                        <p className="font-bold mr-5 text-xl text-orange-400"> <i className="ml-1 fa-solid fa-spinner fa-spin-pulse mr-2"></i> Getting Ready {/*{events.map((event: any) => event.name).join(' & ')}*/}</p>
                        <p className="font-bold text-md flex-1 text-white">{/*Up Next: {nextEvents.map((event: any) => event.name).join(' & ')}  {filteredNextEvents && <span className="">({countdown})</span>}*/} Furality Umbra is starting soon!</p>
                    </div>
                    <Carousel nextEvents={nextEvents} currentDJ={currentDJ} currentEvents={activeEvents} activeDJs={activeDJs} announcement={{
                        title: data?.title,
                        description: data?.description,
                        icon: data?.icon
                    }} />
                    <div className="p-3">
                        <p className="text-white text-xl font-bold rounded-xl text-red-600 hidden"><i className="fa-solid fa-exclamation-triangle" /> <span className="text-white">Restricted</span></p>
                    </div>
                    <div className="text-gray-200 pr-10 font-bold flex items-center justify-center hidden">
                        <div className='mt-1'>
                            <div className='flex justify-center text-4xl text-orange-500 mb-1'>{weatherIcon(weather)}<br /></div>
                            {countdown ? <span>{countdown}</span> : <span className="flex justify-center"><i className="fa-solid fa-spinner fa-spin-pulse"></i></span>}
                        </div>
                    </div>
                    <div className="text-gray-200 pr-5 font-bold flex items-center justify-center">
                        <img src="/imgs/logos/WaterWolf_TSWhite.png" className="h-16 pr-0" />
                    </div>
                    <p className="font-bold p-2 bg-neutral-900 border-orange-700 border-2 rounded-full px-4 flex items-center space-x-4">
                        <i className="fa-solid fa-clock  text-orange-400 text-2xl"></i>
                        <span>{time}</span>
                    </p>
                    <p className="font-bold p-2 bg-neutral-900 border-orange-700 border-2 rounded-full px-4 flex items-center space-x-4 hidden">
                        <i className="fa-solid fa-child-reaching  text-orange-400 text-2xl"></i>
                        <span className="mr-2 text-red-500">Full Body Tracking Off</span>
                    </p>
                    <p className="font-bold p-2 bg-neutral-900 border-orange-700 border-2 flex rounded-full px-4 items-center space-x-4 hidden">
                        <i className="fa-solid fa-paw  text-orange-400 text-2xl"></i>
                        <span className="mr-1">Boop Count: <i className="ml-1 fa-solid fa-spinner fa-spin-pulse mr-2"></i></span>
                    </p>
                    <p className="font-bold p-2 bg-neutral-900 border-orange-700 border-2 rounded-full px-4 flex  items-center space-x-4 hidden">
                        <i className="fa-solid fa-moon text-orange-400 text-2xl"></i>
                        <span className="mr-1">Instance: <i className="ml-1 fa-solid fa-spinner fa-spin-pulse"></i></span>
                    </p>
                    {hideStuff == false && <>
                        <p className="font-bold p-2 bg-neutral-900 border-orange-700 border-2 rounded-full px-4 flex items-center space-x-4">
                            <i className="fa-solid fa-paw text-orange-400 text-2xl"></i>
                            <span className="mr-1">Lynix Headpats: <i className="ml-1 fa-solid fa-spinner fa-spin-pulse"></i></span>
                        </p>
                        <p className="font-bold p-2 bg-neutral-900 border-orange-700 border-2 rounded-full px-4 flex items-center space-x-4 hidden">
                            <i className="fa-solid fa-sun text-orange-400 text-2xl"></i>
                            <span className="mr-1"> Coming Soon! </span>
                        </p>
                    </>}
                </div>
            </div>
        </div>
    );
}

export default FuralityStreamBar;
