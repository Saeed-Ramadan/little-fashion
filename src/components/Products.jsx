import { motion } from 'framer-motion';
import { Plus, Heart } from 'lucide-react';

const products = [
    {
        id: 1,
        name: "Pure Dress",
        category: "Summer Collection",
        price: "45",
        image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1000&auto=format&fit=crop",
        tag: "New"
    },
    {
        id: 2,
        name: "Spring Collection",
        category: "Classic Style",
        price: "55",
        image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=1000&auto=format&fit=crop",
        tag: "Sale"
    },
    {
        id: 3,
        name: "Classic Dress",
        category: "Modern Wear",
        price: "35",
        image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=1000&auto=format&fit=crop",
        tag: "Trending"
    }
];

const Products = () => {
    return (
        <section className="py-18 bg-white" id='Products'>
            <div className="container mx-auto px-6 md:px-12">

                <div className="flex flex-col items-center w-full">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10">Featured Products</h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* mapping at products array */}
                    {products.map((product) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: product.id * 0.1 }}
                            className="group"
                        >
                            {/* products photoes container */}
                            <div className="relative overflow-hidden bg-white aspect-square rounded-sm shadow-sm">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* tag container */}
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-sm  text-[10px] font-bold uppercase tracking-widest shadow-sm">
                                    {product.tag}
                                </div>

                                {/* heart icon */}
                                <motion.button
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="absolute top-4 right-4 text-black-400 hover:text-[#ff5432] transition-colors duration-300"
                                >
                                    <Heart size={20} />
                                </motion.button>
                                {/* plus icon to add */}
                                <motion.button
                                    whileTap={{ scale: 0.9 }}
                                    className="absolute bottom-6 right-6 bg-white text-black p-4 rounded-full shadow-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-[#ff5432] hover:text-white"
                                >
                                    <Plus size={24} />
                                </motion.button>
                            </div>

                            <div className="mt-8 flex justify-between items-start">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-[#ff5432] transition-colors cursor-pointer">
                                        {product.name}
                                    </h3>
                                    <p className="text-gray-400 text-sm">{product.category}</p>
                                </div>
                                <div className="text-right">
                                    <span className="text-xl font-bold text-gray-900">${product.price}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 flex flex-col items-center w-full">
                    <button className="text-gray-500 font-bold border-b-2 border-gray-500 pb-1 hover:text-[#ff5432] hover:border-[#ff5432] transition-all uppercase tracking-widest text-sm">
                        VIEW ALL PRODUCTS
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Products;