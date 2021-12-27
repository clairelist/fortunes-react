import FortuneGetter from './components/FortuneGetter';
import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <FortuneGetter />
      </header>
     
    </div>
  );
}

export default App;
