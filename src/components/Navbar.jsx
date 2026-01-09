import { useState, useEffect } from 'react';
import { ShoppingBag, User, Search, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // to change color effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) setIsScrolled(true);
            else setIsScrolled(false);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#Home' },
        { name: 'Story', href: '#Story' },
        { name: 'Products', href: '#Products' },
        { name: 'FAQs', href: '#' },
        { name: 'Contact', href: '#Contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/90 py-5'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">

                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <h1 className="text-2xl font-bold tracking-tight text-black">
                            Little <span className="text-[#ff5432]">Fashion</span>
                        </h1>
                    </div>

                    {/* Desktop Nav Links */}
                    <div className="hidden md:block">
                        <ul className="flex space-x-10">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-500 hover:text-[#ff5432] font-medium transition-colors duration-200"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Icons Section */}
                    <div className="flex items-center space-x-5 text-gray-700">
                        <button className="hover:text-[#ff5432] transition-colors"><Search size={20} /></button>
                        <button className="hover:text-[#ff5432] transition-colors"><User size={20} /></button>
                        <div className="relative cursor-pointer hover:text-[#ff5432] transition-colors">
                            <ShoppingBag size={20} />
                            <span className="absolute -top-2 -right-2 bg-[#ff5432] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                                3
                            </span>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden ml-4">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg">
                    <ul className="px-4 pt-2 pb-6 space-y-4">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="block text-gray-600 hover:text-[#ff5432] text-lg font-medium"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;