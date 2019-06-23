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
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // swap elements
    }
    return array;
  }

  shuffleImages = event => {
    console.log('in shuffleImages');
    let id = parseInt(event.target.id);
    let shuffledImages = this.shuffle(this.state.images);
    this.setState({ shuffledImages }
      //, this.checkScore(id)
    );
  }

  checkScore = clickedId => {
    console.log(clickedId);

    let clicked = this.state.clickedArray;

    if (this.state.score > this.state.topScore) {
      this.setState({
        topScore: this.state.score
      })
    }

    if (clicked.includes(clickedId)) {
      alert("Try again!");
      this.setState({
        sscore: 0,
        clickedArray: []
      })
    }
    else {
      this.state.clickedArray.push(clickedId);
      this.setState({
        clicked: this.state.clickedArray,
        score: this.state.score + 1
      });
    }

    if (this.state.clickedArray.length === 10) {
      alert("Congratulations on clicking each picture only once! Can you do it again?");
      this.setState({
        clickedArray: [],
        score: 0
      });
    }
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <Wrapper>
          {this.state.images.map(pic => (
            <ImageCard
              shuffleImages={this.shuffleImages}
              checkScore={this.checkScore}
              id={pic.id}
              key={pic.id}
              name={pic.name}
              image={pic.image}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
