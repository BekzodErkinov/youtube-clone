// Icons
import {
  GameIcon,
  HomeIcon,
  StarIcon,
  ClockIcon,
  HeartIcon,
  MusicIcon,
  FolderIcon,
  HistoryIcon,
  TrendingIcon,
  SubscriptionsIcon,
} from '../../assets/icons/icons'

// Menu Items
export const menuItems = [
  {
    path: '/',
    icon: <HomeIcon/>,
    title: 'Home',
  },
  {
    path: '/trending',
    icon: <TrendingIcon/>,
    title: 'Trending',
  },
  {
    path: '/subscriptions',
    icon: <SubscriptionsIcon/>,
    title: 'Subscriptions',
  },
]

export const menuItemsCategory = [
  {
    path: '/library',
    icon: <FolderIcon/>,
    title: 'Library',
  },
  {
    path: '/history',
    icon: <HistoryIcon/>,
    title: 'History',
  },
  {
    path: '/watch later',
    icon: <ClockIcon/>,
    title: 'Watch later',
  },
  {
    path: '/favorites',
    icon: <StarIcon/>,
    title: 'Favorites',
  },
  {
    path: '/liked videos',
    icon: <HeartIcon/>,
    title: 'Liked videos',
  },
  {
    path: '/music',
    icon: <MusicIcon/>,
    title: 'Music',
  },
  {
    path: '/games',
    icon: <GameIcon/>,
    title: 'Games',
  },
]
