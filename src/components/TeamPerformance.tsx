import React from 'react';
import { Cloud, Users, Shield, Headphones } from 'lucide-react';

const TeamPerformance: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 leading-tight">
              Nosso time pode impulsionar a performance da sua empresa
            </h2>
            
            <p className="text-gray-600 text-lg">
              Com mais de 14 anos de experiência no mercado, oferecemos soluções completas de TI que incluem armazenamento em nuvem com Google Drive, Microsoft Office 365 e suporte técnico especializado. Nossa equipe está comprometida em fornecer as melhores soluções para seu negócio.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  icon: <Cloud className="h-8 w-8 text-blue-600" />,
                  title: "Soluções em Nuvem",
                  description: "Google Drive e Office 365 integrados"
                },
                {
                  icon: <Shield className="h-8 w-8 text-blue-600" />,
                  title: "Segurança Total",
                  description: "Proteção completa dos seus dados"
                },
                {
                  icon: <Headphones className="h-8 w-8 text-blue-600" />,
                  title: "Suporte Técnico",
                  description: "Atendimento especializado 24/7"
                },
                {
                  icon: <Users className="h-8 w-8 text-blue-600" />,
                  title: "Equipe Dedicada",
                  description: "Profissionais certificados"
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="bg-blue-50 p-3 rounded-lg inline-block mb-3">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl transform rotate-3 opacity-10"></div>
            <div className="relative bg-white p-8 rounded-3xl shadow-xl">
              <img
                src="https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg"
                alt="Equipe de TI trabalhando"
                className="w-full h-[400px] object-cover rounded-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-2xl shadow-lg">
                <p className="text-3xl font-bold">14+</p>
                <p className="text-sm opacity-90">Anos de experiência</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamPerformance;