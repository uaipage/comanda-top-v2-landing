
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's no hash, scroll to top of the page
    if (!hash) {
      window.scrollTo(0, 0);
    } 
    // If there is a hash and we're on the home page, scroll to the element
    else {
      // Wait for the DOM to be fully updated
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
