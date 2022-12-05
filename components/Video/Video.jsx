import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import styles from './Video.module.scss'

const Video = ({ backgroundImage, src }) => {
  const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false })

  const [playerState, setPlayerState] = useState({
    playing: false
  })

  const { playing } = playerState
  const playVideo = () => {
    setPlayerState({ ...playerState, playing: true })
  }

  return (
    <div className={styles['video']}>
      <ReactPlayer
        className={styles['react-player']}
        controls={true}
        height='100%'
        muted={false}
        playing={playing}
        url={src}
        width='100%'
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
          style={{
            backgroundImage: `url(${backgroundImage})`
          }}
        >
          <div className={styles['video__controls-img-container']}>
            <img
              className={styles['video__controls-play-icon']}
              src='/play.svg'
              alt=''
            />
          </div>
        </button>
      </div>
    </div>
  )
}

export default Video
