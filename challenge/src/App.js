import { useState } from 'react';
import Square from './Square';
import Input from './Input';

function App() {
  //Define useState Hooks
  const [colorValue, setColorValue] = useState('');
  const [hexValue, setHexValue] = useState('');


  return (
    <div className="App">
      <Square colorValue={colorValue} hexValue={hexValue}></Square>
      <Input colorValue={colorValue} setColorValue={setColorValue} setHexValue={setHexValue}></Input>

    
    </div>
    


  );
}

export default App;
