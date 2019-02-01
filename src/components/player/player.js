import React, { Component } from "react";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
import './player.css';
import silence from "../../assets/music/silence.mp3";
import coveri from "../../assets/albumArt/cover.jpg";

class AudioPlayer extends Component {
  render() {
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

export default AudioPlayer;
