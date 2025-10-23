import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-sinoptik-border mt-8">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center space-y-2">
          <p className="text-xs text-sinoptik-light-text">
            Усі права належать © 2010-2025 sinoptik.ua. Партнер проекту: FORECA
          </p>
          <div className="flex justify-center space-x-4 text-xs">
            <a href="#" className="city-link">Угода користувача</a>
            <a href="#" className="city-link">Угода про конфіденційність</a>
            <a href="#" className="city-link">Написати нам</a>
            <a href="#" className="city-link">Реклама</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;