import { useState } from 'react';
import Button from './Button';

function ExampleStateHook({ startValue, namaUser }) {
  const [count, setCount] = useState(startValue);
  const [fullName, setFullName] = useState(namaUser);

  // const handlePlusChange = () => {
  //   setCount(count + 1);
  // }

  // const handleMinusChange = () => {
  //   setCount(count - 1);
  // }

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  }

  return(
    <div>
      <p>You clicked {count} times.</p>
      
      <Button title="Click to +1" count={count} setCount={setCount} operation="+" />
      {/* <button onClick={handlePlusChange}>
        Click to +1
      </button> */}
      
      &nbsp;

      <Button title="Click to -1" count={count} setCount={setCount} operation="-" />
      {/* <button onClick={handleMinusChange}>
        Click to -1
      </button> */}

      <hr />

      <input type="text" name="fullName" onChange={handleFullNameChange} />
      <h4>Your name is: {fullName}</h4>
    </div>
  );
}

export default ExampleStateHook;