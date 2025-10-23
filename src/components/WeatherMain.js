import React from 'react';
import { Clock } from 'lucide-react';

const WeatherMain = () => {
  const weekDays = [
    { day: 'Четвер', date: '23', month: 'жовтня', temp: '+10°+12°', icon: '🌧️' },
    { day: "П'ятниця", date: '24', month: 'жовтня', temp: '+10°+11°', icon: '🌧️' },
    { day: 'Субота', date: '25', month: 'жовтня', temp: '+9°+11°', icon: '🌧️' },
    { day: 'Неділя', date: '26', month: 'жовтня', temp: '+6°+10°', icon: '🌤️' },
    { day: 'Понеділок', date: '27', month: 'жовтня', temp: '+5°+10°', icon: '🌤️' },
    { day: 'Вівторок', date: '28', month: 'жовтня', temp: '+5°+8°', icon: '🌧️' },
    { day: 'Середа', date: '29', month: 'жовтня', temp: '+4°+7°', icon: '🌧️' }
  ];

  const hourlyForecast = [
    { time: '0:00', temp: '10°', icon: '🌧️' },
    { time: '3:00', temp: '9°', icon: '🌧️' },
    { time: '6:00', temp: '8°', icon: '🌧️' },
    { time: '9:00', temp: '10°', icon: '🌧️' },
    { time: '12:00', temp: '12°', icon: '🌧️' },
    { time: '15:00', temp: '11°', icon: '🌧️' },
    { time: '18:00', temp: '10°', icon: '🌧️' },
    { time: '21:00', temp: '9°', icon: '🌧️' }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-sinoptik-border mb-6">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-sinoptik-text mb-1">Погода у Стокгольмі</h1>
            <p className="text-sinoptik-light-text">Стокгольм, Швеція</p>
          </div>
        </div>

        {/* Week forecast */}
        <div className="week-forecast mb-6">
          {weekDays.map((day, index) => (
            <div key={index} className={`text-center p-3 rounded ${index === 0 ? 'bg-sinoptik-blue text-white' : 'hover:bg-gray-50'}`}>
              <div className="text-xs mb-1">{day.day}</div>
              <div className="text-lg font-bold mb-1">{day.date}</div>
              <div className="text-xs mb-2">{day.month}</div>
              <div className="text-2xl mb-2">{day.icon}</div>
              <div className="text-xs font-medium">{day.temp}</div>
            </div>
          ))}
        </div>

        {/* Current weather details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="text-sm text-sinoptik-light-text mb-2">Стокгольм, 18:00</div>
            
            <div className="flex items-center space-x-4">
              <div className="text-4xl">🌧️</div>
              <div>
                <div className="text-4xl font-bold text-sinoptik-text">+11°C</div>
                <div className="text-sm text-sinoptik-light-text">Відчувається як +9°</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-sinoptik-light-text">Схід</div>
                <div className="font-medium">07:45</div>
              </div>
              <div>
                <div className="text-sinoptik-light-text">Захід</div>
                <div className="font-medium">17:39</div>
              </div>
              <div>
                <div className="text-sinoptik-light-text">Вологість</div>
                <div className="font-medium">87%</div>
              </div>
              <div>
                <div className="text-sinoptik-light-text">Тиск, мм</div>
                <div className="font-medium">758</div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Clock className="w-4 h-4 text-sinoptik-light-text" />
              <span className="text-sm text-sinoptik-light-text">Погода по годинах</span>
            </div>
            
            <div className="grid grid-cols-4 gap-2">
              {hourlyForecast.map((hour, index) => (
                <div key={index} className="text-center p-2 hover:bg-gray-50 rounded">
                  <div className="text-xs text-sinoptik-light-text mb-1">{hour.time}</div>
                  <div className="text-lg mb-1">{hour.icon}</div>
                  <div className="text-sm font-medium">{hour.temp}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherMain;