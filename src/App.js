import React from 'react';
import './style.css';
import PropTypes from 'prop-types';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: '',
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      SaveCards: [],
    };
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => this.activateButton());
  }

  activateButton = () => {
    const { cardName, cardDescription, cardImage, cardRare } = this.state;
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    let condition = false;

    if ((cardName === '') || (cardDescription === '')
      || (cardImage === '') || (cardRare === '')) {
      condition = true;
    }
    const n1 = 210;
    const n2 = 90;
    if ((Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3)) > n1) {
      condition = true;
    }

    if (cardAttr1 < 0 || cardAttr2 < 0 || cardAttr3 < 0) {
      condition = true;
    }

    if (cardAttr1 > n2 || cardAttr2 > n2 || cardAttr3 > n2) {
      condition = true;
    }
    this.setState({
      isSaveButtonDisabled: condition,
    });
  }

  saveButton = () => {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo } = this.state;

    const obj = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    this.setState((stateBefor) => ({
      hasTrunfo: cardTrunfo,
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      SaveCards: [
        ...stateBefor.SaveCards, obj,
      ],
    }));
  }

  render() {
    const { isSaveButtonDisabled } = this.state;
    return (
      <div>
        <h1 className="title">Tryunfo</h1>
        <Form
          { ...this.state }
          onInputChange={ this.handleChange }
          // hasTrunfo={ handleHastrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.saveButton }
        />

        <Card { ...this.state } />
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
};

export default App;
