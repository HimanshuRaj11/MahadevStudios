"use client"
import React, { useEffect, useState } from 'react'

export default function Preloader({ onComplete }) {
    const [progress, setProgress] = useState(0)
    const [phase, setPhase] = useState('loading') // loading | reveal | done
    const [counter, setCounter] = useState(0)

    /* ── Animate counter 0 → 100 ── */
    useEffect(() => {
        const duration = 2600 // ms total
        const steps = 100
        const interval = duration / steps

        let current = 0
        const timer = setInterval(() => {
            current++
            setCounter(current)
            setProgress(current)
            if (current >= 100) {
                clearInterval(timer)
                /* Short pause then trigger reveal wipe */
                setTimeout(() => setPhase('reveal'), 300)
            }
        }, interval)

        return () => clearInterval(timer)
    }, [])

    /* ── After reveal animation, call onComplete ── */
    useEffect(() => {
        if (phase === 'reveal') {
            const t = setTimeout(() => {
                setPhase('done')
                onComplete?.()
            }, 900)
            return () => clearTimeout(t)
        }
    }, [phase, onComplete])

    if (phase === 'done') return null

    return (
        <div
            className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center
        bg-slate-950 select-none
        transition-transform duration-[850ms] ease-[cubic-bezier(0.76,0,0.24,1)]
        ${phase === 'reveal' ? '-translate-y-full' : 'translate-y-0'}`}
        >
            {/* ── Background texture ── */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.8) 1px,transparent 1px)',
                    backgroundSize: '50px 50px',
                }}
            />

            {/* ── Radial glow ── */}
            <div className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(249,115,22,0.12) 0%, transparent 70%)' }}
            />

            {/* ── Film strip top ── */}
            <FilmStrip position="top" />

            {/* ── Main content ── */}
            <div className="relative z-10 flex flex-col items-center gap-8 px-6">

                {/* Logo / brand mark */}
                <div className="flex flex-col items-center gap-3">
                    <div className="relative">
                        {/* Animated camera shutter ring */}
                        <svg width="80" height="80" viewBox="0 0 80 80" className="animate-spin-slow absolute inset-0">
                            <circle
                                cx="40" cy="40" r="36"
                                fill="none"
                                stroke="rgba(249,115,22,0.3)"
                                strokeWidth="1.5"
                                strokeDasharray="8 6"
                            />
                        </svg>
                        {/* Lens circle */}
                        <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-orange-500/20 to-orange-600/5
              border border-orange-400/30 flex items-center justify-center">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500/30 to-transparent
                border border-orange-400/40 flex items-center justify-center">
                                <div className="w-6 h-6 rounded-full bg-orange-400/60 border border-orange-300/60
                  shadow-[0_0_20px_rgba(249,115,22,0.8)]" />
                            </div>
                        </div>
                    </div>

                    {/* Studio name */}
                    <div className="text-center">
                        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-none">
                            MAHADEV
                        </h1>
                        <p className="text-orange-400 text-xs font-bold uppercase tracking-[0.5em] mt-1">
                            Studios
                        </p>
                    </div>
                </div>

                {/* Tagline */}
                <p className="text-gray-500 text-xs uppercase tracking-[0.3em] font-medium">
                    Crafting Visual Stories
                </p>

                {/* Progress bar */}
                <div className="w-56 sm:w-72 flex flex-col items-center gap-3">
                    {/* Track */}
                    <div className="relative w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
                        <div
                            className="absolute left-0 top-0 h-full rounded-full
                bg-gradient-to-r from-orange-600 via-orange-400 to-orange-300
                transition-all duration-75 ease-linear"
                            style={{ width: `${progress}%` }}
                        />
                        {/* Shimmer */}
                        <div
                            className="absolute top-0 h-full w-8 bg-gradient-to-r from-transparent via-white/60 to-transparent
                animate-shimmer"
                            style={{ left: `${Math.max(progress - 10, 0)}%` }}
                        />
                    </div>

                    {/* Counter */}
                    <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-black text-white tabular-nums leading-none">
                            {String(counter).padStart(2, '0')}
                        </span>
                        <span className="text-orange-400 font-bold text-lg">%</span>
                    </div>
                </div>

                {/* Loading dots */}
                <div className="flex gap-1.5">
                    {[0, 1, 2, 3].map(i => (
                        <div
                            key={i}
                            className="w-1 h-1 rounded-full bg-orange-400/60 animate-bounce"
                            style={{ animationDelay: `${i * 150}ms`, animationDuration: '1s' }}
                        />
                    ))}
                </div>
            </div>

            {/* ── Film strip bottom ── */}
            <FilmStrip position="bottom" />

            {/* ── Corner decorations ── */}
            <Corner position="top-left" />
            <Corner position="top-right" />
            <Corner position="bottom-left" />
            <Corner position="bottom-right" />

            {/* Custom styles */}
            <style>{`
        @keyframes shimmer {
          0%   { opacity: 0; }
          50%  { opacity: 1; }
          100% { opacity: 0; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .animate-shimmer   { animation: shimmer 1.2s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
      `}</style>
        </div>
    )
}

/* ── Film strip ornament ── */
function FilmStrip({ position }) {
    const holes = Array.from({ length: 14 })
    const isTop = position === 'top'

    return (
        <div className={`absolute ${isTop ? 'top-0' : 'bottom-0'} left-0 right-0
      flex items-${isTop ? 'start' : 'end'} overflow-hidden`}>
            <div className="w-full h-10 bg-white/[0.025] border-${isTop ? 'b' : 't'} border-white/10
        flex items-center px-4 gap-3">
                {holes.map((_, i) => (
                    <div key={i}
                        className="w-5 h-5 shrink-0 rounded-sm border border-white/10 bg-white/5" />
                ))}
            </div>
        </div>
    )
}

/* ── Corner bracket ── */
function Corner({ position }) {
    const base = "absolute w-8 h-8 pointer-events-none"
    const styles = {
        'top-left': 'top-12 left-6 border-t-2 border-l-2',
        'top-right': 'top-12 right-6 border-t-2 border-r-2',
        'bottom-left': 'bottom-12 left-6 border-b-2 border-l-2',
        'bottom-right': 'bottom-12 right-6 border-b-2 border-r-2',
    }
    return (
        <div className={`${base} ${styles[position]} border-orange-400/30 rounded-sm`} />
    )
}