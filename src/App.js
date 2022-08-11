import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Favorites } from './pages/Favorites';
import { AboutAnime } from './pages/AboutAnime';
import { Preloader } from './components/Preloader';


function App() {
  const [loading, setLoading] = useState(true);
  
  if (loading) {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }

  return (
    <>
  
      <Router basename='/hayao-miyazaki'>
        <Header />
        <main className="container content">
        {loading ? <Preloader /> : (
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/about/:title' element={<AboutAnime />} />
        </Routes>
        )}
        </main>
      
      </Router>
      <Footer />
    
    
      </>
  );
}




export default App;
