import  { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
    {
        id: 1,
        title: "Little",
        subtitle: "Fashion",
        description: "Explore the latest trends in minimalist fashion. Clean designs for a modern lifestyle.",
        image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=1920&auto=format&fit=crop",
    },
    {
        id: 2,
        title: "Smart",
        subtitle: "Jackets",
        description: "Elegant and comfortable jackets for your everyday look. Discover our winter collection.",
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1920&auto=format&fit=crop",
    },
    {
        id: 3,
        title: "Eco",
        subtitle: "Style",
        description: "Sustainable materials meet high-end fashion. Feel good about what you wear.",
        image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=1920&auto=format&fit=crop",
    }
];

const Hero = () => {
    // slider state
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-screen w-full flex items-center overflow-hidden" id='Home'>

            {/* hero photes */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="w-full h-full relative"
                    >
                        <img
                            src={slides[current].image}
                            className="w-full h-full object-cover"
                            alt="Background"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/20 md:bg-black/10"></div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* hero text */}
            <div className="container mx-auto px-6 md:px-12 z-10 relative">
                <div className="max-w-2xl">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="text-white md:text-[#ff5432] font-semibold tracking-[0.3em] uppercase text-sm mb-4 block drop-shadow-md">
                                New Arrivals
                            </span>
                            <h1 className="text-7xl md:text-[120px] font-bold text-white leading-none drop-shadow-xl">
                                {slides[current].title}
                            </h1>
                            <h2 className="text-7xl md:text-[120px] font-bold text-white/70 leading-none mb-8 drop-shadow-xl">
                                {slides[current].subtitle}
                            </h2>
                            <p className="text-white text-lg md:text-xl mb-10 max-w-md drop-shadow-md leading-relaxed">
                                {slides[current].description}
                            </p>
                            <button className="bg-[#ff5432] text-white px-12 py-5 rounded-full font-bold hover:bg-black transition-all shadow-2xl uppercase tracking-wider">
                                Shop Now
                            </button>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
            {/* Pagination Bubbles */}
            <div className="absolute right-8 md:right-12 top-1/2 -translate-y-1/2 z-20 flex flex-col space-y-6">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className="relative flex items-center justify-center group"
                    >
                        <div className={`absolute w-8 h-8 rounded-full border border-white/50 transition-all duration-500 ${current === index ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}></div>
                        <div className={`w-2.5 h-2.5 rounded-full transition-all duration-300 
                            ${current === index
                                ? 'bg-[#ff5432] scale-125'
                                : 'bg-white/60 group-hover:bg-white'}`}
                        ></div>
                    </button>
                ))}
            </div>

        </section>
    );
};

export default Hero;