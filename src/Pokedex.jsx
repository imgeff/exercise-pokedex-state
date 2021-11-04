import React from "react";
import Pokemons from './data';
import Pokemon from "./Pokemon";

class Pokedex extends React.Component {
  constructor() {
    super();
    this.state = {
      index: 0,
      pokemons: Pokemons
    }
    this.nextPoke = this.nextPoke.bind(this);
    this.typeFire = this.typeFire.bind(this);
    this.typePsychic = this.typePsychic.bind(this);
    this.typeEletric = this.typeEletric.bind(this);
    this.typeBug = this.typeBug.bind(this);
    this.typePoison = this.typePoison.bind(this);
    this.typeDragon = this.typeDragon.bind(this);
    this.typeNormal = this.typeNormal.bind(this);
  }
  nextPoke() {
    this.setState((estadoAnterior, _props) => ({
      index: estadoAnterior.index  + 1,
    }))
    const index = this.state.index
    const pokemons = this.state.pokemons
    if (index >= pokemons.length - 1 ) {
      this.setState({
        index: 0,
      });
    }
    console.log(index);
  }
  typeFire() {
    this.setState({
      index: 0,
      pokemons: Pokemons.filter((pokemon) => pokemon.type === 'Fire')
    });
    const index = this.state.index
    const pokemons = this.state.pokemons
    if (index >= pokemons.length -1) {
      this.setState({
        index: 0,
      });
    }
  }
  typePsychic() {
    this.setState({
      index: 0,
      pokemons: Pokemons.filter((pokemon) => pokemon.type === 'Psychic')
    });
    const index = this.state.index
    const pokemons = this.state.pokemons
    if (index >= pokemons.length -1) {
      this.setState({
        index: 0,
      });
    }
  }
  typeEletric() {
    this.setState({
      index: 0,
      pokemons: Pokemons.filter((pokemon) => pokemon.type === 'Electric')
    });
    const index = this.state.index
    const pokemons = this.state.pokemons
    if (index >= pokemons.length -1) {
      this.setState({
        index: 0,
      });
    }
  }
  typeBug() {
    this.setState({
      index: 0,
      pokemons: Pokemons.filter((pokemon) => pokemon.type === 'Bug')
    });
    const index = this.state.index
    const pokemons = this.state.pokemons
    if (index >= pokemons.length -1) {
      this.setState({
        index: 0,
      });
    }
  }
  typePoison() {
    this.setState({
      index: 0,
      pokemons: Pokemons.filter((pokemon) => pokemon.type === 'Poison')
    });
    const index = this.state.index
    const pokemons = this.state.pokemons
    if (index >= pokemons.length -1) {
      this.setState({
        index: 0,
      });
    }
  }
  typeDragon() {
    this.setState({
      index: 0,
      pokemons: Pokemons.filter((pokemon) => pokemon.type === 'Dragon')
    });
    const index = this.state.index
    const pokemons = this.state.pokemons
    if (index >= pokemons.length -1) {
      this.setState({
        index: 0,
      });
    }
  }
  typeNormal() {
    this.setState({
      index: 0,
      pokemons: Pokemons.filter((pokemon) => pokemon.type === 'Normal')
    });
    const index = this.state.index
    const pokemons = this.state.pokemons
    if (index >= pokemons.length -1) {
      this.setState({
        index: 0,
      });
    }
  }
  render() {
    return (
      <main>
        <section className= "section-title"> 
        <h1>Pokedex</h1>
        </section>
        <Pokemon key={this.state.pokemons[this.state.index.id]} pokemon={this.state.pokemons[this.state.index]}/>
        <section className= "section-buttons">
        <button onClick={this.typeFire}>Fire</button>
        <button onClick={this.typePsychic}>Psychic</button>
        <button onClick={this.typeEletric}>Eletric</button>
        <button onClick={this.typeBug}>Bug</button>
        <button onClick={this.typePoison}>Poison</button>
        <button onClick={this.typeDragon}>Dragon</button>
        <button onClick={this.typeNormal}>Normal</button>
        <button className="next-poke" onClick={this.nextPoke}>Próximo Pokemon</button>
        </section>
      </main>
    );
  }
}

export default Pokedex;