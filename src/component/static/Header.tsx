// Header.jsx
import  { useState, useEffect } from "react";
import logo2 from "../../assets/images/ChatGPT_Image_Jul_3__2026__12_40_45_PM-removebg-preview.png";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Navigation links
    const navLinks = [
        { name: "Home", href: "/" },
        { name: "What We Offer", href: "/offer" },
        { name: "What Sets Us Apart", href: "/apart" },
        { name: "True Education", href: "/true-education" },
        { name: "Testimonials", href: "/testimonials" },
    ];

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on link click
    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                isScrolled
                    ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
                    : "bg-white/80 backdrop-blur-sm py-3"
            }`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">

                    {/* ===== LOGO ===== */}
                    <a href="/" className="flex items-center gap-2 shrink-0">
                        <img
                            src={logo2}
                            alt="Brainboost Academy"
                            className="h-10 sm:h-12 w-auto object-contain"
                        />
                        
                    </a>

                    {/* ===== DESKTOP NAV ===== */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-gray-600 hover:text-amber-500 transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all group-hover:w-full"></span>
                            </a>
                        ))}
                    </nav>

                    {/* ===== DESKTOP CTA ===== */}
                    <div className="hidden lg:block">
                        <a
                            href="/contact"
                            className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2.5 px-6 rounded-full text-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                        >
                            Enroll Now
                        </a>
                    </div>

                    {/* ===== MOBILE HAMBURGER ===== */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-amber-50 transition-colors"
                        aria-label="Toggle menu"
                    >
                        <span
                            className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                                isOpen ? "rotate-45 translate-y-2" : ""
                            }`}
                        ></span>
                        <span
                            className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                                isOpen ? "opacity-0" : ""
                            }`}
                        ></span>
                        <span
                            className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                                isOpen ? "-rotate-45 -translate-y-2" : ""
                            }`}
                        ></span>
                    </button>
                </div>

                {/* ===== MOBILE MENU ===== */}
                <div
                    className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
                        isOpen ? "max-h-[600px] opacity-100 mt-4" : "max-h-0 opacity-0"
                    }`}
                >
                    <nav className="flex flex-col gap-1 pb-4 border-t border-gray-100 pt-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={handleLinkClick}
                                className="px-4 py-3 text-gray-700 hover:text-amber-500 hover:bg-amber-50 rounded-xl transition-all font-medium"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="/contact"
                            onClick={handleLinkClick}
                            className="mt-2 text-center bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-xl transition-all"
                        >
                            Enroll Now
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;