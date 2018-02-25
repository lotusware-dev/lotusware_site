import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
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
       <Header/>
            <div className='container'>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/blog" component={Blog}/>
            <Route path="/contact" component={Contact}/>
            </div>
        <Footer/>
        </div>
    </Router>


)




export default App