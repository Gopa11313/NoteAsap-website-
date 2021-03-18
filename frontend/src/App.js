import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Container from './Body/Container'
import Footer from './Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      
        <Header/>
        <div className="container bg-sucess text-center my-3" >
        <Container />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
