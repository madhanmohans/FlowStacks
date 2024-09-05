import './App.css';

import TimerButton from './components/TimerButton';

function App() {
  const timerInMinutes = 25;
  return (
    <div className="App">
      <header className="App-header">
        <h1>FlowStacks</h1>
      </header>
      <div className='App-body'>
        <TimerButton timerInMinutes={timerInMinutes}/>
      </div>
    </div>
  );
}

export default App;
