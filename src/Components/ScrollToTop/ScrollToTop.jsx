import React, { useState, useEffect } from 'react';
import 'font-awesome/css/font-awesome.min.css';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300 && window.pageYOffset  < 3300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div>
      {isVisible && (
        <a
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            width: '60px',
            height: '60px',
            bottom: '40px',
            left: '40px', // Posiciona no lado esquerdo
            backgroundColor: '#000000',
            color: '#FFF',
            borderRadius: '50%',
            textAlign: 'center',
            fontSize: '30px',
            boxShadow: '1px 1px 2px #888',
            zIndex: 1000,
            cursor: 'pointer',
          }}
        >
          <i className="fa fa-arrow-up" style={{ marginTop: '16px' }} />
        </a>
      )}
    </div>
  );
};

export default ScrollToTop;
