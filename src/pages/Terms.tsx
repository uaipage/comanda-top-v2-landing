
import { FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-primary/5 py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-8 h-8 text-primary" />
            <h1 className="text-3xl font-bold text-gray-900">Termo de Uso – ComandaTop</h1>
          </div>
          <p className="text-gray-600">Atualizado em: 15 de abril de 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto prose prose-gray">
          <p className="lead">
            Seja bem-vindo à ComandaTop! Ao contratar e utilizar nossos serviços, você concorda com os termos e condições abaixo.
          </p>

          <h2>1. Sobre o Serviço</h2>
          <p>A ComandaTop oferece uma plataforma digital para gestão de cardápios e pedidos, voltada para estabelecimentos como bares, restaurantes, lanchonetes e similares.</p>
          <p>A contratação do serviço permite acesso a funcionalidades como:</p>
          <ul>
            <li>Criação e personalização de cardápio digital</li>
            <li>Área de gerenciamento com login e senha</li>
            <li>Integração com meios de pagamento</li>
            <li>Acompanhamento de pedidos e clientes</li>
          </ul>

          <h2>2. Cadastro do Cliente</h2>
          <p>Para utilizar a plataforma, o cliente deve realizar um cadastro, fornecendo:</p>
          <ul>
            <li>Nome completo ou razão social</li>
            <li>Documento (CPF ou CNPJ)</li>
            <li>Endereço completo</li>
            <li>Telefone de contato</li>
            <li>Data de nascimento (para validação de maioridade)</li>
            <li>E-mail e senha de acesso</li>
          </ul>
          <p>O cliente se responsabiliza pela veracidade dos dados informados.</p>

          <h2>3. Acesso e Responsabilidades</h2>
          <ul>
            <li>O cliente é responsável por manter sua senha em sigilo e por todas as atividades realizadas em sua conta.</li>
            <li>É proibido utilizar a plataforma para fins ilegais, enganosos, ofensivos ou que violem a legislação vigente.</li>
            <li>O conteúdo cadastrado no cardápio (ex: produtos, preços, imagens) é de total responsabilidade do cliente.</li>
          </ul>
          <p>A ComandaTop se reserva o direito de suspender ou cancelar o acesso em caso de uso indevido, fraude ou violação dos termos.</p>

          <h2>4. Pagamento e Cobrança</h2>
          <ul>
            <li>O uso da plataforma está sujeito ao pagamento de planos conforme acordado no momento da contratação.</li>
            <li>A cobrança pode ser feita via sistemas integrados, como o <strong>Asaas</strong>, com geração de boletos, pix ou cartão.</li>
            <li>Em caso de inadimplência, o acesso ao sistema poderá ser bloqueado temporariamente até a regularização.</li>
          </ul>

          <h2>5. Compartilhamento de Dados</h2>
          <ul>
            <li>Para oferecer suporte completo, a ComandaTop poderá compartilhar seus dados com sistemas de pagamento e terceiros responsáveis por funcionalidades contratadas.</li>
            <li>Todos os dados são tratados conforme nossa <Link to="/privacidade" className="text-primary hover:underline">Política de Privacidade</Link>.</li>
          </ul>

          <h2>6. Propriedade Intelectual</h2>
          <p>Todo o conteúdo da plataforma, incluindo marca, interface, códigos e funcionalidades, pertence à ComandaTop e não pode ser copiado, modificado ou redistribuído sem autorização.</p>

          <h2>7. Cancelamento e Encerramento</h2>
          <p>O cliente pode solicitar o cancelamento da conta a qualquer momento. Após o cancelamento, os dados serão mantidos por período determinado para fins legais e contábeis.</p>

          <h2>8. Alterações nos Termos</h2>
          <p>A ComandaTop pode atualizar este Termo de Uso a qualquer momento. As mudanças entrarão em vigor após a publicação no site ou comunicação direta ao cliente.</p>

          <h2>9. Contato</h2>
          <p>Em caso de dúvidas, entre em contato pelo e-mail:<br />
          <strong>contato@comandatop.com.br</strong></p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
