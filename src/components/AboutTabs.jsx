import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tabData = [
  {
    id: 'intro',
    label: 'Introduction',
    title: 'Good Design Ideas for your fashion',
    description: 'Little Fashion templates comes with sign in / sign up pages, product listing / product detail, about, FAQs, and contact page. Since this HTML template is based on Bootstrap 5 CSS library, you can feel free to add more components as you need.',
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1000&auto=format&fit=crop',
    link: 'LEARN MORE ABOUT US'
  },
  {
    id: 'work',
    label: 'How we work?',
    title: 'Life at Studio',
    description: 'Over many years, we have built a reputation for excellence in fashion and design. Our process is simple: we listen, we design, and we deliver high-quality fashion items that last a lifetime.',
    image: 'https://images.unsplash.com/photo-1558603668-6570496b66f8?q=80&w=1000&auto=format&fit=crop',
    link: 'WATCH VIDEO'
  },
  {
    id: 'capa',
    label: 'Capabilites',
    title: 'What we can do',
    description: 'From trend forecasting to sustainable sourcing, we provide a full range of services for modern fashion brands. Our team of experts is dedicated to pushing the boundaries of what is possible.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop',
    link: 'OUR CAPABILITIES'
  }
];

const AboutTabs = () => {
  const [activeTab, setActiveTab] = useState(tabData[0]);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Get started with <span className="text-[#ff5432]">Little</span> Fashion
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-16 items-start">
          
          
          <div className="w-full md:w-1/4 flex flex-col space-y-6 border-l-2 border-gray-100">
          {/* mapping to know active tab and make it active and Pagination between its */}
            {tabData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab)}
                className={`text-left pl-8 py-2 text-xl font-medium transition-all duration-300 relative
                  ${activeTab.id === tab.id ? 'text-[#ff5432]' : 'text-gray-300 hover:text-gray-500'}`}
              >
                {activeTab.id === tab.id && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute left-[-2px] top-0 bottom-0 w-[2px] bg-[#ff5432]"
                  />
                )}
                {tab.label}
              </button>
            ))}
          </div>

          <div className="w-full md:w-3/4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
              >
               
                <div className="rounded-lg overflow-hidden shadow-xl aspect-video md:aspect-square">
                  <img 
                    src={activeTab.image} 
                    alt={activeTab.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
 
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    {activeTab.title.split(' ').map((word, i) => 
                      word === 'Design' || word === 'your' || word === 'Studio' ? 
                      <span key={i} className="text-[#ff5432]"> {word} </span> : word + ' '
                    )}
                  </h3>
                  <p className="text-gray-500 leading-relaxed mb-8 text-lg">
                    {activeTab.description}
                  </p>
                  <button className="text-xs font-bold tracking-[0.2em] text-gray-400 border-b border-gray-200 pb-2 hover:text-[#ff5432] hover:border-[#ff5432] transition-all">
                    {activeTab.link}
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutTabs;