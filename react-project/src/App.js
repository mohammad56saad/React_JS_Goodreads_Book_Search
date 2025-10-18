import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoginPage from './LoginPage'
import NavBar from './NavBar'
import SignUp from './SignUp'
import Home from './Home'

function App () {
  return (
    <Router>
      <div className='App'>
        <NavBar />
          <Switch>
            <Route exact path='/'>
              <LoginPage />  
            </Route>
            <Route path='/signup'>
              <SignUp />  
            </Route> 
            <Route path='/home'>
              <Home />
            </Route>          
          </Switch>
      </div>
    </Router>
  )
}

export default App
