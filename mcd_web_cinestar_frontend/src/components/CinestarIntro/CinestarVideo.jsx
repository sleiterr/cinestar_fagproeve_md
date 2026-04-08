import React from "react";
import "./poster.css";
import studioImg from "../../assets/cine_studio/studio3.jpg";
import cinestar_studio from "../../assets/cine_studio/cinestar_studio.mp4";
import { FaRegPlayCircle } from "react-icons/fa";
import { FaRegCirclePause } from "react-icons/fa6";

import "@videojs/react/video/minimal-skin.css";
import {
  createPlayer,
  videoFeatures,
  PlayButton,
  Poster,
} from "@videojs/react";
import { MinimalVideoSkin, Video } from "@videojs/react/video";

const Player = createPlayer({ features: videoFeatures });

const CinestarVideo = () => {
  return (
    <>
      <Player.Provider>
        <Player.Container className="react-poster-basic">
          <MinimalVideoSkin>
            <Video src={cinestar_studio} playsInline />
            {/* Poster from studioImg */}
            <Poster className="react-poster-basic__poster" src={studioImg} />
          </MinimalVideoSkin>
          <PlayButton
            className="react-poster-basic__button"
            render={(props, state) => (
              <div className="group absolute inset-0 flex items-center justify-center pointer-events-none">
                <button
                  {...props}
                  className={`pointer-events-auto transition-opacity duration-300 cursor-pointer${
                    state.paused
                      ? " opacity-100 text-btn-border"
                      : " opacity-0 group-hover:opacity-100 text-btn-border"
                  }`}
                >
                  {state.paused ? (
                    <FaRegPlayCircle size={80} />
                  ) : (
                    <FaRegCirclePause size={80} />
                  )}
                </button>
              </div>
            )}
          />
        </Player.Container>
      </Player.Provider>
    </>
  );
};

export default CinestarVideo;

{
  /* <Poster
  className="absolute inset-0 block h-full w-full bg-black rounded-md opacity-0 transition-opacity data-visible:opacity-100 [&>img]:h-full [&>img]:w-full [&>img]:object-cover"
  src={studioImg}
  alt="Cinestar Studio"
/> */
}
