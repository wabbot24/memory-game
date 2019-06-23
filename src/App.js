import React, { Component } from "react";
import ImageCard from "./components/ImageCard/index";
import Wrapper from "./components/Wrapper/index";
import images from "./data.json";
import Navbar from "./components/navbar"

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    images,
    clickedArray: [],
    topScore: 0,
    score: 0,
    message: "Click an image to begin. Click all 12 with no duplicates to win!",
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
    this.setState({ shuffledImages });
  }

  checkScore = event => {
    let clickedId = event.target.id;

    let clicked = this.state.clickedArray;

    if (this.state.score > this.state.topScore) {
      this.setState({
        topScore: this.state.score
      })
    }
    if (clicked[0] === "") {
      this.setState({
        message: "That's one! Keep good track!"
      })
    }

    if (clicked.includes(clickedId)) {
      
      this.setState({
        score: 0,
        clickedArray: [],
        message: "That's a repeat Character! You're lucky I only included 12. try again!"
      })
    }
    else {
      this.state.clickedArray.push(clickedId);
      console.log(this.state.clickedArray);
      this.setState({
        clicked: this.state.clickedArray,
        score: this.state.score + 1,
        messsage: `Keep going! Only ${11-this.state.score} to go!`
      });
    }

    if (this.state.clickedArray.length === 10) {
      // alert("Congratulations on clicking each picture only once! Can you do it again?");
      this.setState({
        clickedArray: [],
        score: 0,
        message: "You know your Simpsons! But can you do it 662 times for each Simpsons episode?"
      });
    }
  }

  render() {
    return (
      <div>
        <Navbar>

        </Navbar>
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
