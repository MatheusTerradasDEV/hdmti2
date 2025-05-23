import React from 'react';

const Clients: React.FC = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Clientes que escolhem excelência
          </h2>
          <p className="text-gray-600 text-lg">
            Empresas que confiam em nossas soluções
          </p>
        </div>

        <div className="relative">
          <div className="flex justify-center overflow-hidden">
            <div className="flex space-x-32 animate-scroll-slow">
              {[
                { src: "/assets/compmaq-logo.png", alt: "Compmaq" },
                { src: "/assets/asap-logo.png", alt: "ASAP" },
                { src: "/assets/ativa-logo.png", alt: "Ativa" },
                { src: "/assets/atix-logo.png", alt: "Atix" },
                { src: "/assets/bigben-logo.png", alt: "BigBen" },
                { src: "/assets/jeb-logo.png", alt: "JEB" },
                { src: "/assets/kortgeral-logo.png", alt: "Kort Geral" },
                { src: "/assets/mapribor-logo.png", alt: "Mapribor" },
                { src: "/assets/projetointegrado-logo.png", alt: "Projeto Integrado" },
                { src: "/assets/rb-logo.png", alt: "RB" },
                { src: "/assets/sakar-logo.png", alt: "Sakar" },
                { src: "/assets/sertos-logo.png", alt: "Sertos" },
                { src: "/assets/spice-logo.png", alt: "Spice" },
                { src: "/assets/tac-logo.png", alt: "TAC" }
              ].map((client, index) => (
                <img
                  key={index}
                  src={client.src}
                  alt={client.alt}
                  className="h-14 w-auto max-w-[160px] opacity-70 hover:opacity-100 transition-opacity transform hover:scale-110"
                />
              ))}
            </div>
            <div className="flex space-x-32 animate-scroll-slow" aria-hidden="true">
              {[
                { src: "/assets/compmaq-logo.png", alt: "Compmaq" },
                { src: "/assets/asap-logo.png", alt: "ASAP" },
                { src: "/assets/ativa-logo.png", alt: "Ativa" },
                { src: "/assets/atix-logo.png", alt: "Atix" },
                { src: "/assets/bigben-logo.png", alt: "BigBen" },
                { src: "/assets/jeb-logo.png", alt: "JEB" },
                { src: "/assets/kortgeral-logo.png", alt: "Kort Geral" },
                { src: "/assets/logo-safetica.png", alt: "Safetica" },
                { src: "/assets/mapribor-logo.png", alt: "Mapribor" },
                { src: "/assets/projetointegrado-logo.png", alt: "Projeto Integrado" },
                { src: "/assets/rb-logo.png", alt: "RB" },
                { src: "/assets/sakar-logo.png", alt: "Sakar" },
                { src: "/assets/sertos-logo.png", alt: "Sertos" },
                { src: "/assets/spice-logo.png", alt: "Spice" },
                { src: "/assets/tac-logo.png", alt: "TAC" }
              ].map((client, index) => (
                <img
                  key={index}
                  src={client.src}
                  alt={client.alt}
                  className="h-14 w-auto max-w-[160px] opacity-70 hover:opacity-100 transition-opacity transform hover:scale-110"
                />
              ))}
            </div>
          </div>
          <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Clients;