"use client"
import FuralityStreamBar from "@/components/overlays/FuralityStreamBar";
import moment from "moment";
import next from "next";
import { useEffect, useState } from "react";

const FuralityUmbraOverlay = () => {
    const [events, setEvents] = useState([]);
    const [nextEvents, setNextEvents] = useState([]);
    const [activeEvents, setActiveEvents] = useState([]);
    const [djEvents, setDJEvents] = useState([]);

    useEffect(() => {
        fetch('https://api.fynn.ai/v2/event')
            .then(response => response.json())
            .then(data => {
                setEvents(data.data);
            });
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            // Get the current time
            const now = moment();

            // Filter events happening within the next 30 minutes and of type "meetup" or "panel"
            const upcomingEvents = events.filter((event: { start: moment.MomentInput; type: string; }) => {
                const eventStart = moment(event.start);
                return eventStart.isBetween(now, now.clone().add(60, 'minutes')) && (event.type === 'meetup' || event.type === 'panel' || event.type === 'performance');
            });

            setNextEvents(upcomingEvents);
        }, 1000); // Update every second

        // Clear interval on component unmount
        return () => clearInterval(interval);
    }, [events]);


    useEffect(() => {
        const interval = setInterval(() => {
            // Get the current time
            const now = moment();

            // Filter events happening right now and of type "meetup" or "panel"
            const activeEvents = events.filter((event: { start: moment.MomentInput; end: moment.MomentInput; type: string; name: string; }) => {
                const eventStart = moment(event.start);
                const eventEnd = moment(event.end);
                return now.isBetween(eventStart, eventEnd) && (event.type === 'meetup' || event.type === 'panel' || event.type === 'performance');
            });

            setActiveEvents(activeEvents);
        }, 1000); // Update every second

        // Clear interval on component unmount
        return () => clearInterval(interval);
    }, [events]);

    useEffect(() => {
        const interval = setInterval(() => {
            // Get the current time
            const now = moment();

            // Filter events happening right now and of type "meetup" or "panel"
            const activeDJ = events.filter((event: { start: moment.MomentInput; end: moment.MomentInput; type: string; }) => {
                const eventStart = moment(event.start);
                const eventEnd = moment(event.end);
                return now.isBetween(eventStart, eventEnd) && (event.type === 'dj');
            });

            setDJEvents(activeDJ);
        }, 1000); // Update every second

        // Clear interval on component unmount
        return () => clearInterval(interval);
    }, [events]);

    return (
        <main className="h-screen flex flex-col">
            <FuralityStreamBar nextEvents={nextEvents} currentDJ={null} hideStuff={false} activeEvents={activeEvents} activeDJs={djEvents} />

            <p className="fixed top-[40px] left-14 h-[300px] hidden">Next Events Debug - {nextEvents.map((event: { name: string; }) => event.name).join(' & ')}</p>

            <img src="/logos/waterwolf.png" alt="Moist Dog" className="hidden h-[50px] fixed top-[40px] left-14 opacity-70" />
            <div className="flex fixed top-[35px] right-14 space-x-5 items-center">
                <h1 className="font-bold opacity-50 text-right mt-2">Streamed and recorded by lynix.ca</h1>
            </div>
            <iframe
                className="w-full flex-1 hidden"
                src="https://timer.pet/timer?title=Furality%20Umbra&showClocks=false&date=2024-06-06T16%3A00%3A00Z&timezone=America/New_York"
                frameBorder="0"
                allowFullScreen={true}
                scrolling="no"
                allowTransparency={true}
                style={{ backgroundColor: 'transparent !important' }}
            ></iframe>
        </main>
    )
}

export default FuralityUmbraOverlay;