import React, { useState, useEffect } from 'react';

function Penghitung() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("John Doe");

  // no dependencies =>  the side-effect runs after every rendering
  useEffect(function callback() {
    document.title = `Jumlah klik Anda: ${count} kali.`;
    // eslint-disable-next-line
  }, [name]);

  return(
    <div>
      <h2>Komponen Penghitung</h2>
      
      <h3>Nama Anda: {name}</h3>
      <button onClick={() => setName("Mary Weather")}>Ganti Nama</button>

      <h3>Anda sudah melakukan klik sebanyak {count} kali.</h3>
      <button onClick={() => setCount(count + 1)}>Klik Saya</button>
    </div>
  );
}

export default Penghitung;