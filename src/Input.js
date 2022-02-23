import React from 'react';

class Input extends React.Component {
  render() {
    return (
      <div className="inputs">
        <label htmlFor="name">
          Nome da Carta:
          <input
            name="name"
            type="text"
            data-testid="name-input"
          />
        </label>

        <label htmlFor="description">
          Descrição:
          <textarea name="description" type="text" data-testid="description-input" />
        </label>

        <label htmlFor="atributo-1">
          1º Atributo:
          <input name="atributo-1" type="number" data-testid="attr1-input" />
        </label>

        <label htmlFor="atributo-2">
          2º Atributo:
          <input name="atributo-2" type="number" data-testid="attr2-input" />
        </label>

        <label htmlFor="atributo-3">
          3º Atributo:
          <input name="atributo-3" type="number" data-testid="attr3-input" />
        </label>

        <label htmlFor="atributo-3">
          Imagem:
          <input name="atributo-3" type="text" data-testid="image-input" />
        </label>

        <label htmlFor="raridade">
          Imagem:
          <select name="raridade" type="text" data-testid="rare-input">
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>

        <label htmlFor="atributo-3">
          Super Trunfo:
          <input name="atributo-3" type="checkbox" data-testid="trunfo-input" />
        </label>
        <button type="submit" data-testid="save-button">Salvar</button>
      </div>
    );
  }
}

export default Input;
