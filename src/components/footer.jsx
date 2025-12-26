import React from 'react'
import Image from 'next/image'
import { buttonVariants } from './ui/button'
import Link from 'next/link'
import { Button } from './ui/button'
import { SiBuymeacoffee } from "react-icons/si"

export default function Footer() {
    return (
        <footer className="bg-foreground/5 text-foreground/80 mt-24">
            <div className="max-w-7xl mx-auto px-8 py-12 flex flex-col items-center gap-4">
                <Button className="btn-primary" asChild>
                    <a href="https://buymeacoffee.com/dhruvik" target="_blank" rel="noopener noreferrer" className="text-black!">
                        Buy me a coffee {" "}
                        <SiBuymeacoffee />
                    </a>
                </Button>
            </div>
        </footer>
    )
}