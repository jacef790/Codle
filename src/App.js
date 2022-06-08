import Keyboard from './components/Keyboard'
import './App.css';
import { useState } from 'react';


function App() {

  const [word, setWord] = useState('string');//TODO: get word, store string value as "word" or something

  //reset after submitting, only as long as the word
  const [typedLetterArray, setTypedLetterArray] = useState([]);

  //"0" is 1 row, I'd like to use this number for array index
  const [rowNumber, setRowNumber] = useState(0);

  const keyboardButtonPressed = (buttonValue) => {

    console.log(buttonValue)

    if (buttonValue === 'Delete') {

      setTypedLetterArray(typedLetterArray.slice(0, -1));
      //update row by rowNumber

    } else if (buttonValue === 'Enter' && typedLetterArray.length === word.length) {
      setRowNumber(rowNumber + 1);
      //add row to be rendered

      //change last row to "isSubmitted" true
    } else if (typedLetterArray.length === word.length) {
      return;
    } else {
      setTypedLetterArray(typedLetterArray.concat(buttonValue.toUpperCase()))
      //update row by rowNumber
    }
  }

  return (
    <div>

      <Keyboard buttonCallback={keyboardButtonPressed} /> Keyboard
    </div>
  );
}

export default App;
