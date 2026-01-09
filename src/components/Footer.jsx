import { Twitter, Instagram, Youtube, MessageCircle, } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#1a1a1a] pt-20 pb-10" id='Contact'>
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mb-16">
                    {/* Column one prand name */}
                    <div className="col-span-1 md:col-span-1">
                        <h2 className="text-2xl font-bold text-white mb-6">
                            Little <span className="text-[#ff5432]">Fashion</span>
                        </h2>
                        <p className="text-gray-400 leading-relaxed">
                            Making the world a more stylish place, one outfit at a time. High quality fashion for modern people.
                        </p>
                    </div>
                    {/* Column two sections */}
                    <div>
                        <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Sitemap</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><a href="#Story" className="hover:text-[#ff5432] transition-colors">Story</a></li>
                            <li><a href="#" className="hover:text-[#ff5432] transition-colors">Privacy Policy</a></li>
                            <li><a href="#Contact" className="hover:text-[#ff5432] transition-colors">Contact</a></li>
                            <li><a href="#Products" className="hover:text-[#ff5432] transition-colors">Products</a></li>
                            <li><a href="#" className="hover:text-[#ff5432] transition-colors">FAQs</a></li>
                        </ul>
                    </div>
                    {/* Column three social icons */}
                    <div>
                        <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Social</h4>
                        <div className="flex flex-wrap gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#FF0000] transition-all group">
                                <Youtube size={18} className="group-hover:scale-110 transition-transform" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#25D366] transition-all group">
                                <MessageCircle size={18} className="group-hover:scale-110 transition-transform" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#ff5432] transition-all group">
                                <Instagram size={18} className="group-hover:scale-110 transition-transform" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#1877F2] transition-all group">
                                <Twitter size={18} className="group-hover:scale-110 transition-transform" />
                            </a>
                        </div>
                    </div>

                </div>
                {/* copy right */}
                <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                    <p>Copyright © 2026 Little Fashion. All rights reserved.</p>
                    <p>Designed by <span className="text-white font-2xl font-bold hover:text-[#ff5432] transition-all">Saeed Ramadan</span></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;