// import logo from './logo.svg';
import './App.css';
import Greet from './components/greet';

function App() {
  return (
    <div className="App">
      <Greet name='Braison' heroname='Tajiri'>
        <h1>This is childrenprops</h1>
        </Greet>
      <Greet name='Wabwire' heroname='mkuu'/>
      <Greet name='Daniel' heroname='ule msee'/>
    </div>
  );
}

export default App;
