import React from 'react'

const keyboard = () => {
  return (
    <div>
        {keyboardKeys.map((keyboardRow) => {
            return (
                <div>
                    {keyboardRow.map((key) => {
                        return <button>{key}</button>;
                    })}
                    </div>
            )
            
        })}
    </div>
  )
}



const keyboardKeys = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ''],
    ['Enter', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Backspace'],
  ];


export default keyboard