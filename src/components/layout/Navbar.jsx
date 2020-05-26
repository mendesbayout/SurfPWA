import React, { Component } from 'react';
import styled from 'styled-components';

const Nav = styled.div`
  padding: 15px 10px;
  border-radius: 10px;
  margin-bottom: 40px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #353535;
  h1 {
    flex: 5;
    justify-self: center;
    color: #999;
    font-size: 2.5em;
    position: relative;
    text-align: right;
    padding-right: 2em;
    font-family: 'Shadows Into Light', 'cursive';
  }
  div {
    flex: 3;
  }
  #sidebarCollapse {
    background: #2fbc1a;
    border: none;
    margin-left: 1em;
  }
  @media (max-width: 600px) {
    h1 {
      font-size: 1.5em;
    }
    div {
      width: 100%;
      flex: 2;
    }
  }
`;

class Navbar extends Component {
  componentDidMount() {
    const sideBar = document.querySelector('#sidebar');
    const windowWidth = window.innerWidth;
    const title = document.querySelector('#title');
    window.addEventListener('resize', () => {
      if (windowWidth < 770) {
        if (sideBar.classList.contains('active')) {
          title.classList.add('active');
        } else {
          title.classList.remove('active');
        }
      }
    });
  }
  onToggleClick = () => {
    const sideBar = document.querySelector('#sidebar');
    sideBar.classList.toggle('active');
    const windowWidth = window.innerWidth;
    const title = document.querySelector('#title');
    if (windowWidth < 770) {
      if (sideBar.classList.contains('active')) {
        title.classList.add('active');
      } else {
        title.classList.remove('active');
      }
    }
  };

  render() {
    return (
      <Nav className="Navbar navbar-expand-lg navbar-light">
        <button
          type="button"
          id="sidebarCollapse"
          className="btn btn-info"
          onClick={this.onToggleClick}
        >
         
          <span>Menu</span>
        </button>
        <div className="">
          <h1 id="title" className="ml-5">
            Condição de surf praia do pecado
          </h1>
        </div>
      </Nav>
    );
  }
}

export default Navbar;
