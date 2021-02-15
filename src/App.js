import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Home from './components/Home/Home';
import Landing from './components/Home/Landing/Landing';
import UrlInput from './components/Home/UrlInput/UrlInput';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
