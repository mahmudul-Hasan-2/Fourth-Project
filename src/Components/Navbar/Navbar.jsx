import { MenuIcon, Moon, Sun, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const navItems = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Portfolio", path: "/portfolio" },
    { id: 5, name: "Contact", path: "/contact" }
];

const Navbar = () => {

    const items = navItems.map(navs => <a key={navs.id} href={navs.path} className='font-bold'>{navs.name}</a>)

    const [active, setActive] = useState(false);
    const [light, setLight] = useState(true);

    // তোর কম্পোনেন্টের ভেতরে
    useEffect(() => {
        if (light) {
            document.body.style.minHeight = "100vh";
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
            document.body.style.transition = "1s ease-in-out";
        } else {
            document.body.style.minHeight = "100vh";
            document.body.style.backgroundColor = "black";
            document.body.style.color = "white";
            document.body.style.transition = "1s ease-in-out";
        }
    }, [light]); // যখনই light স্টেট চেঞ্জ হবে, এটা রান করবে

    return (
        <nav className='flex items-center pt-4 justify-between max-w-7xl mx-auto w-11/12'>
            <div>
                <div className='flex items-center gap-2 relative'>
                    <div className={`flex flex-col gap-2 ${active ? 'top-8 z-10' : '-top-60'} bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl absolute md:hidden duration-1000`}>
                        {items}
                    </div>
                    <button onClick={() => setActive(!active)} className='md:hidden block cursor-pointer'>{active ? <X></X> : <MenuIcon></MenuIcon>}</button>
                    <a href='/' className='font-bold text-xl lg:text-2xl'>Ton<span className='text-blue-500'>moy</span></a>
                </div>
            </div>
            <div className='md:flex hidden items-center gap-4'>
                {
                    items
                }
            </div>
            <div>
                <button className='cursor-pointer' onClick={() => setLight(!light)}>{light ? <Moon></Moon> : <Sun></Sun>}</button>
            </div>
        </nav >
    );
};

export default Navbar;