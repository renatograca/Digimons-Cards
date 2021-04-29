import { Component } from 'react';
import DigiCards from './DigiCards';
import Header from './Header';

class DigiList extends Component{
  render(){
    <Header />
    const { digimon } = this.props;
    const { name, img, level } = digimon;
    return(      
      <div className="digi-list" >
        <DigiCards img={img} name={name} level={level} />
      </div>
    )
  }
}

export default DigiList;
