import React from 'react';
import { Search, Settings } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white border-b border-sinoptik-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-sinoptik-blue">s</span>
              <span className="text-2xl font-bold text-sinoptik-blue bg-sinoptik-blue text-white px-1 rounded">i</span>
              <span className="text-2xl font-bold text-sinoptik-blue">noptik</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Назва населеного пункту, країни або регіону"
                className="w-80 px-4 py-2 border border-sinoptik-border rounded-md text-sm focus:outline-none focus:border-sinoptik-blue"
              />
              <Search className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" />
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-sinoptik-light-text">
              <span>Налаштування</span>
              <Settings className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;