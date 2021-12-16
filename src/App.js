import FortuneGetter from './components/FortuneGetter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>
          This is a fortune-telling machine. Please treat it with the respect it deserves.
        </h1>
        <FortuneGetter />
      </header>
     
    </div>
  );
}

export default App;
