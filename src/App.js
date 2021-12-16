import FortuneGetter from './components/FortuneGetter';
import './App.css';
//current push

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Hello from inside of App !
        </p>
        <FortuneGetter />
      </header>
     
    </div>
  );
}

export default App;
