import  { Component } from 'react';
import Api from './Api';
import DigiList from './components/DigiList';
import './style.css';
import Header from './components/Header'


class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      digimons: [],
      level:'',
    };
    this.filterTheDigimon = this.filterTheDigimon.bind(this)
  }
  
  async filterTheDigimon({target: {value}}){
    const response = await Api.get(`level/${value}`);
    this.setState({digimons: response.data})
  }

  async componentDidMount(){
    const response = await Api.get(this.state.level);
    this.setState({digimons: response.data})
    // console.log(response.data);
  }

  render(){
    const {digimons} = this.state;
    return(
      <div>
        <Header />        
        <form>
          <label htmlFor="level-digimon" >Level do Digimon </label>
          <select id="level-digimon" name="level-digimon" onChange={this.filterTheDigimon}>
            <option value="Selecione">Selecione o level do seu Digimon</option>
            <option value="In Training">In Training</option>
            <option value="Rookie">rookie</option>
            <option value="Champion">champion</option>
            <option value="Ultimate">ultimate</option>
            <option value="Fresh">fresh</option>
          </select>
        </form>
        <div className="body">
        {digimons.map((digimon) =><DigiList digimon={digimon} key={digimon.name} /> )}
        </div>
      </div>
    );
  };
}

export default App;
