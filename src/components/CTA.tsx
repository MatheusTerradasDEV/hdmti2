import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-950 to-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-gradient-to-r from-purple-900/80 to-purple-800/80 rounded-2xl p-8 md:p-12 shadow-xl backdrop-blur-sm border border-purple-700/30">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="lg:max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Pronto para revolucionar seu suporte de TI?
              </h2>
              
              <p className="text-purple-100/90 text-lg mb-8">
                Agende uma demonstração personalizada e descubra como nossa solução pode transformar a gestão de TI da sua empresa.
              </p>
              
              <ul className="space-y-3 mb-8">
                {[
                  'Implementação rápida e sem complicações',
                  'Suporte técnico especializado 24/7',
                  'Adaptável às necessidades do seu negócio',
                  'ROI comprovado em menos de 3 meses'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="text-purple-400 mr-2 mt-1 flex-shrink-0" size={18} />
                    <span className="text-purple-100">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="lg:min-w-[320px]">
              <div className="bg-purple-900/90 p-6 rounded-xl border border-purple-700/50">
                <h3 className="text-xl font-bold text-white mb-4">
                  Agende uma Demo
                </h3>
                
                <form className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Nome" 
                      className="w-full p-3 rounded-lg bg-purple-800/50 border border-purple-600/30 text-white placeholder-purple-300/70 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Email" 
                      className="w-full p-3 rounded-lg bg-purple-800/50 border border-purple-600/30 text-white placeholder-purple-300/70 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <input 
                      type="text" 
                      placeholder="Empresa" 
                      className="w-full p-3 rounded-lg bg-purple-800/50 border border-purple-600/30 text-white placeholder-purple-300/70 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <button className="w-full bg-purple-600 hover:bg-purple-500 text-white font-medium p-3 rounded-lg transition-colors flex items-center justify-center group">
                    Solicitar Demonstração
                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;