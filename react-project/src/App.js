import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginPage from './LoginPage'
import NavBar from './NavBar'
import SignUp from './SignUp'
import Home from './Home'
import Detail from './Detail'

function App () {
  return (
    <Router>
      <div className='App'>
        <NavBar />
          <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/home' element={<Home />} />
            <Route path='/detail/:id' element={<Detail />} />
          </Routes>
      </div>
    </Router>
  )
}

export default App
