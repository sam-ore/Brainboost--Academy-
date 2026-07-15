// TrueEducation.jsx
import React, { useEffect,  } from "react";

const TrueEducation = () => {
    // For staggered fade-in on scroll (Intersection Observer)
    const sectionRefs = React.useRef<Array<HTMLElement | null>>([]);
    

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("opacity-100", "translate-y-0");
                        entry.target.classList.remove("opacity-0", "translate-y-8");
                    }
                });
            },
            { threshold: 0.15 }
        );

        sectionRefs.current.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const principles = [
        {
            title: "Character Formation",
            description:
                "We believe education must build integrity, empathy, and resilience – qualities that define a life of purpose.",
            icon: "🧭",
        },
        {
            title: "Critical Thinking",
            description:
                "We teach students to question, analyze, and create – not just memorize. True learning happens when minds are challenged.",
            icon: "💡",
        },
        {
            title: "Global Citizenship",
            description:
                "We nurture open-mindedness and cultural awareness, preparing students to thrive in a connected world.",
            icon: "🌍",
        },
        {
            title: "Lifelong Love for Learning",
            description:
                "Education doesn't end at graduation. We spark curiosity that lasts a lifetime.",
            icon: "📚",
        },
    ];

    return (
        <div className="min-h-screen bg-white font-sans overflow-hidden">
            {/* ===== HERO SECTION ===== */}
            <section
                className="relative h-[70vh] min-h-[500px] flex items-center justify-center bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1523050854058-8df90110c7f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')",
                }}
            >
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
                    <div className="flex justify-center gap-3 mb-6">
                        <span className="h-0.5 w-12 bg-amber-400"></span>
                        <span className="text-amber-300 text-sm font-semibold tracking-widest uppercase">
                            Our Philosophy
                        </span>
                        <span className="h-0.5 w-12 bg-amber-400"></span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
                        True Education is{" "}
                        <span className="text-amber-400">More Than</span> a Certificate
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl mt-4 text-white/90 max-w-2xl mx-auto leading-relaxed">
                        At Brainboost, we define education as the holistic development of
                        the mind, character, and spirit – empowering every learner to
                        become a changemaker.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full transition shadow-lg shadow-amber-500/30 hover:-translate-y-1">
                         
                        <a href="/AboutUs">Discover Our Approach</a>
                        </button>
                        <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold py-3 px-8 rounded-full transition border border-white/30">
                        <a href="/service">Learn More</a>
                            
                        </button>
                    </div>
                </div>
            </section>

            {/* ===== OUR BELIEF ===== */}
          
            {/* ===== CORE PRINCIPLES ===== */}
              <section
                ref={(el: HTMLElement | null) => {
    sectionRefs.current[0] = el;
}}
                className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 opacity-0 translate-y-8 transition-all duration-700 ease-out"
            >
                <div className="container mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <div className="flex justify-center items-center gap-3 mb-4">
                            <span className="h-0.5 w-12 bg-amber-400"></span>
                            <span className="text-amber-600 text-sm font-semibold tracking-widest uppercase">
                                Our Foundation
                            </span>
                            <span className="h-0.5 w-12 bg-amber-400"></span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                            What True Education Means to Us
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {principles.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-amber-200 group"
                            >
                                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-amber-600 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            
               


            {/* ===== CTA ===== */}
            <section
        
  ref={(el: HTMLElement | null): void => {
    sectionRefs.current[1] = el;
  }}

                className="py-16 sm:py-20 bg-white px-4 sm:px-6 lg:px-8 opacity-0 translate-y-8 transition-all duration-700 ease-out delay-300"
            >
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                        Ready to Experience{" "}
                        <span className="text-amber-500">True Education</span>?
                    </h2>
                    <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto mb-8">
                        Join a community where learning knows no bounds. Let's shape a
                        brighter future together.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-10 rounded-full transition shadow-lg shadow-amber-200 hover:shadow-amber-300/50 hover:-translate-y-1">

                        <a href="/enroll">
                            <span>Enroll Now</span>
                            </a>
                        </button>
                        <button className="border-2 border-amber-500 text-amber-600 hover:bg-amber-50 font-semibold py-3 px-10 rounded-full transition">
                            <a href="/contact"> Contact Us</a>
                           
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TrueEducation;