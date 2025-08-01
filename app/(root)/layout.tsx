import {ReactNode} from 'react'
import Navbar from "@/components/Navbar";

const Layout = ({children}:{children:ReactNode}) => {
    return (
        <div>
            <Navbar />

            {children}
        </div>
    )
}
export default Layout
