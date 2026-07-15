


const Offer = () => {

    
    const offerings = [
        {
            id: 1,
            title: 'WAEC Examination Preparation',
            description:
                'We provide comprehensive WAEC preparation classes designed to help students excel in every subject. Our experienced tutors use simplified teaching methods, intensive revision sessions, and regular mock examinations to strengthen students, understanding and boost their confidence before the final exams.',
            icon: (
                <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            ),
        },
        {
            id: 2,
            title: 'NECO Success Program',
            description:
                'Our NECO preparation program equips students with the knowledge and exam techniques needed to achieve outstanding results. Through personalized coaching, structured lesson plans, and continuous assessments, we ensure every student is fully prepared to perform at their best.',
            icon: (
                <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            ),
        },
        {
            id: 3,
            title: 'JAMB UTME Coaching',
            description:
                'Gain a competitive advantage with our result-driven JAMB coaching classes. We focus on mastering the CBT format, improving speed and accuracy, and providing extensive practice with past questions and mock tests to help students secure admission into their preferred universities.',
            icon: (
                <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            ),
        },
        {
            id: 4,
            title: 'Private Home & Online Tutoring',
            description:
                'Every student learns differently, which is why we offer personalized one-on-one tutoring both at home and online. Our tutors identify each students strengths and weaknesses, creating customized learning plans that improve understanding, confidence, and academic performance.',
            icon: (
                <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
        },
        {
            id: 5,
            title: 'Mock Examinations & Performance Assessment',
            description:
                'Success begins with proper preparation. Our realistic mock examinations simulate the actual WAEC, NECO, and JAMB testing environment while providing detailed performance reports. This helps students identify areas for improvement and build confidence before the real examinations.',
            icon: (
                <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            ),
        },
        {
            id: 6,
            title: 'Academic Mentorship & Study Support',
            description:
                'Beyond teaching, we mentor students to become disciplined, confident, and independent learners. We provide effective study strategies, time management techniques, career guidance, and continuous academic support to help students succeed both in examinations and throughout their educational journey.',
            icon: (
                <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
        },
    ];

    

    return (
        <div 
        id="offer"
        className="min-h-screen bg-white font-sans py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Page Header */}
                <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
                    <div className="flex justify-center items-center gap-3 mb-4">
                        <span className="h-0.5 w-12 bg-amber-400"></span>
                        <span className="text-amber-600 text-sm font-semibold tracking-widest uppercase">
                            What We Offer
                        </span>
                        <span className="h-0.5 w-12 bg-amber-400"></span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Our <span className="text-amber-500">Services</span>
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                        We specialize in preparing students for WAEC, NECO, and JAMB through quality teaching, practical learning, and proven examination strategies.
                    </p>
                </div>

                {/* Offerings Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {offerings.map((item) => (
                        <div
                            key={item.id}
                            className="group bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-amber-200 hover:-translate-y-1"
                        >
                            {/* Icon */}
                            <div className="mb-4 inline-block p-3 bg-amber-50 rounded-xl group-hover:bg-amber-100 transition-colors">
                                {item.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-amber-600 transition-colors">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {item.description}
                            </p>

                            {/* Optional subtle link / arrow */}
                            <div className="mt-4 flex items-center text-amber-500 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                                <a href="/service">
                                    <span>Learn More</span>
                                </a>
                                
                                
                                
                                <svg
                                    className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <div className="bg-amber-50 rounded-3xl py-10 px-6 sm:py-14 sm:px-10 max-w-4xl mx-auto border border-amber-100/50">
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
                            Ready to Achieve Academic Success?
                        </h3>
                        <p className="text-gray-600 text-sm sm:text-base mb-6 max-w-xl mx-auto">
                            Join Brainboost Academy today and let our expert tutors prepare you for success in WAEC, NECO, and JAMB with proven teaching methods and personalized support.
                        </p>
                        <button className="group inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full text-sm sm:text-base transition-all shadow-lg shadow-amber-200 hover:shadow-amber-300/50 hover:-translate-y-0.5">
                            <span><a href="/contact">Contact Us</a></span>
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

export default Offer;
