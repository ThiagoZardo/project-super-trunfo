import React from 'react';

class HasTrunfo extends React.Component {
  render() {
    const hasTrunfo = false;
    return (
      hasTrunfo === true
        ? (
          <label htmlFor="cardTrunfo">
            Super Trunfo:
            <input
              name="cardTrunfo"
              type="checkbox"
              data-testid="trunfo-input"
              onChange={ onInputChange }
              checked={ cardTrunfo }
            />
          </label>
        ) : 'Você já tem um Super Trunfo em seu baralho'
    );
  }
}

export default HasTrunfo;
