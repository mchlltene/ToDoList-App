import React from 'react';

const Button = ({ title, count, setCount, operation }) => {
  const handleChange = () => {
    operation === '+' ? setCount(count + 1) : setCount(count - 1);
  }

  return(
    <button color="danger" onClick={handleChange}>{title}</button>
  )
}

export default Button;