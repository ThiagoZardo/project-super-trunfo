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
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      SaveCards: [],
      filterName: '',
      filterRare: 'todas',
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
      SaveCards: [
        ...stateBefor.SaveCards, obj,
      ],
      hasTrunfo: cardTrunfo,
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
    }));
  }

  deleteCard = ({ target }) => {
    const { SaveCards } = this.state;
    const newSaveCard = SaveCards.filter((element) => element.cardName !== target.value);
    this.setState({
      SaveCards: newSaveCard,
      hasTrunfo: false,
    });
  }

  filters = ({ target }) => {
    if (target.type === 'text') {
      this.setState({
        filterName: target.value,
      });
    } else {
      this.setState({
        filterRare: target.value,
      });
    }
  }

  render() {
    const { SaveCards, filterName, filterRare } = this.state;
    return (
      <div>
        <div className="container-principal">
          <div className="form-container">
            <h1 className="title">Tryunfo</h1>
            <Form
              { ...this.state }
              onInputChange={ this.handleChange }
              functionFilters={ this.filters }
              onSaveButtonClick={ this.saveButton }
            />
          </div>

          <div className="card-container">
            <Card { ...this.state } />
          </div>
        </div>
        <div className="Cartas Salvas">

          { SaveCards
            .filter((card) => card.cardName
              .includes(filterName))
            .filter((rare) => (filterRare === 'todas'
              ? true : rare.cardRare === filterRare))
            .map((card) => (
              <>
                <Card
                  key={ card.cardName }
                  { ...card }
                />
                <button
                  type="submit"
                  data-testid="delete-button"
                  onClick={ this.deleteCard }
                  value={ card.cardName }
                >
                  Excluir
                </button>
              </>
            )) }
        </div>
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
