// CSS
import './App.css';
import './components/Cursor.css';

// My Components
import Cursor from './components/Cursor'

let items=['Item 1','Item 2','Item 3','Item 4','Item 5'];

function App() {
  return (
    <div className="App">
      <Cursor/>
      <a href="#">Hello</a>
    </div>
  );
}

export default App;
