import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Play, Bot, Youtube, Instagram, Wand2, Layers, 
  ChevronDown, ArrowRight, Zap, TrendingUp, DollarSign,
  MonitorPlay, CheckCircle2, Video, BarChart
} from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-panel' : 'bg-transparent'}`} style={{ padding: '20px 0', border: scrolled ? '1px solid var(--border-color)' : 'none', borderTop: 'none', borderRight: 'none', borderLeft: 'none', borderRadius: 0 }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="logo" style={{ fontWeight: 800, fontSize: '1.25rem' }}>
          Conteúdo<span className="accent-gradient-text">IA</span>
        </motion.div>
        
        <nav style={{ display: 'flex', gap: '30px' }} className="hidden md:flex">
          {['Início', 'Como Funciona', 'Resultados', 'Método', 'FAQ'].map((item, i) => (
            <motion.a 
              initial={{ opacity: 0, y: -10 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.1 * i }}
              href={`#${item.toLowerCase().replace(' ', '-')}`} 
              key={item}
              style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', transition: 'color 0.2s' }}
              onMouseOver={(e) => e.target.style.color = 'var(--text-primary)'}
              onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
            >
              {item}
            </motion.a>
          ))}
        </nav>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
          <button className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '0.9rem' }}>Começar Agora</button>
        </motion.div>
      </div>
    </header>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <section className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '160px' }}>
      <div className="glow-bg"></div>
      <div className="container grid-2" style={{ alignItems: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 12px', background: 'rgba(168, 85, 247, 0.1)', borderRadius: '100px', border: '1px solid rgba(168, 85, 247, 0.2)', marginBottom: '24px', fontSize: '0.85rem', color: 'var(--accent-primary)' }}
          >
            <Zap size={14} /> Método Validado 2026
          </motion.div>
          <h1 style={{ fontSize: '3.5rem', lineHeight: '1.1', marginBottom: '24px' }}>
            Transforme tendências da internet em <span className="accent-gradient-text">conteúdo que gera audiência</span> todos os dias.
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', lineHeight: '1.6', marginBottom: '40px', maxWidth: '90%' }}>
            Aprenda como criar vídeos utilizando Inteligência Artificial, automatizar sua produção e construir uma audiência aproveitando assuntos que milhões já estão pesquisando.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <button className="btn btn-primary">Quero Aprender <ArrowRight size={18} style={{ marginLeft: '8px' }}/></button>
            <button className="btn btn-secondary"><Play size={18} style={{ marginRight: '8px' }}/> Ver Demonstração</button>
          </div>
        </motion.div>

        <motion.div style={{ position: 'relative', height: '600px' }}>
          {/* Floating UI Elements Mockup */}
          <motion.div style={{ y: y1 }} className="glass-panel" style={{ position: 'absolute', top: '10%', right: '10%', width: '280px', padding: '20px', zIndex: 2, background: 'rgba(14, 14, 16, 0.7)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Bot size={20} color="#fff" />
              </div>
              <div>
                <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>Roteiro IA Gerado</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Há 2 min</div>
              </div>
            </div>
            <div style={{ height: '4px', background: 'var(--border-color)', borderRadius: '2px', width: '100%', marginBottom: '8px' }}>
              <motion.div initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 2, repeat: Infinity }} style={{ height: '100%', background: 'var(--accent-secondary)', borderRadius: '2px' }}></motion.div>
            </div>
          </motion.div>

          <motion.div style={{ y: y2 }} className="glass-panel" style={{ position: 'absolute', bottom: '20%', left: '0%', width: '240px', padding: '20px', zIndex: 3, background: 'rgba(14, 14, 16, 0.8)' }}>
             <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <TrendingUp size={24} className="accent-gradient-text" />
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Visualizações (24h)</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>+124.5K</div>
              </div>
             </div>
          </motion.div>
          
          {/* Center Main Mockup */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-panel" 
            style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '300px', height: '500px', padding: '10px', background: 'linear-gradient(180deg, rgba(30,30,35,1) 0%, rgba(14,14,16,1) 100%)', overflow: 'hidden' }}
          >
            <div style={{ width: '100%', height: '100%', background: '#000', borderRadius: '8px', position: 'relative', overflow: 'hidden' }}>
              <img src="https://images.unsplash.com/photo-1616469829581-73993eb86b02?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Video Mockup" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }} />
              <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px' }}>
                <div style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '8px' }}>Tendência Revelada 🚀</div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <span style={{ fontSize: '0.75rem', padding: '4px 8px', background: 'rgba(255,255,255,0.2)', borderRadius: '4px', backdropFilter: 'blur(4px)' }}>IA</span>
                  <span style={{ fontSize: '0.75rem', padding: '4px 8px', background: 'rgba(255,255,255,0.2)', borderRadius: '4px', backdropFilter: 'blur(4px)' }}>Viral</span>
                </div>
              </div>
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '60px', height: '60px', background: 'rgba(255,255,255,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(4px)' }}>
                <Play size={24} fill="#fff" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const TimelineItem = ({ step, title, desc, icon: Icon, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ delay, duration: 0.5 }}
    style={{ display: 'flex', gap: '24px', marginBottom: '40px', position: 'relative' }}
  >
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(14, 14, 16, 1)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
        <Icon size={20} className="accent-gradient-text" />
      </div>
      <div style={{ flex: 1, width: '1px', background: 'var(--border-color)', margin: '8px 0' }}></div>
    </div>
    <div style={{ paddingBottom: '32px' }}>
      <div style={{ fontSize: '0.85rem', color: 'var(--accent-primary)', fontWeight: 600, marginBottom: '4px' }}>Passo {step}</div>
      <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>{title}</h3>
      <p style={{ color: 'var(--text-secondary)', lineHeight: '1.5' }}>{desc}</p>
    </div>
  </motion.div>
);

