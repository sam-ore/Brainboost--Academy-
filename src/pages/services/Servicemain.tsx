// ServicesPage.jsx
import React, { useEffect, useRef, useState } from "react";

const Servicemain = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const sectionRefs = useRef<(HTMLElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("opacity-100", "translate-y-0");
                        entry.target.classList.remove("opacity-0", "translate-y-12");
                    }
                });
            },
            { threshold: 0.1 }
        );

        sectionRefs.current.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    // Auto-rotate featured service
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % featuredServices.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const featuredServices = [
        {
            id: 1,
            title: "Exam Preparation",
            subtitle: "JAMB • WAEC • NECO",
            description:
                "Intensive coaching with proven strategies, mock tests, and personalized feedback to ensure top scores.",
            image:
                "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            color: "from-amber-500 to-orange-500",
        },
        {
            id: 2,
            title: "SISU Schools®",
            subtitle: "Finnish-American Curriculum",
            description:
                "A revolutionary blend of Finnish creativity and American rigor, fostering critical thinking and innovation.",
            image:
                "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            color: "from-blue-500 to-cyan-500",
        },
        {
            id: 3,
            title: "School Consulting",
            subtitle: "Operations & Accreditation",
            description:
                "Expert guidance on managing international schools, from daily operations to staff development and licensing.",
            image:
                "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            color: "from-purple-500 to-pink-500",
        },
    ];

    const allServices = [
        {
            number: "01",
            title: "Exam Preparation",
            description:
                "JAMB, WAEC, NECO coaching with mock tests, personalized feedback, and proven strategies.",
            icon: "🎯",
            color: "amber",
        },
        {
            number: "02",
            title: "SISU Schools®",
            description:
                "Finnish-American curriculum combining creativity, critical thinking, and holistic growth.",
            icon: "🌍",
            color: "blue",
        },
        {
            number: "03",
            title: "School Consulting",
            description:
                "Operational support, staff training, accreditation, and licensing for international schools.",
            icon: "🏫",
            color: "purple",
        },
        {
            number: "04",
            title: "Teacher Training",
            description:
                "Professional development programs, classroom management, and modern pedagogy workshops.",
            icon: "👨‍🏫",
            color: "green",
        },
        {
            number: "05",
            title: "Student Enrichment",
            description:
                "Extracurricular activities, study abroad, skill-building workshops, and career guidance.",
            icon: "🌟",
            color: "rose",
        },
        {
            number: "06",
            title: "Licensing & Accreditation",
            description:
                "Navigate the process of establishing new schools with branding and quality assurance.",
            icon: "📜",
            color: "indigo",
        },
    ];

    const processSteps = [
        {
            step: 1,
            title: "Discovery Call",
            description: "We understand your goals and assess your needs.",
            icon: "📞",
        },
        {
            step: 2,
            title: "Custom Strategy",
            description: "We design a tailored solution for your success.",
            icon: "📋",
        },
        {
            step: 3,
            title: "Implementation",
            description: "We execute with excellence and ongoing support.",
            icon: "🚀",
        },
        {
            step: 4,
            title: "Review & Grow",
            description: "We measure progress and optimize for growth.",
            icon: "📈",
        },
    ];

    return (
        <div className="min-h-screen bg-white font-sans pt-16 overflow-hidden">

            {/* ===== HERO: SPLIT SCREEN ===== */}
            <section className="relative min-h-[80vh] flex flex-col lg:flex-row">
                {/* Left: Content */}
                <div className="w-full lg:w-1/2 bg-gray-900 flex items-center justify-center px-6 sm:px-10 py-16 lg:py-20 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-20 right-20 w-64 h-64 bg-amber-400 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-20 w-96 h-96 bg-amber-600 rounded-full blur-3xl"></div>
                    </div>
                    <div className="relative z-10 max-w-lg">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="h-0.5 w-12 bg-amber-400"></span>
                            <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase">
                                Our Services
                            </span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                            Comprehensive{" "}
                            <span className="text-amber-400">Educational</span> Solutions
                        </h1>
                        <p className="text-gray-300 text-base sm:text-lg mt-4 leading-relaxed">
                            From exam preparation to school management, we offer end-to-end
                            services designed to transform education.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4">
                            <a
                                href="#services"
                                className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3.5 px-8 rounded-full transition shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 hover:-translate-y-1"
                            >
                                Explore Services
                            </a>
                            <a
                                href="/contact"
                                className="border-2 border-white/40 hover:border-amber-400 text-white hover:text-amber-400 font-semibold py-3.5 px-8 rounded-full transition hover:-translate-y-1"
                            >
                                Talk to Us
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right: Featured Carousel */}
                <div className="w-full lg:w-1/2 h-[400px] lg:h-auto relative overflow-hidden">
                    {featuredServices.map((service, index) => (
                        <div
                            key={service.id}
                            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                                index === activeIndex
                                    ? "opacity-100 scale-100"
                                    : "opacity-0 scale-110"
                            }`}
                        >
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10 text-white">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className={`bg-gradient-to-r ${service.color} w-12 h-1 rounded-full`}></span>
                                    <span className="text-xs font-medium uppercase tracking-wider text-white/70">
                                        Featured Service
                                    </span>
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-bold">{service.title}</h3>
                                <p className="text-amber-300 font-medium text-sm">{service.subtitle}</p>
                                <p className="text-white/80 text-sm mt-2 max-w-md">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}

                    {/* Carousel dots */}
                    <div className="absolute bottom-4 right-4 z-20 flex gap-2">
                        {featuredServices.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`h-2 rounded-full transition-all duration-300 ${
                                    index === activeIndex
                                        ? "w-8 bg-amber-400"
                                        : "w-2 bg-white/40 hover:bg-white/60"
                                }`}
                                aria-label={`View service ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== SERVICES GRID: NUMBERED CARDS ===== */}
            <section
                id="services"
                 ref={(el) => {
    sectionRefs.current[0] = el;
  }}
                className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gray-50 opacity-0 translate-y-12 transition-all duration-700 ease-out"
            >
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="flex justify-center items-center gap-3 mb-4">
                            <span className="h-0.5 w-12 bg-amber-400"></span>
                            <span className="text-amber-600 text-sm font-semibold tracking-widest uppercase">
                                What We Offer
                            </span>
                            <span className="h-0.5 w-12 bg-amber-400"></span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                            Our <span className="text-amber-500">Services</span>
                        </h2>
                        <p className="text-gray-600 text-base sm:text-lg mt-3 leading-relaxed">
                            Tailored solutions designed to meet the unique needs of students,
                            educators, and institutions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {allServices.map((service, index) => (
                            <div
                                key={index}
                                className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                            >
                                {/* Colored accent bar */}
                                <div
                                    className={`absolute top-0 left-0 right-0 h-1 bg-${service.color}-500 transition-all duration-500 group-hover:h-2`}
                                ></div>

                                <div className="flex items-start justify-between mb-4">
                                    <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                                        {service.icon}
                                    </div>
                                    <span className="text-6xl font-black text-gray-100 group-hover:text-amber-100 transition-colors duration-300">
                                        {service.number}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-amber-600 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {service.description}
                                </p>

                                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <a
                                        href="/contact"
                                        className="inline-flex items-center gap-2 text-amber-500 font-semibold text-sm hover:text-amber-600"
                                    >
                                        Learn More
                                        <svg
                                            className="w-4 h-4 transition-transform group-hover:translate-x-1"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== PROCESS TIMELINE ===== */}
            <section
                 ref={(el) => {
    sectionRefs.current[1] = el;
  }}
                className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white opacity-0 translate-y-12 transition-all duration-700 ease-out delay-100"
            >
                <div className="container mx-auto max-w-5xl">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="flex justify-center items-center gap-3 mb-4">
                            <span className="h-0.5 w-12 bg-amber-400"></span>
                            <span className="text-amber-600 text-sm font-semibold tracking-widest uppercase">
                                How We Work
                            </span>
                            <span className="h-0.5 w-12 bg-amber-400"></span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                            Our <span className="text-amber-500">Process</span>
                        </h2>
                        <p className="text-gray-600 text-base sm:text-lg mt-3">
                            A seamless journey from consultation to success.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-7 sm:left-1/2 top-0 bottom-0 w-0.5 bg-amber-200 transform sm:-translate-x-0.5"></div>

                        <div className="space-y-12">
                            {processSteps.map((step, index) => (
                                <div
                                    key={step.step}
                                    className={`flex flex-col sm:flex-row items-center gap-6 sm:gap-8 ${
                                        index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                                    }`}
                                >
                                    {/* Step number */}
                                    <div className="w-14 h-14 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-amber-200 z-10 flex-shrink-0">
                                        {step.step}
                                    </div>

                                    {/* Content */}
                                    <div
                                        className={`flex-1 bg-gray-50 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                                            index % 2 === 0
                                                ? "sm:text-right"
                                                : "sm:text-left"
                                        }`}
                                    >
                                        <div className="text-3xl mb-2">{step.icon}</div>
                                        <h3 className="text-xl font-bold text-gray-800">
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm mt-1">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== STATS BANNER ===== */}
            <section
                 ref={(el) => {
    sectionRefs.current[2] = el;
  }}
                className="relative py-16 px-4 sm:px-6 lg:px-8 opacity-0 translate-y-12 transition-all duration-700 ease-out delay-200 overflow-hidden"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1523050854058-8df90110c7f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')",
                    backgroundSize: "cover",
                    backgroundAttachment: "fixed",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-black/70"></div>
                <div className="relative z-10 container mx-auto max-w-5xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
                        <div className="space-y-1">
                            <div className="text-4xl sm:text-5xl font-extrabold text-amber-400">1200+</div>
                            <p className="text-sm text-white/70 font-medium uppercase tracking-wider">
                                Partner Schools
                            </p>
                        </div>
                        <div className="space-y-1">
                            <div className="text-4xl sm:text-5xl font-extrabold text-amber-400">95%</div>
                            <p className="text-sm text-white/70 font-medium uppercase tracking-wider">
                                Exam Success Rate
                            </p>
                        </div>
                        <div className="space-y-1">
                            <div className="text-4xl sm:text-5xl font-extrabold text-amber-400">20+</div>
                            <p className="text-sm text-white/70 font-medium uppercase tracking-wider">
                                Owned Schools
                            </p>
                        </div>
                        <div className="space-y-1">
                            <div className="text-4xl sm:text-5xl font-extrabold text-amber-400">10+</div>
                            <p className="text-sm text-white/70 font-medium uppercase tracking-wider">
                                SISU Licensed
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== FLOATING CTA ===== */}
            <section
                ref={(el) => {
    sectionRefs.current[3] = el;
  }}
                className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white opacity-0 translate-y-12 transition-all duration-700 ease-out delay-300"
            >
                <div className="container mx-auto max-w-4xl">
                    <div className="relative bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl p-10 sm:p-14 text-center text-white shadow-2xl overflow-hidden">
                        {/* Decorative circles */}
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full"></div>
                        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/5 rounded-full"></div>

                        <div className="relative z-10">
                            <span className="text-5xl block mb-4">🚀</span>
                            <h2 className="text-3xl sm:text-4xl font-bold">
                                Ready to Transform Your Educational Journey?
                            </h2>
                            <p className="text-white/90 text-base sm:text-lg mt-3 max-w-2xl mx-auto">
                                Let's work together to unlock your full potential. Contact
                                us today for a free consultation.
                            </p>
                            <div className="mt-8 flex flex-wrap justify-center gap-4">
                                <a
                                    href="/enroll"
                                    className="bg-white text-amber-600 hover:bg-gray-100 font-bold py-3.5 px-10 rounded-full transition shadow-lg hover:shadow-xl hover:-translate-y-1"
                                >
                                    Get Started
                                </a>
                                <a
                                    href="/contact"
                                    className="border-2 border-white/60 hover:border-white text-white hover:bg-white/10 font-semibold py-3.5 px-10 rounded-full transition hover:-translate-y-1"
                                >
                                    Contact Us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Servicemain;