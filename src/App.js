// Run: npm start 
// Build: npm run deploy
import React, { useState, useEffect } from 'react';

// CSS
import './App.css';
import './components/Cursor.css';

// My Components
import Cursor from './components/Cursor'
import Card from './components/Card'

function App() {

  const [imgList, setImgs] = useState([])

  // API Fetching useEffect
  useEffect(() => {
    const picsumQUery = `https://picsum.photos/v2/list?limit=9`
    fetch(picsumQUery)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setImgs(data)
      })
      .catch(err => {
        console.error(`Unsplash API error (${err})!`);
      });
  }, []);

  return (
    <div className="App h-screen w-screen">
      <Cursor />
      <div className='flex h-full w-full items-center'>
        <div className='square w-11/12 md:w-7/12 mx-auto bg-yellow-50'>
          <div className='content'>
            <div className="h-full grid bg-red-50 gap-4 grid-cols-3 grid-rows-3">
              {imgList.map(img => (
                <Card key={img.id} data={img} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
