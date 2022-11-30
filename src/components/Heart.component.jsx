
import heart from '../svg/heart.svg'
import Confetti from 'react-confetti'
import React from 'react';

const Heart = () => {
    
    return(
        <div className="flex mt-10 justify-center items-center">
            <Confetti className="flex justify-center items-center"/>
            <img src={heart} className='w-96 h-96' alt=""/>
        </div>
    )
}

export default Heart