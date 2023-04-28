import { useEffect } from 'react'

const Layout = ({ children }) => {
    useEffect(() => {
        const handleContextMenu = (event) => {
            event.preventDefault()
        }

        document.addEventListener('contextmenu', handleContextMenu)

        return () => {
            document.removeEventListener('contextmenu', handleContextMenu)
        }
    }, [])

    return <>{children}</>
}

export default Layout
