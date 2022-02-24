import React from 'react';
import './style.css';
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

  render() {
    const { isSaveButtonDisabled } = this.state;
    return (
      <div>
        <h1 className="title">Tryunfo</h1>
        <Form
          value={ this.state }
          onInputChange={ this.handleChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
        />

        <Card
          { ...this.state }
        />
      </div>
    );
  }
}

export default App;
