import React, { useState, useEffect } from 'react';
import { 
  Bot, 
  Rocket, 
  ShieldCheck, 
  BellOff, 
  BrainCircuit, 
  Clock4, 
  Shield, 
  Gavel, 
  Zap, 
  Info, 
  Settings, 
  Users, 
  ShieldAlert, 
  Siren, 
  CheckCircle, 
  XCircle, 
  AlarmClock, 
  Check, 
  CalendarClock, 
  Sun, 
  Moon, 
  BarChart3, 
  Hand, 
  Building2, 
  Users2, 
  GraduationCap, 
  ShoppingCart, 
  Menu, 
  X,
  Copy,
  CheckCheck,
  Send,
  Activity,
  Wifi,
  Lock,
  Cpu,
  MessageCircle
} from 'lucide-react';

const CommandBadge = ({ cmd, desc, type = 'indigo' }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(cmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const colors = {
    indigo: 'text-indigo-300 bg-slate-800',
    red: 'text-red-400 bg-slate-800',
    purple: 'text-purple-300 bg-slate-800',
  };

  return (
    <li className="flex items-start group cursor-pointer" onClick={handleCopy} title="Clique para copiar">
      <span className={`font-mono px-2 py-1 rounded text-sm mr-3 transition-all duration-300 flex items-center gap-2 ${colors[type]} ${copied ? 'bg-emerald-900/50 text-emerald-400' : ''}`}>
        {cmd}
        {copied ? <CheckCheck size={12} /> : <Copy size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />}
      </span>
      <span className="text-slate-300">{desc}</span>
    </li>
  );
};

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleWhatsApp = () => {
    window.open('https://wa.me/5564993344024?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20iMavyBot', '_blank');
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose}></div>
      <div className="bg-slate-900 border border-slate-700 p-8 rounded-2xl w-full max-w-md relative z-10 shadow-2xl">
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-white">
          <X size={24} />
        </button>
        
        <div className="text-center mb-6">
          <div className="bg-indigo-600/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <Bot className="text-indigo-400" size={24} />
          </div>
          <h3 className="text-2xl font-bold text-white">Solicitar Orçamento</h3>
          <p className="text-slate-400 text-sm mt-2">Planos a partir de R$ 49,99 mensais</p>
        </div>

        <button onClick={handleWhatsApp} className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-lg transition flex items-center justify-center gap-2">
          <MessageCircle size={18} /> Falar no WhatsApp
        </button>
      </div>
    </div>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState('admin');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 font-sans">
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/90 backdrop-blur-md border-b border-slate-800 py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Bot className="w-8 h-8 text-indigo-500" />
            <span className="text-xl font-bold text-white">iMavyBot <span className="text-emerald-500">v2.0</span></span>
          </div>

          <nav className="hidden md:flex space-x-8 items-center">
            <a href="#features" className="hover:text-indigo-400 transition text-sm font-medium">Funcionalidades</a>
            <a href="#security" className="hover:text-indigo-400 transition text-sm font-medium">Segurança</a>
            <a href="#contact" className="hover:text-indigo-400 transition text-sm font-medium">Contato</a>
            <button onClick={() => setIsModalOpen(true)} className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full font-medium transition">
              Solicitar Orçamento
            </button>
          </nav>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 p-6 flex flex-col space-y-4">
            <a href="#features" onClick={() => setIsMenuOpen(false)} className="text-slate-300 hover:text-indigo-400 py-2">Funcionalidades</a>
            <a href="#security" onClick={() => setIsMenuOpen(false)} className="text-slate-300 hover:text-indigo-400 py-2">Segurança</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-slate-300 hover:text-indigo-400 py-2">Contato</a>
            <button onClick={() => { setIsMenuOpen(false); setIsModalOpen(true); }} className="bg-indigo-600 text-white py-3 rounded-lg font-bold">
              Solicitar Orçamento
            </button>
          </div>
        )}
      </header>

      <section className="pt-32 pb-20 md:pt-48 md:pb-32 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-white">
            O Controle Total dos seus <br className="hidden md:block" />
            Grupos de WhatsApp com <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-emerald-400">Inteligência Artificial</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-3xl mx-auto">
            Mais de 20 funcionalidades avançadas. Segurança automática, lembretes inteligentes e integração com múltiplas IAs.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button onClick={() => setIsModalOpen(true)} className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition flex items-center justify-center">
              <Rocket className="w-5 h-5 mr-2" /> Solicitar Orçamento
            </button>
            <a href="#features" className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition border border-slate-700 flex items-center justify-center">
              <BrainCircuit className="w-5 h-5 mr-2" /> Ver Funcionalidades
            </a>
          </div>
        </div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[120px] -z-10"></div>
      </section>

      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<BellOff className="w-8 h-8 text-indigo-400" />}
              title="Menções Invisíveis"
              desc="Notifique todos sem poluição visual no grupo."
              color="indigo"
            />
            <FeatureCard 
              icon={<BrainCircuit className="w-8 h-8 text-emerald-400" />}
              title="IA Integrada"
              desc="Múltiplas IAs para moderação inteligente."
              color="emerald"
            />
            <FeatureCard 
              icon={<Clock4 className="w-8 h-8 text-purple-400" />}
              title="Automação Temporal"
              desc="Lembretes e horários automáticos."
              color="purple"
            />
          </div>
        </div>
      </section>

      <section id="features" className="py-24 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Funcionalidades Completas</h2>
            <p className="text-slate-400">Comandos poderosos para administração total.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <TabButton active={activeTab === 'admin'} onClick={() => setActiveTab('admin')} icon={<Shield size={16} />} label="Administração" />
            <TabButton active={activeTab === 'mod'} onClick={() => setActiveTab('mod')} icon={<Gavel size={16} />} label="Moderação" />
            <TabButton active={activeTab === 'advanced'} onClick={() => setActiveTab('advanced')} icon={<Zap size={16} />} label="Automação" />
            <TabButton active={activeTab === 'info'} onClick={() => setActiveTab('info')} icon={<Info size={16} />} label="Informação" />
          </div>

          <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 p-8 md:p-12 rounded-3xl min-h-[400px]">
            {activeTab === 'admin' && (
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold mb-6 flex items-center text-white"><Settings className="w-6 h-6 mr-3 text-indigo-400" /> Comandos Essenciais</h3>
                  <ul className="space-y-4">
                    <CommandBadge cmd="/fechar" desc="Fecha o grupo." />
                    <CommandBadge cmd="/abrir" desc="Abre o grupo." />
                    <CommandBadge cmd="/fixar [msg]" desc="Fixa mensagem." />
                    <CommandBadge cmd="/banir @user" desc="Bane membro." type="red" />
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-6 flex items-center text-white"><Users className="w-6 h-6 mr-3 text-indigo-400" /> Gerenciamento</h3>
                  <ul className="space-y-4">
                    <CommandBadge cmd="/adicionaradmin" desc="Adiciona admin." />
                    <CommandBadge cmd="/removeradmin" desc="Remove admin." />
                    <CommandBadge cmd="/listaradmins" desc="Lista admins." />
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'mod' && (
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold mb-6 flex items-center text-white"><ShieldAlert className="w-6 h-6 mr-3 text-red-400" /> Anti-Spam</h3>
                  <ul className="space-y-4">
                    <CommandBadge cmd="/adicionartermo" desc="Adiciona termo proibido." type="red" />
                    <CommandBadge cmd="/removertermo" desc="Remove termo." />
                    <CommandBadge cmd="/listartermos" desc="Lista termos." />
                  </ul>
                </div>
                <div className="bg-red-500/10 p-6 rounded-2xl border border-red-500/20">
                  <h3 className="text-xl font-bold mb-4 text-red-400 flex items-center"><Siren className="w-6 h-6 mr-2" /> Sistema de Strikes</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-slate-300"><CheckCircle className="w-5 h-5 text-red-500 mr-3" /> 1º Strike: Aviso</li>
                    <li className="flex items-center text-slate-300"><CheckCircle className="w-5 h-5 text-red-500 mr-3" /> 2º Strike: Mute</li>
                    <li className="flex items-center font-bold text-red-300"><XCircle className="w-5 h-5 mr-3" /> 3º Strike: Expulsão</li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'advanced' && (
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold mb-6 flex items-center text-white"><AlarmClock className="w-6 h-6 mr-3 text-purple-400" /> Lembretes</h3>
                  <div className="bg-slate-800 p-4 rounded-xl mb-4 border-l-4 border-purple-500">
                    <p className="font-mono text-sm text-purple-300 mb-2">/lembrete + msg 1h 24h</p>
                    <p className="text-slate-400 text-xs">Repetição automática inteligente.</p>
                  </div>
                  <ul className="space-y-2">
                    <CommandBadge cmd="/stoplembrete" desc="Para lembretes." type="purple" />
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-6 flex items-center text-white"><CalendarClock className="w-6 h-6 mr-3 text-purple-400" /> Horários</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center bg-slate-800/50 p-4 rounded-xl">
                      <Sun className="w-6 h-6 text-yellow-400 mr-4" /> Abertura às 07:00
                    </li>
                    <li className="flex items-center bg-slate-800/50 p-4 rounded-xl">
                      <Moon className="w-6 h-6 text-blue-400 mr-4" /> Fechamento às 00:00
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'info' && (
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold mb-6 flex items-center text-white"><BarChart3 className="w-6 h-6 mr-3 text-indigo-400" /> Estatísticas</h3>
                  <ul className="space-y-4">
                    <CommandBadge cmd="/status" desc="Status do grupo." />
                    <CommandBadge cmd="/regras" desc="Regras do grupo." />
                    <CommandBadge cmd="/comandos" desc="Lista comandos." />
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-6 flex items-center text-white"><Hand className="w-6 h-6 mr-3 text-indigo-400" /> Boas-vindas</h3>
                  <div className="bg-slate-800/50 p-6 rounded-xl">
                    <p className="text-slate-300 italic mb-4">"Bem-vindo ao grupo!"</p>
                    <ul className="space-y-2 text-sm text-slate-400">
                      <li className="flex items-center"><Check className="w-3 h-3 text-indigo-400 mr-2" /> Automático</li>
                      <li className="flex items-center"><Check className="w-3 h-3 text-indigo-400 mr-2" /> Personalizado</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="security" className="py-24 bg-slate-900">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Segurança 24/7</h2>
            <p className="text-slate-400 mb-8 text-lg">
              Sistema de proteção automática que monitora e bloqueia ameaças em tempo real.
            </p>

            <div className="space-y-6">
              <SecurityItem icon={<ShieldCheck className="w-6 h-6 text-emerald-400" />} text="Anti-spam inteligente" />
              <SecurityItem icon={<Zap className="w-6 h-6 text-emerald-400" />} text="Detecção de cassino" />
              <SecurityItem icon={<Lock className="w-6 h-6 text-emerald-400" />} text="Controle de acesso" />
            </div>
          </div>
          
          <div className="bg-slate-800/60 backdrop-blur-xl p-8 rounded-3xl border border-slate-700">
            <div className="flex justify-between items-center mb-8 border-b border-slate-700/50 pb-4">
              <h3 className="text-xl font-bold text-white flex items-center">
                <Activity className="w-5 h-5 text-emerald-400 mr-2" /> Status
              </h3>
              <span className="text-xs font-mono text-emerald-400">● ONLINE</span>
            </div>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-xs text-slate-400 mb-1">
                  <span>Uptime</span>
                  <span>99.9%</span>
                </div>
                <div className="w-full bg-slate-700/50 rounded-full h-1.5">
                  <div className="bg-emerald-500 h-1.5 rounded-full w-full"></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-900/50 p-4 rounded-xl flex items-center gap-3">
                  <Wifi className="w-5 h-5 text-indigo-400" />
                  <div>
                    <div className="text-white font-bold text-sm">Latência</div>
                    <div className="text-slate-500 text-xs">~24ms</div>
                  </div>
                </div>
                <div className="bg-slate-900/50 p-4 rounded-xl flex items-center gap-3">
                  <Cpu className="w-5 h-5 text-purple-400" />
                  <div>
                    <div className="text-white font-bold text-sm">CPU</div>
                    <div className="text-slate-500 text-xs">12%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">Casos de Uso</h2>
            <p className="text-slate-400">Para todos os tipos de comunidades.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <UseCaseCard icon={<Building2 className="w-10 h-10 text-indigo-400" />} title="Empresas" />
            <UseCaseCard icon={<Users2 className="w-10 h-10 text-emerald-400" />} title="Comunidades" />
            <UseCaseCard icon={<GraduationCap className="w-10 h-10 text-purple-400" />} title="Educação" />
            <UseCaseCard icon={<ShoppingCart className="w-10 h-10 text-yellow-400" />} title="Vendas" />
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-[#0b1120] pt-20 pb-10 border-t border-slate-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8 text-white">Entre em Contato</h2>
          <p className="text-slate-400 mb-10 max-w-2xl mx-auto">
            Planos a partir de R$ 49,99 mensais. Entre em contato para orçamento personalizado.
          </p>
          
          <button onClick={() => setIsModalOpen(true)} className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 rounded-full font-bold text-lg transition mb-16">
            Solicitar Orçamento
          </button>

          <div className="border-t border-slate-800/50 pt-8 text-slate-500 text-sm">
            <p>© 2025 iMavyBot v2.0 - Todos os direitos reservados</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const FeatureCard = ({ icon, title, desc, color }) => {
  const colorClasses = {
    indigo: 'hover:border-indigo-500/50 bg-indigo-500/10',
    emerald: 'hover:border-emerald-500/50 bg-emerald-500/10',
    purple: 'hover:border-purple-500/50 bg-purple-500/10'
  };

  return (
    <div className={`bg-slate-800/30 p-8 rounded-2xl border border-slate-700/50 transition duration-300 ${colorClasses[color].split(' ')[0]}`}>
      <div className={`${colorClasses[color].split(' ')[1]} p-3 rounded-xl w-fit mb-6`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
      <p className="text-slate-400">{desc}</p>
    </div>
  );
};

const TabButton = ({ active, onClick, icon, label }) => (
  <button 
    onClick={onClick} 
    className={`px-6 py-3 rounded-full font-medium transition flex items-center gap-2 ${
      active 
        ? 'bg-indigo-600 text-white' 
        : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
    }`}
  >
    {icon} {label}
  </button>
);

const SecurityItem = ({ icon, text }) => (
  <div className="flex items-center bg-slate-800/30 p-4 rounded-xl border border-slate-700/30">
    <div className="bg-emerald-500/10 p-2 rounded-lg mr-4">{icon}</div>
    <span className="text-slate-200 font-medium">{text}</span>
  </div>
);

const UseCaseCard = ({ icon, title }) => (
  <div className="bg-slate-800/30 p-6 rounded-2xl hover:-translate-y-2 transition duration-300 border border-transparent hover:border-slate-700 text-center">
    <div className="mb-4 flex justify-center">{icon}</div>
    <h4 className="font-bold text-white">{title}</h4>
  </div>
);
