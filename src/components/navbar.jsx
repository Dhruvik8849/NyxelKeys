import Image from 'next/image'
import SearchInput from '@/components/search-input'
import { FaGithub } from "react-icons/fa"
import Link from 'next/link'

export default function Navbar({ softwares }) {
    return (
        <nav className='bg-background px-4 h-14 flex items-center gap-2 max-w-5xl mx-auto'>
            <a href='/' className='flex items-center justify-center gap-3'>
                <div className="w-8 h-8 rounded-md bg-accent flex items-center justify-center overflow-hidden">
                    <Image
                        src='/Nyxelkeys.png'
                        alt='N'
                        width={28}
                        height={28}
                        className='object-contain'
                        priority
                    />
                </div>
                <h1 className='font-extrabold tracking-tight text-accent text-lg'>Nyxelkeys</h1>
            </a>
            <div className='flex-1' />
            <SearchInput softwares={softwares} />
            <Link href="https://github.com/Dhruvik8849">
                <FaGithub className="size-6" />
            </Link>
        </nav>
    )
}
