import React from 'react';
import { Info } from 'lucide-react';

const WeatherInformer = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-sinoptik-border p-6 mb-6">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-gradient-to-r from-sinoptik-orange to-sinoptik-yellow rounded-full flex items-center justify-center">
            <Info className="w-6 h-6 text-white" />
          </div>
        </div>
        
        <div className="flex-1">
          <h3 className="text-lg font-bold text-sinoptik-text mb-2">Погодний інформер</h3>
          <p className="text-sm text-sinoptik-light-text mb-4">
            Бажаєте, щоб на вашому сайті показувалася погода?
          </p>
          
          <button className="btn-primary text-sm">
            Налаштувати інформер
          </button>
        </div>
      </div>
    </div>
  );
};

export default WeatherInformer;