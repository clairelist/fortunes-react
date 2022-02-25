import FortuneGetter from './components/FortuneGetter';
import './App.css';
//import Login from './components/Login';
import Blog from './components/Blog';
import {  Route, Link, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <FortuneGetter />
      </header>
     <div className='nav-wrapper'>
       <nav>
         <Link to='/blog'>Click ME to go to the BLOG!</Link>
       </nav>
     </div>
     <Route exact path='/blog'>
       <Blog />
     </Route>
    </div>
  );
}

export default App;
