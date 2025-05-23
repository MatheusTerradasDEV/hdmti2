import React from 'react';
import { ExternalLink } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-40"
        >
          <source
            src="/assets/video.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white/90"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-8 text-blue-900 animate-slideUp">
            O que o poder da informação pode{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text">
              fazer pelo seu negócio?
            </span>
          </h1>
          
          <p className="text-base md:text-lg text-gray-700 max-w-2xl mb-10 animate-fadeIn delay-100">
            Com mais de 14 anos de experiência no mercado, oferecemos soluções personalizadas
            que atendem às reais necessidades do seu negócio.
          </p>
          
          <button className="group bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-full transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-blue-600/20 hover:scale-105 animate-fadeIn delay-200">
            Conheça nossas soluções
            <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;