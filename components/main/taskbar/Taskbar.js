import React, { useState } from 'react'
import { Start } from './Start'
import { Tray } from './Tray'

export default function Taskbar({ folderState }) {
  const [showMenu, setShowMenu] = useState(false)
  const [showSpotify, setShowSpotify] = useState(false)

  return (
    <>
      <footer className='h-12 fixed w-full bottom-0 left-0 right-0'>
        <div className='relative text-center w-full text-white h-full flex items-center justify-center'>
          <div className={`absolute w-full h-screen left-0 flex items-center justify-center ${showMenu ? 'visible' : 'hide'}`}>
            <section onClick={() => setShowMenu(false)} className='z-10 absolute bottom-0 w-full h-screen left-0'></section>
            <Start/>
          </div>
          <div className='z-10 absolute taskbar bottom-0 left-0 w-full h-full'></div>
          <div className='flex items-center gap-1 tasks'>
            <button onClick={() => setShowMenu(!showMenu)} className={`z-10 p-2 rounded hover:shadow ${showMenu ? 'active-btn' : ''}`}>
              <img src='./icons/home.svg' className='w-6' />
            </button>
            <button onClick={() => setShowSpotify(!showSpotify)} className={showSpotify ? 'z-10 p-2 rounded hover:shadow active-btn' : 'z-10 p-2 rounded hover:shadow'}>
              <img src='./icons/spotify.svg' className='w-6' />
            </button>
            {
              folderState ? <button className='z-10 p-2 rounded hover:shadow active-btn'>
                <img src='./icons/Folder.png' className='w-6' />
                <div className='bg-blue-500 rounded w-4 h-[3px] mx-auto'></div>
              </button> : <></>
            }
          </div>
          <Tray />
        </div>
        {
          showSpotify ?
            <div className='fixed w-96 right-5 top-5 flex items-center justify-center'>
              <iframe className='rounded-lg' src="https://open.spotify.com/embed/playlist/37i9dQZF1DX6bnzK9KPvrz?utm_source=generator&theme=0" width="100%" height="500" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div> : <></>
        }
      </footer >
    </>
  )
}
