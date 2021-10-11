import React from "react";
import '../Button/button.css';

const Button = ({onClick}) => {
  return (
     <button className='open__button' onClick={onClick}>Добавить</button>
)
    
}

export default Button;