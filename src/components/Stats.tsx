import React, { useEffect, useRef } from 'react';
import { Users, Clock, Zap, Code } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  delay: number;
}

const StatItem: React.FC<StatItemProps> = ({ icon, value, delay }) => {
  return (
    <div 
      className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl flex flex-col items-center justify-center gap-4 border border-purple-800/30 hover:border-purple-700/50 transition-all hover:translate-y-[-5px]"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-purple-500 mb-2">
        {icon}
      </div>
      <div className="text-3xl md:text-4xl font-bold text-white">
        {value}
      </div>
    </div>
  );
};

const Stats: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="metrics" 
      ref={sectionRef}
      className="py-16 bg-gradient-to-b from-black to-purple-950"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatItem 
            icon={<Users size={32} className="animate-pulse" />} 
            value="7.5k+" 
            delay={100}
          />
          <StatItem 
            icon={<Clock size={32} className="animate-pulse" />} 
            value="5min" 
            delay={200}
          />
          <StatItem 
            icon={<Zap size={32} className="animate-pulse" />} 
            value="85%" 
            delay={300}
          />
          <StatItem 
            icon={<Code size={32} className="animate-pulse" />} 
            value="20+" 
            delay={400}
          />
        </div>
      </div>
    </section>
  );
};

export default Stats;