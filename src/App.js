import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import './App.css'

import Home from './Home'
import About from './About'
import Blog from './blog/Blog'
import Footer from './components/Footer'
import Header from './components/Header'



const App = () => (
    <Router>
        <div>
       <Header/>
            <div className='container'>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/blog" component={Blog}/>
            </div>
        <Footer/>
        </div>
    </Router>
)




export default App