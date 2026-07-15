// EnrollSimple.tsx
import { useState, type ChangeEvent, type FormEvent } from "react";
// import type { FC } from "react";

// ===== TYPE DEFINITIONS =====
interface EnrollmentFormData {
    studentFirstName: string;
    studentLastName: string;
    parentName: string;
    email: string;
    phone: string;
    program: string;
    gradeLevel: string;
    message: string;
}

interface FormErrors {
    studentFirstName?: string;
    studentLastName?: string;
    parentName?: string;
    email?: string;
    phone?: string;
    program?: string;
    gradeLevel?: string;
}

type ProgramOption = "jamb" | "waec" | "neco" | "sisu" | "enrichment" | "consulting" | "teacher-training";
type GradeOption = "ss1" | "ss2" | "ss3" | "university" | "professional";

// ===== CONSTANTS =====
const PROGRAM_OPTIONS: { value: ProgramOption; label: string }[] = [
    { value: "jamb", label: "JAMB Preparation" },
    { value: "waec", label: "WAEC Coaching" },
    { value: "neco", label: "NECO Preparation" },
    { value: "sisu", label: "SISU Schools® Curriculum" },
    { value: "enrichment", label: "Student Enrichment" },
    { value: "consulting", label: "School Consulting" },
    { value: "teacher-training", label: "Teacher Training" },
];

const GRADE_OPTIONS: { value: GradeOption; label: string }[] = [
    { value: "ss1", label: "SS1" },
    { value: "ss2", label: "SS2" },
    { value: "ss3", label: "SS3" },
    { value: "university", label: "University / Graduate" },
    { value: "professional", label: "Professional" },
];

// ===== INITIAL STATE =====
const initialFormData: EnrollmentFormData = {
    studentFirstName: "",
    studentLastName: "",
    parentName: "",
    email: "",
    phone: "",
    program: "",
    gradeLevel: "",
    message: "",
};

// ===== COMPONENT =====
const EnrollSimple: React.FC = () => {
    const [formData, setFormData] = useState<EnrollmentFormData>(initialFormData);
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [submitted, setSubmitted] = useState<boolean>(false);

    // ===== HANDLERS =====
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // Clear error for this field
        if (errors[name as keyof FormErrors]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    // ===== VALIDATION =====
    const validate = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.studentFirstName.trim()) {
            newErrors.studentFirstName = "First name required";
        }
        if (!formData.studentLastName.trim()) {
            newErrors.studentLastName = "Last name required";
        }
        if (!formData.parentName.trim()) {
            newErrors.parentName = "Parent/guardian name required";
        }
        if (!formData.email.trim()) {
            newErrors.email = "Email required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Valid email required";
        }
        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number required";
        }
        if (!formData.program) {
            newErrors.program = "Please select a program";
        }
        if (!formData.gradeLevel) {
            newErrors.gradeLevel = "Please select a grade";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // ===== SUBMIT =====
    const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        if (!validate()) return;

        setIsSubmitting(true);

        try {
            // Simulate API call — replace with actual API
            await new Promise((resolve) => setTimeout(resolve, 1500));

            console.log("Enrollment submitted:", formData);
            setSubmitted(true);

            // Reset form after 5 seconds
            setTimeout(() => {
                setSubmitted(false);
                setFormData(initialFormData);
            }, 5000);
        } catch (error) {
            console.error("Submission error:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    // ===== RENDER =====
    return (
        <div className="min-h-screen bg-white font-sans pt-24 pb-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

                {/* HEADER */}
                <div className="text-center mb-10">
                    <div className="flex justify-center items-center gap-3 mb-4">
                        <span className="h-0.5 w-12 bg-amber-400"></span>
                        <span className="text-amber-600 text-sm font-semibold tracking-widest uppercase">
                            Enroll Now
                        </span>
                        <span className="h-0.5 w-12 bg-amber-400"></span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                        Join <span className="text-amber-500">Brainboost Academy</span>
                    </h1>
                    <p className="text-gray-600 text-sm sm:text-base mt-2 max-w-xl mx-auto">
                        Fill in the details below and we'll get back to you within 24 hours.
                    </p>
                </div>

                {/* SUCCESS MESSAGE */}
                {submitted && (
                    <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-xl mb-6 animate-fadeIn">
                        <div className="flex items-center gap-3">
                            <span className="text-2xl">🎉</span>
                            <div>
                                <p className="font-semibold text-green-800">Enrollment submitted!</p>
                                <p className="text-green-700 text-sm">
                                    We'll contact you shortly. Thank you for choosing Brainboost!
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* FORM */}
                <form
                    onSubmit={handleSubmit}
                    className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 border border-gray-100"
                >
                    {/* Student Name Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Student First Name *
                            </label>
                            <input
                                type="text"
                                name="studentFirstName"
                                value={formData.studentFirstName}
                                onChange={handleChange}
                                className={`w-full px-4 py-3 rounded-xl border ${
                                    errors.studentFirstName
                                        ? "border-red-500 focus:ring-red-500"
                                        : "border-gray-300 focus:ring-amber-500 focus:border-amber-500"
                                } focus:outline-none focus:ring-2 transition bg-gray-50`}
                                placeholder="John"
                            />
                            {errors.studentFirstName && (
                                <p className="text-red-500 text-xs mt-1">{errors.studentFirstName}</p>
                            )}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Student Last Name *
                            </label>
                            <input
                                type="text"
                                name="studentLastName"
                                value={formData.studentLastName}
                                onChange={handleChange}
                                className={`w-full px-4 py-3 rounded-xl border ${
                                    errors.studentLastName
                                        ? "border-red-500 focus:ring-red-500"
                                        : "border-gray-300 focus:ring-amber-500 focus:border-amber-500"
                                } focus:outline-none focus:ring-2 transition bg-gray-50`}
                                placeholder="Doe"
                            />
                            {errors.studentLastName && (
                                <p className="text-red-500 text-xs mt-1">{errors.studentLastName}</p>
                            )}
                        </div>
                    </div>

                    {/* Parent Name */}
                    <div className="mb-5">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Parent / Guardian Full Name *
                        </label>
                        <input
                            type="text"
                            name="parentName"
                            value={formData.parentName}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-xl border ${
                                errors.parentName
                                    ? "border-red-500 focus:ring-red-500"
                                    : "border-gray-300 focus:ring-amber-500 focus:border-amber-500"
                            } focus:outline-none focus:ring-2 transition bg-gray-50`}
                            placeholder="Mr. & Mrs. Adebayo"
                        />
                        {errors.parentName && (
                            <p className="text-red-500 text-xs mt-1">{errors.parentName}</p>
                        )}
                    </div>

                    {/* Email + Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Email Address *
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`w-full px-4 py-3 rounded-xl border ${
                                    errors.email
                                        ? "border-red-500 focus:ring-red-500"
                                        : "border-gray-300 focus:ring-amber-500 focus:border-amber-500"
                                } focus:outline-none focus:ring-2 transition bg-gray-50`}
                                placeholder="parent@example.com"
                            />
                            {errors.email && (
                                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                            )}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Phone Number *
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className={`w-full px-4 py-3 rounded-xl border ${
                                    errors.phone
                                        ? "border-red-500 focus:ring-red-500"
                                        : "border-gray-300 focus:ring-amber-500 focus:border-amber-500"
                                } focus:outline-none focus:ring-2 transition bg-gray-50`}
                                placeholder="+234 800 000 0000"
                            />
                            {errors.phone && (
                                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                            )}
                        </div>
                    </div>

                    {/* Program + Grade */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Program *
                            </label>
                            <select
                                name="program"
                                value={formData.program}
                                onChange={handleChange}
                                className={`w-full px-4 py-3 rounded-xl border ${
                                    errors.program
                                        ? "border-red-500 focus:ring-red-500"
                                        : "border-gray-300 focus:ring-amber-500 focus:border-amber-500"
                                } focus:outline-none focus:ring-2 transition bg-gray-50 appearance-none`}
                            >
                                <option value="">Select a program</option>
                                {PROGRAM_OPTIONS.map((opt) => (
                                    <option key={opt.value} value={opt.value}>
                                        {opt.label}
                                    </option>
                                ))}
                            </select>
                            {errors.program && (
                                <p className="text-red-500 text-xs mt-1">{errors.program}</p>
                            )}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Grade Level *
                            </label>
                            <select
                                name="gradeLevel"
                                value={formData.gradeLevel}
                                onChange={handleChange}
                                className={`w-full px-4 py-3 rounded-xl border ${
                                    errors.gradeLevel
                                        ? "border-red-500 focus:ring-red-500"
                                        : "border-gray-300 focus:ring-amber-500 focus:border-amber-500"
                                } focus:outline-none focus:ring-2 transition bg-gray-50 appearance-none`}
                            >
                                <option value="">Select grade</option>
                                {GRADE_OPTIONS.map((opt) => (
                                    <option key={opt.value} value={opt.value}>
                                        {opt.label}
                                    </option>
                                ))}
                            </select>
                            {errors.gradeLevel && (
                                <p className="text-red-500 text-xs mt-1">{errors.gradeLevel}</p>
                            )}
                        </div>
                    </div>

                    {/* Message */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Additional Message
                        </label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={3}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-amber-500 focus:border-amber-500 focus:outline-none focus:ring-2 transition bg-gray-50 resize-none"
                            placeholder="Any questions or special requests?"
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full py-3.5 rounded-xl text-white font-bold text-base transition-all ${
                            isSubmitting
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-amber-500 hover:bg-amber-600 shadow-lg shadow-amber-200 hover:shadow-amber-300/50 hover:-translate-y-0.5"
                        }`}
                    >
                        {isSubmitting ? (
                            <span className="flex items-center justify-center gap-2">
                                <svg
                                    className="animate-spin h-5 w-5 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    />
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    />
                                </svg>
                                Submitting...
                            </span>
                        ) : (
                            "🚀 Enroll Now"
                        )}
                    </button>

                    <p className="text-xs text-gray-400 text-center mt-4">
                        🔒 Your information is safe and secure. We'll never share your data.
                    </p>
                </form>

                {/* FOOTER */}
                <div className="mt-6 text-center text-xs text-gray-400">
                    <p>
                        Questions? Call{" "}
                        <a href="tel:+2348000000000" className="text-amber-600 hover:underline">
                            +234 800 000 0000
                        </a>{" "}
                        or email{" "}
                        <a href="mailto:info@brainboost.edu" className="text-amber-600 hover:underline">
                            info@brainboost.edu
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default EnrollSimple;