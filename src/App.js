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
import StyleSheet from './StyleSheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import ParentComp from './ParentComp';
import RefsDemo from './components/RefsDemo';

function App() {
  return (
    <div className="App">
      {/* <h1 className='error'>error</h1> */}
      {/* <h1 className={styles.success}>success</h1> */}
      {/* <FunctionClick></FunctionClick> */}
      {/* <Click></Click> */}
      {/* <EventBinding></EventBinding> */}
      {/* <ParentComponent/> */}
      {/* <NameList></NameList> */}
      {/* <StyleSheet></StyleSheet> */}
      {/* <Inline></Inline> */}
      {/* <Form></Form> */}
      {/* <LifeCycleA></LifeCycleA> */}
      {/* <FragmentDemo></FragmentDemo> */}
      {/* <Table></Table> */}
      {/* <ParentComp/> */}
      <RefsDemo/>
  
    </div>
  );
}

export default App;
