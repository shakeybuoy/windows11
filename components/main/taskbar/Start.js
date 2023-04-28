import React from 'react'

const content = [
    {
        img: './icons/edge.svg',
        name: 'edge'
    },
    {
        img: './icons/ms-word.svg',
        name: 'Word'
    },
    {
        img: './icons/spotify.svg',
        name: 'spotify'
    },
    {
        img: './icons/One Drive.png',
        name: 'one drive'
    },
    {
        img: './icons/vscode.svg',
        name: 'VS Code'
    },
    {
        img: './icons/Settings.png',
        name: 'settings'
    },
    {
        img: 'https://imgs.search.brave.com/R03hbAjJUSbZgEHXTX8ANJWDFNSwQdXFHfc1FmTNxlw/rs:fit:560:320:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi82LzZiL1do/YXRzQXBwLnN2Zy81/MTJweC1XaGF0c0Fw/cC5zdmcucG5n',
        name: 'whatsapp'
    },
    {
        img: 'https://imgs.search.brave.com/F0jkhzXjZ3k3Lay6z38G54jeNAgJg-_913nZcGkYPEY/rs:fit:560:320:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8wLzBkL01p/Y3Jvc29mdF9PZmZp/Y2VfUG93ZXJQb2lu/dF8lMjgyMDE5JUUy/JTgwJTkzcHJlc2Vu/dCUyOS5zdmcvNTEy/cHgtTWljcm9zb2Z0/X09mZmljZV9Qb3dl/clBvaW50XyUyODIw/MTklRTIlODAlOTNw/cmVzZW50JTI5LnN2/Zy5wbmc',
        name: 'PowerPoint'
    },
    {
        img: 'https://imgs.search.brave.com/ipGaNeFSCT4gNi4c3U6jwVUvCsPSETWYqau1RQCyYCA/rs:fit:560:320:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8wLzBlL01p/Y3Jvc29mdF8zNjVf/JTI4MjAyMiUyOS5z/dmcvNTEycHgtTWlj/cm9zb2Z0XzM2NV8l/MjgyMDIyJTI5LnN2/Zy5wbmc',
        name: 'Microsoft 365'
    },
    {
        img: 'https://imgs.search.brave.com/dFMI1xAuI0T5WXC590-JCSLoA519pqkKY2fiSo9z26g/rs:fit:560:320:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9jL2M5L01p/Y3Jvc29mdF9PZmZp/Y2VfVGVhbXNfJTI4/MjAxOCVFMiU4MCU5/M3ByZXNlbnQlMjku/c3ZnLzUxMnB4LU1p/Y3Jvc29mdF9PZmZp/Y2VfVGVhbXNfJTI4/MjAxOCVFMiU4MCU5/M3ByZXNlbnQlMjku/c3ZnLnBuZw',
        name: 'teams'
    },
    {
        img: './icons/outlook.svg',
        name: 'outlook'
    },
    {
        img: './icons/todo.svg',
        name: 'to do'
    },
    {
        img: './icons/calendar.svg',
        name: 'calendar'
    },
    {
        img: './icons/clipchamp.svg',
        name: 'ClipChamp'
    },
    {
        img: './icons/onenote.svg',
        name: 'one note'
    },
    {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Microsoft_Store.svg/768px-Microsoft_Store.svg.png?20210606110516',
        name: 'microsoft store'
    },
    {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/640px-Steam_icon_logo.svg.png',
        name: 'steam'
    },
    {
        img: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Windows_Terminal_Logo.png?20190622111111',
        name: 'terminal'
    },


]
const stack = [
    {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png',
        name: 'React'
    },
    {
        img: 'https://static-00.iconduck.com/assets.00/next-js-icon-512x512-zuauazrk.png',
        name: 'next JS'
    },
    {
        img: './icons/Tailwind.png',
        name: 'TailwindCSS'
    }
]

export const Start = () => {
    return (
        <>
            <section className='z-40 start-menu absolute p-10 bottom-[123px]'>
                <div className='w-full bg-[#212224d2] pl-3 flex text-sm border-2 border-[#2d3756] rounded-full'>
                    <img src='./icons/search.svg' className='w-5' />
                    <input type='text' className='w-full bg-[#212224d2] px-2 py-1 text-sm rounded-r-full' placeholder='Search for apps, settings and documents' />
                </div>
                <div className='mt-10 px-1 text-sm'>
                    <div className='px-7 flex justify-between'>
                        <h1>Pinned</h1>
                    </div>
                    <div className='grid grid-cols-6 my-7'>
                        {
                            content.map((item, index) => {
                                return (
                                    <Btns img={item.img} name={item.name} index={index} />
                                )
                            })
                        }

                    </div>
                </div>
                <div className='px-1 text-sm'>
                    <div className='px-7 flex justify-between'>
                        <h1>Stack Used</h1>
                    </div>
                    <div className='grid grid-cols-3 mt-3'>
                        {
                            stack.map((item, index) => {
                                return (
                                    <Btns img={item.img} name={item.name} index={index} />
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            <section className='z-40 shutdown-start-menu absolute px-16 bottom-16 flex items-center justify-between py-2'>
                <a href='https://www.shakey.in' target='_blank' className='custom-btn-link text-xs flex gap-2 items-center px-3 rounded h-full'>
                    <img src='https://media.licdn.com/dms/image/D4D03AQG_tE-qFbqLVw/profile-displayphoto-shrink_800_800/0/1678639435833?e=1687996800&v=beta&t=HTGwJNI_hJCG4lkmgLbhG7PjZREqCzW9gF5g3H164w4' className='h-8 aspect-square object-cover rounded-full' />
                    <h2>SHAKEY</h2>
                </a>
                <button className='px-3 rounded h-full'>
                    <img src='./icons/shutdown.svg' />
                </button>
            </section>
        </>
    )
}


const Btns = ({ img, name, index }) => {
    return (
        <div key={index} className='flex flex-col justify-center items-center hover:bg-white hover:bg-opacity-10 cursor-default rounded-lg gap-2 py-4 text-center'>
            <img src={img} className='w-8' />
            <h2 className='capitalize text-xs'>{name}</h2>
        </div>
    )
}