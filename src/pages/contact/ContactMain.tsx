// ContactPage.jsx
import  { useEffect, useRef } from "react";

const ContactMain = () => {
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
      { threshold: 0.1 },
    );

    sectionRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const contactMethods = [
    {
      icon: "📞",
      title: "Phone",
      details: ["+234 806 276 5363", "+234 703 679 5970"],
      link: "tel:+2348062765363",
    },
    {
      icon: "✉️",
      title: "Email",
      details: ["academybrainboost@gmail.com", "admissions@brainboost.edu"],
      link: "academybrainboost@gmail.com",
    },
    {
      icon: "📍",
      title: "Address",
      details: ["Christ Avenue Off Adebayo Road,", "Ado-Ekiti, Nigeria"],
      link: "https://maps.app.goo.gl/W5TFJgDeZrepcn1u8",
    },
    {
      icon: "🕐",
      title: "Office Hours",
      details: ["Mon – Fri: 8:00 AM – 3:00 PM", "Sat: 11:00 AM – 2:00 PM"],
      link: null,
    },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/profile.php?id=100067752169854",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://instagram.com",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "https://twitter.com",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/education",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans pt-16 overflow-hidden">
      {/* ===== HERO SECTION ===== */}
      <section
        className="relative h-[70vh] min-h-[500px] flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1427505458071-2f2c65b9e169?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/55"></div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="flex justify-center gap-3 mb-5">
            <span className="h-0.5 w-12 bg-amber-400"></span>
            <span className="text-amber-300 text-sm font-semibold tracking-widest uppercase">
              Get in Touch
            </span>
            <span className="h-0.5 w-12 bg-amber-400"></span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            Let's{" "}
            <span className="text-amber-400 relative">
              Connect
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="8"
                viewBox="0 0 200 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 5.5C50 1 120 1 199 5.5"
                  stroke="#F59E0B"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl mt-4 text-white/90 max-w-2xl mx-auto leading-relaxed">
            We'd love to hear from you. Reach out and let's start a conversation
            about how we can support your educational journey.
          </p>

          {/* Quick action buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:academybrainboost@gmail.com"
              className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full transition shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 hover:-translate-y-1 duration-300"
            >
              📧 Email Us
            </a>
            <a
              href="tel:+2348062765363"
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold py-3 px-8 rounded-full transition border border-white/30 hover:-translate-y-1 duration-300"
            >
              📞 Call Now
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/40 flex justify-center">
            <div className="w-1.5 h-3 bg-amber-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT METHODS GRID ===== */}
      <section
        ref={(el) => {
          sectionRefs.current[0] = el;
        }}
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 opacity-0 translate-y-8 transition-all duration-700 ease-out"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-amber-200 hover:-translate-y-1 text-center"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {method.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-amber-600 transition-colors">
                  {method.title}
                </h3>
                {method.details.map((line, i) => (
                  <p key={i} className="text-gray-600 text-sm leading-relaxed">
                    {line}
                  </p>
                ))}
                {method.link && (
                  <a
                    href={method.link}
                    target={method.title === "Address" ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-amber-500 text-sm font-medium hover:text-amber-600 transition-colors"
                  >
                    {method.title === "Address" ? "View on Map →" : "Contact →"}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MAP + SOCIAL + CTA SECTION ===== */}
      <section
        ref={(el) => {
          sectionRefs.current[1] = el;
        }}
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 opacity-0 translate-y-8 transition-all duration-700 ease-out delay-100"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Map placeholder */}
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <div className="relative h-64 sm:h-72 lg:h-80 bg-gray-300 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Map location"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="text-center text-white">
                    <span className="text-5xl block mb-2">📍</span>
                    <p className="font-semibold text-lg">Find Us Here</p>
                    <p className="text-sm text-white/80">
                      Adebayo Ado-Ekiti
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Social + Quick Contact */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-0.5 w-8 bg-amber-400"></span>
                  <span className="text-amber-600 text-sm font-semibold tracking-widest uppercase">
                    Connect With Us
                  </span>
                  <span className="h-0.5 w-8 bg-amber-400"></span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">
                  Follow Us on{" "}
                  <span className="text-amber-500">Social Media</span>
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Stay updated with our latest news, events, and educational
                  insights.
                </p>
              </div>

              {/* Social Icons */}
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-full bg-white shadow-md hover:shadow-xl flex items-center justify-center text-gray-600 hover:text-amber-500 hover:bg-amber-50 transition-all duration-300 hover:-translate-y-1 border border-gray-100 hover:border-amber-200"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              {/* Quick CTA */}
              <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
                <h4 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                  <span className="text-2xl">💬</span>
                  Quick Response
                </h4>
                <p className="text-gray-600 text-sm mt-1">
                  We typically respond within 24 hours. For urgent matters, call
                  us directly.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href="https://wa.me/2348062765363"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2.5 px-6 rounded-full text-sm transition shadow-md hover:shadow-lg hover:-translate-y-0.5"
                  >
                    💬 WhatsApp
                  </a>
                  <a
                    href="mailto:academybrainboost@gmail.com"
                    className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2.5 px-6 rounded-full text-sm transition shadow-md hover:shadow-lg hover:-translate-y-0.5"
                  >
                    ✉️ Send Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BOTTOM CTA ===== */}
      <section
        ref={(el) => {
          sectionRefs.current[2] = el;
        }}
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white opacity-0 translate-y-8 transition-all duration-700 ease-out delay-200"
      >
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-gradient-to-r from-amber-50 to-white rounded-3xl p-8 sm:p-12 border border-amber-100/50 shadow-xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
              Ready to Take the{" "}
              <span className="text-amber-500">Next Step</span>?
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Whether you're a student, parent, or school leader – we're here to
              help you succeed.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a
                href="/enroll"
                className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3.5 px-10 rounded-full transition shadow-lg shadow-amber-200 hover:shadow-amber-300/50 hover:-translate-y-1"
              >
                Enroll Now
              </a>
              <a
                href="/#offer"
                className="border-2 border-amber-500 text-amber-600 hover:bg-amber-50 font-semibold py-3.5 px-10 rounded-full transition hover:-translate-y-1"
              >
                Explore Programs
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactMain;
