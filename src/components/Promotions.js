import React from 'react';
import './Promotions.css';

const promotions = [
  // Individual packages
  {
    title: 'Piloto Novato',
    items: [
      '10 min en modo tiempo (Sencillo) - $180',
      '3 vueltas en modo carrera (Sencillo) - $120'
    ],
    special: 'Precio especial: $270 (en lugar de $300)'
  },
  {
    title: 'Piloto Avanzado',
    items: [
      '15 min en modo tiempo (Pro) - $250',
      '5 vueltas en modo carrera (Pro) - $200'
    ],
    special: 'Precio especial: $500 (en lugar de $550)'
  },
  {
    title: 'Gran Prix',
    items: [
      '25% de distancia en carrera (Pro) - $350',
      'Calificación incluida - $50'
    ],
    special: 'Precio especial: $380 (en lugar de $400)'
  },
  // Group packages
  {
    title: 'Duelos de Rivales (2 personas)',
    items: [
      '3 vueltas en modo carrera (multijugador, Sencillo) - $120 x 2'
    ],
    special: 'Precio especial: $220 por los dos (en lugar de $240)'
  },
  {
    title: 'Escudería en Batalla (3 personas)',
    items: [
      '5 vueltas en modo carrera (multijugador, Pro) - $260',
      '5 vueltas en modo carrera (multijugador, 2 Sencillo) - $200 x 2'
    ],
    special: 'Precio especial: $580 por los tres (en lugar de $660)'
  },
  {
    title: 'Gran Premio de Amigos (3 personas)',
    items: [
      '25% de distancia en carrera (multijugador, 1 Pro) - $350',
      '25% de distancia en carrera (multijugador, 2 sencillo) - $280 x 2'
    ],
    special: 'Precio especial: $850 por todos (en lugar de $910)'
  },
  // Special promotions
  {
    title: 'Hora Feliz',
    items: [
      '2x1 en sesiones de 5 min en modo tiempo (Sencillo)',
      'Válido de lunes a jueves, de 2:00 p.m. a 5:00 p.m.'
    ],
    special: ''
  },
  {
    title: 'Desafío del Día',
    items: [
      'Si logras el mejor tiempo del día en modo tiempo (Pro, 10 min)',
      'Ganas una sesión extra de 5 min gratis'
    ],
    special: ''
  },
  {
    title: 'Mini Torneo Carrera (n personas)',
    items: [
      'Simuladores sencillos en modo carrera de 3 vueltas',
      'Eliminatorias progresivas hasta tener un ganador',
      'Precio por persona: $160'
    ],
    special: 'Precio especial: $130 por persona (mínimo 4 participantes)',
    details: [
      'Reglas del torneo:',
      '1. Carreras de 3 vueltas en modo sencillo',
      '2. Los 2 primeros de cada carrera avanzan',
      '3. En caso de empate, se considera el mejor tiempo',
      '4. El ganador recibe un beso de una chica guapa'
    ]
  }
];

const Promotions = () => {
  const [showDetails, setShowDetails] = React.useState({});

  const toggleDetails = (index) => {
    setShowDetails(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="promotions-container">
      {promotions.map((promo, index) => (
        <div key={index} className="promotion-card">
          <h3>{promo.title}</h3>
          <ul>
            {promo.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          {promo.special && <div className="special-price">{promo.special}</div>}
          {promo.details && (
            <div>
              <button 
                className="details-button"
                onClick={() => toggleDetails(index)}
              >
                {showDetails[index] ? 'Ocultar detalles' : 'Ver detalles y reglas'}
              </button>
              {showDetails[index] && (
                <ul className="details-list">
                  {promo.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Promotions;