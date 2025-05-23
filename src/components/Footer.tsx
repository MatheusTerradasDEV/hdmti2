import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">HDMTI</h3>
            <p className="mb-6">
              Soluções completas em TI para empresas que buscam excelência e inovação.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-blue-400 transition-colors">Sobre nós</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Serviços</a></li>
              <li><a href="#clients" className="hover:text-blue-400 transition-colors">Clientes</a></li>
              <li><a href="#partners" className="hover:text-blue-400 transition-colors">Parceiros</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Segurança da Informação</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Cloud Computing</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Service Desk</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Automação</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail size={18} className="mr-3 text-blue-400 flex-shrink-0 mt-1" />
                <span>contato@hdmti.com.br</span>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="mr-3 text-blue-400 flex-shrink-0 mt-1" />
                <span>(11) 4002-8922</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 text-blue-400 flex-shrink-0 mt-1" />
                <span>São Paulo, SP</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} HDMTI. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;