
import React, { useRef } from 'react';
import InputField from './components/InputField';

function App() {
  const inputRef = useRef(null);
  const textareaRef = useRef(null);

  const settingValue = () => {
    const inputValue = inputRef.current.value;
    textareaRef.current.value = inputValue;
  };

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <InputField id="input" ref={inputRef} />
      <button id="settingValueButton" onClick={settingValue}>
        Set Value
      </button>
      <button id="focusInputButton" onClick={focusInput}>
        Focus Input
      </button>
      <br />
      <textarea id="textarea" ref={textareaRef} />
    </div>
  );
}

export default App;



// function settingValue(){
//   <input type="text" id="input" />
//   <textarea type="text" id="textarea" />
// }


// function focusInput(){
//   //work on input id

// }

// const useRef =()=>{
//   return(

//     )
// }