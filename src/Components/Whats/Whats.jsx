import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

const Whats = () => {
  const phoneNumber = '47984862476';
  const message = 'Olá,%20gostaria%20de%20saber%20mais%20sobre%20como%20sua%20empresa%20pode%20me%20ajudar%20a%20criar%20um%20site%20personalizado.%20Podemos%20conversar%20sobre%20os%20detalhes%20e%20etapas%20do%20projeto?';

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contate-nos pelo WhatsApp"
      style={{
        position: 'fixed',
        width: '60px',
        height: '60px',
        bottom: '40px',
        right: '40px',
        backgroundColor: '#25d366',
        color: '#FFF',
        borderRadius: '50%',
        textAlign: 'center',
        fontSize: '30px',
        boxShadow: '1px 1px 2px #888',
        zIndex: 1000,
      }}
    >
      <i className="fa fa-whatsapp" style={{ marginTop: '16px' }} />
      <span style={{ display: 'none' }}>Contate-nos pelo WhatsApp</span>
    </a>
  );
};

export default Whats;
