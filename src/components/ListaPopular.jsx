import React from 'react';

export const ListaPopular = ({ juegos = [] }) => {
  return (
    <div className="container-fluid p-4">
      <div className="d-flex flex-row gap-4 overflow-auto pb-2">
        {juegos.map((juego) => (
          <div key={juego.id} className="d-flex flex-column align-items-center flex-shrink-0">
            <img
              src={juego.imagen}
              alt={juego.titulo}
              className="border border-2 rounded-3"
              style={{ height: '145px', width: '240px', objectFit: 'cover' }}
            />
            <div className="py-2">
              <p className="text-white fw-bold mb-0 text-center">
                {juego.titulo}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};