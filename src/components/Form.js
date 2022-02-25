import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
      deletButton,
    } = this.props;

    return (
      <div className="inputs">
        <label htmlFor="cardName">
          Nome da Carta:
          <input
            name="cardName"
            type="text"
            data-testid="name-input"
            onChange={ onInputChange }
            value={ cardName }
          />
        </label>

        <label htmlFor="cardDescription">
          Descrição:
          <textarea
            name="cardDescription"
            type="text"
            data-testid="description-input"
            onChange={ onInputChange }
            value={ cardDescription }
          />
        </label>

        <label htmlFor="cardAttr1">
          1º Atributo:
          <input
            name="cardAttr1"
            type="number"
            data-testid="attr1-input"
            onChange={ onInputChange }
            value={ cardAttr1 }
          />
        </label>

        <label htmlFor="cardAttr2">
          2º Atributo:
          <input
            name="cardAttr2"
            type="number"
            data-testid="attr2-input"
            onChange={ onInputChange }
            value={ cardAttr2 }
          />
        </label>

        <label htmlFor="cardAttr3">
          3º Atributo:
          <input
            name="cardAttr3"
            type="number"
            data-testid="attr3-input"
            onChange={ onInputChange }
            value={ cardAttr3 }
          />
        </label>

        <label htmlFor="cardImage">
          Imagem:
          <input
            name="cardImage"
            type="text"
            data-testid="image-input"
            onChange={ onInputChange }
            value={ cardImage }
          />
        </label>

        <label htmlFor="cardRare">
          Raridade:
          <select
            name="cardRare"
            type="text"
            data-testid="rare-input"
            onChange={ onInputChange }
            value={ cardRare }
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>

        { hasTrunfo === false
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
          ) : 'Você já tem um Super Trunfo em seu baralho' }

        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>

        <button
          type="submit"
          data-testid="delete-button"
          onClick={ deletButton }
        >
          Excluir
        </button>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  deletButton: PropTypes.func.isRequired,
};

export default Form;
