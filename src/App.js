import Keyboard from './components/Keyboard'
import RowForGuessing from './components/RowForGuessing'
import './App.css';
import { useState } from 'react';
import { typeDefs, resolvers } from '../server/schemas/index'


function App() {

  const [word, setWord] = useState('string');//TODO: get word, store string value as "word" or something

  console.log(resolvers.word);

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
    <div className='text-white'>


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

      <Keyboard buttonCallback={keyboardButtonPressed} /> Keyboard
    </div>
  );
}

export default App;
