// AboutUs.jsx
import  { useEffect, useRef } from "react";
import img1 from "../../assets/images/ICA_0719.jpg"

const AboutUsHero = () => {
const sectionRefs = useRef<(HTMLElement | null)[]>([]);

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
            { threshold: 0.1 }
        );

        sectionRefs.current.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const differentiators = [
        {
            icon: "🌱",
            title: "Holistic Development",
            description: "We nurture mind, character, and spirit — not just grades.",
        },
        {
            icon: "🌍",
            title: "Global Perspective",
            description: "Finnish-American curriculum with a global outlook.",
        },
        {
            icon: "🧠",
            title: "Critical Thinking",
            description: "We teach students to question, analyze, and create.",
        },
        {
            icon: "🤝",
            title: "Personalized Support",
            description: "Every student gets individual attention and guidance.",
        },
        {
            icon: "📈",
            title: "Proven Results",
            description: "95% exam success rate and 1200+ partner schools worldwide.",
        },
        {
            icon: "💡",
            title: "Innovation First",
            description: "We embrace technology and modern teaching methods.",
        },
    ];

    const values = [
        "Integrity – We act with honesty and transparency.",
        "Excellence – We strive for the highest standards.",
        "Empathy – We listen, understand, and care.",
        "Curiosity – We encourage lifelong learning.",
        "Collaboration – We grow together as a community.",
        "Resilience – We overcome challenges with determination.",
    ];

    return (
        <div className="min-h-screen bg-white font-sans pt-16 overflow-hidden">

            {/* ===== HERO: FOUNDER IMAGE + QUOTE ===== */}
            <section className="relative min-h-[70vh] flex flex-col lg:flex-row">
                {/* Left: Image */}
                <div className="w-full lg:w-1/2 h-[400px] lg:h-auto relative overflow-hidden">
                    <img
                        src={img1}
                        alt="Founder"
                        className=" object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-black/30 lg:via-transparent"></div>
                    {/* Caption overlay on image */}
                    <div className="absolute bottom-8 left-8 right-8 lg:bottom-12 lg:left-12 text-white">
                        <p className="text-sm font-medium text-amber-300 tracking-widest uppercase">
                            Founder & CEO
                        </p>
                        <h3 className="text-2xl sm:text-3xl font-bold">Tutor. Omotoso Oluwasolamidotun</h3>
                        <p className="text-white/80 text-sm mt-1">
                            “Education is the bridge between dreams and reality.”
                        </p>
                    </div>
                </div>

                {/* Right: Content */}
                <div className="w-full lg:w-1/2 bg-gray-900 flex items-center justify-center px-6 sm:px-10 py-16 lg:py-20 relative">
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-10 right-10 w-72 h-72 bg-amber-400 rounded-full blur-3xl"></div>
                    </div>
                    <div className="relative z-10 max-w-lg">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="h-0.5 w-12 bg-amber-400"></span>
                            <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase">
                                About Us
                            </span>
                        </div>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                            Building the Future of{" "}
                            <span className="text-amber-400">Education</span>
                        </h1>
                        <p className="text-gray-300 text-base sm:text-lg mt-4 leading-relaxed">
                            Brainboost Academy was born from a simple belief: every child
                            deserves an education that unlocks their full potential. What
                            started as a passion project has grown into a movement that
                            touches thousands of lives across Nigeria and beyond.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-4">
                            <a
                                href="#story"
                                className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full transition shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 hover:-translate-y-1"
                            >
                                Read Our Story
                            </a>
                            <a
                                href="#vision"
                                className="border border-white/30 hover:border-amber-400 text-white hover:text-amber-400 font-semibold py-3 px-8 rounded-full transition hover:-translate-y-1"
                            >
                                Our Vision
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== OUR STORY ===== */}
            <section
                id="story"
                 ref={(el) => {
    sectionRefs.current[0] = el;
  }}
                className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white opacity-0 translate-y-8 transition-all duration-700 ease-out"
            >
                <div className="container mx-auto max-w-4xl">
                    <div className="text-center mb-12">
                        <div className="flex justify-center items-center gap-3 mb-4">
                            <span className="h-0.5 w-12 bg-amber-400"></span>
                            <span className="text-amber-600 text-sm font-semibold tracking-widest uppercase">
                                Our Journey
                            </span>
                            <span className="h-0.5 w-12 bg-amber-400"></span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                            The <span className="text-amber-500">Story</span> Behind Brainboost
                        </h2>
                    </div>

                    <div className="space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
                        <p>
                           In 2015, <strong>Mr. Omotoso Oluwasolamidotun</strong>, an education enthusiast and passionate tutor, noticed a common challenge among students preparing for major examinations. Many students had the ability to succeed, but they struggled with proper guidance, effective study methods, and the personal support needed to reach their full potential.
                        </p>
                        <p>
                            This realization inspired a vision: to provide students with quality learning support that goes beyond the classroom.

