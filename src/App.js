// import logo from './logo.svg';
import './App.css';
import Greet from './components/greet';
import Welcome from './components/welcome';
import Message from './components/message';
import Counter from './components/counter';
import FunctionClick from './components/functionClick';
import Click from './components/click';

function App() {
  return (
    <div className="App">
      <FunctionClick></FunctionClick>
      <Click></Click>
    </div>
  );
}

export default App;
