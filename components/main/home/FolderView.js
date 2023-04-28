import React from 'react'

export const FolderView = () => {
    return (
        <section className='h-full w-full relative'>
            <div className='h-12 w-full relative px-5 py-2 flex'>
                <div className='w-1/6 h-full'></div>
                <div className='w-full border border-[#535353] text-xs ml-5 mx-3 h-full flex px-2 gap-1 items-center'>
                    <img src='./icons/Folder.png' className='w-4 object-contain' />
                    <img src='./icons/right-arrow.svg' className='w-3 object-contain' />
                    <h1>Desktop</h1>
                    <img src='./icons/right-arrow.svg' className='w-3 object-contain' />
                    <h1>Projects</h1>
                </div>
                <div className='w-48 border border-[#535353] h-full flex px-2'>
                    <input placeholder='Search' type='text' className='w-40 bg-transparent' />
                    <img src='./icons/search.svg' className='w-4 object-contain' />
                </div>
            </div>
            <div className='h-full w-full flex relative h-custom-folder'>
                <div className='p-1 border-r-2 border-[#2b2b2b] h-full w-80 py-2'>
                    <Btns img='./icons/desktop.png' name='Desktop' />
                    <Btns img='./icons/Folder Downloads.png' name='Downloads' />
                    <Btns img='./icons/Folder Documents.png' name='Documents' />
                    <Btns img='./icons/Folder Pictures.png' name='Pictures' />
                    <Btns img='./icons/Folder Music.png' name='Music' />
                    <Btns img='./icons/Folder Videos.png' name='Videos' />
                    <div className='border-t-2 my-2 border-[#2b2b2b] h-1 w-full'></div>
                    <Btns img='./icons/Hardrive Windows.png' name='OS (C:)' />
                    <Btns img='./icons/Hardrive.png' name='New Volume(D:)' />
                    <Btns img='./icons/Network.png' name='Network' />

                </div>
                <div className='border-r-2 border-[#2b2b2b] h-full w-full'>
                    <Details />
                </div>
                <div className='h-full w-96'></div>
            </div>
            <div className='bg-[#1c1c1c] w-full relative px-5 py-2 flex text-xs justify-between rounded-b-lg'>
                <h2>09 Items</h2>
            </div>
        </section>
    )
}

const Btns = ({ img, name }) => {
    return (
        <div className='flex cursor-default py-2 items-center gap-1 pl-2 hover:bg-[#4d4d4d] rounded-[2px]'>
            <img src={img} className='w-4' />
            <h2>{name}</h2>
        </div>
    )
}

const projects = [
    {
        name: 'Portfolio Website',
        professional: false,
        src: 'https://shakey.in/',
        date: '1/04/2023',
        size: ''
    },
    {
        name: 'Music-Thing',
        professional: false,
        src: 'https://music-thing-three.vercel.app/',
        date: '29/03/2023',
        size: ''
    },
    {
        name: 'Move-in',
        professional: true,
        src: 'https://www.move-in.co',
        date: '13/03/2023',
        size: ''
    },

    {
        name: 'Vivante',
        professional: true,
        src: 'https://vivante-demo.vercel.app/',
        date: '18/08/2022',
        size: ''
    },
    {
        name: 'Webstarks Inc.',
        professional: true,
        src: 'https://www.webstarks.com',
        date: '10/07/2022',
        size: ''
    }, {
        name: 'HangMan',
        professional: false,
        src: 'https://hangman-mu-two.vercel.app/',
        date: '23/05/2022',
        size: ''

    },
    {
        name: 'AgeofCrusade',
        professional: true,
        src: 'https://www.ageofcrusade.com',
        date: '20/02/2022',
        size: ''

    },
    {
        name: 'Emo-G',
        professional: true,
        src: 'https://emo-g.vercel.app/',
        date: '20/12/2021',
        size: ''

    },
    {
        name: 'B.O.B',
        professional: true,
        src: 'https://battleofbrains.netlify.app/',
        date: '16/09/2021',
        size: ''

    }
]

const Details = () => {
    return (
        <>
            <section className='h-full overflow-x-auto w-full p-2'>
                <div className='flex'>
                    <div className='w-1/2 py-1'>
                        <h1 className='pl-4 py-1 border-r border-r-[#8f8f8f]'>Name</h1>
                    </div>
                    <div className='w-52 py-1'>
                        <h1 className='pl-2 py-1 border-r border-r-[#8f8f8f]'>Date Modified</h1>
                    </div>
                    <div className='w-40 py-1'>
                        <h1 className='pl-2 py-1 border-r border-r-[#8f8f8f]'>Type</h1>
                    </div>
                    <div className='w-36 py-1'>
                        <h1 className='pl-2 py-1'>Size</h1>
                    </div>
                </div>
                {
                    projects.map((items, index) => (
                        <a target='_blank' href={items.src} key={index} className='flex cursor-default mb-1 py-1 hover:bg-[#4d4d4d] rounded-[2px]'>
                            <div className='w-1/2 pl-4 gap-2 flex items-center'>
                                <img src='./icons/edge.svg' className='w-4' />
                                <h1>{items.name}</h1>
                            </div>
                            <div className='w-52'>
                                <h1 className='pl-2'>{items.date}</h1>
                            </div>
                            <div className='w-40'>
                                <h1 className='pl-2'>{items.professional ? 'Company' : 'Personal'}</h1>
                            </div>
                            <div className='w-36 overflow-x-auto'>
                                <h1 className='pl-2'>{items.size}</h1>
                            </div>
                        </a>
                    ))
                }
            </section>
        </>
    )
}