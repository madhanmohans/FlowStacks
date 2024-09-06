import "./App.css";
import Stack from "./components/Stack";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>FlowStacks</h1>
      </header>
      <div className="App-body">
          <Stack name="Drink Water" timeInMinutes={0.1} />
          <Stack name="Take Break" timeInMinutes={0.1} />
      </div>
    </div>
  );
}

export default App;
