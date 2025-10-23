import React from 'react';

const WeatherGrid = () => {
  const cities = [
    { name: 'Погода Київ', temp: '+12°', condition: 'Суцільна хмарність', minMax: '+7°...+17°', icon: '🌧️' },
    { name: 'Погода Харків', temp: '+7°', condition: 'Невелика хмарність', minMax: '0°...+11°', icon: '🌤️' },
    { name: 'Погода Дніпро', temp: '+12°', condition: 'Невелика хмарність', minMax: '+1°...+16°', icon: '🌤️' },
    { name: 'Погода Одеса', temp: '+14°', condition: 'Суцільна хмарність', minMax: '+11°...+17°', icon: '🌧️' },
    { name: 'Погода Донецьк', temp: '+9°', condition: 'Мінлива хмарність', minMax: '+2°...+16°', icon: '⛅' },
    { name: 'Погода Запоріжжя', temp: '+13°', condition: 'Суцільна хмарність', minMax: '+5°...+17°', icon: '🌧️' },
    { name: 'Погода Львів', temp: '+15°', condition: 'Невелика хмарність', minMax: '+6°...+20°', icon: '🌤️' },
    { name: 'Погода Кривий Ріг', temp: '+13°', condition: 'Невелика хмарність', minMax: '+3°...+17°', icon: '🌤️' },
    { name: 'Погода Миколаїв', temp: '+12°', condition: 'Ясно', minMax: '+5°...+18°', icon: '☀️' },
    { name: 'Погода Маріуполь', temp: '+11°', condition: 'Суцільна хмарність', minMax: '+5°...+17°', icon: '🌧️' },
    { name: 'Погода Луганськ', temp: '+7°', condition: 'Ясно', minMax: '-1°...+14°', icon: '☀️' },
    { name: 'Погода Макіївка', temp: '+9°', condition: 'Мінлива хмарність', minMax: '+2°...+16°', icon: '⛅' },
    { name: 'Погода Севастополь', temp: '+14°', condition: 'Ясно', minMax: '+8°...+20°', icon: '☀️' },
    { name: 'Погода Вінниця', temp: '+13°', condition: 'Ясно', minMax: '+6°...+18°', icon: '☀️' },
    { name: 'Погода Сімферополь', temp: '+12°', condition: 'Невелика хмарність', minMax: '+8°...+22°', icon: '🌤️' },
    { name: 'Погода Херсон', temp: '+14°', condition: 'Ясно', minMax: '+5°...+19°', icon: '☀️' },
    { name: 'Погода Полтава', temp: '+10°', condition: 'Ясно', minMax: '+4°...+14°', icon: '☀️' },
    { name: 'Погода Чернігів', temp: '+11°', condition: 'Суцільна хмарність', minMax: '+6°...+15°', icon: '🌧️' },
    { name: 'Погода Черкаси', temp: '+11°', condition: 'Ясно', minMax: '+7°...+14°', icon: '☀️' },
    { name: 'Погода Суми', temp: '+7°', condition: 'Хмарно з проясненнями', minMax: '+1°...+13°', icon: '⛅' },
    { name: 'Погода Горлівка', temp: '+8°', condition: 'Невелика хмарність', minMax: '+2°...+15°', icon: '🌤️' },
    { name: 'Погода Житомир', temp: '+12°', condition: 'Невелика хмарність', minMax: '+6°...+17°', icon: '🌤️' },
    { name: 'Погода Кам\'янське', temp: '+11°', condition: 'Ясно', minMax: '+5°...+16°', icon: '☀️' },
    { name: 'Погода Хмельницький', temp: '+12°', condition: 'Ясно', minMax: '+6°...+16°', icon: '☀️' },
    { name: 'Погода Кропивницький', temp: '+11°', condition: 'Ясно', minMax: '+5°...+15°', icon: '☀️' },
    { name: 'Погода Рівне', temp: '+13°', condition: 'Суцільна хмарність', minMax: '+4°...+17°', icon: '🌧️' },
    { name: 'Погода Чернівці', temp: '+13°', condition: 'Ясно', minMax: '+4°...+18°', icon: '☀️' },
    { name: 'Погода Кременчук', temp: '+11°', condition: 'Ясно', minMax: '+6°...+16°', icon: '☀️' },
    { name: 'Погода Тернопіль', temp: '+13°', condition: 'Невелика хмарність', minMax: '+7°...+17°', icon: '🌤️' },
    { name: 'Погода Івано-Франківськ', temp: '+15°', condition: 'Хмарно з проясненнями', minMax: '+3°...+22°', icon: '⛅' },
    { name: 'Погода Луцьк', temp: '+14°', condition: 'Невелика хмарність', minMax: '+4°...+19°', icon: '🌤️' },
    { name: 'Погода Біла Церква', temp: '+13°', condition: 'Суцільна хмарність', minMax: '+7°...+15°', icon: '🌧️' },
    { name: 'Погода Краматорськ', temp: '+8°', condition: 'Ясно', minMax: '+2°...+16°', icon: '☀️' },
    { name: 'Погода Мелітополь', temp: '+12°', condition: 'Суцільна хмарність', minMax: '+5°...+17°', icon: '🌧️' },
    { name: 'Погода Керч', temp: '+13°', condition: 'Ясно', minMax: '+10°...+19°', icon: '☀️' },
    { name: 'Погода Нікополь', temp: '+14°', condition: 'Суцільна хмарність', minMax: '+3°...+17°', icon: '🌧️' }
  ];

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-sinoptik-text mb-4">Погода в інших населених пунктах України</h2>
      
      <div className="weather-grid">
        {cities.map((city, index) => (
          <div key={index} className="weather-card hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="city-link font-medium mb-1">{city.name}</h3>
                <p className="text-xs text-sinoptik-light-text mb-2">{city.condition}</p>
                <p className="text-xs text-sinoptik-light-text">{city.minMax}</p>
              </div>
              <div className="text-right">
                <div className="text-2xl mb-1">{city.icon}</div>
                <div className="temperature text-sinoptik-text">{city.temp}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherGrid;