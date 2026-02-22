import React, { useState, useEffect } from 'react';
import { Quote, Sparkles, GraduationCap, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface StudentFeedbackProps {
  onNavigate: (page: string) => void;
}

const TESTIMONIALS = [
  {
    name: "Angelina P. Tan",
    role: "Thesis Advisee",
    institution: "Sampoerna University",
    image: "https://i.ibb.co.com/p6HSyjs4/74e1a5b6-4839-4d31-ae59-810762d0e813.png",
    highlight: "She Injects Her Personality In The Classroom, While Maintaining Professionalism, Making Her A Memorable Instructor.",
    content: [
      "I have had the pleasure of being instructed by Ms. Wismiarsi many times. Now, she is my thesis advisor. Ms. Wismiarsi is a passionate educator. She combines academic theory with her experience, making learning an enjoyable process.",
    ],
    specialQuote: "Ms. Wismiarsi’s commitment to environmental sustainability is inspiring, reminding students to do their part to maintain the environment as business students.",
    closing: "It is clear that she cares and aims for the success of her students. She motivates and helps them overcome any obstacles they may have.",
    subjects: ['Research Methods', 'Digital Marketing', 'Business Ethics', 'Marketing Analytics']
  },
  {
    name: "Justin Matthew Wijaya",
    role: "Student (Cohort 2022)",
    institution: "Sampoerna University",
    image: "https://i.ibb.co.com/fVDBGf0Q/Foto-JUSTIN.jpg",
    highlight: "I Found Her Teaching Style To Be Highly Effective, On-Point, And Engaging With Real-World Examples.",
    content: [
      "Ms. Tri has a deep passion for teaching. As one of her students, I found her teaching style to be highly effective, on-point, and engaging with real-world examples that students need when learning unfamiliar concepts. She also consistently promotes students to actively ask questions and engage in discussions."
    ],
    specialQuote: "I could sense that she truly wanted all of her students to achieve great things after graduation.",
    closing: "Her influence extended beyond the curriculum. As a lecturer, she sharpened her students' understanding of various concepts, while simultaneously shaping our character as mentors and supporting us throughout our journeys as friends.",
    subjects: []
  },
  {
    name: "Shane Louis Gunawan",
    role: "Student (Cohort 2022)",
    institution: "Sampoerna University",
    image: "https://i.ibb.co.com/mFC12zzT/Foto-SHANE.jpg",
    highlight: "Your Ability To Consistently Care And Assist Your Students In Their Work Is A Hallmark Of Your Teaching Style.",
    content: [
      "I have witnessed firsthand the dedication you bring to the classroom and the genuine care you extend to your students. You create an inclusive environment where students feel encouraged to participate and challenge themselves intellectually.",
      "Moreover, the way you are able to translate theoretical concepts into practical, relatable applications in your delivery, alongside the organized structure of your lessons have been instrumental in my understanding of the subjects you have taught me."
    ],
    specialQuote: "Your approachability and willingness to listen have provided me with the confidence to pursue my goals with a clearer sense of direction.",
    closing: "Your commitment to professionalism and excellence is evident in every interaction. I am grateful for the opportunity to have learned from you.",
    subjects: ['Research Methods', 'Marketing Analytics', 'Business Ethics & Law']
  },
  {
    name: "Ghazlan",
    role: "Marketing Student",
    institution: "Sampoerna University",
    image: "https://i.ibb.co.com/r2C5pJsM/Whats-App-Image-2026-02-22-at-14-36-10.jpg",
    highlight: "I Appreciated How You Integrated Technology Into The Curriculum.",
    content: [
      "I’ve really enjoyed Ms Tri's classes. They focus on fundamental subjects like Integrated Marketing Communication, Digital Marketing, and Marketing Analytics, which are incredibly relevant to my future in marketing.",
      "The fast pace of the industry can be overwhelming, so having it broken down in the classroom really helped me grasp the tools. The self-selected group projects were also a highlight, as the collaborative environment allowed us to put in our maximum effort to learn from our experiences."
    ],
    specialQuote: "Thank you for being such a supportive lecturer and a mentor!",
    subjects: ['Integrated Marketing Communication', 'Digital Marketing', 'Marketing Analytics']
  }
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 50 : -50,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 50 : -50,
    opacity: 0
  })
};

export const StudentFeedback: React.FC<StudentFeedbackProps> = ({ onNavigate }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <div className="py-8 animate-in fade-in duration-500">
      {/* Breadcrumbs */}
      <div className="flex flex-wrap gap-2 py-2 mb-8 border-b border-slate-100 dark:border-slate-800 pb-4">
        <button 
            onClick={() => onNavigate('home')}
            className="text-primary text-sm font-medium flex items-center gap-1 hover:underline"
        >
          <span className="material-symbols-outlined text-sm">home</span> Home
        </button>
        <span className="text-[#4c739a] text-sm">/</span>
        <span className="text-[#0d141b] dark:text-slate-300 text-sm font-medium">Student Feedback</span>
      </div>

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider mb-4">
            <GraduationCap size={14} /> Student Voices
        </div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-6">
            Impact in the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Classroom</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
            Teaching excellence is ultimately measured by student success and engagement. Here are featured perspectives from students.
        </p>
      </div>

      {/* Main Testimonial Card */}
      <div 
        className="relative max-w-5xl mx-auto"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Decor */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl"></div>

        <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-700 grid lg:grid-cols-12 relative z-10 min-h-[600px]">
            
            {/* Image Section */}
            <div className="lg:col-span-4 relative min-h-[300px] lg:min-h-full group bg-slate-100 dark:bg-slate-900 overflow-hidden">
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.img 
                        key={currentIndex}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        src={current.image} 
                        alt={current.name} 
                        className="absolute inset-0 w-full h-full object-cover object-center"
                    />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90 lg:opacity-100 pointer-events-none"></div>
                
                <div className="absolute bottom-0 left-0 p-6 lg:p-8 text-white w-full z-10">
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
                        >
                            <div className="flex items-center gap-2 mb-2 text-blue-300 text-[10px] font-bold uppercase tracking-wider">
                                <Sparkles size={12} /> {current.role}
                            </div>
                            <h2 className="text-2xl lg:text-3xl font-serif font-bold mb-1 leading-tight">{current.name}</h2>
                            <p className="text-slate-300 text-xs lg:text-sm">{current.institution}</p>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Content Section */}
            <div className="lg:col-span-8 p-8 lg:p-12 flex flex-col justify-center relative overflow-hidden">
                {/* Navigation Buttons */}
                <div className="absolute top-8 right-8 flex gap-2 z-20">
                    <button 
                        onClick={prevTestimonial}
                        className="p-2 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-blue-100 dark:hover:bg-blue-900/50 hover:text-blue-600 transition-colors"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button 
                        onClick={nextTestimonial}
                        className="p-2 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-blue-100 dark:hover:bg-blue-900/50 hover:text-blue-600 transition-colors"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>

                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div 
                        key={currentIndex}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="w-full"
                    >
                        <Quote className="text-blue-100 dark:text-blue-900/50 w-12 h-12 mb-6 -ml-2" />
                        
                        <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white leading-snug mb-6">
                            "{current.highlight}"
                        </h3>

                        <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed mb-8 text-base">
                            {current.content.map((paragraph, idx) => (
                                <p key={idx}>{paragraph}</p>
                            ))}
                            
                            {current.specialQuote && (
                                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-blue-500 italic text-slate-700 dark:text-slate-200 text-sm md:text-base my-6">
                                    "{current.specialQuote}"
                                </div>
                            )}

                            {current.closing && (
                                <p>{current.closing}</p>
                            )}
                        </div>

                        {current.subjects.length > 0 && (
                            <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-700">
                                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Subjects Taken</h4>
                                <div className="flex flex-wrap gap-2">
                                    {current.subjects.map((subject, idx) => (
                                        <span key={idx} className="px-3 py-1.5 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-lg text-xs font-bold hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 transition-colors cursor-default">
                                            {subject}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
        
        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, idx) => (
                <button
                    key={idx}
                    onClick={() => {
                        setDirection(idx > currentIndex ? 1 : -1);
                        setCurrentIndex(idx);
                    }}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        idx === currentIndex 
                        ? 'bg-blue-600 w-8' 
                        : 'bg-slate-300 dark:bg-slate-600 hover:bg-blue-400'
                    }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                />
            ))}
        </div>
      </div>
    </div>
  );
};