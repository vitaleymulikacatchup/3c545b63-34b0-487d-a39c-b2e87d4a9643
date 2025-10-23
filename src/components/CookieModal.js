import React from 'react';
import { X } from 'lucide-react';

const CookieModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="mb-6">
          <div className="flex items-center mb-4">
            <span className="text-2xl font-bold text-sinoptik-blue">s</span>
            <span className="text-2xl font-bold text-sinoptik-blue bg-sinoptik-blue text-white px-1 rounded">i</span>
            <span className="text-2xl font-bold text-sinoptik-blue">noptik</span>
          </div>
          
          <p className="text-lg font-medium text-sinoptik-text mb-4">
            "Sinoptik" просить вас надати згоду на використання ваших персональних даних, щоб надавати вам персоналізовані послуги.
          </p>
        </div>

        <div className="space-y-4 mb-6">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-sinoptik-blue rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-white text-xs">✓</span>
            </div>
            <div className="text-sm text-sinoptik-text">
              Персоналізоване оголошення й контент, вимірювання оголошення й контенту, дослідження аудиторії та розвиток послуг
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-sinoptik-blue rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-white text-xs">i</span>
            </div>
            <div className="text-sm text-sinoptik-text">
              Зберігати та/або отримувати доступ до інформації на пристрої
            </div>
          </div>
        </div>

        <div className="mb-6">
          <button className="text-sinoptik-blue text-sm hover:underline mb-2">
            Докладніше
          </button>
          
          <div className="text-xs text-sinoptik-light-text leading-relaxed">
            Постачальники зі специфікацією TCF (160) і рекламні партнери (721) можуть обробити ваші персональні дані, а також отримати доступ до інформації з пристрою, зокрема файлів cookie, унікальних ідентифікаторів пристрою і Інтернет-речей. Крім того, цей сайт може використовувати всі згадані ваші дані.
            
            <br /><br />
            
            Деякі постачальники можуть обробити ваші персональні дані на основі законного інтересу. Ви можете заборонити це, змінивши параметри за посиланням нижче або скориставшись сторінкою або в меню сайту в розділі "Налаштування конфіденційності" у файлах cookie.
          </div>
        </div>

        <div className="flex space-x-3">
          <button 
            onClick={onClose}
            className="btn-primary flex-1"
          >
            Налаштування
          </button>
          <button 
            onClick={onClose}
            className="btn-primary flex-1"
          >
            Погоджуюся
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieModal;