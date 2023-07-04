import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { Home, About, Menu, Rooms, More, Contacts, Login, Register} from "./Pages";

import { Navbar } from './Components/Navbar';


function App() {
  return (
    <>
      <Router>
          <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
           <Route path="/Menu" element={<Menu />} />
           <Route path="/Rooms" element={<Rooms />} />
          <Route path="/More" element={<More />} />
           <Route path="/Contacts" element={<Contacts />} /> 
           <Route path="/Login" element={<Login />} />
           <Route path="/Register" element={<Register />} />

        </Routes>
      </Router>
    
    </>
  )
}

export default App;
