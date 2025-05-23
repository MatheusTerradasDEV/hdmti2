import React from 'react';
import { Shield, Cloud, Database, Settings } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  return (
    <div 
      className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-blue-600 mb-4 bg-blue-50 p-3 rounded-lg inline-block">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-gray-600 text-lg">
            Soluções completas para sua infraestrutura de TI
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard 
            icon={<Shield size={24} />} 
            title="Segurança da Informação" 
            description="Nossa equipe protege seus dados contra ameaças, garantindo a continuidade do seu negócio." 
            delay={100}
          />
          <FeatureCard 
            icon={<Cloud size={24} />} 
            title="Serviços em nuvem" 
            description="Reduza custos com soluções em nuvem, aumente sua performance e escalabilidade." 
            delay={200}
          />
          <FeatureCard 
            icon={<Database size={24} />} 
            title="Service Desk e Governança" 
            description="Monitoramento, gerenciamento e suporte técnico especializado para todos os seus equipamentos." 
            delay={300}
          />
          <FeatureCard 
            icon={<Settings size={24} />} 
            title="Agentes de automação" 
            description="Automatize processos repetitivos e aumente a produtividade com agentes de automação." 
            delay={400}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;