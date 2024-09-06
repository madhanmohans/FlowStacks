import './App.css';
import TimerProgressBar from './components/TimerProgressBar';
import TimerButton from './components/TimerButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>FlowStacks</h1>
      </header>
      <div className='App-body'>
        <div className='Timer-progress-bar'>
          <TimerProgressBar value={40}/>        
        </div>
        <div className='Timer-button'> 
          <TimerButton name="Drink Water"/>
        </div>
      </div>
    </div>
  );
}

export default App;
