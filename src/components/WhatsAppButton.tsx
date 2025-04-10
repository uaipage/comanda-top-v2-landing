
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5500000000000?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20ComandaTop!"
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="Contato por WhatsApp"
      target="_blank"
      rel="noopener noreferrer"
    >
      <MessageCircle size={28} fill="white" />
    </a>
  );
};

export default WhatsAppButton;
