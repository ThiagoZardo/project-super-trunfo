import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <div className="cards-salve">
        <div
          data-testid="name-card"
          className="name-card"
        >
          { cardName }
        </div>

        <img
          data-testid="image-card"
          className="image-card"
          src={ cardImage }
          alt={ cardName }
        />

        <div
          data-testid="description-card"
          className="description-card"
        >
          { cardDescription }
        </div>

        <div
          data-testid="attr1-card"
          className="attr-card"
        >
          Força:
          {' '}
          { cardAttr1 }
        </div>

        <div
          data-testid="attr2-card"
          className="attr-card"
        >
          Velocidade:
          {' '}
          { cardAttr2 }
        </div>

        <div
          data-testid="attr3-card"
          className="attr-card"
        >
          Destreza:
          {' '}
          { cardAttr3 }
        </div>

        <div
          data-testid="rare-card"
          className="rare-card"
        >
          Raridade:
          {' '}
          { cardRare }
        </div>

        {(cardTrunfo === true ? <div data-testid="trunfo-card">Super Trunfo</div> : '')}
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
