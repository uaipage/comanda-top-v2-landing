
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import SEOProvider from "@/components/SEOProvider";

const NotFound = () => {
  useEffect(() => {
    console.error("404 Error: Page not found");
  }, []);

  return (
    <>
      <SEOProvider 
        title="Página não encontrada | ComandaTop"
        description="A página que você está procurando não foi encontrada."
      />
      <div className="min-h-screen flex flex-col items-center justify-center bg-light">
        <div className="text-center px-4">
          <h1 className="text-6xl font-bold text-primary mb-6">404</h1>
          <p className="text-2xl text-dark mb-8">Ops! Página não encontrada</p>
          <p className="text-gray-600 max-w-md mx-auto mb-8">
            A página que você está procurando pode ter sido removida, renomeada ou está temporariamente indisponível.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary-light">
            <a href="/">Voltar ao início</a>
          </Button>
        </div>
      </div>
    </>
  );
};

export default NotFound;