const ComoFunciona = () => {
  return (
    <section id="como-funciona" className="section">
      <div className="container grid-2">
        <div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>O fluxo exato para <br/><span className="accent-gradient-text">viralizar conteúdos</span></h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '40px', fontSize: '1.1rem' }}>Um sistema replicável focado em alavancar as ferramentas de inteligência artificial.</p>
        </div>
        <div style={{ paddingTop: '20px' }}>
          <TimelineItem step="1" title="Encontrar Tendências" desc="Identificamos o que está em alta no momento e validamos a demanda." icon={TrendingUp} delay={0.1} />
          <TimelineItem step="2" title="Criar Roteiro com IA" desc="Deixamos o ChatGPT gerar roteiros engajadores baseados em frameworks virais." icon={Bot} delay={0.2} />
          <TimelineItem step="3" title="Gerar Vídeos" desc="Usamos ferramentas de IA para narração, imagens e clipes dinâmicos." icon={Video} delay={0.3} />
          <TimelineItem step="4" title="Publicar Automaticamente" desc="Distribuímos o conteúdo em múltiplas plataformas sem esforço manual." icon={Layers} delay={0.4} />
          <TimelineItem step="5" title="Monetizar" desc="Convertamos a audiência gerada em vendas através de funis inteligentes." icon={DollarSign} delay={0.5} />
        </div>
      </div>
    </section>
  );
};

const MethodCard = ({ title, icon: Icon }) => (
  <motion.div 
    whileHover={{ y: -5, scale: 1.02 }}
    className="glass-panel" 
    style={{ padding: '32px 24px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '20px' }}
  >
    <div style={{ padding: '12px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
      <Icon size={24} color="var(--accent-primary)" />
    </div>
    <h4 style={{ fontSize: '1.1rem', fontWeight: 600 }}>{title}</h4>
  </motion.div>
);

const OMetodo = () => {
  return (
    <section id="metodo" className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>O Arsenal <span className="accent-gradient-text">Premium</span></h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>Tudo que você precisa para dominar a criação de conteúdo massiva com IA e transformar visualizações em lucro.</p>
        </div>
        <div className="grid-3">
          <MethodCard title="IA cria roteiro" icon={Bot} />
          <MethodCard title="IA gera imagens" icon={Wand2} />
          <MethodCard title="IA gera narração" icon={MonitorPlay} />
          <MethodCard title="CapCut automatiza edição" icon={Video} />
          <MethodCard title="Publicação Múltipla" icon={Layers} />
          <MethodCard title="Funil de Vendas e LP" icon={BarChart} />
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div style={{ borderBottom: '1px solid var(--border-color)' }}>
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 0', background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', textAlign: 'left', fontSize: '1.1rem', fontWeight: 500 }}
      >
        {question}
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}><ChevronDown size={20} /></motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }} 
            animate={{ height: 'auto', opacity: 1 }} 
            exit={{ height: 0, opacity: 0 }}
            style={{ overflow: 'hidden' }}
          >
            <p style={{ paddingBottom: '24px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => (
  <section id="faq" className="section">
    <div className="container" style={{ maxWidth: '800px' }}>
      <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '40px' }}>Perguntas <span className="accent-gradient-text">Frequentes</span></h2>
      <FAQItem question="Preciso aparecer nos vídeos?" answer="Não. O método é 100% focado em canais 'Dark' ou 'Faceless', onde a Inteligência Artificial cuida da narração e das imagens, garantindo alta retenção sem que você precise mostrar o rosto." />
      <FAQItem question="É necessário computador potente?" answer="Absolutamente não. A maioria das ferramentas de IA que utilizamos rodam na nuvem. Você pode aplicar o método inteiro até mesmo pelo celular." />
      <FAQItem question="E se eu não souber nada sobre edição?" answer="Você está no lugar certo. Ensinamos como usar automações do CapCut e IAs para fazer todo o trabalho pesado. É tão simples quanto colar o roteiro." />
    </div>
  </section>
);

const Footer = () => (
  <footer style={{ borderTop: '1px solid var(--border-color)', padding: '40px 0', marginTop: '80px' }}>
    <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
      <div style={{ fontWeight: 800, fontSize: '1.2rem' }}>Conteúdo<span className="accent-gradient-text">IA</span></div>
      <div style={{ display: 'flex', gap: '24px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
        <a href="#">Termos</a>
        <a href="#">Política de Privacidade</a>
        <a href="#">Contato</a>
      </div>
      <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>© 2026 ConteúdoIA. Todos os direitos reservados.</div>
    </div>
  </footer>
);

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ComoFunciona />
      <OMetodo />
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container">
           <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             className="glass-panel"
             style={{ padding: '80px 40px', background: 'linear-gradient(135deg, rgba(14,14,16,0.8) 0%, rgba(168,85,247,0.05) 100%)' }}
           >
             <h2 style={{ fontSize: '3rem', marginBottom: '20px' }}>A próxima grande tendência vai acontecer <br/> <span className="accent-gradient-text">com ou sem você.</span></h2>
             <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '40px' }}>A diferença é quem estará preparado para aproveitá-la.</p>
             <button className="btn btn-primary" style={{ padding: '16px 40px', fontSize: '1.1rem' }}>Começar Agora</button>
           </motion.div>
        </div>
      </section>
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
