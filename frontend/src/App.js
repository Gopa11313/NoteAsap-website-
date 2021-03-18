import Header from './Header/Header';
import Container from './Body/Container'
import Footer from './Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Container/>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
