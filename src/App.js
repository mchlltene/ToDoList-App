// // import Comment from './components/Comment';


// // const komentar = {
// //   text:"This is my comentar",
// //   date : new Date(),
// //   author : {
// //     avatarUrl : "https://via.placeholder.com/60",
// //     name : "John Doe",
// //   }
// // };
// // import HomePages from './pages/HomePages';
// // import EmployeePage from './pages/EmployeePage';
// // import {
// //   BrowserRouter,
// //   Routes,
// //   Route
// // } from "react-router-dom";



// // function App() {
// //   return(

// //       <div>
// //         {/* <Comment text={komentar.text} date={komentar.date} author={komentar.author} /> */}

// //         <BrowserRouter>
// //       <Routes>
// //         <Route path="/" element={<HomePages />} />
// //         <Route path="/" element={<EmployeePage />} />
// //       </Routes>
// //     </BrowserRouter>
// //       </div>

// //   );
// // }


// // import ExampleStateHook from './components/ExampleStateHook';
// // import Counter from './components/Counter';
// // import Penghitung from './components/Penghitung';

// // function App() {
// //   return(
// //     <div>
// //       {/* <h1>React Hook: useState</h1>
// //       <ExampleStateHook startValue={100} namaUser="Fitriani" />
// //       <Counter /> */}
// //       <Penghitung/>
// //     </div>
// //   );

// // }

// // export default App;

// import React, { useState, useMemo } from 'react';
// import { Routes, Route, Link } from "react-router-dom";
// import Home from './pages/Home';
// import About from './pages/About';
// import { UserContext } from './UserContext';

// function App()  {
//   const [ user, setUser ] = useState('Guest');

//   const userValueProvider = useMemo(() => ({user, setUser}), [user, setUser]);

//   return(
//     <div>
//       <nav>
//         <Link to="/">Home</Link> | <Link to="/about">About</Link>
//       </nav>

//       <UserContext.Provider value={userValueProvider}>
//         <Routes>
//           <Route path="/" element={<Home />}  />
//           <Route path="/about" element={<About />} />
//         </Routes>
//       </UserContext.Provider>
//     </div>
//   );
// }

// export default App;

import Todos from './components/todos/Todos';
import './styles/style.css'

function App() {
  return(
    <div class="pt-1 ">
      <Todos />
    </div>
  );
}


export default App;