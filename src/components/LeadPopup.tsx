
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const LeadPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const { toast } = useToast();

  // Check localStorage on component mount
  useEffect(() => {
    const hasClosedPopup = localStorage.getItem('comandaTopPopupClosed');
    if (hasClosedPopup) {
      setHasInteracted(true);
    }
  }, []);

  // Show popup after 30s if user hasn't interacted
  useEffect(() => {
    if (hasInteracted) return;
    
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 30000);

    return () => clearTimeout(timer);
  }, [hasInteracted]);

  useEffect(() => {
    const handleMouseOut = (e: MouseEvent) => {
      // Exit intent detection
      if (e.clientY < 0 && !hasInteracted && !isOpen) {
        setIsOpen(true);
      }
    };

    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, [hasInteracted, isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    setHasInteracted(true);
    // Save to localStorage to prevent reopening
    localStorage.setItem('comandaTopPopupClosed', 'true');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Erro!",
        description: "Por favor, informe seu email.",
        variant: "destructive",
      });
      return;
    }
    
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Solicitação enviada!",
        description: "Em breve entraremos em contato para iniciar seu teste gratuito.",
      });
      setLoading(false);
      setEmail('');
      handleClose();
    }, 1000);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 animate-fade-in">
      <div className="relative bg-white w-full max-w-md mx-4 rounded-xl shadow-2xl overflow-hidden animate-slide-up">
        <Button 
          variant="ghost" 
          className="absolute top-2 right-2 p-1 h-8 w-8 rounded-full"
          onClick={handleClose}
        >
          <X size={18} />
        </Button>
        
        <div className="bg-primary text-white p-6 text-center">
          <h3 className="text-xl font-bold">Oferta Especial</h3>
          <p className="text-white/90">Teste gratuito por 14 dias</p>
        </div>
        
        <div className="p-6">
          <p className="text-lg font-semibold mb-4">
            Aumente a eficiência do seu estabelecimento hoje mesmo!
          </p>
          <p className="text-gray-600 mb-6">
            Deixe seu email para acessar o teste gratuito do ComandaTop.
          </p>
          
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <Input 
                type="email"
                placeholder="Seu melhor email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
              />
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary-light"
                disabled={loading}
              >
                {loading ? "Enviando..." : "Quero testar grátis"}
              </Button>
            </div>
          </form>
          
          <p className="text-xs text-gray-500 mt-4 text-center">
            Ao se cadastrar, você concorda com nossa política de privacidade.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeadPopup;
