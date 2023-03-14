import React from 'react'
import './App.css'
import {Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import NotFound from './components/NotFound'

const App = () => (
  <Router>
    <div className="App">
      <h1>React Routing</h1>
      <h2>Learning how to use React Routers</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Header />
      <Switch>
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/" component={Home} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
)

export default App
