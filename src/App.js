// import logo from './logo.svg';
import './App.css';
import Greet from './components/greet';
import Welcome from './components/welcome';
import Message from './components/message';
import Counter from './components/counter';
import FunctionClick from './components/functionClick';
import Click from './components/click';
import EventBinding from './components/eventBinding';
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div className="App">
      {/* <FunctionClick></FunctionClick> */}
      {/* <Click></Click> */}
      {/* <EventBinding></EventBinding> */}
      <ParentComponent/>
    </div>
  );
}

export default App;
