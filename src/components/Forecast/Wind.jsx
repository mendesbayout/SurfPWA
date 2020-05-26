import React from 'react';

const Wind = ({ speed, direction, compassDirection }) => {
  return (
    <div className="card ">
      <div className="card-body">
        <h3 className="card-title">Direção e intensidade do vento</h3>
        <div className="d-flex justify-content-between">
          <div className={`msw-swa msw-ssa msw-ssa-${direction}`} />
          <h4 className="text-muted">{speed} Mph</h4>
          <h4 className="text-muted">{compassDirection}</h4>
        </div>
      </div>
    </div>
  );
};

export default Wind;
