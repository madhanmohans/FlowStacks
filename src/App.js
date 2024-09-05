import './App.css';

import TimerButton from './components/TimerButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>FlowStacks</h1>
      </header>
      <div className='App-body'>
        <TimerButton name="Drink Water"/>
      </div>
    </div>
  );
}

export default App;
