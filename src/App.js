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
