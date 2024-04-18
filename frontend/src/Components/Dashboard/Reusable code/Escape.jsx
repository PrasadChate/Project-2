import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Escape = () => {

    const navigate = useNavigate();

  useEffect(() => {
    const handleEscapeKeyPress = (event) => {
      if (event.key === 'Escape') {
        const lastVisitedPage = '/admin/dashboard';
        console.log('escape key pressed');
        console.log('Last visited', lastVisitedPage);
        if (lastVisitedPage) {
          navigate(lastVisitedPage);
        } else {
          navigate('/admin/dashboard'); // Default page if no last visited page
        }
      }
    };

    document.addEventListener('keydown', handleEscapeKeyPress);

    return () => {
      document.removeEventListener('keydown', handleEscapeKeyPress);
    };
  }, [navigate]);
};

export default Escape