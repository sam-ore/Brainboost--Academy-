import logo from "../../assets/images/vitaly-gariev-NGLWZV4xOPg-unsplash.jpg";
import logo2 from "../../assets/images/ChatGPT_Image_Jul_3__2026__12_40_45_PM-removebg-preview.png";

const HomeHero = () => {
    return (
        <div className="m bg-white font-sans">
            {/* Main Hero Container */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16">

                    {/* Left Column — Image */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src={logo}
                                alt="School campus"
                                className="w-full h-[280px] sm:h-[340px] lg:h-[420px] xl:h-[480px] object-cover"
                            />
                            {/* Optional overlay badge */}
                            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md">
                                <span className="text-xs sm:text-sm font-semibold text-amber-600 tracking-wider">
                                    ✦ EXCELLENCE IN EDUCATION
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column — Content */}
                    <div className="w-full lg:w-1/2 space-y-5 sm:space-y-6">

                        {/* Brand Logo / Badge */}
                        <div className="flex items-center gap-3">
                            <img
                                src={logo2}
                                alt="Brainboost Academy"
                                className="h-10 sm:h-12 w-auto object-contain"
                            />
                            <span className="text-xs sm:text-sm font-medium text-amber-600 tracking-widest uppercase border-l-2 border-amber-300 pl-3">
                                Since 2024
                            </span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                            Brainboost
                            <span className="block text-amber-500">Academy</span>
                        </h1>

                        {/* Subtitle / Tagline */}
                        <div className="flex items-center gap-2">
                            <span className="h-1 w-10 bg-amber-400 rounded-full"></span>
                            <p className="text-sm sm:text-base md:text-lg font-medium text-gray-600 tracking-wide">
                                Ace JAMB, NECO & WAEC
                            </p>
                        </div>

                        {/* Description */}
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xl">
                            Brainboost Academy is committed to shaping the future of students through exceptional teaching and academic support. We specialize in preparing learners for WAEC, NECO, and JAMB with expert instruction, comprehensive study materials, regular mock examinations, and personalized mentoring. By combining proven teaching methods with a passion for excellence, we empower every student to reach their highest academic potential and confidently pursue their educational dreams.
                        </p>

                        {/* Stats Row */}
                        <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-2">
                            <div className="bg-amber-50 rounded-xl px-3 py-3 sm:px-4 sm:py-4 text-center border border-amber-100/50">
                                <span className="block text-xl sm:text-2xl font-extrabold text-amber-600">
                                    100+
                                </span>
                                <span className="text-[10px] sm:text-xs text-gray-500 font-medium uppercase tracking-wider">
                                    Student Enrolled
                                </span>
                            </div>
                            <div className="bg-amber-50 rounded-xl px-3 py-3 sm:px-4 sm:py-4 text-center border border-amber-100/50">
                                <span className="block text-xl sm:text-2xl font-extrabold text-amber-600">
                                    50+
                                </span>
                                <span className="text-[10px] sm:text-xs text-gray-500 font-medium uppercase tracking-wider">
                                    Mock Tests Conducted
                                </span>
                            </div>
                            <div className="bg-amber-50 rounded-xl px-3 py-3 sm:px-4 sm:py-4 text-center border border-amber-100/50">
                                <span className="block text-xl sm:text-2xl font-extrabold text-amber-600">
                                    3
                                </span>
                                <span className="text-[10px] sm:text-xs text-gray-500 font-medium uppercase tracking-wider">
                                    National Exams Covered
                                </span>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="pt-2">
                            <button className="group relative inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-600 text-white font-bold py-3.5 px-8 sm:py-4 sm:px-10 rounded-full text-sm sm:text-base transition-all duration-300 shadow-lg shadow-amber-200 hover:shadow-amber-300/50 hover:-translate-y-0.5">
                                <span>GET STARTED</span>
                                <svg
                                    className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                    />
                                </svg>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeHero;