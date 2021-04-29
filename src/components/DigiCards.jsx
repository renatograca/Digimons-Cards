import { Component } from 'react';
import PropTypes from 'prop-types';

class DigiCards extends Component{
  render(){
    const { name, img } = this.props;
    return(
      <div className="digi-card">
        <h4>{name}</h4>
        <img src={ img } alt="Digimon"/>
      </div>
    );
  };
}

DigiCards.defaultProps ={
  img: '',
};

DigiCards.propTypes = {
  img: PropTypes.string,
};

export default DigiCards;
