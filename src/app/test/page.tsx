'use client'

import Header from "../components/header/page"
import { useContext, useEffect } from "react"
import { UserContext } from "../context/userContext"

const Test = () => {
    const {isMobile, setIsMobile} = useContext(UserContext)

    useEffect(() => {
            const checkIsMobile = () => {
                setIsMobile(window.innerWidth <= 768);
            };
    
            checkIsMobile();
            window.addEventListener("resize", checkIsMobile);
    
            return () => {
                window.removeEventListener("resize", checkIsMobile);
            };
        }, [setIsMobile]);

    return(
        <div>
            {isMobile ? 
            <></>
            :
            <Header/>
            }
            
            <div className="w-full h-full">
                <div className="fixed top-0 w-full bg-red-500">Cabezera</div>
                <div className="h-[5000px] bg-yellow-500">Chat</div>
                <div className="fixed bottom-0 w-full bg-green-500">
                    <input/>
                </div>
            </div>
        </div>
    )
}

export default Test