// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import './App.css';
// import { Header } from './widgets/header/Header';
// import { Footer } from './shared/footer/Footer';
// import { Home } from './pages/homePage/HomePage';
// import { FavoritesPage } from './pages/favoritesPage/FavoritesPage';
// import { AboutAnimePage } from './pages/aboutAnimePage/AboutAnimePage';
// import { Preloader } from './shared/preloader/Preloader';


// function App() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 2000);

//     return () => clearTimeout(timer);
//   }, []);


//   return (
//     <>

//       <Router basename='/miyazaki'>
//         <Header />
//         <main className="container content">
//           {loading ? <Preloader /> : (
//             <Routes>
//               <Route exact path='/' element={<Home />} />
//               <Route path='/favorites' element={<FavoritesPage />} />
//               <Route path='/about/:title' element={<AboutAnimePage />} />
//             </Routes>
//           )}
//         </main>

//       </Router>
//       <Footer />


//     </>
//   );
// }




// export default App;


import { useEffect, useState } from 'react';
import './App.css';
import { Header } from './widgets/header/Header';
import { Footer } from './shared/footer/Footer';
import { Preloader } from './shared/preloader/Preloader';
import Router from './app/routes/Router';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
        <Header />
        <main className="container content">
          {loading ? <Preloader /> : <Router />}
        </main>
        <Footer />
    </>
  );
}

export default App;
