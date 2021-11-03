import React from "react";

class Pokemon extends React.Component {
  render() {

    const {name, type, averageWeight, image} = this.props.pokemon;

    return(
      <section className= 'pokemon-section'>
        <p className= 'pokemon-info'><b>Name:</b> {name}</p>
        <p className= 'pokemon-info'><b>Type:</b> {type}</p>
        <p className= 'pokemon-info'><b>Weight:</b> {`${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
        <img src={image} alt={name} className= 'pokemon-image'/>
      </section>
    );
  }
}


export default Pokemon;