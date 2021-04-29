import  { Component } from 'react';
import Api from './Api';
import DigiList from './components/DigiList';
import './style.css';
import Header from './components/Header'


class App extends Component{

  state = {
    digimons: [],
  };

  async componentDidMount(){
    const response = await Api.get('');
    console.log(response.data);
    this.setState({digimons: response.data})
  }

  render(){
    const {digimons} = this.state;
    return(
      <div>
        <Header />        
        <div className="body">
        {digimons.map((digimon) =><DigiList digimon={digimon} key={digimon.name} /> )}
        </div>
      </div>
    );
  };
}

export default App;
