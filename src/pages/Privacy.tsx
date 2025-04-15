
import { Shield } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-primary/5 py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-8 h-8 text-primary" />
            <h1 className="text-3xl font-bold text-gray-900">Política de Privacidade – ComandaTop</h1>
          </div>
          <p className="text-gray-600">Atualizado em: 15 de abril de 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto prose prose-gray">
          <p className="lead">
            A sua privacidade é muito importante para nós. Esta Política de Privacidade descreve como a ComandaTop coleta, usa, armazena e protege as informações dos clientes que contratam nosso serviço de cardápio digital e gestão de pedidos.
          </p>

          <h2>1. Informações que Coletamos</h2>
          <p>Ao contratar a ComandaTop, coletamos os seguintes dados pessoais:</p>
          <ul>
            <li>Nome e sobrenome</li>
            <li>Telefone de contato</li>
            <li>Documento (CPF ou CNPJ)</li>
            <li>Endereço completo</li>
            <li>Data de nascimento (utilizada para validação de idade mínima de 18 anos)</li>
            <li>Informações de login (e-mail e senha)</li>
          </ul>
          <p>Essas informações são necessárias para a criação e gestão da conta, emissão de cobranças, e uso completo da plataforma.</p>

          <h2>2. Uso de Cookies e Ferramentas de Rastreamento</h2>
          <p>Utilizamos cookies e tecnologias semelhantes para melhorar a experiência do usuário. Também usamos ferramentas de análise e publicidade, como:</p>
          <ul>
            <li>Google Analytics</li>
            <li>Facebook Pixel</li>
            <li>Outras ferramentas de rastreamento</li>
          </ul>
          <p>Esses dados ajudam a entender como nossos clientes usam a plataforma e otimizam nosso marketing.</p>

          <h2>3. Compartilhamento de Dados com Terceiros</h2>
          <p>Podemos compartilhar seus dados com terceiros apenas quando necessário para o funcionamento do sistema, tais como:</p>
          <ul>
            <li><strong>Sistemas de pagamento</strong>: Para emissão de cobranças e gestão de pagamentos</li>
            <li><strong>Integrações ativas</strong>: Ao habilitar a integração com plataformas de pagamento, realizamos cadastros automáticos nesses serviços</li>
          </ul>
          <p><strong>Nunca vendemos ou compartilhamos seus dados com terceiros para fins comerciais sem seu consentimento.</strong></p>

          <h2>4. Cadastro e Área Restrita</h2>
          <p>Para utilizar a plataforma ComandaTop, é necessário realizar um cadastro. O cliente terá acesso a uma <strong>área restrita</strong> com login e senha, onde poderá gerenciar seu cardápio, pedidos, integrações e dados de cobrança.</p>

          <h2>5. Segurança das Informações</h2>
          <p>Adotamos medidas de segurança técnicas e administrativas para proteger seus dados pessoais contra acessos não autorizados, perda, alteração ou destruição.</p>

          <h2>6. Direitos dos Titulares (LGPD)</h2>
          <p>De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem o direito de:</p>
          <ul>
            <li>Acessar seus dados pessoais</li>
            <li>Solicitar correções ou exclusões</li>
            <li>Revogar consentimentos</li>
            <li>Portar os dados para outro serviço, mediante solicitação formal</li>
          </ul>
          <p>Você pode exercer esses direitos entrando em contato conosco pelo e-mail:<br />
          <strong>privacidade@comandatop.com.br</strong></p>

          <h2>7. Alterações nesta Política</h2>
          <p>Esta Política de Privacidade poderá ser atualizada periodicamente. Sempre que houver mudanças relevantes, notificaremos através da plataforma ou pelo e-mail cadastrado.</p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
