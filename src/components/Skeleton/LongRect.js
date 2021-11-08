import { useContext } from 'react'
import ContentLoader from 'react-content-loader'

// Context
import { ThemeContext } from '../../helper/Contexts'

const LongRect = (props) => {
  // Context
  const { theme } = useContext(ThemeContext)

  return (
    <ContentLoader
      speed={2}
      width={550}
      height={50}
      viewBox="0 0 600 50"
      backgroundColor={`#${theme === 'dark' ? '393b55' : 'dedede'}`}
      foregroundColor={`#${theme === 'dark' ? '474a6f' : 'ccc'}`}
      {...props}
    >
      <rect x="0" y="0" rx="8" ry="10" width="98%" height="30" />
    </ContentLoader>
  )
}

export default LongRect
