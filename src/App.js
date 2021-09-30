import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Pages
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import ServicePage from './pages/ServicePage';
import AboutPage from './pages/AboutPage';
import TeamMemberPage from './pages/TeamMemberPage';
//Components
import Header from './components/Header';
import Footer from './components/Footer';

//adding styles


function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />

          <Route path='/about' component={AboutPage} />
          <Route path='/about/:id' component={TeamMemberPage} />

          <Route path='/service' component={ServicePage} />

          <Route path='/contact' component={ContactPage} />
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
