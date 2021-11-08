import { useContext } from 'react'
import ContentLoader from 'react-content-loader'

// Context
import { ThemeContext } from '../../helper/Contexts'

const Circle = (props) => {
  // Context
  const { theme } = useContext(ThemeContext)

  return (
    <ContentLoader
      speed={2}
      width={70}
      height={70}
      viewBox="0 0 100 100"
      backgroundColor={`#${theme === 'dark' ? '393b55' : 'dedede'}`}
      foregroundColor={`#${theme === 'dark' ? '474a6f' : 'ccc'}`}
      {...props}
    >
      <circle cx="50" cy="30" r="30" />
    </ContentLoader>
  )
}

export default Circle
