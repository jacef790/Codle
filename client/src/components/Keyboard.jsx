import React from "react";


const keyboard = (props) => {

  return (
    <div className="flex flex-col md:pt-10 pt-5 w-screen">
      {keyboardKeys.map((keyboardRow, rowIndex) => {
        return (
          <div key={rowIndex} className="md:flex justify-center items-center m-auto my-2 space-x-1  md:w-[65%] w-[90%] flex  ">
            {keyboardRow.map((key) => {
              return (
                <button
                  key={key}
                  className="rounded bg-gray-600 font-bold uppercase text-xl md:text-2xl text-slate-300 md:py-2 p-[5px] md:flex-1"
                  onClick={() => props.buttonCallback(key)}
                >
                  {key}
                </button>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};



const keyboardKeys = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['Enter', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Delete'],
];






export default keyboard;