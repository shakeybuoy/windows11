import Lock from "@/components/Lock"
import Desktop from "@/components/main/Desktop"
import { useState } from "react"
export default function Home() {
  const [lock, setLock] = useState(true)
  const handleLock = (value) => {
    setLock(!value)
  }
  return (
    <>
      <section className={`absolute w-full h-screen left-0 z-20 ${lock ? 'lock-on' : 'lock-off'}`}>
        <Lock isLock={handleLock} />
      </section>
      <Desktop/>
    </>
  )
}
