import React, { Component } from "react";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
import "./player.css";
import silence from "../../assets/music/silence.mp3";
import coveri from "../../assets/albumArt/cover.jpg";

class AudioPlayer extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth
    };
  }

  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 500;
    const options = {
      //audio lists model
      audioLists: [
        {
          singer: "Blue Cat",
          cover: "xx.jpg",
          name: "silence",
          musicSrc: silence,
          cover: coveri
        }
      ]
    };

    if (isMobile) {
      return (
        <div className="zet">
          {" "}
          <ReactJkMusicPlayer
            audioLists={options.audioLists}
            autoPlay={false}
            mode={"mini"}
            bounds={100}
            defaultPosition={{ bottom: 0, right: 0 }}
          />
        </div>
      );
    } else {
      return (
        <div className="zet">
          {" "}
          <ReactJkMusicPlayer
            audioLists={options.audioLists}
            bounds={100}
            autoPlay={false}
            mode={"full"}
            defaultPosition={{ bottom: 40, right: 40 }}
          />
        </div>
      );
    }
  }
}

export default AudioPlayer;
