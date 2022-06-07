import Keyboard from './components/Keyboard'
import './App.css';

function App() {

  let word = 'string'//TODO: get word, store string value as "word" or something

  //reset after submitting, only as long as the word
  let typedLetterArray = [];

  //"0" is 1 row, I'd like to use this number for array index
  let rowNumber = 0;

  const keyboardButtonPressed = (buttonValue) => {

    console.log(buttonValue);

    if (buttonValue === 'Delete') {
      typedLetterArray.pop();
      //update row by rowNumber
    } else if (buttonValue === 'Enter' && typedLetterArray.length === word.length) {
      rowNumber++;
      //add row to be rendered
      //change last row to "isSubmitted" true
    } else if (typedLetterArray.length === word.length) {
      return;
    } else {
      typedLetterArray.push(buttonValue.toUpperCase())
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
