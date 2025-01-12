import React from 'react'
import { useNavigate } from 'react-router-dom';


const Button = ({ btnType, btnTitle, btnLink }) => {

    const navigate = useNavigate();

    const handleButtonClick = () => {
        console.log('clicked')
        navigate(btnLink);
    };


    return (
        <button type={btnType}
            className='bg-zinc-800 py-2 px-10 font-semibold text-white rounded-lg hover:scale-95 duration-300'
            onClick={handleButtonClick}
        >
            {btnTitle}

        </button>
    )
}

export default Button
