import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoginPage from './LoginPage'
import NavBar from './NavBar'
import SignUp from './SignUp'

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
          </Switch>
      </div>
    </Router>
  )
}

export default App
