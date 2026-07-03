

const WhatSetsApart = () => {
    const features = [
        {
            id: 1,
            title: "Experienced & Passionate Tutors",
            description:
                "At Brainboost Academy, our tutors are highly experienced, knowledgeable, and passionate about helping students succeed. We simplify difficult concepts, provide personalized attention, and ensure every student gains the confidence needed to excel in WAEC, NECO, and JAMB examinations.",
            image: "https://picsum.photos/seed/edu1/600/400",
        },
        {
            id: 2,
            title: "Proven Exam Preparation Strategies",
            description:
                "We don't just teach—we prepare students to succeed. Our lessons are structured around the latest examination syllabuses, past questions, mock examinations, and effective exam techniques that help students maximize their performance on exam day.",
            image: "https://picsum.photos/seed/edu2/600/400",
        },
        {
            id: 3,
            title: "Personalized Learning Experience",
            description:
                "Every student has unique strengths and challenges. That's why we tailor our teaching approach to meet individual learning needs, ensuring that each learner receives the support, guidance, and encouragement necessary to reach their full academic potential.",
            image: "https://picsum.photos/seed/edu3/600/400",
        },
        {
            id: 4,
            title: "Interactive & Engaging Classes",
            description:
                "Learning is more effective when students actively participate. Our classes encourage discussions, problem-solving, practical exercises, and regular assessments, making learning enjoyable while improving understanding and long-term retention.",
            image: "https://picsum.photos/seed/edu4/600/400",
        },
        {
            id: 5,
            title: "Continuous Progress Monitoring",
            description:
                "We believe that consistent improvement leads to outstanding results. Through regular tests, assignments, mock examinations, and detailed performance reports, we track every student's progress and provide targeted support where improvement is needed.",
            image: "https://picsum.photos/seed/edu5/600/400",
        },
        {
            id: 6,
            title: "Commitment to Student Success",
            description:
                "Our students' success is our greatest achievement. Beyond preparing them for WAEC, NECO, and JAMB, we mentor, motivate, and inspire learners to develop confidence, discipline, and lifelong study habits that prepare them for university and future careers..",
            image: "https://picsum.photos/seed/edu6/600/400",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 font-sans py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Page Header */}
                <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
                    <div className="flex justify-center items-center gap-3 mb-4">
                        <span className="h-0.5 w-12 bg-amber-400"></span>
                        <span className="text-amber-600 text-sm font-semibold tracking-widest uppercase">
                            The Difference
                        </span>
                        <span className="h-0.5 w-12 bg-amber-400"></span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        What Sets <span className="text-amber-500">Brainboost Apart</span>
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                        We don't just teach — we transform. Here's why students, parents, and
                        schools choose us as their trusted educational partner.
                    </p>
                </div>

                {/* Feature Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {features.map((item) => (
                        <div
                            key={item.id}
                            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 h-72 sm:h-80 md:h-72 lg:h-80"
                        >
                            {/* Image */}
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                            />

                            {/* Dark Overlay (fades in on hover) */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Text Content - Slides UP from bottom on hover */}
                            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                {/* Optional small badge/icon */}
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="w-6 h-0.5 bg-amber-400"></span>
                                    <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">
                                        Feature
                                    </span>
                                </div>

                                <h3 className="text-white text-xl sm:text-2xl font-bold leading-tight">
                                    {item.title}
                                </h3>
                                <p className="text-white/90 text-sm mt-1 max-w-xs leading-relaxed">
                                    {item.description}
                                </p>

                                {/* Small arrow indicator */}
                                <div className="mt-3 flex items-center text-amber-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                                    <span>Explore</span>
                                    <svg
                                        className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA Section */}
                <div className="mt-16 text-center">
                    <div className="bg-amber-500/10 rounded-3xl py-10 px-6 sm:py-14 sm:px-10 max-w-4xl mx-auto border border-amber-200/50">
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
                            Ready to experience the difference?
                        </h3>
                        <p className="text-gray-600 text-sm sm:text-base mb-6 max-w-xl mx-auto">
                            Join Brainboost Academy today and unlock a world of opportunities for
                            your child.
                        </p>
                        <button className="group inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full text-sm sm:text-base transition-all shadow-lg shadow-amber-200 hover:shadow-amber-300/50 hover:-translate-y-0.5">
                            <span>Enroll Now</span>
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
        </div>
    );
};

export default WhatSetsApart;