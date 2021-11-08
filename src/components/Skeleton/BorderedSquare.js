import { useContext } from 'react'
import ContentLoader from 'react-content-loader'

// Context
import { ThemeContext } from '../../helper/Contexts'

const BorderedSquare = (props) => {
  // Context
  const { theme } = useContext(ThemeContext)

  return (
    <ContentLoader
      speed={2}
      width={40}
      height={40}
      viewBox="0 0 50 50"
      backgroundColor={`#${theme === 'dark' ? '393b55' : 'dedede'}`}
      foregroundColor={`#${theme === 'dark' ? '474a6f' : 'ccc'}`}
      {...props}
    >
      <rect x="0" y="0" rx="8" ry="8" width="50" height="50" />
    </ContentLoader>
  )
}

export default BorderedSquare
