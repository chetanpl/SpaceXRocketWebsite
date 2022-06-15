import React, { useEffect, useState } from 'react'

export default function Clock() {
    const [date, setDate] = useState(new Date().toLocaleTimeString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    }));
    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        return () => {
            clearInterval(timerID);
        };
    }, []);
    const tick = () => {
        setDate(new Date().toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: true,
        }));
    };
    return (
        <>Clock: {date}</>
    )
}
