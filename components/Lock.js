import React, { useEffect, useState } from 'react'
function Lock({ isLock }) {
    const [isToggled, setIsToggled] = useState(false);
    isLock(isToggled)
    return (
        <div onClick={() => setIsToggled(!isToggled)} className='text-white desktop-bg h-full w-full'>
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
    const timeString = currentDateTime.toLocaleTimeString([], { hour12: true, hour: 'numeric', minute: 'numeric' });
    const dateString = currentDateTime.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
    return (
        <div className='text-white text-center pt-28'>
            <h1 className='text-7xl'>{timeString}</h1>
            <h1 className='text-4xl'>{dateString}</h1>
        </div>
    );
}
export default Lock