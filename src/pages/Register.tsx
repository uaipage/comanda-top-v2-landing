
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslation } from "@/hooks/use-translation";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOProvider from "@/components/SEOProvider";
import seoConfig from "@/config/seo.config";
import { ArrowRight } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const registerFormSchema = z.object({
  restaurantName: z.string().min(2, "Campo obrigatório"),
  name: z.string().min(2, "Campo obrigatório"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(10, "Telefone inválido"),
});

type RegisterFormValues = z.infer<typeof registerFormSchema>;

const Register = () => {
  const { t } = useTranslation();
  
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      restaurantName: "",
      name: "",
      email: "",
      phone: ""
    },
  });

  const onSubmit = async (values: RegisterFormValues) => {
    console.log("Form values:", values);
    // Here you would typically send the form data to your backend
    
    toast({
      title: t('register.success-title'),
      description: t('register.success-message'),
    });
  };

  return (
    <>
      <SEOProvider 
        title={t('register.seo.title')}
        description={t('register.seo.description')} 
        keywords={t('register.seo.keywords')}
      />
      <Header />
      <main className="container-section min-h-[calc(100vh-200px)] py-10 md:py-16 animate-fade-in">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6 md:p-8">
          <div className="mb-8 text-center">
            <h1 className="text-2xl md:text-3xl font-bold text-dark mb-2">{t('register.title')}</h1>
            <p className="text-gray-600">{t('register.subtitle')}</p>
          </div>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="restaurantName"
                render={({ field }) => (
                  <FormItem className="animate-slide-up animate-delay-100">
                    <FormLabel>{t('register.form.restaurant-name')}</FormLabel>
                    <FormControl>
                      <Input placeholder={t('register.form.restaurant-name-placeholder')} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="animate-slide-up animate-delay-200">
                    <FormLabel>{t('register.form.your-name')}</FormLabel>
                    <FormControl>
                      <Input placeholder={t('register.form.your-name-placeholder')} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="animate-slide-up animate-delay-300">
                    <FormLabel>{t('register.form.email')}</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder={t('register.form.email-placeholder')} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="animate-slide-up animate-delay-400">
                    <FormLabel>{t('register.form.phone')}</FormLabel>
                    <FormControl>
                      <Input placeholder={t('register.form.phone-placeholder')} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                className="w-full animate-slide-up animate-delay-500 bg-primary hover:bg-primary-dark"
              >
                {t('register.form.submit')} <ArrowRight className="ml-2" size={18} />
              </Button>
            </form>
          </Form>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Register;
