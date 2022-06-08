import Keyboard from './components/Keyboard'
import RowForGuessing from './components/RowForGuessing'
import Nav from './components/Nav';
import './App.css';
import { useState } from 'react';




function App() {

  const [word, setWord] = useState('string');//TODO: get word, store string value as "word" or something

  const [typedLetterArray, setTypedLetterArray] = useState([]);

  const [submittedRowArray, setSubmittedRowArray] = useState([]);

  const keyboardButtonPressed = (buttonValue) => {

    console.log(buttonValue);

    if (buttonValue === 'Delete') {

      setTypedLetterArray(typedLetterArray.slice(0, -1));

    } else if (buttonValue === 'Enter' && typedLetterArray.length === word.length) {
      setSubmittedRowArray(submittedRowArray.concat(typedLetterArray.join('')));
      setTypedLetterArray([]);

    } else if (typedLetterArray.length === word.length) {
      return;
    } else {
      setTypedLetterArray(typedLetterArray.concat(buttonValue.toUpperCase()))
    }

    console.log(typedLetterArray);
  }



  return (
    <div className='text-white bg-gradient-to-tl from-black to-gray-500 h-screen'>
      <Nav />

      {submittedRowArray.length > 0 ? (
        submittedRowArray.map(
          function (string, i) {
            return <RowForGuessing word={word} typedLetters={string.split('')} isSubmitted={true} />
          }
        )
      ) :
        (
          <div></div>
        )}

      <RowForGuessing word={word} typedLetters={typedLetterArray} isSubmitted={false} />

      <Keyboard buttonCallback={keyboardButtonPressed} /> 
    </div>
  );
}

export default App;


