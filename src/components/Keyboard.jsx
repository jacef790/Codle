import React from "react";


const keyboard = (props) => {

  return (
    <div className="flex flex-col">
      {keyboardKeys.map((keyboardRow, rowIndex) => {
        return (
          <div key={rowIndex} className="flex justify-center my-2 space-x-1 m-auto w-[65%]">
            {keyboardRow.map((key) => {
              return (
                <button className="rounded bg-blue-600 font-bold uppercase text-xl md:text-3xl text-slate-300 py-2 flex-1" oncCick={props.buttonCallback(this.value)}>
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
  ['', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ''],
  ['Enter', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Delete'],
];






export default keyboard;