import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'

import Header from './components/Header'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './blog/Blog'

import Footer from './components/Footer'

const App = () => (
  <Router>
    <div>
        {/*<Header/>*/}
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/blog" component={Blog}/>
        <Route path="/contact" component={Contact}/>
        <Footer/>
      </div>
  </Router>


)

export default App