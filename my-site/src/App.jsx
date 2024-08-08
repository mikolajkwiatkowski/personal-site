import Nav from './Nav.jsx'
import Footer from './Footer.jsx'
import MainContent from './MainContent.jsx'
import TicTacToe from './TicTacToe.jsx'
import Socials from './Socials.jsx'
import Clicker from './Clicker.jsx'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
      <Router>

        
        <div className='app bg-neutral-800 w-full min-h-screen flex' >
          <Nav/>
            <Switch>
              <Route exact path='/'>
                <MainContent/>
              </Route>
              <Route path='/socials'>
                <Socials/>
              </Route>
              <Route path='/clicker'>
                <Clicker/>
              </Route>
              <Route path='/tictactoe'>
                <TicTacToe/>
              </Route>
            </Switch>
          <Footer/>
        </div>


      </Router>
  );

}

export default App
