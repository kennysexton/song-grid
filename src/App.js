// CSS
import './App.css';
import './components/Cursor.css';

// My Components
import Cursor from './components/Cursor'
import Card from './components/Card'

let items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8', 'Item 9'];


function App() {

  return (
    <div className="App h-screen w-screen">
      <Cursor />
      <div className='flex h-full w-full items-center'>
        <div className='square w-11/12 md:w-7/12 mx-auto bg-yellow-50'>
          <div className='content'>
            <div className="h-full grid bg-red-50 gap-4 grid-cols-3 grid-rows-3">
              {items.map(items => (
                <Card data={items} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
