import React from 'react'
import './style.scss'
type Props = {
    text1 : string,
    text2 : string
}
const Card1 = ({text1 ,text2} : Props) => {
  return (
    <div className='about-card1-container'>
        <p>{text1}</p>
        <p>{text2}</p>
    </div>
  )
}

export default Card1