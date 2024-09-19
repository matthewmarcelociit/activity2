import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import './Main.css';
import Navigate from './components/Navigate';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Counter from './components/Counter';
// import ControlledInput from './ControlledInput';
// import Counter from './Counter';
// import Event from './Event';
// import Form from './Form';
// import Home from './Home';
// import About from './About';
// import Navigation from './Navigation';
// import MyComponent from './MyComponent';

// function UserProfile() {
//   const { userId } = useParams();
//   return <div>User Profile: {userId}</div>;
// }

// function Dashboard() {
//   return(
//     <div>
//       <h1>Dashboard</h1>
//       <nav>
//             <ul>
//                 <li><Link to="stats">Stats</Link></li>
//                 <li><Link to="reports">Reports</Link></li>
//             </ul>
//         </nav>
//       <Outlet />
//     </div>
//   );
// }
// function Stats() {
//   return <h3>Stats</h3>;
// }
// function Reports() {
//   return <h3>Reports</h3>;
// }


function App() {
  return (
    // <div className="App">
    //   <Counter />
    //   <Event />
    //   <Form />
    // </div>
      // <Router>
      //   <Navigation />
      //   <MyComponent />
      //   <Routes>
      //     <Route path="/" element={<Home />} />
      //     <Route path="/about" element={<About />} />
      //     <Route path="/user/:userId" element={<UserProfile />} />
      //     <Route path="/dashboard" element={<Dashboard />}>
      //       <Route path="stats" element={<Stats />} />
      //       <Route path="reports" element={<Reports />} />
      //     </Route>
      //   </Routes>
      // </Router>
    <Router>
      <div id="bodyDiv">
        <Navigate />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="*" element={<NotFound />} />   
        </Routes>
      </div>
    </Router>
  );
}

export default App;
