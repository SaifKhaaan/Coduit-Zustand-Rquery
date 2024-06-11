import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';

import Footer from './components/Footer';
import Navbarauth from './components/Navbarauth';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbarauth isLoggedIn={false} user={{}} /> {/* Pass appropriate props */}
        <Routes>
          <Route exact path="/" element={<Home />} />  {/* Use element prop for components */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          {/* Add more routes for other pages */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
