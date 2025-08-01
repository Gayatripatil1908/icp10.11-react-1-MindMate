import React from 'react'
import Navbar from '../../components/Navbar';
import "./Home.css";


function Home() {
  return (
    <><Navbar />

    <Router>
      <Navbar />
      <div className='Pages'>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/" component={Home} />
        <Route path="/login" component={Login} />

      </Switch>
      </div>
    </Router>
    </>
    
  )
}

export default Home;