import { motion } from 'framer-motion';

const Story = () => {
    return (
        <section className="py-24 bg-[#f9f9f9]" id='Story'>

            <div className="container mx-auto px-6 md:px-12">
                {/* Story photo */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2 h-[600px]"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?q=80&w=1000&auto=format&fit=crop"
                            alt="Fashion Story"
                            className="w-full h-full object-cover rounded-sm shadow-sm"
                        />
                    </motion.div>
                  {/* Story text */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2"
                    >
                        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                             <span className="text-[#ff5432]">Retail</span> shop Owners
                        </h2>
                        <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-lg">
                            The world's most innovative fashion destination. We believe that style is a way to say who you are without having to speak.
                        </p>

                        <div className="space-y-4">
                            <button className="text-black font-bold border-b-2 border-black pb-1 hover:text-[#ff5432] hover:border-[#ff5432] transition-all uppercase tracking-widest text-sm">
                                EXPOLORE PRODUCTS
                            </button>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Story;