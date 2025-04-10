
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

const CTA = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

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
    }, 1000);
  };

  return (
    <section id="teste-gratis" className="py-24 bg-gradient-to-br from-primary to-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Teste o ComandaTop gratuitamente por 14 dias
          </h2>
          <p className="text-lg mb-8 text-white/80">
            Sem compromisso, sem cartão de crédito. Comece a transformar a gestão do seu estabelecimento hoje mesmo.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <Input
              type="email"
              placeholder="Seu melhor email"
              className="bg-white/20 text-white placeholder:text-white/70 border-white/30 focus-visible:ring-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
            <Button 
              type="submit"
              className="bg-white text-primary hover:bg-white/90 transition-colors font-semibold"
              disabled={loading}
            >
              {loading ? "Enviando..." : "Iniciar teste gratuito"}
            </Button>
          </form>
          
          <p className="mt-4 text-sm text-white/70">
            Ao se cadastrar, você concorda com nossa política de privacidade.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
