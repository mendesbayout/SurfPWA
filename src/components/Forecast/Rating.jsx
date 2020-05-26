import React, { Component } from 'react';
import styled from 'styled-components';

const RatingCard = styled.div`
  @media (max-width: 1010px) {
    margin-top: 3em;
  }
  li {
    list-style-type: none;
  }
  .stars {
    display: flex;
    justify-content: space-around;
    width: 50%;
  }
`;

class Rating extends Component {
  state = {
    ratings: []
  };

  render() {
    const { ratings } = this.props;
    return (
      <RatingCard className="card h-100">
        <div className="card-body">
          <h3 className="card-title">Surfabilidade do pico</h3>
          <div className="stars">
            {ratings.map((rating, i) => (
              <img src={rating} key={i} alt="Star Icon" />
            ))}
          </div>
        </div>
        <div className="card-footer text-muted">
          <ul className="list-group">
            <li>
              <strong>*Estrelas sólidas: </strong>Qualidade e poder do Swell positivo
            </li>
            <li>
              <strong>*Estrelas transparentes: </strong>Qualidade afetada pelo vento
            </li>
          </ul>
        </div>
      </RatingCard>
    );
  }
}

export default Rating;
