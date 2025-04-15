
import translations from '../locales/pt-BR/common.json';

export const useTranslation = () => {
  const t = (path: string): string => {
    return path.split('.').reduce((obj, key) => obj?.[key as keyof typeof obj], translations as any) as string || path;
  };

  return { t };
};

