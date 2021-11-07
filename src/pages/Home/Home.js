// Comments
// VideoContainer'ga biror props kelmay qolish holati inobatga olinmagan!

import { useState, useEffect } from 'react'

// Libraries
import axios from 'axios'
// Slider
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// Components
import SlickItem from '../../components/SlickItem/SlickItem'
import { PrevArrow, NextArrow } from '../../components/SlickArrows/SlickArrows'

// Containers
import VideoContainer from '../../containers/VideoContainer'

// Images
import Netflix from '../../assets/images/netflix.jpg'
// SCSS
import styles from './Home.module.scss'


const Home = () => {
  // Videos
  const [videoList, setVideoList] = useState({
    isFetched: true,
    data: [],
    error: null,
  })
  /* IMDB API'ga ko'p so'rov yuborilib kunlik so'rovdan tezda foydalab ma'lumotlar kelmay qolayapti. Shu sabab qolgan so'rovlar to'xtatildi. (Kunlik so'rov limiti 100 ta)
  const [recVideoList, setRecVideoList] = useState({
    isFetched: false,
    data: [],
    error: null,
  })
  const [imdbVideoList, setImdbVideoList] = useState({
    isFetched: false,
    data: [],
    error: null,
  })
  */

  // APIw
  const apiKey = 'k_1yb6nxga'

  // Getting Popular movies
  // Netflix
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
        console.error(err)

        setVideoList({
          isFetched: true,
          data: [],
          error: err,
        })
      })
  }, [])

  /* IMDB API'ga ko'p so'rov yuborilib kunlik so'rovdan tezda foydalab ma'lumotlar kelmay qolayapti. Shu sabab qolgan so'rovlar to'xtatildi. (Kunlik so'rov limiti - 100)
  // Recommended
  useEffect(() => {
    axios
      .get(`https://imdb-api.com/en/API/MostPopularTVs/${apiKey}`, {
        params: {
          method: 'GET',
          redirect: 'follow'
        },
      })
      .then(res => {
        setRecVideoList({
          isFetched: true,
          data: res.data.items,
          error: false,
        })
      })
      .catch(err => {
        console.error(err)
        setRecVideoList({
          isFetched: true,
          data: [],
          error: err,
        })
      })
  }, [])
  // Food & Drink
  useEffect(() => {
    axios
      .get(`https://imdb-api.com/en/API/IMDbList/${apiKey}/ls004285275`, {
        params: {
          method: 'GET',
          redirect: 'follow'
        },
      })
      .then(res => {
        setImdbVideoList({
          isFetched: true,
          data: res.data.items,
          error: false,
        })
      })
      .catch(err => {
        console.error(err)
        setImdbVideoList({
          isFetched: true,
          data: [],
          error: err,
        })
      })
  }, [])
  */


  // Slider settings. (VideoContainer Component)
  const Settings = {
    dots: false,
    speed: 500,
    autoplay: false,
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: <PrevArrow/>,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 1850,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 5,
        }
      },
      {
        breakpoint: 2560,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 6,
        }
      },
      { breakpoint: 2600, settings: 'unslick' },
    ]
  }
  // Special slider settings
  const NetflixSettings = {
    ...Settings,
    className: styles.home__slider,
  }
  const RecommendedSettings = {
    ...Settings,
    initialSlide: 10,
    className: styles.home__slider,
  }
  const ImdbSettings = {
    ...Settings,
    initialSlide: 25,
    className: styles.home__slider,
  }

  return (
    <div className={styles.home}>
      <div className={styles.videoTypes}>
        {/* Netflix */}
        <VideoContainer
          pathToChannel='/c/netflix'
          title='Netflix'
          leadImg={Netflix}
          videoList={videoList}
        >
          <Slider {...NetflixSettings}>
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
        </VideoContainer>

        {/* Recommended */}
        <VideoContainer
          title='Recommended'
          videoList={videoList}
        >
          <Slider {...RecommendedSettings}>
            {videoList.data.map(val =>
              <SlickItem
                key={val.id}
                id={val.id}
                img={val.image}
                time={val.imDbRating}
                date={val.rank}
                views={val.imDbRating}
                name={val.crew}
                title={val.title}
              />
            )}
          </Slider>
        </VideoContainer>

        {/* Food & Drink */}
        <VideoContainer
          title='Education'
          subtitle='Recommended channel for you'
          videoList={videoList}
        >
          <Slider {...ImdbSettings}>
            {videoList.data.map(val =>
              <SlickItem
                key={val.id}
                id={val.id}
                img={val.image}
                time={val.imDbRating}
                date={val.rank}
                views={val.imDbRating}
                name={val.crew}
                title={val.title}
              />
            )}
          </Slider>
        </VideoContainer>
      </div>
    </div>
  )
}

export default Home
