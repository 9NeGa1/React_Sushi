import React from 'react'

type Props = {
    children: React.ReactElement | React.ReactElement[]
}

const Container: React.FC<Props> = ({children}) => {
  return (
    <div className='max-w-[1225px] mx-auto px-4'>
      {children}
    </div>
  )
}

export default Container
