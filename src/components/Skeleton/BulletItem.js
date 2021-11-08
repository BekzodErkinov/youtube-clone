import { useContext } from 'react'
import ContentLoader from 'react-content-loader'

// Context
import { ThemeContext } from '../../helper/Contexts'

const BulletItem = (props) => {
  // Context
  const { theme } = useContext(ThemeContext)

  return (
    <ContentLoader
      speed={2}
      width={300}
      height={70}
      viewBox="0 0 400 60"
      backgroundColor={`#${theme === 'dark' ? '393b55' : 'dedede'}`}
      foregroundColor={`#${theme === 'dark' ? '474a6f' : 'ccc'}`}
      {...props}
    >
      <circle cx="30" cy="30" r="30" />
      <rect x="76" y="20" rx="10" ry="10" width="244" height="22" />
    </ContentLoader>
  )
}

export default BulletItem
