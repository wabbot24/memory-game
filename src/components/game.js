import Data from "../data.json"
// have this data in the state function
import React, { Component } from "react"

// import Navbar from "./navbar"
import Wrapper from "./wrapper"

class Game extends Component {

    state = {
        Data,
        clickedArray: [],
        topScore: 0,
        score: 0,
        message: "",
        shakeit: "false"
    };
    componentDidMount() {
        console.log('GrandChild did mount.');
    }



    render() {
        return (
            <Wrapper />
        )
    }

}

// import images from ./image-components/all-the-images

// send props to navbar, which then sends props to click-result

// use componentDidMount() to do the setState() that shuffles all the images
//   - this is attached to the class syntax and does not need to be called

// onclick event will set state

//i'm changing this to see if that makes a difference

export default Game


// <div className="photo">
//                     <img alt="apu" className="photo" id="apu" src="../images/apu.png"></img>
//                 </div>
/* <div className="photo">
                    <img alt="apu" className="photo" id="apu" src="../images/apu.png"></img>
                </div> */
/* <div className="photo">
                    <img alt="aunt" id="aunt" src="../images/aunt.png"></img>
                </div>


                <img alt="bart" className="photo" id="bart" src="../images/bart.png"></img>
                <img alt="burns" className="photo" id="burns" src="../images/burns.png"></img>
                <img alt="flanders" className="photo" id="flanders" src="../images/flanders.png"></img>
                <img alt="homer" className="photo" id="homer" src="../images/homer.png"></img>
                <img alt="krusty" className="photo" id="krusty" src="../images/krusty.png"></img>
                <img alt="lisa" className="photo" id="lisa" src="../images/lisa.png"></img>
                <img alt="maggie" className="photo" id="maggie" src="../images/maggie.png"></img>
                <img alt="marge" className="photo" id="marge" src="../images/marge.png"></img>
                <img alt="milhouse" className="photo" id="milhouse" src="../images/milhouse.png"></img>
                <img alt="moe" className="photo" id="moe" src="../images/moe.png"></img> */