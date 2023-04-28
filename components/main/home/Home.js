import { useRef, useEffect, useState } from 'react';
import { FolderView } from './FolderView';

function Folder({ close }) {
    const [max, setMax] = useState(false)
    const draggableRef = useRef(null);
    const drag = useRef(null);
    let offsetX = 0;
    let offsetY = 0;
    let isDragging = false;
    useEffect(() => {
        const draggableElement = draggableRef.current;
        const dragEl = drag.current;
        const handleMouseDown = (event) => {
            offsetX = event.clientX - draggableElement.offsetLeft;
            offsetY = event.clientY - draggableElement.offsetTop;
            isDragging = true;
        };
        const handleMouseMove = (event) => {
            if (isDragging) {
                draggableElement.style.left = (event.clientX - offsetX) + 'px';
                draggableElement.style.top = (event.clientY - offsetY) + 'px';
            }
        };

        const handleMouseUp = () => {
            isDragging = false;
        };

        dragEl.addEventListener('mousedown', handleMouseDown);
        dragEl.addEventListener('mousemove', handleMouseMove);
        dragEl.addEventListener('mouseup', handleMouseUp);

        return () => {
            dragEl.removeEventListener('mousedown', handleMouseDown);
            dragEl.removeEventListener('mousemove', handleMouseMove);
            dragEl.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);
    const handleMax = () => {
        setMax(true)
        const a = draggableRef.current.style
        a.height = 'calc(100vh - 48px)'
        a.width = '100vw'
        a.top = '0'
        a.left = '0'
    }
    const handleMin = () => {
        setMax(false)
        const a = draggableRef.current.style
        a.height = '65vh'
        a.width = '60vw'
        a.top = '20%'
        a.left = '20%'
    }
    const options1 = ['Name', 'Date', 'Size']
    const options2 = ['Extra large icons', 'Large icons', 'Medium icons', 'Small icons']
    return (
        <div className='taskbar border-2 border-[#364052] rounded-lg' ref={draggableRef} style={{ height: '65vh', width: '60vw', position: 'absolute', left: '20%', top: '15%' }}>
            <div className='relative flex px-3 h-10 w-full rounded-t-lg' ref={drag}>
                <div className='absolute top-0 right-0 flex'>
                    {
                        max ?
                            <button className='px-3 py-1 ' onClick={handleMin}>
                                <img src='./icons/min.svg' className='w-4' /> </button> :
                            <button className='px-3 py-1 ' onClick={handleMax}>
                                <img src='./icons/max.svg' className='w-4' />
                            </button>
                    }
                    <div onClick={close} className='hover:bg-red-600 px-3 py-1 rounded-tr-lg'>
                        <img src='./icons/close.svg' className='w-5' />
                    </div>
                </div>
                <div className='px-2 bg-white bg-opacity-5 rounded-t-lg mt-2 w-52 flex items-center justify-between'>
                    <div className='flex gap-3'>
                        <img src='./icons/Folder.png' className='w-4' />
                        <h2 className='font-medium'>Projects</h2>
                    </div>
                    <button onClick={close} className='p-1 rounded'>
                        <img src='./icons/close.svg' className='w-3' />
                    </button>
                </div>
            </div>
            <div className='px-2 bg-white bg-opacity-5 w-full h-14 flex items-center gap-2'>
                <Dropdown options={options1}>
                    <button className='flex items-center justify-center gap-2 p-2 rounded'>
                        <img src='./icons/sort-arrows.svg' className='w-5' />
                        <h3>Sort</h3>
                        <img src='./icons/down-arrow.svg' className='w-4' />
                    </button>
                </Dropdown>
                <Dropdown options={options2}>
                    <button className='flex items-center justify-center gap-2 p-2 rounded'>
                        <img src='./icons/view.svg' className='w-5' />
                        <h3>View</h3>
                        <img src='./icons/down-arrow.svg' className='w-4' />
                    </button>
                </Dropdown>
            </div>
            <div className='bg-[#191919] border-t-2 border-t-[#3a3a3a] w-full h-calc-folder z-10 rounded-b-lg'>
                <FolderView />
            </div>
        </div>
    );
}

function Home({ folder }) {
    const [openFolder, setOpenFolder] = useState(false)
    const handleClose = () => {
        setOpenFolder(false)
    };
    const handleToggleFolder = () => {
        setOpenFolder(!openFolder)
    }
    folder(openFolder)
    return (
        <section className='grid grid-rows-1 desktop text-white text-xs p-1 gap-3'>
            {openFolder ?
                <Folder close={handleClose} />
                : <></>}
            <button onDoubleClick={handleToggleFolder} className='py-2 gap-1 rounded hover:shadow row-start-1 flex flex-col items-center w-24'>
                <img src='./icons/Folder.png' className='w-12' />
                <h2>Projects</h2>
            </button>

        </section>
    )
}

const Dropdown = ({ children, options }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    return (
        <div className="relative" ref={dropdownRef}>
            <div onClick={toggleDropdown}>
                {children}
            </div>
            {isOpen && (
                <div className="absolute top-[50px] rounded z-10 p-1 bg-[#2d2d2d] w-40">
                    {
                        options.map((item, index) => {
                            return (
                                <button className="block py-2 w-full rounded text-left pl-5" key={index}>{item}</button>
                            )
                        })
                    }
                </div>
            )}
        </div>
    );
};


export default Home