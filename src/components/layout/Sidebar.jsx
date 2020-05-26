import React from 'react';
import logo from '../../img/logo.png';
import { Link } from 'react-router-dom';

const Sidebar = _ => {
  return (
    <nav id="sidebar" className="bg-dark">
    
     
      <ul className="list-unstyled components">
        <p
          style={{
            color: '#2fbc1a',
            fontFamily: 'Shadows Into Light',
            fontSize: '1.7em',
            backgroundColor: 'rgba(0, 0, 0, 0.7)'
          }}
        >
          Fique sabendo antes de ir, Swell subiu crowd sumiu !
        </p>
        <li>
          <Link to="/">Atualizar</Link>
        </li>
        <li>
          <Link to="/">Fotos</Link>
        </li>
        <li>
          <Link to="/">Condição no secret</Link>
        </li>
      </ul>
      <a className="msw-logo" href="http://magicseaweed.com">
        <img
          style={{ borderRadius: '5px', position:  'top' }}
          src="https://im-1-uk.msw.ms/msw_powered_by.png"
          alt="Magicseaweed Credit Badge"
          
        />
      </a>
        </nav>
  );
};

export default Sidebar;
