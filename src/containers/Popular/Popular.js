// Comments
// VideoContainer'ga biror props kelmay qolish holati inobatga olinmagan!


import { useState, useEffect, useContext } from 'react'

// Libraries
import { Link } from 'react-router-dom'
import axios from 'axios'
// Slider
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// Contexts
import { ThemeContext } from '../../helper/Contexts'

// Components
import YouTubeSkeleton from '../../components/Skeleton/YouTubeSkeleton/YouTubeSkeleton'
import SlickItem from '../../components/SlickItem/SlickItem'
import { PrevArrow, NextArrow } from '../../components/SlickArrows/SlickArrows'

// SCSS
import styles from './Popular.module.scss'

const Popular = ({ pathToChannel, title, leadImg, subtitle }) => {
  const { theme } = useContext(ThemeContext)

  // Videos
  const [videoList, setVideoList] = useState({
    isFetched: false,
    data: [],
    error: null,
  })
  // API key
  const apiKey = 'k_opb1jzt3'

  // Getting Popular movies
  useEffect(() => {
    axios
      .get(`https://imdb-api.com/en/API/MostPopularMovies/${apiKey}`, {
        params: {
          method: 'GET',
          redirect: 'follow'
        },
      })
      .then(res => {
        setVideoList({
          isFetched: true,
          data: res.data.items,
          error: false,
        })
      })
      .catch(err => {
        setVideoList({
          isFetched: true,
          data: [],
          error: err,
        })
      })
  }, [])

  // Slider settings
  const settings = {
    dots: false,
    speed: 500,
    autoplay: false,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    className: styles.slider,
    prevArrow: <PrevArrow/>,
    nextArrow: <NextArrow/>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  }

  return (
    <div className={`${styles.popular} ${styles[theme]}`}>
      {videoList.isFetched ?
        <YouTubeSkeleton /> :
        <>
          {/* Lead */}
          <div className={styles.lead}>
            {leadImg &&
              <Link to={pathToChannel} className={styles.linkToChannel}>
                <img className={styles.leadImg} width='50' height='50' src={leadImg} alt={title} />
                <h1 className={styles.title}>{title}</h1>
              </Link>
            }
            {!leadImg && <h1 className={styles.title}>{title}</h1>}
            {subtitle && <h3 className={styles.subtitle}>{subtitle}</h3>}
          </div>
          {/* Slider */}
          <Slider {...settings}>
            {videoList.data.map(val =>
              <SlickItem
                key={val.id}
                id={val.id}
                img={val.image}
                time={val.imDbRating}
                date={val.rank}
                views={val.imDbRating}
                name='Netflix'
                title={val.title}
              />
            )}
          </Slider>
        </>
      }
    </div>
  )
}

export default Popular
