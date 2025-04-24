'use client'

import { useState } from 'react'
import {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/react'
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import './styles.css';
import SearchBar from './SearchBar';


const handleSearch = (query) => {
    const filtered = mockTracks.filter(track =>
        track.title.toLowerCase().includes(query.toLowerCase()) ||
        track.artist.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredTracks(filtered);
};

const products = [
    { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
    { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
    { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
    { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

export default function MainHeader() {

    return (
        <header className="fixed top-0 z-50 w-full shadow-lg" id='main-header'>
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
                <div className="flex lg:flex-1">
                    <div className="items-center justify-between h-14">
                        <SearchBar onSearch={handleSearch} />
                    </div>
                </div>
                <PopoverGroup className="hidden lg:flex lg:gap-x-12 items-center">
                    <Popover className="relative hover:border-b-2">
                        <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-white hover:border-b-2">
                            Product
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-white" />
                        </PopoverButton>

                        <PopoverPanel
                            transition
                            className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-white/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                        >
                        </PopoverPanel>
                    </Popover>

                    <a href="#" className="text-sm/6 font-semibold text-white hover:border-b-2">
                        Features
                    </a>
                    <a href="#" className="text-sm/6 font-semibold text-white hover:border-b-2">
                        Marketplace
                    </a>
                    <a href="#" className="text-sm/6 font-semibold text-white hover:border-b-2">
                        Company
                    </a>
                </PopoverGroup>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a href="#" className="text-sm/6 font-semibold text-white">
                        Log in <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </nav>
        </header>
    )
}
