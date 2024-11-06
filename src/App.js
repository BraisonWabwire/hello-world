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
import NameList from './components/NameList';

function App() {
  return (
    <div className="App">
      {/* <FunctionClick></FunctionClick> */}
      {/* <Click></Click> */}
      {/* <EventBinding></EventBinding> */}
      {/* <ParentComponent/> */}
      <NameList></NameList>
    </div>
  );
}

export default App;
