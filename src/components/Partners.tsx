import React from 'react';

const Partners: React.FC = () => {
  return (
    <section id="partners" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Parceiros tecnológicos
          </h2>
          <p className="text-gray-600 text-lg">
            Trabalhamos com os melhores para entregar excelência
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" 
            alt="Microsoft" 
            className="h-12 transform transition-all duration-300 hover:scale-110 hover:opacity-100 opacity-70 animate-fade-in" 
            style={{ animationDelay: '100ms' }}
          />
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" 
            alt="Google Cloud" 
            className="h-12 transform transition-all duration-300 hover:scale-110 hover:opacity-100 opacity-70 animate-fade-in" 
            style={{ animationDelay: '200ms' }}
          />
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" 
            alt="AWS" 
            className="h-12 transform transition-all duration-300 hover:scale-110 hover:opacity-100 opacity-70 animate-fade-in" 
            style={{ animationDelay: '300ms' }}
          />
          <img 
            src="/assets/logo-eset.png" 
            alt="ESET" 
            className="h-12 transform transition-all duration-300 hover:scale-110 hover:opacity-100 opacity-70 animate-fade-in" 
            style={{ animationDelay: '400ms' }}
          />
          <img 
            src="/assets/logo-fortinet.png" 
            alt="Fortinet" 
            className="h-12 transform transition-all duration-300 hover:scale-110 hover:opacity-100 opacity-70 animate-fade-in" 
            style={{ animationDelay: '500ms' }}
          />
          <img 
            src="/assets/logo-safetica.png" 
            alt="Safetica" 
            className="h-12 transform transition-all duration-300 hover:scale-110 hover:opacity-100 opacity-70 animate-fade-in" 
            style={{ animationDelay: '600ms' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Partners;