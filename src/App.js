import React, { Component } from 'react';
import "./App.css";

import Card from "react-bootstrap/Card";
import Name from "./components/Name";
import Description from "./components/Description";
import Price from "./components/Price";
import Image from "./components/Image";

class App extends Component {
  // Initialisation de state dans le constructeur
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'John Doe',
        bio: 'Développeur web passionné par les nouvelles technologies.',
        imgSrc: 'https://via.placeholder.com/150',
        profession: 'Développeur Full Stack',
      },
      show: false, // Booléen pour afficher ou non le profil
      timeSinceMount: 0, // Temps écoulé depuis le montage du composant
    };
  }

  // Méthode du cycle de vie pour définir un intervalle après le montage
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        timeSinceMount: prevState.timeSinceMount + 1,
      }));
    }, 1000); // Incrémentation chaque seconde
  }

  // Méthode du cycle de vie pour nettoyer l'intervalle lorsque le composant est démonté
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  // Fonction pour basculer state d'affichage
  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    const { person, show, timeSinceMount } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleShow}>
          {show ? 'Masquer le profil' : 'Afficher le profil'}
        </button>
        {show && (
          <div>
            <h1>{person.fullName}</h1>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt="Profil" />
            <h2>{person.profession}</h2>
          </div>
        )}

        {/* Bouton pour basculer l'état d'affichage /}
        <button onClick={this.toggleShow}>
          {show ? 'Masquer le profil' : 'Afficher le profil'}
        </button>

        {/ Affichage conditionnel du profil /}
        {show && (
          <div>
            <h1>{person.fullName}</h1>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt="Profil" />
            <h2>{person.profession}</h2>
          </div>
        )}

        {/ Affichage de l'intervalle de temps depuis le montage */}
        <p>Temps écoulé depuis le montage : {timeSinceMount} secondes</p>
      </div>
    );
  }
}

export default App;