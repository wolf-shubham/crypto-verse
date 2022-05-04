import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import CryptoCurrencies from './pages/CryptoCurrencies'
import CryptoDetails from './pages/CryptoDetails'
import News from './pages/News'
import GlobalCryptoStats from './pages/GlobalCryptoStats'
import Header from './components/Header'
import Error404 from './pages/Error404'


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/cryptocurrencies' element={<CryptoCurrencies />} />
        <Route path='/crypto/:id' element={<CryptoDetails />} />
        <Route path='/news' element={<News />} />
        <Route path='/global-stats' element={<GlobalCryptoStats />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
