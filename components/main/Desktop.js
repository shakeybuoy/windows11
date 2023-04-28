import React, { useState } from 'react'
import Taskbar from './taskbar/Taskbar'
import Home from './home/Home'
export default function Desktop() {
    const [showFolderTaskbar, setShowFolderTaskbar] = useState(false)
    const handleShowFolder = (childState) => {
        setShowFolderTaskbar(childState);
    };
    return (
        <section className='h-screen w-full'>
            <Home folder={handleShowFolder} />
            <Taskbar folderState={showFolderTaskbar} />
        </section>
    )
}