With a strong passion for education and student development, Mr. Omotoso Oluwasolamidotun began offering personalized home tutoring, helping students build confidence, understand difficult concepts, and prepare effectively for examinations such as JAMB, WAEC, and NECO.
                        </p>
                        <p>
                           As more students experienced improvement in their academic performance, the demand for dedicated tutoring support continued to grow. Parents began trusting Brainboost Academy as a reliable partner in their children’s educational journey.

Over time, Brainboost Academy evolved into a platform committed to helping students achieve academic excellence through personalized home tutoring, exam-focused coaching, and effective learning strategies.

Today, we remain dedicated to empowering students with the knowledge, confidence, and support they need to succeed in their examinations and future goals.
                        </p>
                        <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-xl mt-6">
                            <p className="italic text-gray-700">
                                “We didn’t just want to create a school; we wanted to create
                                a movement that redefines what education means in Africa.”
                            </p>
                            <p className="text-sm text-gray-500 mt-2">— Mr. Omotoso Oluwasolamidotun</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== FOUNDER'S JOURNEY (with image) ===== */}
            <section
               ref={(el) => {
    sectionRefs.current[1] = el;
  }}
                className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gray-50 opacity-0 translate-y-8 transition-all duration-700 ease-out delay-100"
            >
                <div className="container mx-auto max-w-5xl">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="md:w-1/2">
                            <div className="rounded-2xl overflow-hidden shadow-xl">
                                <img
                                    src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Founder teaching"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="h-0.5 w-12 bg-amber-400"></span>
                                <span className="text-amber-600 text-sm font-semibold tracking-widest uppercase">
                                    The Founder
                                </span>
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
                                A Journey of <span className="text-amber-500">Perseverance</span>
                            </h3>
                            <div className="space-y-4 text-gray-600 text-base leading-relaxed">
                                <p>
                                    Omotoso Dotun has always believed that education is the key to unlocking opportunities and transforming lives. Inspired by a passion for helping students overcome academic challenges, he founded Brainboost Academy with a clear mission: to provide quality tutoring that empowers students to excel in WAEC, NECO, and JAMB examinations.
                                </p>
                                <p>
                                   Starting with a vision and a determination to make a difference, he recognized that many students struggled not because they lacked potential, but because they lacked the right guidance, effective study strategies, and experienced mentors. Through dedication, innovation, and a student-centered approach, he set out to bridge that gap by creating a learning environment where every student can thrive.
                                </p>
                                <p>
                                 Today, Brainboost Academy continues to impact students by delivering personalized tutoring, comprehensive exam preparation, and continuous academic support. Under Omotoso Dotun's leadership, the academy remains committed to nurturing confident learners, achieving outstanding examination results, and helping students secure admission into their dream institutions.
                                </p>
                                <div className="flex items-center gap-4 mt-4 text-sm text-amber-600 font-medium">
                                    <span>🏆 Awarded “Education Innovator 2024”</span>
                                    <span>📚 Author of “Beyond the Exam”</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== WHAT MAKES US DIFFERENT (List) ===== */}
            <section
                ref={(el) => {
    sectionRefs.current[2] = el;
  }}
                className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white opacity-0 translate-y-8 transition-all duration-700 ease-out delay-150"
            >
                <div className="container mx-auto max-w-4xl">
                    <div className="text-center mb-12">
                        <div className="flex justify-center items-center gap-3 mb-4">
                            <span className="h-0.5 w-12 bg-amber-400"></span>
                            <span className="text-amber-600 text-sm font-semibold tracking-widest uppercase">
                                What Sets Us Apart
                            </span>
                            <span className="h-0.5 w-12 bg-amber-400"></span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                            Our <span className="text-amber-500">Difference</span>
                        </h2>
                        <p className="text-gray-600 text-base sm:text-lg mt-2 max-w-2xl mx-auto">
                            We don’t just teach — we transform. Here’s how we stand out.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {differentiators.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-5 border-b border-gray-100 pb-6 last:border-0 last:pb-0"
                            >
                                <div className="text-3xl flex-shrink-0 mt-1">{item.icon}</div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-800">
                                        {item.title}
                                    </h4>
                                    <p className="text-gray-600 text-base leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== OUR CULTURE & VALUES (List) ===== */}
            <section
                ref={(el) => {
    sectionRefs.current[3] = el;
  }}
                className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gray-50 opacity-0 translate-y-8 transition-all duration-700 ease-out delay-200"
            >
                <div className="container mx-auto max-w-4xl">
                    <div className="text-center mb-12">
                        <div className="flex justify-center items-center gap-3 mb-4">
                            <span className="h-0.5 w-12 bg-amber-400"></span>
                            <span className="text-amber-600 text-sm font-semibold tracking-widest uppercase">
                                Our Culture
                            </span>
                            <span className="h-0.5 w-12 bg-amber-400"></span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                            The <span className="text-amber-500">Values</span> We Live By
                        </h2>
                        <p className="text-gray-600 text-base sm:text-lg mt-2">
                            These principles guide everything we do.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-3 p-4 rounded-xl hover:bg-amber-50 transition-colors"
                            >
                                <span className="text-amber-500 text-xl mt-0.5">✦</span>
                                <p className="text-gray-700 text-base leading-relaxed">
                                    {value}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== WHERE WE’RE HEADING (Vision) ===== */}
            <section
                id="vision"
                 ref={(el) => {
    sectionRefs.current[4] = el;
  }}
                className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 opacity-0 translate-y-8 transition-all duration-700 ease-out delay-250 overflow-hidden"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1523050854058-8df90110c7f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')",
                    backgroundSize: "cover",
                    backgroundAttachment: "fixed",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="relative z-10 container mx-auto max-w-4xl text-center text-white">
                    <div className="flex justify-center items-center gap-3 mb-6">
                        <span className="h-0.5 w-12 bg-amber-400"></span>
                        <span className="text-amber-300 text-sm font-semibold tracking-widest uppercase">
                            Our Vision
                        </span>
                        <span className="h-0.5 w-12 bg-amber-400"></span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                        Where We’re <span className="text-amber-400">Heading</span>
                    </h2>
                    <div className="mt-6 space-y-4 text-white/90 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
                        <p>
                          Our vision is to become one of Africa's most trusted academic support platforms, helping thousands of students excel in WAEC, NECO, and JAMB through quality teaching, innovative learning methods, and personalized mentorship. We believe every student deserves access to excellent education, and we are committed to making academic success achievable for all.
                        </p>
                        <p>
                            We envision a future where African students are not just
                            consumers of education but creators of it — leading innovation,
                            shaping policy, and building a continent that thrives on
                            knowledge.
                        </p>
                    </div>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <a
                            href="/enroll"
                            className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3.5 px-10 rounded-full transition shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 hover:-translate-y-1"
                        >
                            Join the Journey
                        </a>
                        <a
                            href="/contact"
                            className="border-2 border-white/40 hover:border-white text-white hover:bg-white/10 font-semibold py-3.5 px-10 rounded-full transition hover:-translate-y-1"
                        >
                            Partner With Us
                        </a>
                    </div>
                </div>
            </section>

            {/* ===== BOTTOM CTA (optional) ===== */}
            <section className="py-12 bg-white border-t border-gray-100">
                <div className="container mx-auto text-center text-sm text-gray-500">
                    <p>
                        Founded in 2015 • 95% Student Satisfaction • 500+ Students Impacted
                    </p>
                </div>
            </section>
        </div>
    );
};

export default AboutUsHero;