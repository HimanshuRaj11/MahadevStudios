"use client"
import React, { useState } from 'react'
import Preloader from '@/components/Preloader'

/* Wrap this around your existing layout children */
export default function PreloaderWrapper({ children }) {
    const [ready, setReady] = useState(false)

    return (
        <>
            {!ready && <Preloader onComplete={() => setReady(true)} />}
            <div className={`transition-opacity duration-700 ${ready ? 'opacity-100' : 'opacity-0'}`}>
                {children}
            </div>
        </>
    )
}