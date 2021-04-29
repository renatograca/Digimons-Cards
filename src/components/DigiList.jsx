import { Component } from 'react';
import DigiCards from './DigiCards';

class DigiList extends Component{
  render(){
    const { digimon } = this.props;
    const { name, img } = digimon;
    return(
      <div className="digi-list" >
        <DigiCards img={img} name={name} />
      </div>
    )
  }
}

export default DigiList;
