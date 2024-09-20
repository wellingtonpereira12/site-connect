import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
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
        <button
          onClick={scrollToTop}
          style={ScrollToTopstyles.button}
        >
          ↑ Topo
        </button>
      )}
    </div>
  );
};

const ScrollToTopstyles = {
  button: {
    left: '20px',  // Altera para o lado esquerdo
    border: 'none',
    borderRadius: '50%',
    position:'fixed',
    width: '60px',
    height: '60px',
    bottom: '40px',
    right: '40px',
    backgroundColor: '#000000',
    color: '#fff',
    borderradius: '50px',
    textalign: 'center',
    fontsize: '30px',
    boxshadow: '1px 1px 2px #888',
  },
};

export default ScrollToTop;
