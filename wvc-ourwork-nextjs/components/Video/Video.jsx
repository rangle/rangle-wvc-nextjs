import React, { useState } from 'react'
import ReactPlayer from 'react-player/lazy'
import PlayButton from '../../assets/icons/play.svg'
import './Video.scss'

const ControlIcons = ({ backgroundImage, playVideo, playing }) => {
  return (
    <div
      className={`${
        playing ? 'video__controls video__controls--active' : 'video__controls'
      }`}
    >
      <button
        className='video__controls-button'
        aria-label='Play video'
        onClick={playVideo}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <img className='video__controls-play-icon' src={PlayButton} />
      </button>
    </div>
  )
}
const Video = ({ backgroundImage, src }) => {
  const [playerstate, setPlayerState] = useState({
    playing: false
  })

  const { playing } = playerstate
  const playVideo = () => {
    setPlayerState({ ...playerstate, playing: true })
  }

  return (
    <div className='video'>
      <ReactPlayer
        controls={true}
        height='100%'
        muted={true}
        playing={playing}
        url={src}
        width='100%'
        className='react-player'
      />
      {/* PLAY BUTTON & BACKGROUND */}
      <div
        className={`${
          playing
            ? 'video__controls video__controls--active'
            : 'video__controls'
        }`}
      >
        <button
          className='video__controls-button'
          aria-label='Play video'
          onClick={playVideo}
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <img className='video__controls-play-icon' src={PlayButton} />
        </button>
      </div>
    </div>
  )
}

export default Video
