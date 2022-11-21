import React, { useState } from 'react'
import ReactPlayer from 'react-player/lazy'
import styles from './Video.module.scss'

const Video = ({ backgroundImage, src }) => {
  const [playerstate, setPlayerState] = useState({
    playing: false
  })

  const { playing } = playerstate
  const playVideo = () => {
    setPlayerState({ ...playerstate, playing: true })
  }

  return (
    <div className={styles['video']}>
      <ReactPlayer
        controls={true}
        height='100%'
        muted={true}
        playing={playing}
        url={src}
        width='100%'
        className={styles['react-player']}
      />
      {/* PLAY BUTTON & BACKGROUND */}
      <div
        className={
          playing
            ? styles['video__controls--active']
            : styles['video__controls']
        }
      >
        <button
          className={styles['video__controls-button']}
          aria-label='Play video'
          onClick={playVideo}
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <img
            className={styles['video__controls-play-icon']}
            src='./play.svg'
          />
        </button>
      </div>
    </div>
  )
}

export default Video
