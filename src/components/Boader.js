import React from 'react'

 const Boader = ({text,color,onclick}) => {
  return (
    <button onClick={onclick} 
    style={{backgroundColor: color}} 
    className='btn'>{text}</button>
  )
}
Boader.defaultProps={
    color: 'black',
    text: 'button'
}
export default Boader;