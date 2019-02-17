import React, { Component } from "react";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
import "./player.css";
import coveri from "../../assets/albumArt/cover.jpg";
import silence from "../../assets/music/silence.mp3";
import celebration from "../../assets/music/celebration.mp3";
import aroundYou from "../../assets/music/aroundYou.mp3";
import chasingMe from "../../assets/music/chasingMe.mp3";
import cosmicWay from "../../assets/music/cosmicWay.mp3";
import freeYourself from "../../assets/music/freeYourself.mp3";
import loveEachOther from "../../assets/music/loveEachOther.mp3";
import monkey from "../../assets/music/monkey.mp3";
import splitting from "../../assets/music/splitting.mp3";
import strangers from "../../assets/music/strangers.mp3";
import toBeMyself from "../../assets/music/toBeMyself.mp3";
import treatMeLikeAChild from "../../assets/music/treatMeLikeAChild.mp3";
import gravity from "../../assets/music/gravity.mp3";
import distantShore from "../../assets/music/distantShore.mp3";


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
          name: "Silence",
          musicSrc: silence,
          cover: coveri
        },
        {
          singer: "Blue Cat",
          name: "Celebration",
          musicSrc: celebration,
          cover: coveri
        },
        {
          singer: "Blue Cat",
          name: "Around You",
          musicSrc: aroundYou,
          cover: coveri
        },
        {
          singer: "Blue Cat",
          name: "Chasing Me",
          musicSrc: chasingMe,
          cover: coveri
        },
        {
          singer: "Blue Cat",
          name: "Cosmic Way",
          musicSrc: cosmicWay,
          cover: coveri
        },
        {
          singer: "Blue Cat",
          name: "Free Yourself",
          musicSrc: freeYourself,
          cover: coveri
        },
        {
          singer: "Blue Cat",
          name: "Gravity",
          musicSrc: gravity,
          cover: coveri
        },
        {
          singer: "Blue Cat",
          name: "Love Each Other",
          musicSrc: loveEachOther,
          cover: coveri
        },
        {
          singer: "Blue Cat",
          name: "Monkey",
          musicSrc: monkey,
          cover: coveri
        },
        {
          singer: "Blue Cat",
          name: "Splitting",
          musicSrc: splitting,
          cover: coveri
        },
        {
          singer: "Blue Cat",
          name: "Strangers",
          musicSrc: strangers,
          cover: coveri
        },
        {
          singer: "Blue Cat",
          name: "To Be Myself",
          musicSrc: toBeMyself,
          cover: coveri
        },
        {
          singer: "Blue Cat",
          name: "Treat Me Like A Child",
          musicSrc: treatMeLikeAChild,
          cover: coveri
        },
        {
          singer: "Blue Cat",
          name: "უცხო ნაპირი",
          musicSrc: distantShore,
          cover: coveri
        }

      ]
    };

    if (isMobile) {
      return (<div className="zet">
        {" "}
        <ReactJkMusicPlayer
          audioLists={options.audioLists}
          autoPlay={false}
          mode={"mini"}
          bounds={100}
          defaultPosition={{ bottom: 0, right: 0 }}
        />
      </div>)


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
