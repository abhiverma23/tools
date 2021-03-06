import NavBar from './common/navbar/NavBar';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import PasswordGenerator from './pages/password-generator/PasswordGenerator';
import NotFound from './pages/NotFound';
import About from './pages/about/About';
import Footer from './common/footer/Footer';
import Base64EncodeDecoder from './pages/encoder-decoder/base64/Base64EncodeDecoder';

function App() {
  return (
    <Router>
      <div className='container-lg'>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route
            exact
            path='/passoword-generator'
            component={PasswordGenerator}
          />
          <Route exact path='/base64' component={Base64EncodeDecoder} />
          <Route exact path='/about' component={About} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
