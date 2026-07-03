// Testimonials.jsx
import  { useState, useEffect } from 'react';
import { IoPersonCircleSharp } from "react-icons/io5";



const Testimonial = () => {
    const testimonials = [
  {
    id: 1,
    name: "Adebayo Samuel",
    role: "JAMB Student",
    quote:
      "Before joining Brainboost Academy, I struggled with Mathematics and Physics. The tutors explained every topic in a way that was easy to understand. I scored 315 in JAMB and secured admission into my preferred university.",
    image:<IoPersonCircleSharp className="w-20 h-20 text-gray-400" />,
  },
  {
    id: 2,
    name: "Esther Johnson",
    role: "WAEC Student",
    quote:
      "The revision classes, mock examinations, and constant encouragement gave me the confidence I needed. I passed all my WAEC subjects with excellent grades. Brainboost Academy truly made the difference.",
    image: <IoPersonCircleSharp className="w-20 h-20 text-gray-400" />,
  },
  {
    id: 3,
    name: "Ibrahim Musa",
    role: "NECO Student",
    quote:
      "The teachers were patient, supportive, and always willing to explain difficult topics until I understood them. My NECO results exceeded my expectations, and I'm grateful for the experience.",
    image: <IoPersonCircleSharp className="w-20 h-20 text-gray-400" />,
  },
  {
    id: 4,
    name: "Grace Okafor",
    role: "WAEC & JAMB Student",
    quote:
      "Brainboost Academy helped me develop better study habits and manage my time effectively. The CBT practice sessions prepared me well for JAMB, and I achieved results I never thought possible.",
    image: <IoPersonCircleSharp className="w-20 h-20 text-gray-400" />,
  },
  {
    id: 5,
    name: "Daniel Adeyemi",
    role: "Science Student",
    quote:
      "Every lesson was engaging and practical. The tutors focused on understanding rather than memorization, which made learning enjoyable. I confidently passed both WAEC and JAMB with outstanding scores.",
    image: <IoPersonCircleSharp className="w-20 h-20 text-gray-400" />,
  },
];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);

    // Auto-slide
    useEffect(() => {
        if (!isPlaying) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 4500);
        return () => clearInterval(interval);
    }, [isPlaying, testimonials.length]);

    // Go to specific slide
    const goToSlide = (index: number) => {
    setCurrentIndex(index);
};

    // Pause on hover
    const handleMouseEnter = () => setIsPlaying(false);
    const handleMouseLeave = () => setIsPlaying(true);

    return (
        <div className="min-h-screen bg-white font-sans py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
                    <div className="flex justify-center items-center gap-3 mb-4">
                        <span className="h-0.5 w-12 bg-amber-400"></span>
                        <span className="text-amber-600 text-sm font-semibold tracking-widest uppercase">
                            Testimonials
                        </span>
                        <span className="h-0.5 w-12 bg-amber-400"></span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        What Our <span className="text-amber-500">Community Says</span>
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                        Real stories from educators, parents, and students who have experienced
                        the Brainboost Academy difference.
                    </p>
                </div>

                {/* Carousel Container */}
                <div
                    className="relative max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {/* Slides wrapper with fade transition */}
                    <div className="relative min-h-[320px] sm:min-h-[280px]">
                        {testimonials.map((item, index) => (
                            <div
                                key={item.id}
                                className={`absolute inset-0 p-8 sm:p-10 flex flex-col items-center text-center transition-all duration-700 ease-in-out ${
                                    index === currentIndex
                                        ? 'opacity-100 translate-y-0 z-10'
                                        : 'opacity-0 translate-y-4 z-0 pointer-events-none'
                                }`}
                            >
                                {/* Avatar */}
                                <div className="w-20 h-20 rounded-full flex items-center justify-center border-4 border-amber-200 shadow-md mb-4 bg-gray-100">
    <IoPersonCircleSharp className="w-16 h-16 text-gray-400" />
</div>

                                {/* Quote */}
                                <div className="relative">
                                    <svg
                                        className="absolute -top-2 -left-4 w-8 h-8 text-amber-200/60"
                                        fill="currentColor"
                                        viewBox="0 0 32 32"
                                    >
                                        <path d="M10 8c-3.3 0-6 2.7-6 6v6c0 3.3 2.7 6 6 6s6-2.7 6-6V14c0-3.3-2.7-6-6-6zM24 8c-3.3 0-6 2.7-6 6v6c0 3.3 2.7 6 6 6s6-2.7 6-6V14c0-3.3-2.7-6-6-6z" />
                                    </svg>
                                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed italic px-4 sm:px-6">
                                        “{item.quote}”
                                    </p>
                                </div>

                                {/* Name & Role */}
                                <div className="mt-4">
                                    <h4 className="text-lg font-bold text-gray-900">{item.name}</h4>
                                    <p className="text-sm text-amber-600 font-medium">{item.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Dots indicator */}
                    <div className="flex justify-center gap-2 pb-6 pt-2 relative z-20 bg-white/80 backdrop-blur-sm">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`h-2 rounded-full transition-all duration-300 ${
                                    index === currentIndex
                                        ? 'w-8 bg-amber-500'
                                        : 'w-2 bg-gray-300 hover:bg-amber-300'
                                }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Optional extra stats or CTA */}
                <div className="mt-12 text-center">
                    <p className="text-sm text-gray-500">
                        Join hundreds of satisfied students and schools
                    </p>
                    <button className="mt-3 group inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold py-2.5 px-7 rounded-full text-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
                        <span>Share Your Story</span>
                        <svg
                            className="w-4 h-4 transition-transform group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;