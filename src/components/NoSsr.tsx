import { ReactNode, useEffect, useLayoutEffect, useState } from 'react'

const DefaultOnSSR: React.FC = () => null

export const NoSsr: React.FC<{ children: ReactNode; onSSR?: ReactNode }> = ({ children, onSSR = <DefaultOnSSR /> }) => {
  const [onBrowser, setOnBrowser] = useState(false)
  useLayoutEffect(() => {
    setOnBrowser(true)
  }, [])
  return <>{onBrowser ? children : onSSR}</>
}