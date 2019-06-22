import React, { Component } from "react";
import ImageCard from "./components/ImageCard/index";
import Wrapper from "./components/Wrapper/index";
import images from "./data.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    images,
    clickedArray: [],
    topScore: 0,
    score: 0,
    message: "",
    shuffle: "false"
  };

  shuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      [array[i], array[j]] = [array[j], array[i]]; // swap elements
    }
    return array;
  }

  shuffleImages = event => {
    let id = parseInt(event.target.id);
    let shuffledImages = this.shuffle(this.state.images);
    this.setState({ shuffledImages }
      //, this.checkScore(id)
      );
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        {this.state.images.map(pic => (
          <ImageCard
            shuffle={this.shuffle}
            id={pic.id}
            key={pic.id}
            image={pic.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
