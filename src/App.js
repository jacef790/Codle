import Keyboard from './components/Keyboard'
import Highscore from './components/Highscore'
import Comments from './components/Comments'
import RowForGuessing from './components/RowForGuessing'
import './App.css';
import { useState } from 'react';


function App() {

  const [word, setWord] = useState('string');//TODO: get word, store string value as "word" or something

  const [gameWin, setGameWin] = useState([false]);

  const [typedLetterArray, setTypedLetterArray] = useState([]);

  const [submittedRowArray, setSubmittedRowArray] = useState([]);

  const keyboardButtonPressed = (buttonValue) => {

    console.log(buttonValue);

    if (buttonValue === 'Delete') {

      setTypedLetterArray(typedLetterArray.slice(0, -1));

    } else if (buttonValue === 'Enter' && typedLetterArray.length === word.length) {
      if (typedLetterArray.join('') === word) {
        setGameWin(true);
      }
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



      {!gameWin ? (
        <div>
          <RowForGuessing word={word} typedLetters={typedLetterArray} isSubmitted={false} />

          <Keyboard buttonCallback={keyboardButtonPressed} /> <p>Keyboard</p>
        </div>
      ) : (
        <div>
          {/* these props should be word object, not the word string used for the rest of the game */}
          <Highscore word={word} />

          <Comments word={word} />
        </div>
      )
      }
    </div>
  );
}

export default App;
