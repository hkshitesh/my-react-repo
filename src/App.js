import './App.css';
import Person from "./Person"
import Event from './Event';

function App() {
  return (
    <div>
      <Person name="Amit" age="25"/>
      <Person name="Karan" age = "34"/>
      <Person name="John"/>
      <Event></Event>
    </div>
  );
}
export default App;