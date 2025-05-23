import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  company: string;
  delay: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, company, delay }) => {
  return (
    <div 
      className="bg-purple-900/10 backdrop-blur-md p-8 rounded-xl border border-purple-700/20 hover:border-purple-600/40 transition-all relative"
      style={{ animationDelay: `${delay}ms` }}
    >
      <Quote className="text-purple-500/30 absolute top-6 right-6" size={48} />
      <div className="mb-6">
        <p className="text-purple-100 text-lg italic relative z-10">{quote}</p>
      </div>
      <div>
        <p className="text-white font-medium">{author}</p>
        <p className="text-purple-300/70 text-sm">{company}</p>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-t from-black via-purple-950 to-purple-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-purple-200/90 text-lg">
            Histórias de sucesso de quem revolucionou seu suporte de TI
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Testimonial 
            quote="A implementação do TIHelp reduziu nosso tempo de resolução de problemas em 75% e melhorou significativamente a satisfação dos usuários."
            author="Maria Silva"
            company="Diretora de TI, Tech Solutions"
            delay={100}
          />
          <Testimonial 
            quote="A plataforma transformou nosso departamento de TI. Agora conseguimos gerenciar todos os ativos e resolver chamados de forma muito mais eficiente."
            author="João Oliveira"
            company="CIO, Empresa Nacional"
            delay={200}
          />
          <Testimonial 
            quote="A automação inteligente do TIHelp nos permitiu focar no que realmente importa: a estratégia de tecnologia da empresa, em vez de ficar apagando incêndios."
            author="Carolina Mendes"
            company="Gerente de Infraestrutura, Global Tech"
            delay={300}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;