'use client';

import Link from 'next/link';
import Image from 'next/image';
import {useState, useEffect} from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);

            // Detect active section
            const sections = ['home', 'about', 'services', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetBottom = offsetTop + element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return() => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        {
            href: '#home',
            label: 'Home',
            section: 'home',
            isIcon: true,
            iconSrc: '/home.svg'
        }, {
            href: '#about',
            label: 'About',
            section: 'about',
            isIcon: true,
            iconSrc: '/about.svg'
        }, {
            href: '#services',
            label: 'Services',
            section: 'services',
            isIcon: true,
            iconSrc: '/services.svg'
        }, {
            href: '#contact',
            label: 'Contact',
            section: 'contact',
            isIcon: true,
            iconSrc: '/contact.svg'
        },
    ];

    return (
        <>
            <header className={
                    `bg-white/70 dark:bg-black/70 fixed top-0 z-50 transition-all duration-300 ${
                        isScrolled ? 'left-[20px] right-[20px] mt-[15px] rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-800/50' : 'left-0 right-0 mt-0 rounded-none border-b border-gray-200/30 dark:border-gray-800/30'
                    }`
                }
                style={
                    {
                        backdropFilter: 'blur(5px)',
                        WebkitBackdropFilter: 'blur(5px)'
                    }
            }>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <div className="flex items-center">
                            <Link href="/" className="flex items-center space-x-3">
                                <Image src="/wiso.svg" alt="Wiso Logo"
                                    width={40}
                                    height={40}
                                    className="w-10 h-10"/> {/* <span className="text-2xl font-bold text-gray-900 dark:text-white">
                                    Wiso
                                </span> */} </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-8">
                            {
                            navItems.map((item) => (
                                <Link key={
                                        item.href
                                    }
                                    href={
                                        item.href
                                    }
                                    className={
                                        `relative group text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-500 ease-out font-medium py-2 ${
                                            activeSection === item.section ? 'text-blue-600 dark:text-blue-400' : ''
                                        }`
                                }>
                                    {
                                    item.isIcon ? (
                                        <div className="flex items-center justify-center w-6 h-6 transition-transform duration-500 ease-out group-hover:scale-125">
                                            <Image src={
                                                    item.iconSrc
                                                }
                                                alt={
                                                    item.label
                                                }
                                                width={24}
                                                height={24}
                                                className="dark:invert"/>
                                        </div>
                                    ) : (
                                        <span className="transition-transform duration-500 ease-out group-hover:scale-110 inline-block">
                                            {
                                            item.label
                                        } </span>
                                    )
                                }

                                    {/* Animated line - shows on active and hover */}
                                    <span className={
                                            `absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-500 ease-out ${
                                                activeSection === item.section ? 'w-full' : 'w-0 group-hover:w-full'
                                            }`
                                        }
                                        style={
                                            activeSection === item.section ? {
                                                animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                                            } : {}
                                    }></span>
                                </Link>
                            ))
                        } </nav>

                        {/* Mobile menu button - Enhanced Burger */}
                        <button onClick={
                                () => setIsMenuOpen(!isMenuOpen)
                            }
                            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
                            aria-label="Toggle menu">
                            <div className="w-6 h-5 relative flex flex-col justify-between">
                                {/* Top line */}
                                <span className={
                                    `w-full h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out ${
                                        isMenuOpen ? 'rotate-45 translate-y-2' : ''
                                    }`
                                }></span>
                                {/* Middle line - shorter */}
                                <span className={
                                    `h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out ${
                                        isMenuOpen ? 'opacity-0 w-0' : 'opacity-100 w-4 mx-auto'
                                    }`
                                }></span>
                                {/* Bottom line */}
                                <span className={
                                    `w-full h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out ${
                                        isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                                    }`
                                }></span>
                            </div>
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {
            isMenuOpen && (
                <div className="fixed inset-0 z-40 md:hidden">
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={
                            () => setIsMenuOpen(false)
                    }></div>
                    <div className="fixed top-20 right-4 left-4 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden animate-in slide-in-from-top-2 duration-200">
                        <nav className="p-6">
                            {
                            navItems.map((item, index) => {
                                const animDelay = `${
                                    index * 50
                                }ms`;
                                return (
                                    <Link key={
                                            item.href
                                        }
                                        href={
                                            item.href
                                        }
                                        onClick={
                                            () => setIsMenuOpen(false)
                                        }
                                        className={
                                            `block py-4 px-4 text-lg font-medium rounded-xl transition-all duration-200 hover:scale-105 ${
                                                activeSection === item.section ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                                            }`
                                        }
                                        style={
                                            {
                                                animationDelay: animDelay
                                            }
                                    }>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-3">
                                                {
                                                item.isIcon ? (
                                                    <Image src={
                                                            item.iconSrc
                                                        }
                                                        alt={
                                                            item.label
                                                        }
                                                        width={20}
                                                        height={20}
                                                        className="dark:invert"/>
                                                ) : (
                                                    <span>{
                                                        item.label
                                                    }</span>
                                                )
                                            } </div>
                                            {
                                            activeSection === item.section && (
                                                <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-pulse"></div>
                                            )
                                        } </div>
                                    </Link>
                                );
                            })
                        } </nav>
                    </div>
                </div>
            )
        } </>
    );
}
