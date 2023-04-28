import React from 'react'
import { useState, useEffect } from 'react';

export const Tray = () => {
    return (
        <div className='text-xs flex z-10 absolute right-4 tray'>
            <button className='p-2 py-1 rounded shadow'>
                <img src='./icons/tray-arrow.svg' className='w-4' />
            </button>
            <button className='px-2 py-1 rounded shadow'>
                <img src='./icons/tray-one.svg' className='w-16' />
            </button>
            <TimeKeeper />
        </div>
    )
}

function TimeKeeper() {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    const timeString = currentDateTime.toLocaleTimeString([], { hour: 'numeric', minute: 'numeric' });
    // const dateString = currentDateTime.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    return (
        <button className='px-2 py-1 rounded shadow'>
            <h1>{timeString}</h1>
            <h1>{currentDateTime.toLocaleDateString()}</h1>
        </button>
    );
}